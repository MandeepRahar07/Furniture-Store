import axios from "axios"
import { CART_TOTAL, FILTER_DATA, GET_DATA, PAYMENT_INFO, PRICE_DATA, USER_INFO } from './actionType';



let urlData=`https://ivory-dhole-veil.cyclic.cloud/products`;

export const getData=(cate)=>async(dispatch)=>{


try{
   let result=await axios.get(`${urlData}?category=${cate}`);
 
    dispatch({type:GET_DATA,payload:result.data});
}catch(err){
    console.log("error")
}

}

export const filterVal=(cate,name,price)=>async(dispatch)=>{
    try{
      if(name){
        let result=await axios.get(`${urlData}?type=${name}`);
 
        dispatch({type:FILTER_DATA,payload:result.data});
      }else{
         let result=await axios.get(`${urlData}?category=${cate}`);
 
    dispatch({type:FILTER_DATA,payload:result.data})
      }
           
    }catch(err){}
}
export const priceFilter=(cate,price)=>async(dispatch)=>{
    try{
    
        if(price){
          let result=await axios.get(`${urlData}?_sort=price&_order=${price}&category=${cate}`);
 
        dispatch({type:PRICE_DATA,payload:result.data});
        }else{
          let result=await axios.get(`${urlData}?&category=${cate}`);
 
        dispatch({type:PRICE_DATA,payload:result.data});
        }
      
           
    }catch(err){}
}
export const cartTotal=(payload)=>{
  return{
      type:CART_TOTAL,
          payload,
      
  }
}

export const removeFromCart = (id) => (dispatch) => {
  axios.delete(`${urlData}/${id}`)
  dispatch(getData());
}

export const userInfor=(payload)=>{
  return{
      type:USER_INFO,
      payload,
  }
}
export const storePaymentInfo=(payload)=>{
  return{
      type:PAYMENT_INFO,
      payload,
  }
}
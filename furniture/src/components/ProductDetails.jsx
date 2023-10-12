import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import "./productDetails.css"
import { AuthContent } from '../AuthContent/AuthContentProvider';

function ProductDetails() {
    const { imgChair,setImgChair,store, setStore} = useContext(AuthContent);
    const[dt,setDt]=useState("");
    const data=useParams();

    const GetData=async(e)=>{
   
        try{
            let result=await axios.get(`https://mandeeprahar.onrender.com/products/${data.id}`);
            console.log(result.data)
            setDt(result.data);

        }catch(err){}
    }
    
    useEffect(()=>{
        GetData();
    },[]);
  
    const storeData=()=>{
      if(store.length!==0){
        let condi=store.filter((ele)=>{
          return dt.title===ele.title
      })
      console.log(condi)
      if(condi.length>=1){
        alert("item is already in cart")
      }
      else{
        setStore([...store,dt])
      }
  
      }else{
         setStore([...store,dt])
      }
  
     
    }
    
  return (
    <div className='prodtData'>
    <div className='imgBox' >
       {imgChair?( <img  src={dt.img1} alt={dt.title} />):( <img  src={dt.img2} alt={dt.title} />)}
    </div>
    <div>
        <h2 className='title'>{dt.title}</h2>
        
        <p className='price'>Price :₹ {dt.price}</p>
       <p>{dt.decsription}</p>
       
        <button className='btn3' onClick={(e)=>setImgChair(true)}>colour-1</button>
        <button  className="btn3"onClick={(e)=>setImgChair(false)}>colour-2</button>
     <br />
     <button className='AtC1'onClick={storeData} >Add to Card</button>
     <Link to="/delivery">
     <button className='AtS1'>Buy Now</button>
     </Link>
    </div>
    </div>
  )
}

export default ProductDetails

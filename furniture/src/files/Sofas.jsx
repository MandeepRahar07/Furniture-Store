import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterVal, getData, priceFilter } from "../redux/action";
import { AuthContent } from "../AuthContent/AuthContentProvider";
import "../Product.css";
import { Link } from "react-router-dom";

function Sofas() {
    const { data, setData,imgChair,setImgChair,store,setStore } = useContext(AuthContent);
    const dispatch = useDispatch();
    const { products } = useSelector((stre) => stre.reducer);
    setData(products);
    console.log(data);

    useEffect(() => {
      dispatch(getData("sofas"));
    }, [dispatch]);
  
    const storeData=(el,e)=>{
     e.preventDefault();
      if(store.length!==0){
        let condi=store.filter((ele)=>{
          return el.title===ele.title
      })
      console.log(condi)
      if(condi.length>=1){
        alert("item is already in cart")
      }
      else{
        setStore([...store,el])
      }
  
      }else{
         setStore([...store,el])
      }
  
     
    }
  
    
const filterData=(e)=>{
  e.preventDefault()
   console.log(e.target.value)
    dispatch(filterVal("sofas",e.target.value))
  }
  const priceData =(e)=>{
    e.preventDefault()
     
      dispatch(priceFilter("sofas",e.target.value))
      }
    return (
      <div className="othermain1">
        <div className="othermain11">
          <label className="lebal1">
            Category :
            <select className="filter-by-category"onChange={filterData}>
              <option value="">All Categories</option>
              <option value="sections">Sofas & Sections</option>
              <option value="sofaset">Sofas Set</option>
              
           
            </select>
          </label>
          <br />
          <labe className="label2">
            Price Sorting :
            <select className="sorting-by-category" onChange={priceData}>
              <option value="">All Soting</option>
              <option value="asc">Low to high</option>
              <option value="desc">High to low</option>
              
            </select>
          </labe>
          <br />
          <div className="btn1">
          <button onClick={(e)=>setImgChair(true)}>colour-1</button>
          <button onClick={(e)=>setImgChair(false)}>colour-2</button>
          </div>
        </div>
        <div className="otherData">
          {data.map((el) => (
           <div className="linksStyle">
                <Link style={{textDecoration:"none"}} to={`/products/${el._id}`}>
                <div className="box">
             {imgChair?(<img src={el.img1} alt={el.title} />):(<img src={el.img2} alt={el.title} />)}
             </div>
              <h4 style={{ color: "gray" }}>{el.title}</h4>
            </Link>
              <div className="showd">
            <p>Price: ₹ {el.price}</p>
            <button className="btnAtC"onClick={(e)=>storeData(el,e)}><p>Add to Card</p></button>
           
            </div>
            </div>
          ))}
        </div>
      </div>
    );
}

export default Sofas

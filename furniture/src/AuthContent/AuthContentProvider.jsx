import React, { createContext, useState } from 'react'
 export const AuthContent=createContext();
function AuthContentProvider({children}) {
    const[data,setData]=useState([]);
    const[arr,setArr]=useState([])
    const[categoryFilter,setCategoryFilter]=useState("");
    const[imgChair,setImgChair]=useState(false);
    const[store,setStore]=useState([]);
    const[categ,setCateg]=useState("");
    const[name,setName]=useState("")
    const[check,setCheck]=useState(false)
    const[namelogin,setNamelogin]=useState("")
    const [total, setTotal] = useState();
    const[isauth, setIsauth]= useState(false);
    const [cartItems, setCartItems] = useState([]);
    console.log(namelogin);

  return (
    <AuthContent.Provider value={{cartItems, setCartItems,data,setData,setTotal,total,categoryFilter,setCategoryFilter,imgChair,setImgChair,store,setStore,categ,setCateg,name,setName,arr,setArr,check,setCheck,namelogin,setNamelogin,isauth,setIsauth}}>{children}</AuthContent.Provider>
  )
}

export default AuthContentProvider

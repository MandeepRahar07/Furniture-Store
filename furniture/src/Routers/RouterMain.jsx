import React from 'react'
import { Routes, Route} from "react-router-dom";
import Other from '../files/Other';
import Chair from '../files/Chair';
import Table from '../files/Table';
import Cases from '../files/Cases';
import Lambs from '../files/Lambs';
import Sofas from '../files/Sofas';

import ProductDetails from '../components/ProductDetails';
import { Login } from '../components/login/login';
import { SignUp } from '../components/login/signup';
import Home from '../components/homePage/home';
import { Cart } from '../components/cartpage/Cart';
import Payment from '../components/cartpage/Payment';
import ThankYouPage from '../components/cartpage/ThankYouPage';
import PaymentPage from '../components/cartpage/Delivery';
import PrivatRoute from '../PrivateRoute/PrivatRoute';

function RouterMain() {
  return (
   <Routes>
    <Route path="/"element={<Home/>}/>
    <Route path="/other"element={<Other/>}/>
    <Route path="/chair"element={<Chair/>}/>
    <Route path="/table"element={<Table/>}/>
    <Route path="/cases"element={<Cases/>}/>
    <Route path="/lambs"element={<Lambs/>}/>
    <Route path="/sofas"element={<Sofas/>}/>
    <Route path="/products/:id"element={<ProductDetails/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/sign_up' element={<SignUp/>}/>
    <Route path="/cart"element={<Cart/>}/>
    <Route element={<PrivatRoute/>}>
    <Route path="/payment"element={<Payment/>}/>
    </Route>

    <Route path="/delivery"element={<PaymentPage/>}/>
    <Route path='/thankyoupage' element={<ThankYouPage/>}/>
   </Routes>
  )
}

export default RouterMain

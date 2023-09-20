import React from 'react';
import './App.css';
import NavbarFirst from './components/homePage/NavbarFirst';
import RouterMain from './Routers/RouterMain';
import Footer from './components/homePage/footer';




function App() {
  return (
    <div className="App">
     <NavbarFirst></NavbarFirst>
     <RouterMain></RouterMain>
     <Footer></Footer>
    </div>
  );
}

export default App;
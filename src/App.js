import { BrowserRouter, Route, Routes } from "react-router-dom";
import { React } from "react";

import Home from "./Home";
import Menu from "./Menu";
import Admin from "./Admin";
import Checkout from "./Checkout"


function App() {
  
  return (
  
  <div>
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>   </Route>
        <Route path="/menu" element={<Menu />}>  </Route>
        <Route path="/admin" element={<Admin />}>    </Route> 
        <Route path="/checkout" element={<Checkout />}>   </Route>    
       
    
      </Routes>
    </BrowserRouter>
    
    
  </div>
  
  );
}


export default App;

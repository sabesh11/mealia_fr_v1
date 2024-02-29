import { BrowserRouter, Route, Routes } from "react-router-dom";
import { React } from "react";

import Home from "./Home";
import Menu from "./Menu";


function App() {
  
  return (
  
  <div>
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>    </Route>
        <Route path="/menu" element={<Menu />}>     </Route>
         
    
      </Routes>
    </BrowserRouter>
    
    
  </div>
  
  );
}


export default App;

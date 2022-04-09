import React from "react";
import { Route, Routes,Navigate } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Navbar from './Navbar';
import Error from './Error';


const App =()=>{
  return(

    <>
     <Navbar/>
      <Routes>
        <Route exact path="/"  element={<Home/>} />
        <Route  path="/about"  element={<About/>} />
        <Route  path="/contact" element={<Contact/>} />
        {/* <Route path="*" element={<Error />}/> */}
        
        <Route path="*" element={<Navigate to ="/" />}/> 
        
      </Routes>
    </>
  );
}

export default App;


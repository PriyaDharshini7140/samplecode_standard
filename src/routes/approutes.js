import { BrowserRouter,Routes, Route } from "react-router-dom";
import React from 'react'
import { Editpost, Home } from "../compoments/pages";


function Approutes() {
  return (
    <div>
         <BrowserRouter>
  
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/editpost' element={<Editpost/>}/>
        
    </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Approutes
import { BrowserRouter,Routes, Route } from "react-router-dom";
import React from 'react'
import { Editpost, Home, Profile, View } from "../compoments/pages";


function Approutes() {
  return (
    <div>
         <BrowserRouter>
  
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/editpost' element={<Editpost/>}/>
      <Route path='/form' element={<Profile/>}/>
      <Route path='/view' element={<View/>}/>
    </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Approutes
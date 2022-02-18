import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import {useDispatch} from 'react-redux'
import { editUser } from '../../../../redux/user/actions';
import { BootstrapButton, Label, Textbox } from '../../../common';
import "../../../../assets/stylesheet/css/stylesheet.css"
export default function Editpost() {
   const location=useLocation()
   const {state} =location
   console.log(state);
   const initstate={
    name:state.name,
    password:state.password
}
const navigate = useNavigate();
const dispatch = useDispatch();
const [value, setValues] = useState(initstate);
const handleInput = (event) => {
    console.log(event.target.name);
  setValues({
      ...value,
    [event.target.name]: event.target.value,
  });
};const handleUpdateUser= (data)=>{
    dispatch(editUser(data,value))
    navigate(-1)
    }
  return (
    <div className='box'>
        <Label id="name" message="name" />
         <Textbox name="name" onChange={(e)=>handleInput(e)} type="text" value={value.name}/>
         <Label id="password" message="password" />
      <Textbox id="password" name='password' onChange={(e)=>handleInput(e)} type="text" value={value.password}/>
      <BootstrapButton variant="secondary" onClick={()=>navigate(-1)} message="back" size="sm"/>
      
      <BootstrapButton variant="primary" onClick={()=>handleUpdateUser(state._id)} message="update" size="sm"/>
         
            </div>
  )
}


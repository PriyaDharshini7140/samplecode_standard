import React, { useEffect, useState } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { addUser, deleteUser, fetchUser } from '../../../../redux/user/actions';
import {FaPen,FaTrash} from 'react-icons/fa'
import { useNavigate } from "react-router-dom";
import { BootstrapButton,  Label, Textbox } from '../../../common';
import "../../../../assets/stylesheet/css/stylesheet.css"

export default function Home() {
    const state={
        name:"",
        password:""
    }
    const navigate = useNavigate();
    const [value, setValues] = useState(state)
    const data = useSelector((state=>state.user))
   
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUser())
     }, [])
  
  const handleInput = (event) => {
      console.log(event.target.name);
    setValues({
        ...value,
      [event.target.name]: event.target.value,
    });
  };

const handleDeleteUser=(id)=>{
  dispatch(deleteUser(id))
}


const handleAddUser= ()=>{
dispatch(addUser(value))
}
  return (
    <div className='box'>
      <Label id="name" message="name" />
      <Textbox id="name" name="name" onChange={(e)=>handleInput(e)} type="text"/>
      <Label id="password" message="password" />
      <Textbox id="password" name='password' onChange={(e)=>handleInput(e)} type="password"/>
    
     <BootstrapButton variant="primary" onClick={()=>handleAddUser()} message="register" size="sm"/>
        {/* <button onClick={()=>handleAddUser()}>register</button> */}
        <div>
            {data.users.map(e=><div key={e._id}>
                {e.name}
                <FaPen onClick={()=>navigate("/editpost",{state:e})}/>
                <FaTrash onClick={()=>handleDeleteUser(e._id)}/>
            </div>)}
        </div>
    </div>
  )
}

import React from 'react'

import { Form } from "react-bootstrap";
function Textbox(props) {
  return (  
  <Form.Control
    type={props.type}
    id={props.id}
    name={props.name}
    onChange={(e)=>props.onChange(e)}
    value={props.value}
    
  />
  )
}

export default Textbox
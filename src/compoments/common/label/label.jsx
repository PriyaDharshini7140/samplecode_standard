import React from 'react'

import { Form } from "react-bootstrap";
function Label(props) {
  return (  
  <Form.Label
  htmlFor={props.id}
  >{props.message}</Form.Label>
  )
}

export default Label
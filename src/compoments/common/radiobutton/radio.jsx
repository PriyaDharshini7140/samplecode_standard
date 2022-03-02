import React from 'react'
import { Form } from 'react-bootstrap'

function Radio(props) {
  return (
    <div>
          <Form.Check
     label={props.label}     
    type='radio'
    id={props.id}
    name={props.name}
    value={props.value}
    onChange={(e)=>props.onChange(e)}
  />
    </div>
  )
}

export default Radio
import React from 'react'
import { Button } from 'react-bootstrap'

function BootstrapButton(props) {
  return (
    <Button
     variant={props.variant}
     onClick={props.onClick}
     size={props.size}
     >{props.message}</Button>
  )
}

export default BootstrapButton
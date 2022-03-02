import React,{ useEffect, useState } from 'react'
import { AgGridReact } from 'ag-grid-react';


function Grid(props) {
    console.log(props);
    const [rows,setRows] = useState([])
    const [column,setColumn] = useState([])
   
    
   
    useEffect(() => {
        setColumn(props.header)
        setRows(props.data)

    }, [props])
    
    
  return (
    <div className="ag-theme-alpine" style={{height: 400, width: 800}}>
    <AgGridReact
        rowData={rows}
     columnDefs={column}
        >
    </AgGridReact>
</div>
  )
}

export default Grid
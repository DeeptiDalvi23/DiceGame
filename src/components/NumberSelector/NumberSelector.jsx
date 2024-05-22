import React, { useState } from 'react'
import './NumberSelector.css'
const NumberSelector = ({selected,setSelected,error,setError}) => {

    const arr=[1,2,3,4,5,6]

    const numberSelectorHandler=(value)=>{
      setSelected(value)
      setError("")
    }
  return (
    <div className="noSelector-container">
      <p className='error'>{error}</p>
    <div className='noSelector'>
     {arr.map((value,i)=>(
            <div className={`box ${selected===value? 'selected':""}
            `} onClick={()=> numberSelectorHandler(value)} key={i}
            
            >{value}</div>
        )
     )}
     </div>
     <p>Select number</p>
     
    </div>
  );
}

export default NumberSelector

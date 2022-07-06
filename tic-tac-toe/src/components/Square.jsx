import React, { useState } from 'react'

function Square({value,func ,i}) {
    
  return (
    <button className="square" onClick={()=>func(i)}>
  {value}
  </button>
  )
}

export default Square
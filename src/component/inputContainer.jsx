import React from 'react'

function inputContainer({inputHandel1, inputHandel2}) {
  return (
    <div   className='inputContainer'>
        
        <input type='text' placeholder='Num - 1' onChange={(e)=>inputHandel1(e)}></input>
        <input type='text' placeholder='Num - 2' onChange={(e)=>inputHandel2(e)}></input>
    </div>
  )
}

export default inputContainer
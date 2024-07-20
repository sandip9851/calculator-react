import React from 'react'

function buttonConatainer({evaluteVal}) {
  const arr = ["+","-","*","/"]
  return (
    <div className='buttonConatainer'>
      {arr.map((item)=>{
        return <button key={item} onClick={()=>evaluteVal(item)}>{item}</button>
      })}
    </div>
  )
}

export default buttonConatainer
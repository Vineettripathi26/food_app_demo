import React from 'react'

function Shimmer() {
  return (
    <div className='body-div'>
      {Array(20).fill(" ").map((e,index)=><div key={index} className='shimmer-card' ></div>)}
    </div>
  )
}

export default Shimmer

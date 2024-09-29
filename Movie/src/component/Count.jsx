import React from 'react'

function Count( {count,handle,handle1}) {





  return (
    <div>
      
    <div className="count">
        <button onClick={handle} type="button" className="btn"> Increment</button>
    </div>
    <div>{count}</div>
    <button onClick={handle1} className="btn"> Decrement</button>
    </div>
  )
}

export default Count

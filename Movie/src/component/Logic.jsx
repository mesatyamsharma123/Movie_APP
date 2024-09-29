import React, { useState } from 'react'
import Count from './Count';

export default function Logic() {

    const [count,setCount]=useState(0);



    const handle=()=>{
        setCount(count+1);

    }
    const handle1=()=>{
        setCount(count-1);

    }
  return (
    <div>
      <Count count={count} handle={handle} handle1={handle1}/>
    </div>
  )
}

import React, { useState } from 'react'

const UseStateHooksComp = () => {
  const [count,setCount]=useState(0);
  const [name,setName]=useState("Nithish");

  const incrementCount = () => {
      setCount(count+1);
  }
  const changeName = () =>{
    setName("NithishBlaze");
  }
  return (
    <div>This is UseStateHooksComp
    <p>CounterValue: {count} </p>
    <p>Name is: <strong>{name}</strong></p>
    <button type='button' onClick={()=>incrementCount()}>COUNT ++</button>
    <button type='button' onClick={()=>changeName()} >changeName</button>
    </div>
  )
}

export default UseStateHooksComp
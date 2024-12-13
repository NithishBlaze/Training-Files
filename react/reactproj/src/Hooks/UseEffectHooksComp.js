import React, { useEffect, useState } from 'react'

const UseEffectHooksComp = () => {
  const [age,setAge] = useState(18);
  const [salary,setSalary] = useState(20000);

  // case1 : no dependency values pass
  // useEffect(()=>{
  //   setAge(age+1)
  // } )

  // case:2 when we pass dependencies value as blank array
  // useEffect(()=>{
  //   setAge(age+1)
  // }, [])

  // case:3 when we have to execute useEffect hook as we want 
  useEffect(()=>{
    setAge(age+1);
  },[salary])
  return (
    <div>
      This is UseEffectHooksComp
      <p> Age is : {age} </p>
      <p> Salary is : {salary} </p>
      <button type='button' onClick={()=>setSalary(salary+5000)} >Salary</button>

    </div>
  )
}

export default UseEffectHooksComp
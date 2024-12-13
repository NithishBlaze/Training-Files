import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const ProtectedRouting = (props) => {
    const nav= useNavigate();
    const {Component} = props;

    useEffect(()=>{
        if(!sessionStorage.getItem("user3")){
            nav('/')
        }
    })
  return (
    <Component/>
  )
}

export default ProtectedRouting
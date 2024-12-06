import React from 'react'
import { Link } from 'react-router-dom'

const NavComp = () => {
  return (
    <div>
        {/* This is nav comp */}
        <Link to="" className='btn btn-danger'>Home</Link>&nbsp;
        <Link to="virtualdom" className='btn btn-danger'>VIRUTAL DOM</Link>&nbsp;
        <Link to="hover" className='btn btn-danger'>Hover Counter</Link>&nbsp;
        <Link to="MyFavColor" className='btn btn-secondary'>MyFavColor</Link>&nbsp;
        <Link to="hooks" className='btn btn-danger'>Hooks</Link>&nbsp;
        <Link to="form" className='btn btn-warning'>form</Link>&nbsp;
        <Link to="productDash" className='btn btn-warning'>ProductDashboard </Link>&nbsp;
    </div>
  )
}

export default NavComp
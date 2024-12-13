import React from 'react'
import { useNavigate } from 'react-router-dom'

const FooterComp = () => {
    const nav= useNavigate();
    const LogOut=()=>{
        let confirm=window.confirm("Are you sure you want to logout ?");
        if(confirm){
            window.alert("Logout Successfull !");
            sessionStorage.clear();
            nav('/');
        }
        else{
            nav('/MainDashboard')
        }
    }
    return (
        <div>
            <p className='text-primary' style={{float:'right'}}>This website is developed by <strong>NithishBlaze</strong></p>
            <button type='button' className='btn btn-danger' onClick={()=>{LogOut()}} >LOG OUT</button>
        </div>
    )
}

export default FooterComp
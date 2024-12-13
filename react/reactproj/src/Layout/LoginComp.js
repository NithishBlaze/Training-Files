import axios from 'axios'
import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';

const LoginComp = () => {
    const uidRef = useRef();
    const upassRef = useRef();
    const nav = useNavigate();

    const getUsers = () => {

        let uid = uidRef.current.value;
        let upass = upassRef.current.value;

        axios.get('http://localhost:8080/users')
            .then((response) => {
                console.log(response.data);
                let currentUser = response.data.filter((value,index)=>{
                    return value.userid === uid && value.userpass === upass;
                })
                if(currentUser.length>0){
                    window.alert("Login successfull !");
                    sessionStorage.setItem("user3",uid);
                    nav('/MainDashboard')
                }
                else{
                    window.alert("Enter valid credentials !")
                    // sessionStorage.clear();
                    uidRef.current.value="";
                    upassRef.current.value="";
                }
            })
            .catch((error) => { })
    }

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', width: '100vw ' }}>
            <div style={{ border: "5px solid green", padding: "15px", borderRadius: "5px" }}>
                <label className='form-label'>Enter User ID:</label>
                <input type='text' name='userId' className='form-control' ref={uidRef} ></input>
                <label className='form-label'>Enter Password:</label>
                <input type='password' name='userPass' className='form-control' ref={upassRef}></input>&nbsp;
                <div className='d-grid gap-2'>
                    <button type='button' className='btn btn-success' onClick={() => { getUsers() }} >Login</button>
                </div>
            </div>

        </div>
    )
}

export default LoginComp
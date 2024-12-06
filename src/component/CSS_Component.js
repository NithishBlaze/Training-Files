import React from "react"
import './external.css';
import mymodule from './mycss.module.css';

const CSS_Component = () =>{
    let circle = {
        width:true?"100px":"200px",
        height:true?"100px":"200px",
        borderRadius:"50%",
        border:false?"2px solid black": "2px solid green",
        margin:"auto"
    }
    return(
        <div>
            {/* use of internal css */}
            <h1 style={{color:"blue",backgroundColor:"yellowgreen"}}> THis is CSS component</h1>
            <p style={circle}>HI</p>
            {/* use of external css*/}
            <div className="txtPrimary">Nithish</div>
            <div className="txtDanger">Blaze</div>
            {/* use of module css */}
            <div className={mymodule.special}>Hello</div>
        </div>
    )
}

export default CSS_Component;
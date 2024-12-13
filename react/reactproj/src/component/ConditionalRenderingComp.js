import React, { Component } from "react";

class ConditionalRenderingComp extends Component{
    constructor(){
        super();
        this.state={
            isCond:true
        }
    }
    render(){
        let msg=""
            if(!this.state.isCond) {
                // return <h2>Admin login successfull</h2>
                msg = "Admin login successfull"
            }
            else{
                // return <h2>User login Successfull</h2>
                msg = "User login Successfull"
            }
            // return msg
            // 2.use of element as variable
            // return <h2>{msg}</h2>
            // //3,use ternary operator
            // return (!this.state.isCond)?<h2>Admin login succeesfully</h2> : <h2>user login successfully</h2>
            //4.use of short-circuit
            return this.state.isCond && <h2>admin login successfully</h2>

        }
    }

        
    


export default ConditionalRenderingComp
import React, { Component } from "react";

class MyStateComp extends Component{

    constructor (){
        super();
        this.state={
            empName:"Nithish",
            empSal:14700
        }
    }
    changeStateData = () =>{
        // this.setState({empName:"NithishBlaze", empSal:this.state.empSal+5000})
        this.setState((prevstate)=>({empName:"NithishKumar", empSal:prevstate.empSal+5000}));
        }

    render(){
        return(
            <div>
                <h2>This is MyStateComponent</h2>
                <p> Employee Name:<strong> {this.state.empName} </strong>EmpSalary: <strong> {this.state.empSal} </strong></p>
                <button type="button"  className="btn btn-success" onClick={()=>this.changeStateData()}> Changedata </button>
            </div>
        )
    }
}

export default MyStateComp
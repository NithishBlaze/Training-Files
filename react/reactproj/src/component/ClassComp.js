import React, { Component } from "react";

class ClassComp extends Component{
    render(){
        return (
            <div>
                <h2>This is class component</h2>
                <p>this is <strong>{this.props.fname}</strong> , I am <strong> {this.props.post} </strong> </p>
            </div>
        )
    }
}

export default ClassComp;
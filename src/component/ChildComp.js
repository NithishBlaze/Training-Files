import React, { Component } from "react";

const ChildComp = (props) => {

    return (
        <div>
            <p>this is child component</p>
            <h1>Name: {props.name} / Employee Salary: {props.sal} </h1>

        </div>
    )
}


export default ChildComp
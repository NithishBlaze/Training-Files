import React, { Component } from "react";

class VirtualDOM extends Component{
constructor(props){
    super(props);

    this.state = {
        breakFast:[
            {id:101,name:"idly",price:"30rs"},
            {id:102,name:"dosa",price:"30rs"},
            {id:103,name:"Vada",price:"30rs"}
        ],
        courses: [
            "Java",".NET","Python","JavaScript","React","Angular"
        ]
    }
}
render(){
    const {breakFast,courses} = this.state;
    return (
        <div>
            <h2>It is a virtual DOM</h2>
            <ul>
                {
               breakFast.length && breakFast.map((val,index) => {
                    return <li key={val.id}> {val.name} ₹ {val.price}</li>
                })
                }
            </ul>
            <label>Select your course</label>
            <select>
            {
                courses.map((val,index) => {
                    return <option value={val} key={index} >{val}</option>
                })
            }
            </select>
        </div>
    )
}
}

export default VirtualDOM
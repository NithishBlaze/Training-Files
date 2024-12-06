import React, { Component, Fragment } from "react";

class EventComp extends Component{

    greeting = () =>{
        window.alert("YO !");
    }

    welcome = (...std) => {
        window.alert(`Yokoso ${std}`)
    }
    render(){
        return(
            <Fragment>
                <p>This is event component</p>
                <button type="button" onClick={()=>this.greeting()}>here</button>
                <button type="button" onClick={()=>this.welcome("Nithish","Blaze")}>haha</button>
                <p onMouseOver={()=>this.welcome("Nithish","Blaze")}> hover me</p>
            </Fragment>
        )
    }
}

export default EventComp;
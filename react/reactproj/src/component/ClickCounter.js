import React, { Component } from "react";

class ClickCounter extends Component {
    constructor() {
        super();
        this.state = {
                count: 0
            }
        }
        changeData = () => {
            this.setState((prevstate) => ({count: prevstate.count + 1 }));
        };
        changeDataO = () => {
            this.setState((prevstate) => ({count: prevstate.count + 1 }));
        };
        render() {
            return (
                <div>
                <p>counter: {this.state.count} </p>
                <button type="button" onClick={this.changeData} className="btn btn-danger" >Click Here</button>
            </div>
        )
    }
}
    

export default ClickCounter
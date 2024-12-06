import React, { Component } from "react";

class MouseHoverCOunter extends Component {
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
                <button type="button" onMouseOver={this.changeDataO} className="btn btn-success">Over</button>
            </div>
        )
    }
}
export default MouseHoverCOunter;
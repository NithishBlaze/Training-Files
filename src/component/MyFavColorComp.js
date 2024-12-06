import React, { Component } from 'react'

class MyFavColorComp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            color: "Red"
        }
    }

    // static getDerivedStateFromProps(props) {
    //     return {
    //         color: props.newColor
    //     }
    // }

    // componentDidMount(){
    //     setTimeout(()=>{
    //         this.setState({color:"Pink"})
    //     },2000)
    // }
    shouldComponentUpdate(){
        return true;
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        document.getElementById("beforeupdate").innerHTML=`Before update my favorite color was: ${prevState.color}`;
    }
    changeColor = ()=>{
        this.setState({color:"Blue"})
    }
    componentDidUpdate(){
        document.getElementById("afterupdate").innerHTML=`After update my favorite color was: ${this.state.color}`;
    }
    render() {
        return (
            <div>
                <h2>This is my favcolr component</h2>
                <p>My favorite color is :<strong> {this.state.color}</strong> </p>
                <div id='beforeupdate'></div>
                <div id='afterupdate' ></div>
                <button type='button' onClick={this.changeColor} className='btn btn-success'>Update</button>
            </div>

        )
    }

}

export default MyFavColorComp
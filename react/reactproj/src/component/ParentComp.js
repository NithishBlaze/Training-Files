// import React, { Component } from "react";
// import ChildComp from "./ChildComp";
// import MyPureComp from "./myPureComp";
// class ParentComp extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             empName: "Nithish",
//             empSal: 50000
//         }
//     }

//     changeState = () => {
//         this.setState((prevState) => ({ empName: "NithishKumar", empSal: prevState.empSal + 5000 }));
//     }

//     render() {
//         const { empName, empSal } = this.state;  //destructuring of state
//         const { gender, contact } = this.props; //destructuring of props
//         return (
//             <div>
//                 <h1>Name: {empName} / Employee Salary: {empSal} </h1>
//                 <h1> Gender : {gender} / Contact : {contact}</h1>
//                 {/* <h1>Name: {empName} / Employee Salary: {empSal} </h1> 
//                 <h1> Gender : {gender} / Contact : {contact}</h1> */}
//                 <button type="button" className="btn btn-primary" onClick={() => this.changeState()}>Increment Salary</button>
//                 <ChildComp name={empName} sal={empSal} manageState={() => this.changeState()} />
//                 {/* <MyPureComp empName={empName} />
//                 <MyMemoComp empName={empName} /> */}
//             </div>
//         );
//     }
// }

// export default ParentComp;
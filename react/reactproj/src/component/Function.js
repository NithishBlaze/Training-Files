
const FunctionComp=(props)=>{
    return (
        <div>
            <h2>Katen Kyokotsu Karamatsu Shinju</h2>
            <p>This is JSX example</p>
            <p>My Name is <strong>{props.fname+props.lname}</strong> <br/> Gender: <strong>{props.gender}</strong> <br/> my salary is {props.salary} <br/> my address is {props.Address} </p>
        </div>
    )
}

export default FunctionComp;
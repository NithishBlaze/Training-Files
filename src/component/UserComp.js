import React from "react";

const UserComp = (props) =>{

    if(props.user==="Blaze"){
        throw Error("Not a User")
    }

    return(
        <div>
            <h2>This is {props.user} </h2>
        </div>
    )
}

export default UserComp;
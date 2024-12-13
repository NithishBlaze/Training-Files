import React, { useState } from 'react'

const FormValidationComp = () => {
    let mycourses = ["React", "Java", "Angular", "Python", ".Net"];
    const [user, setUser] = useState({
        fname: "",
        term: false,
        courses: ""
    })

    const changeInput = (event) => {
        const { type, name, value, checked } = event.target;
        setUser({ ...user, [name]: type === "checkbox" ? checked : value });
    }

    const checkData = (event) => {
        event.preventDefault();
        if (user.fname.trim() === "") {
            window.alert("enter a name");
            return false;
        }
        if (!user.fname.trim().match("^[a-zA-Z ]{3,20}$")) {
            window.alert("enter valid full name")
            return false;
        }
        if (user.courses === "") {
            window.alert("Select a course");
            return false;
        }
        if (user.term === false) {
            window.alert("accept terms and condition");
            return false;
        }
        window.alert(JSON.stringify(user));
    }
    return (
        <div>
            <h2>this is FormValidationComp</h2>
            <form onSubmit={checkData}>
                <div>
                    <label>Enter your firstname:</label>
                    <input type='text' name='fname' onChange={changeInput} value={user.fname} />
                </div>
                <div>
                    <label>Select a course:</label>
                    <select name="courses" onChange={changeInput}>
                        <option value="">Select your course</option>
                        {

                            mycourses.map((value, index) => {
                                return <option value={value} key={index}>{value}</option>
                            })
                        }
                    </select>
                </div>
                <div>
                    <input type='checkbox' name="term" onChange={changeInput} value={user.term} />&nbsp;
                    <label>Accept terms and condition</label>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default FormValidationComp
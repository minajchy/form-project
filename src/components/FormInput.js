import React, { useState } from "react";
import Button from "./Button";

const FormInput = (props) => {
    const [userName, setUserName] = useState("");
    const [age, setAge] = useState("");

    const nameChangeHandler = (event) => {
        setUserName(event.target.value);
    }

    const ageChangeHandler = (event) => {
        setAge(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        if (!userName.trim() || !age.trim()) {
            alert("Enter both user name & age.");
            return;
        }

        props.onAddUser({ userName, age: +age });
        setUserName("");
        setAge("");
    }

    return (
        <form onSubmit={submitHandler}>
            <div>
                <label>User Name</label>
                <input type="text" value={userName} onChange={nameChangeHandler}></input>
                <label>Age (Years)</label>
                <input type="number" value={age} onChange={ageChangeHandler}></input>
            </div>
            <Button type="submit">Add User</Button>
        </form>
    );
};

export default FormInput;

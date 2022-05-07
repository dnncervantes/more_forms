import React, {useState} from 'react';


const UserForm = (props) => {
    // STATE VARIABLES
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");


    // const[newUserObj, setNewUserObj] = useState({});

    const createUser = (e) => {
        e.preventDefault();
        const newUser = {firstName, lastName, email, password};
        console.log("Welcome", newUser);
    };

    // VALIDATIONS========
    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 1) {
            setFirstNameError("First name must not be empty");
        } else if(e.target.value.length < 2) {
            setFirstNameError("First name but be 2 characters");
        } else {
            setFirstNameError("");
        }
    }
    const handleLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 1) {
            setLastNameError("Last name must not be empty");
        } else if(e.target.value.length < 2) {
            setLastNameError("Last name but be 2 characters");
        } else {
            setLastNameError("");
        }
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 1) {
            setEmailError("Email must not be empty");
        } else if(e.target.value.length < 2) {
            setEmailError("Email must but be 2 characters");
        } else {
            setEmailError("");
        }
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 8) {
            setPasswordError("Password must be 8 characters")
        } else {
            setPasswordError("");
        }
    }
    const handleConfirmPw = (e) => {
        setConfirmPassword(e.target.value);
        if(e.target.value !== password) {
            setConfirmPasswordError("Passwords must match")
        } else {
            setConfirmPasswordError("");
        }
    }

    return(
        <fieldset>
            <form onSubmit={createUser}>
                <div>
                    <label>First Name: </label>
                    <input type="text" onChange={ handleFirstName } />
                    {
                        firstNameError ?
                        <p style={{color:'red'}}>{firstNameError}</p> :
                        ''
                    }
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" onChange={ handleLastName } />
                    {
                        lastNameError ?
                        <p style={{color:'red'}}>{lastNameError}</p> :
                        ''
                    }
                </div>
                <div>
                    <label>Email address: </label>
                    <input type="text" onChange={ handleEmail }/>
                    {
                        emailError ?
                        <p style={{color:'red'}}>{emailError}</p> :
                        ''
                    }
                </div>
                <div>
                    <label>Password: </label>
                    <input type="text" onChange= { handlePassword }/>
                    {
                        passwordError ?
                        <p style={{color:'red'}}>{passwordError}</p> :
                        ''
                    }
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="text" onChange= { handleConfirmPw }/>
                    {
                        confirmPasswordError ?
                        <p style={{color:'red'}}>{confirmPasswordError}</p> :
                        ''
                    }
                </div>
                <input type="submit" value="Create User" />
            </form>
            <div>
                Your Form Data <br/>
                
                First Name: {firstName} <br/>
                Last Name: {lastName} <br/>
                Email: {email} <br/>
                Password: {password}<br/>
                Confirm Password: {confirmPassword}<br/>
            </div>

        </fieldset>
        );
};
export default UserForm;
import { useState } from "react";
import postSignup from "../api/post-signup.js";
import { useNavigate } from "react-router-dom";

function SignupForm() {
    const navigate = useNavigate();
    
    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
        email:"",
    });

    const handleChange = (event) => {
        const { id, value } = event.target;
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [id]: value,
        }));
    };
    function handleSubmit(event) {
        event.preventDefault();
        if (credentials.username && credentials.password) {
            postSignup(
                credentials.username,
                credentials.password,
                credentials.email
            ).then((response) => {
                navigate("/");
            });
        }
    }


    return (
        <form>
            <div>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" placeholder="Enter username" onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" placeholder="Password" onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" placeholder="email" onChange={handleChange}/>
            </div>
            <button type="submit" onClick={handleSubmit}>Sign Up</button>
        </form>
     );
    }


    export default SignupForm;
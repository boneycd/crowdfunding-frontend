import { useState } from "react";

function SignupForm() {
    return (
        <form>
            <div>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" placeholder="Enter username" />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" placeholder="Password" />
            </div>
            <div>
                <label htmlFor="firstname">Firstname:</label>
                <input type="text" id="firstname" placeholder="Enter firstname" />
            </div>
            <div>
                <label htmlFor="lastname">Lastname:</label>
                <input type="text" id="lastname" placeholder="lastname" />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" placeholder="Password" />
            </div>
            <button type="submit">Login</button>
        </form>
     );
    }


    export default SignupForm;
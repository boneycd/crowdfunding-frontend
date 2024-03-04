import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import postPledge from '../api/post-pledge.js';
import { useAuth } from "../hooks/use-auth.js";

function CreatePledgeForm() {
    const navigate = useNavigate();
    const {auth, setAuth} = useAuth();

    const [pledge, setPledge] = useState({
        amount: "",
        comment: "",
        anonymous: false,
        project:"",
        supporter:"",
    });


    const handleChange = (event) => {
        const { id, value } = event.target;
        setPledge((prevPledge) => ({
            ...prevPledge,
            [id]: value,
        }));
    };

    // const handleCheckbox = (event) =>{
    //     setPledgedetails(previousState =>({...previousState,anonymous:!previousState.anonymous}))
    // }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (pledge.amount && pledge.comment && pledge.project && pledge.supporter) {
            postPledge(
                pledge.amount,
                pledge.comment,
                pledge.anonymous,
                pledge.project,
                pledge.supporter,                               
            ).then((response) => {
                window.localStorage.setItem("token", response.token);
                setAuth({
                    token: response.token,
                });
                navigate("/");
            });
        }
    };



    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="amount">Amount:</label>
                <input type="number" id="amount" placeholder="Enter amount" onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="comment">Comment:</label>
                <input type="text" id="comment" placeholder="comment" onChange={handleChange} />
            </div>
            {/* <div>
                <label>Annoymous: </label> 
                <input type="checkbox" value={pledgedetails.anonymous} 
                id="annoymous" label="Annoymous" 
                onChange={handleCheckbox} /></div> */}
            <div>
                <label htmlFor="project">Project:</label>
                <input type="number" id="project" placeholder="project" onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="supporter">supporter:</label>
                <input type="text" id="supporter" placeholder="supporter" onChange={handleChange}/>
            </div>
                   
            <button type="submit" onClick={handleSubmit} >Create Project</button>
        </form>
     );
    }


    export default CreatePledgeForm;

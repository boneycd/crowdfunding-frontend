import { useState } from "react";
import { useNavigate } from "react-router-dom";

import postProject from "../api/post-project.js";
import { useAuth } from "../hooks/use-auth.js";

function CreateProjectForm() {
    const navigate = useNavigate();
    const {auth, setAuth} = useAuth();
    
    const [project, setProject] = useState({
        title: "",
        description: "",
        goal:"",
        image:"",
        is_open: true,
        date_created: new Date().toISOString(),
    });

   

    const handleChange = (event) => {
        const { id, value } = event.target;
        setProject((prevProject) => ({
            ...prevProject,
            [id]: value,
        }));
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        if (project.title && project.description && project.goal) {
            postProject(
                project.title,
                project.description,
                project.goal,
                project.image,
                project.is_open,
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
                <label htmlFor="title">Title:</label>
                <input type="text" id="title" placeholder="Enter title" onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <input type="text" id="description" placeholder="description" onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="goal">Goal:</label>
                <input type="number" id="goal" placeholder="goal" onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="image">Image:</label>
                <input type="URL" id="image" onChange={handleChange} />
            </div>           
            <button type="submit" onClick={handleSubmit} >Create Project</button>
        </form>
     );
    }


    export default CreateProjectForm;
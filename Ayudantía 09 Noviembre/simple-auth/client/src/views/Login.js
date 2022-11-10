import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import { simplePost } from '../services/simplePost';
import {useUser} from "../contexts/userContext"
import { simpleGetAuthenticated } from '../services/simpleGetAuthenticated';

const Login = () => {

    const [errors,setErrors] = useState([])
    const navigate=useNavigate();
    const {setUser} = useUser();

    const loginUsuario = async(values) => {
        const response = await simplePost("/api/login",values)

        if(response.data.message===""){
            console.log("USUARIO LOGUEADO",response.data)
            const response2 = await simpleGetAuthenticated(`/api/user/${response.data._id}`)
            setUser(response2.data);
            navigate("/")
        }else{
            const errorResponse = response.data.errors; // Get the errors from err.response.data
            const errorArr = []; // Define a temp error array to push the messages in
            for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                errorArr.push(errorResponse[key].message)
            }
            // Set Errors
            setErrors(errorArr);
        }
    }


    return (
        <div>
            {errors.map((err, index) => <div className={`alert alert-danger`} role="alert" key={index}>{err}</div>)}
            <LoginForm onSubmitProp={loginUsuario} ></LoginForm>
        </div>
    );
}

export default Login;

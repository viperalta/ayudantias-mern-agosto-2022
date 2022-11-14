import React, { useState } from 'react';
import { useAsyncError, useNavigate } from 'react-router-dom';
import RegisterForm from '../components/RegisterForm';
import { simplePost } from '../services/simplePost';
import {useUser} from "../contexts/userContext"
import { simpleGetAuthenticated } from '../services/simpleGetAuthenticated';

const Register = () => {

    const [errors,setErrors] = useState([])
    const navigate = useNavigate();
    const {setUser} = useUser();

    const registrarUsuario = async(values) => {
        console.log("VALORES DESDE EL FORMIK",values);
        const response = await simplePost("/api/register",values);

        if(response.data.message===""){
            console.log("usuario registrado",response.data);
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
            {errors.map((err, index) => <div className="alert alert-danger" role="alert" key={index}>{err}</div>)}
            <RegisterForm firstName="" lastName="" email="" password="" confirmPassword="" onSubmitProp={registrarUsuario} ></RegisterForm>
        </div>
    );
}

export default Register;

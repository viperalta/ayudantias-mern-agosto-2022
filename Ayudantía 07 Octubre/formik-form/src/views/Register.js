import React from 'react';
import RegisterForm from '../components/RegisterForm';

const Register = () => {

    const registerUser = (user) => {
        console.log("EL USUARIO SE HA REGISTRADO", user);
    }


    return (
        <div>
            <RegisterForm firstName="" lastName="" email="" password="" confirmPassword="" onSubmitProp={registerUser}   ></RegisterForm>
        </div>
    );
}

export default Register;

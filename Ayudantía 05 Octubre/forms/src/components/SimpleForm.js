import React, { useState } from 'react';

const SimpleForm = () => {

    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function crearUsuario(e){
        e.preventDefault();
        const nuevoUsuario = {nombre,email,password};
        console.log("SE HA CREADO EL NUEVO USUARIO. ",nuevoUsuario);
    }


    return (
        <div>
            <form onSubmit={crearUsuario} >
                <div>
                    <label htmlFor='nombre' >Nombre</label>
                    <input name="nombre" type="text" onChange={(e)=>setNombre(e.target.value)}  ></input>
                </div>
                <div>
                    <label htmlFor='email' >Correo Electronico</label>
                    <input name="email" type="text" onChange={(e)=>setEmail(e.target.value)}  ></input>
                </div>
                <div>
                    <label htmlFor='password' >Contraseña</label>
                    <input name="password" type="password" onChange={(e)=>setPassword(e.target.value)}  ></input>
                </div>
                <input type="submit" value="Crear Usuario"></input>
            </form>

            <h1>DATOS DEL USUARIO</h1>
            <h2>Nombre: {nombre} </h2>
            <h2>Email: {email} </h2>
            <h2>Contraseña: {password} </h2>
            
        </div>
    );
}

export default SimpleForm;

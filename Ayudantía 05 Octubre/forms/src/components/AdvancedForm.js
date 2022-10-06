import React, {useState,useEffect} from 'react';

const AdvancedForm = () => {

    const [formInfo,setFormInfo] = useState ({
        nombre:"",
        email:"",
        password:"",
        confirmPassword:""
    })

    const [errores,setErrores] = useState ({
        nombre:"",
        email:"",
        password:"",
        confirmPassword:""
    })

    const [displayExito,setDisplayExito]=useState(false);
    const [displayPassword,setDisplayPassword]=useState(false);

    useEffect(() => { 
        console.log("El form info cambio, y estos son sus valores: ",formInfo)
        validar();
    }, [formInfo]);

    const onChange = (e) => {
        console.log(e.target.name)

        setFormInfo({
            ...formInfo,
            [e.target.name]:e.target.value
        });
        console.log("la info",formInfo);
    }

    const {nombre,email,password,confirmPassword} = formInfo;

    function validar(){

        const erroresAux = {
                nombre:"",
                email:"",
                password:"",
                confirmPassword:"" 
        }

        if(nombre.length<5){
            erroresAux.nombre="El nombre es muy corto";
        }

        if(password!==confirmPassword){
            erroresAux.password="Las contraseñas deben coincidir"
        }

        //Desafio, validar un correo electronico con una expresion regular.

        setErrores(erroresAux);

    }

    function crearUsuario(e){
        e.preventDefault();
        console.log("Se ha creado el usuario: ",formInfo)
        setDisplayExito(true);

        setTimeout(() => {
            setDisplayExito(false);
        }, 4000);

    }

    function verPassword(){
        setDisplayPassword(true)
    }

    function esconderPassword(){
        setDisplayPassword(false);
    }

    

    return (
        <div>
            <form onSubmit={crearUsuario}>
                <div>
                    <label htmlFor='nombre' >Nombre</label>
                    <input name="nombre" type="text" onChange={onChange} ></input>
                    <p>{errores.nombre}</p>
                </div>
                <div>
                    <label htmlFor='email' >Correo Electronico</label>
                    <input name="email" type="text" onChange={onChange}  ></input>
                </div>
                <div>
                    <label htmlFor='password' >Contraseña</label>
                    <input name="password" type={`${displayPassword?"text":"password"}`} onChange={onChange}  ></input>
                    <div onMouseEnter={verPassword} onMouseLeave={esconderPassword} >VER</div>
                    <p>{errores.password} </p>
                </div>
                <div>
                    <label htmlFor='confirmPassword' >Confirmar Contraseña</label>
                    <input name="confirmPassword" type="password" onChange={onChange}  ></input>
                </div>
                <input type="submit" value="Crear Usuario"></input>
            </form>
            {displayExito && <h3>SE HA ENVIADO EL FORMULARIO</h3> }

            <h1>DATOS DEL USUARIO</h1>
            <h2>Nombre: {nombre} </h2>
            <h2>Email: {email} </h2>
            <h2>Contraseña: {password} </h2>
            <h2>Confirmar Contraseña: {confirmPassword} </h2>
            
        </div>
    );
}

export default AdvancedForm;

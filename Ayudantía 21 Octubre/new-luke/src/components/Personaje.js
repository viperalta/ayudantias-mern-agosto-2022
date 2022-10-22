import React, { useEffect, useState } from 'react';
import { useParams,Link } from 'react-router-dom';
import { simpleGet } from '../services/simpleGet';
import yoda from "../assets/img/baby-yoda.jpg";

const Personaje = () => {

    const {id} = useParams();
    const [personaje,setPersonaje] = useState();
    const [displayError,setDisplayError] = useState(false);
    const [errorInfo,setErrorInfo] = useState();
    const [nombrePlaneta,setNombrePlaneta] = useState("");


    useEffect(() => {
        getPersonaje();
    }, []);

    async function getPersonaje(){
        const response = await simpleGet("https://swapi.dev/api/people/"+id)
        console.log("RESPUESTA PERSOAJE",response)
        if(response.error===""){
            setPersonaje(response.responseData.data)
        }else{
            setDisplayError(true);
            console.log("Respuesta del error",response.errorData);
            setErrorInfo({errorMessage:response.error,code:response.errorData.status})
        }
    }

    useEffect(() => {
        if(personaje){
            getPlaneta()
        }
    }, [personaje]);

    async function getPlaneta(){
        const response = await simpleGet(personaje.homeworld);
        console.log("PLANETA",response);
        setNombrePlaneta(response.responseData.data.name)
    }

    const showPersonaje = () => {
        if(personaje){
            return Object.keys(personaje).map((property,index)=>{
                return (<li> {property} : {personaje[property]} </li>)
            })
        }
    }

    return (
        <div>
            Id en compornent personaje{id}
            {showPersonaje()}
            <h6>PLANETA: {nombrePlaneta} </h6>
            {displayError && <>
                <h3>Se ha producido un error:</h3>
                <img src={yoda} style={{width:400}} ></img>
                <h4>INFO DEL ERROR: {errorInfo.errorMessage} </h4>
                <h5>Codigo del error: {errorInfo.code} </h5>
            </>}
            <Link to="/">Volver</Link>
        </div>
    );
}

export default Personaje;

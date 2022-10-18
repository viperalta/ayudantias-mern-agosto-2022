import React, { useEffect, useState } from 'react';
import { useParams,useHistory } from 'react-router-dom';
import { simpleGet } from '../actions/simpleGet';

const Personaje = () => {

    const {id} = useParams();
    const history = useHistory();
    const [personaje,setPersonaje] = useState();

    useEffect(() => {
        getPersonaje();
    }, []);

    const getPersonaje = async() => {
        const response = await simpleGet("https://rickandmortyapi.com/api/character/"+id)
        console.log("PERSONAJE DE ID: "+id,response.data)
        setPersonaje(response.data);
    }

    return (
        <div>
            <h3>Personaje de id: {id} </h3>
            <h4>Nombre: {personaje?.name} </h4>
            <img src={personaje?.image}></img>
            <button onClick={()=>history.push("/personajes")}>VOLVER A PERSONAJES</button>
            
        </div>
    );
}

export default Personaje;

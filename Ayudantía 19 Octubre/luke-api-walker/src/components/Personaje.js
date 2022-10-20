import React, { useEffect, useState } from 'react';
import { useParams,Link } from 'react-router-dom';
import { simpleGet } from '../services/simpleGet';

const Personaje = () => {

    const {id} = useParams();
    const [personaje,setPersonaje] = useState();

    useEffect(() => {
        getPersonaje();
    }, []);

    async function getPersonaje(){
        const response = await simpleGet("https://swapi.dev/api/people/"+id)
        console.log(response.data)
        setPersonaje(response.data)

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
            <Link to="/">Volver</Link>
        </div>
    );
}

export default Personaje;

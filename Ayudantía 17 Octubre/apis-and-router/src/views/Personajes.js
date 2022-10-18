import React, { useState,useEffect } from 'react';
import { simpleGet } from '../actions/simpleGet';
import { Link } from 'react-router-dom';

const Personajes = () => {

    const [personajes, setPersonajes] = useState([]);
    const [personajesFiltrados, setPersonajesFiltrados] = useState([]);

    useEffect(() => {
        getPersonajes();
    }, []);

    const getPersonajes = async () =>{
        const response = await simpleGet("https://rickandmortyapi.com/api/character")
        console.log(response);
        setPersonajes(response.data.results);
        console.log("Personajes: ",response.data.results)
    }

    function filtrarPersonajes(e){
        const filtrados = personajes.filter((personaje)=>{
            const nameEnMinusculas = personaje.name.toLowerCase();
            const busquedaEnMinusculas = e.target.value.toLowerCase();
            return nameEnMinusculas.includes(busquedaEnMinusculas);

        })
        setPersonajesFiltrados(filtrados);
    }

    return (
        <div>
            aqui iran los personajes
            <h3>Todos los personajes</h3>

            <div className='container'>
                <div className='listado'>
                    <ul>
                        {personajes.map((personaje,i)=><li key={i} > <Link to={"/personaje/"+personaje.id} >{personaje.name} </Link></li>)}
                    </ul>

                </div>
                <div className='busqueda'>
                    <h4>Buscar personaje</h4>
                    <input type="text" onChange={filtrarPersonajes} ></input>
                    <ul>
                        {personajesFiltrados.map((personaje,i)=><li key={i} >{personaje.name}</li>)}
                    </ul>
                    

                </div>
            </div>
        </div>
    );
}

export default Personajes;

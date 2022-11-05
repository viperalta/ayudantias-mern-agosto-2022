import React from 'react';
import { useEffect, useState } from 'react';
import {useParams,useNavigate,Link} from "react-router-dom"
import { simpleGet } from '../services/simpleGet';
import { simpleDelete } from '../services/simpleDelete';


const Details = () => {

    const {id} = useParams()
    const [cancion, setCancion] = useState()
    const navigate = useNavigate()

    const getCancion = async() => {
        const response = await simpleGet("http://localhost:8000/api/cancion/" + id)
        setCancion(response.data.cancion)
    }

    const eliminarCancion = async() => {
        const response = await simpleDelete("http://localhost:8000/api/cancion/" + id)
        navigate("/")
    }


    useEffect(() => {
        getCancion()       
    }, []);


    

    return (
        <div>
            <h2>Nombre de la cancion : {cancion?.nombre}</h2>
            <h2>El artista es: {cancion?.artista}</h2>
            <h2>Los compositores son: {cancion?.compositores}</h2>
            <button onClick={() => navigate("/")}>Volver</button>
            <button onClick={() => eliminarCancion()}>Eliminar Cancion</button>
        </div>
    );
}

export default Details;

import React from 'react';
import { useEffect, useState } from 'react';
import {useParams,useNavigate,Link} from "react-router-dom"
import { simpleGet } from '../services/simpleGet';
import { simpleDelete } from '../services/simpleDelete';
import { simpleUpdate } from '../services/simpleUpdate';


const Details = () => {

    const {id} = useParams()
    const [cancion, setCancion] = useState()
    const [buttonState, setButtonState] = useState(false);
    const [likes, setLikes] = useState();
    const navigate = useNavigate()

    const getCancion = async() => {
        const response = await simpleGet("http://localhost:8000/api/cancion/" + id)
        setCancion(response.data.cancion)
        console.log(response.data.cancion.likes)
        setLikes(response.data.cancion.likes)
    }

    const eliminarCancion = async() => {
        const response = await simpleDelete("http://localhost:8000/api/cancion/" + id)
        navigate("/")
    }

    const updateLikes = async()=>{
        let updateLikes = {
            likes: Number(cancion.likes) + 1
        } 
        const response = await simpleUpdate(`http://localhost:8000/api/cancion/${id}`,updateLikes)
        console.log(response.data)
        setLikes((oldLikes)=>oldLikes + 1)
    }


    useEffect(() => {
        getCancion()       
    }, []);

    const handleClick = () => {
        setButtonState(true)
        updateLikes();
    }

    

    return (
        <div>
            <h2>Nombre de la cancion : {cancion?.nombre}</h2>
            <h2>El artista es: {cancion?.artista}</h2>
            <h2>Los compositores son: {cancion?.compositores}</h2>
            <h2>Los likes son:</h2>
            {
                likes&&
                <p>{likes}</p>
            }
            <br/>
            <button onClick={() => navigate("/")}>Volver</button>
            <button onClick={() => eliminarCancion()}>Eliminar Cancion</button>
            <button className='btn btn-primary btn-lg' onClick={handleClick} disabled={buttonState}>LIKE</button>
        </div>
    );
}

export default Details;
import React, { useEffect, useState } from 'react';
import CancionForm from '../components/CancionForm';
import { simplePost } from '../services/simplePost';
import { simpleGet } from '../services/simpleGet'
import { Link, useNavigate } from "react-router-dom";

const Main = () => {

    const [canciones, setCanciones] = useState();

    const navigate = useNavigate();

    useEffect(() => {
        traerCanciones()
    }, []);

    const crearCancion = async(values) => {
        values.compositores = [values.compositor1,values.compositor2,values.compositor3];
        const response = await simplePost("http://localhost:8000/api/cancion/new", values);
        console.log(response)
        traerCanciones()
    }

    const traerCanciones = async() =>{
        const response = await simpleGet("http://localhost:8000/api/canciones")
        console.log(response)
        setCanciones(response.data.canciones)
    }



    return (
        <div>
            <h2>crear canción </h2>
            <CancionForm nombre="" artista="" compositor1="" compositor2="" compositor3="" onSubmitProp={crearCancion} action={"CREAR"}/>

            <h2>Listado de canciones y autores</h2>

            <table class="table">
                <thead>

                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Artista</th>
                        <th scope="col">Compositores</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {canciones?.map((cancion)=>
                    <tr key= {cancion._id}>
                        <th scope="row"> <Link to={`/cancion/${cancion._id}`}>{cancion.nombre} </Link></th>
                        <td> {cancion.artista} </td>
                        <td> {cancion.compositores} </td>
                        <td> <button className='btn btn-warning' onClick={()=>navigate(`/cancion/update/${cancion._id}`)}>UPDATE</button></td>
                    </tr>
                    )}

                </tbody>
            </table>

        </div>
    );
}

export default Main;

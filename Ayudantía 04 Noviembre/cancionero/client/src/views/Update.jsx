import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CancionForm from '../components/CancionForm';
import { simpleGet } from '../services/simpleGet';
import { simpleUpdate } from '../services/simpleUpdate';

const Update = () => {
  const {id} = useParams()
  const [cancion, setCancion] = useState()
  const navigate = useNavigate()

  const getCancion = async() => {
      const response = await simpleGet("http://localhost:8000/api/cancion/" + id)
      setCancion(response.data.cancion)
  }

  useEffect(() => {
      getCancion()       
  }, []);


  const updateCancion = async(values) => {
    values.compositores = [values.compositor1,values.compositor2,values.compositor3];
    const response = await simpleUpdate(`http://localhost:8000/api/cancion/${id}`, values);
    console.log(response)
    navigate("/");
} 



  return (
    <div>
      <h2>Formulario de actualización de la canción con ID: {id}</h2>
      {
        cancion&&
        <CancionForm nombre={cancion.nombre} artista={cancion.artista} compositor1={cancion.compositores[0]} compositor2={cancion.compositores[1]} compositor3={cancion.compositores[2]} onSubmitProp={updateCancion} action={"ACTUALIZAR"}/>
      }
      <button className='btn btn-primary' onClick={()=>navigate("/")}>VOLVER</button>
    </div>
  );
}

export default Update;

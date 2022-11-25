import { useState,useEffect } from 'react'
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import { simpleGet } from './services/simpleGet';

async function postImage({image,description}){
  const formData = new FormData()
  formData.append("image",image);
  formData.append("description",description);
  const result = await axios.post("http://localhost:8000/api/image/new",formData, { headers: {'Content-Type': 'multipart/form-data'}})
  return result.data;
}

function App() {

  const [file, setFile] = useState();
  const [description, setDescription] = useState();
  const [images, setImages] = useState();

  function fileSelected(evento){
    const file = evento.target.files[0];
    console.log("Archivo en el front",file)
    setFile(file);
  }

  async function onSubmit(event){
    event.preventDefault();
    const result = await postImage({image:file,description})
    getImages();
  }

  useEffect(() => {
    getImages()
  }, []);

  async function getImages () {
    const response = await simpleGet("http://localhost:8000/api/images")
    console.log("respuesta de imagenes",response)
    setImages(response.data.images);
  }

  return (
    <div className="App">

      <form onSubmit={onSubmit} >
        <input type="file" accept="image/*" onChange={fileSelected}></input>
        <input onChange={e=>setDescription(e.target.value)} type="text" ></input>
        <button type="submit" >GUARDAR IMAGEN</button>
      </form>

      {images?.map((imagen,index)=>(
        <div key={index}>
          <h2>{imagen.description} </h2>
          <img src={"http://localhost:8000/images/"+imagen.filePath} style={{maxWidth:"300px"}}></img>
        </div>
      ))}
      
    </div>
  );
}

export default App;

import React, { useState } from "react";
import Tarea from "../components/Tarea";

const Tareas = () => {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState("");

  function agregarTarea(e){
    e.preventDefault();
    setTareas([...tareas,nuevaTarea]);
  }

  function eliminarTarea(id){
    const tareasFiltradas = tareas.filter((tarea,index)=>index!==id);
    setTareas(tareasFiltradas);
  }

  return (
    <div>
      <form onSubmit={agregarTarea}>
        <div>
          <label htmlFor="tarea">AGREGAR TAREA</label>
          <input
            type="text"
            onChange={(e) => setNuevaTarea(e.target.value)}
          ></input>
        </div>
        <input type="submit" value="AGREGAR"></input>
      </form>

      {
        tareas.map((tarea,index)=>{
            return(<Tarea description={tarea} id={index} eliminarTarea={eliminarTarea} ></Tarea>)
        })
      }
    </div>
  );
};

export default Tareas;

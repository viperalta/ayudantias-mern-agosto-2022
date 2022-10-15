import logo from './logo.svg';
import './App.css';
import BoxForm from './components/BoxForm';
import { useState } from 'react';
import Boxes from './views/Boxes';
import Tabs from './components/Tabs';
import Tarea from './components/Tarea';
import Tareas from './views/Tareas';

function App() {

  const [boxes, setBoxes] = useState([]);


  return (
    <div className="App">
      {/* <BoxForm boxes={boxes} setBoxes={setBoxes}  ></BoxForm>
      <Boxes boxes={boxes}></Boxes> */}
      {/* <Tabs></Tabs> */}
      {/* <Tarea description={"Esta es una tarea"} ></Tarea> */}
      <Tareas></Tareas>
    </div>
  );
}

export default App;

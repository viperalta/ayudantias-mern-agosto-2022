
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Details from './views/Details';
import Main from './views/Main';
import Update from './views/Update';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path='/cancion/:id' element={<Details/>}/>
        <Route path='/cancion/update/:id' element={<Update/>}/>
      </Routes>
      
    </div>
  );
}

export default App;

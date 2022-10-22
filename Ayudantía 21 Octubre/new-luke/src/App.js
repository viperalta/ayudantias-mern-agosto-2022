import logo from './logo.svg';
import './App.css';
import Swapi from './components/Swapi';
import {BrowserRouter,Routes, Route,Link} from "react-router-dom"
import Personaje from './components/Personaje';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
        </ul>
      </nav>

        <Routes>
          <Route path="/" exact element={<Swapi></Swapi>} ></Route>
          <Route path="/:id" element = {<Personaje></Personaje>}></Route>
        </Routes>
    </div>
  );
}

export default App;

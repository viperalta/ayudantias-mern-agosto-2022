import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Home from './views/Home';
import Personajes from './views/Personajes';
import Personaje from './views/Personaje';
import Paginacion from './views/Paginacion';

function App() {
  return (
    <div className="App">

      <Router>

        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/personajes">Personajes</Link>
            </li>
            <li>
              <Link to="/paginacion">Paginacion</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/home/:parametro">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/personajes">
            <Personajes />
          </Route>
          <Route path="/personaje/:id">
            <Personaje></Personaje>
          </Route>
          <Route path="/paginacion">
            <Paginacion />
          </Route>
        </Switch>


      </Router>
      
    </div>
  );
}

export default App;

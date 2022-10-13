import logo from './logo.svg';
import './App.css';
import Pokemones from './components/Pokemones';
import Characters from './components/Characters';
import CharactersAsync from './components/CharactersAsync';

function App() {
  return (
    <div className="App">
      {/* <Pokemones></Pokemones> */}
      {/* <Characters></Characters> */}
      <CharactersAsync></CharactersAsync>
      
    </div>
  );
}

export default App;

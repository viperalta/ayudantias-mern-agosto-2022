import logo from './logo.svg';
import './App.css';
import {Routes,Route,Link} from "react-router-dom"
import Main from './views/Main';
import Detail from './views/Detail';
import Update from './views/Update';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Main></Main>}></Route>
        <Route path="/product/:id" element={<Detail></Detail>}></Route>
        <Route path="/product/edit/:id" element={<Update></Update>} ></Route>
      </Routes>
      
    </div>
  );
}

export default App;

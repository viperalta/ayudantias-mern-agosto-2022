import logo from './logo.svg';
import './App.css';
import SimpleForm from './components/SimpleForm';
import AdvancedForm from './components/AdvancedForm';
import React, {useState,useEffect} from 'react';

function App() {

  return (
    <div className="App">
      {/* <SimpleForm></SimpleForm> */}
      <AdvancedForm ></AdvancedForm>

    </div>
  );
}

export default App;

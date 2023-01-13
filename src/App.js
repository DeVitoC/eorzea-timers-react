
import React, { Component } from 'react';
// import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import EorzeaClock from './Components/EorzeaClock';
import ProfessionButton from "./Components/ProfessionButton"

class App extends Component {
  render() {
    return (
        <div>
          <h1>EORZEA TIME</h1>
          <EorzeaClock />
          <ProfessionButton title="Botany" />
        </div>
    );
  }
}

export default App;
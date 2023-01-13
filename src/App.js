
import React, { Component } from 'react';
import './App.css';
import EorzeaClock from './Components/EorzeaClock';
import ProfessionButton from "./Components/ProfessionButton"

class App extends Component {
  render() {
    return (
        <div className="tc bg">
          <h1>EORZEA TIME</h1>
          <EorzeaClock />
          <h2>Choose a Profession:</h2>
          <ProfessionButton title="Botany" />
        </div>
    );
  }
}

export default App;
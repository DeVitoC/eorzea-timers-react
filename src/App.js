
import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import ProfessionButton from "./Components/ProfessionButton"

class App extends Component {
  render() {
    return (
        <div>
          <ProfessionButton title="Botany" />
        </div>
    );
  }
}

export default App;
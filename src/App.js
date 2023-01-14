import React, { useState } from 'react';
import './App.css';
import EorzeaClock from './Components/EorzeaClock';
import ProfessionButton from "./Components/ProfessionButton";
import Botany from "./Components/Botany";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
// import { Routes } from 'react-router';

function App() {
  return (
    <div className="tc bg">
      <h1>EORZEA TIME</h1>
      <EorzeaClock />
      <h2 className="mt5">Choose a Profession:</h2>
      <div>
        <Link to="/botany">
          <button className="ba2 br2 bg-light-blue dib grow ph5 pv2 mt1 mb1" style={{ width: "300px", height: "50px" }}>Botany</button>
        </Link>
        <ProfessionButton title="Mining" onClick={() => console.log("mining clicked")} />
        <ProfessionButton title="Fishing" onClick={() => console.log("fishing clicked")} />
      </div>
    </div>
  );
}

export default function() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/botany" element={<Botany />} />
      </Routes>
    </Router>
  );
}

import React, { useState, useEffect } from 'react';
import './App.css';
//import { Link } from 'react-router-dom';
import DesktopUI from './DesktopUI';
import MobileUI from './MobileUI';

function App() {
  const [width, setWindowWidth] = useState(0);

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  }
  
  const isPhoneSize = width < 800;

  return (
    isPhoneSize ? <MobileUI /> : <DesktopUI />
  );
}

export default App;

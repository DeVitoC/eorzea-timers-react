import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Containers/App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import NodeSelectionView from "./Components/NodeSelectionView";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const root = ReactDOM.createRoot(document.getElementById('root'));
library.add(faArrowLeft);

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/eorzea-timers-react" element={<App />} />
        <Route exact path="/eorzea-timers-react/botany" element={<NodeSelectionView profession="Botany"/>} />
        <Route exact path="/eorzea-timers-react/fishing" element={<NodeSelectionView profession="Fishing" />} />
        <Route exact path="/eorzea-timers-react/mining" element={<NodeSelectionView profession="Mining" />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
// <App />

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

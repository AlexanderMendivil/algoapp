import React from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

import './App.css';
import Algoritmos from "./Components/Algoritmos";
import Inicio from "./Components/Inicio";

function App() {
  return (
    <div className="app">

            <Router>
              <Inicio>
              <Route 
              path="/" 
              component={Inicio}/>
            <Route 
            path="/Algoritmos" 
            component={Algoritmos}/>
              </Inicio>
            </Router>
    </div>
  );
}

export default App;

import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import './App.css';
import Algoritmos from "./Components/Algoritmos";
import Inicio from "./Components/Inicio";

function App() {
  return (
    <div className="app">

            <BrowserRouter>
            <Switch>

              <Route path="/" exact component={Inicio}/>
              <Route path="/Algoritmos" component={Algoritmos}/>

            </Switch>
            </BrowserRouter>
    </div>
  );
}

export default App;

import React from "react";
import {useHistory} from "react-router-dom";

import "./Inicio.css";

import Headerbar from "./Headerbar"
import Menuinicio from "./Menuinicio";

function Inicio(){
    
    const history = useHistory();
    
    const Pagalgo = () =>{
        history.push("/Algoritmos");
    }
    return(
        <div className="inicio">
            <Headerbar/>
            <Menuinicio/>
            <button className="boton" onClick={()=> Pagalgo()}>Algoritmos</button>
        </div>
    );
}

export default Inicio;
import React from "react";

import "./Algoritmos.css";

import Headerbar from "./Headerbar";
import Algoritmolineal from "./Algoritmolineal";
import Algoritmocongruencial from "./Algoritmocongruencial";
import Algoritmoaditivo from "./Algoritmoconaditivo";

function Algoritmos(){
    
    return(
        <div className="fondo">
            <Headerbar/>
        <div className="algoritmos">
            <Algoritmolineal/>
            <Algoritmocongruencial/> 
            <Algoritmoaditivo/>
           </div>
        </div>
    );
}

export default Algoritmos;
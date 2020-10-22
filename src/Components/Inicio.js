import React from "react";
import {Link} from "react-router-dom";

import "./Inicio.css";

import Headerbar from "./Headerbar"
import Menuinicio from "./Menuinicio";

function Inicio(){

    return(
        <div className="">
            <Headerbar/>
            <Menuinicio/>
            <Link to="/Algoritmos"><button className="boton">Algoritmos</button></Link>
        </div>
    );
}

export default Inicio;
import React, {useState} from "react";
import "./Resultados.css"

function Resultados({resultado}){

    return(
        <div className="">
            <li className="resultados">{resultado}</li>
        </div>
    )
}

export default Resultados;
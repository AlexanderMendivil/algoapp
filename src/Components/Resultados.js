import React from "react";
import "./Resultados.css"

function Resultados({resultado}){

    return(
        <div>
            <li className="resultados">{resultado}</li>
        </div>
    )
}

export default Resultados;
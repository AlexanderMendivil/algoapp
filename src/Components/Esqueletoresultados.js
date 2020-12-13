import React from "react";
import "./Esqueletoresultados.css";
function Esqueletoresultados({...props}){

    return(
        <div className="container">
            <ul className="esqueleto">
                {
                props.children
                }
            </ul>
        </div>
    )
}

export default Esqueletoresultados;
import React from "react";
import "./Menuinicio.css"
import {Link} from "react-router-dom";
function Menuinicio (){

    return(
        <div className="menuinicio">
         <Link to="/"> <img src="https://png.pngtree.com/png-vector/20190409/ourlarge/pngtree-organic-followers-isometric-illustration-concept-isometric-flat-design-concept-of-png-image_922143.jpg" alt=""/></Link>
        </div>
    );
}

export default Menuinicio;
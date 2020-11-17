import React from "react";

import "./Algoritmos.css";

import Headerbar from "./Headerbar";
function Algoritmos(){

    const valores =( e )=>{
        
    }
    return(
        <div className="">

            <Headerbar/>
        <div className="algoritmos">
            <form className="algos"> 
            <h2>Algoritmo 1</h2>
            <label>Primer numero</label>
            <input type="text"></input>
            
            <label>Segundo numero</label>
            <input type="text"></input>
            </form> 

            <form className="algos"> 
            <h2>Algoritmo 1</h2>
            <label>Primer numero</label>
            <input type="text"></input>
            
            <label>Segundo numero</label>
            <input type="text"></input>
            </form> 

            <form className="algos"> 
            <h2>Algoritmo 1</h2>
            <label>Primer numero</label>
            <input type="text"></input>
            
            <label>Segundo numero</label>
            <input type="text"></input>
            </form>          
           </div>
        </div>
    );
}

export default Algoritmos;
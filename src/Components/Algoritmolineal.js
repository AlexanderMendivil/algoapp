import React from "react";

import Esqueletoresultados from "./Esqueletoresultados";
import Resultados from "./Resultados";
import "./Algoritmolineal.css";
import { useState } from "react";

function Algoritmolineal(){

    const [numero1, setNumero1] = useState("");
    const [valora, setValora] = useState("");
    const [valorc, setValorc] = useState("");
    const [valorm, setValorm] = useState("");
    const [arrayresultante, setResultados] = useState([]);
    const [counter, setCounter] = useState(0);
    const valorPrimero = (e) => {
        setNumero1(e.target.value);
    }

    const valorA = (e) => {
        setValora(e.target.value);
    }

    const valorC = (e) => {
        setValorc(e.target.value);
    }
    const valorM = (e) => {
        setValorm(e.target.value);
    }
    
    const calcularLineal = (e) =>{
        e.preventDefault()
        let nextx;
        let r;
        nextx = ((parseInt(valora)* parseInt(numero1)) + parseInt(valorc)) % parseInt(valorm)
        setNumero1(nextx)
        r = numero1/(valorm-1)
         setResultados([...arrayresultante, r])
         setCounter(counter+1)
    }
    
    return(
        <div className="">
            
            <form className="algos"> 
            <h2>Algoritmo Lineal</h2>
            <label>Semilla X</label>
            <input type="text" onChange={valorPrimero}></input>
            
            <label>Valor A</label>
            <input type="text" onChange={valorA}></input>
            
            <label>Valor C</label>
            <input type="text" onChange={valorC}></input>
            
            <label>Valor M</label>
            <input type="text" onChange={valorM}></input>

    <h3>RESULTADO</h3> <p>Numeros: {counter}</p>
               <Esqueletoresultados>
                {
                     arrayresultante.length > 0 &&
                    <>
                    {
                        arrayresultante.map((item, key) => <Resultados  resultado ={item} key={Math.random(1,100)}/>) 
                    }
                    </>
                }
                </Esqueletoresultados>

            <button type="submit"  onClick={calcularLineal}>CALCULAR</button>
            </form>

        </div>
    )
}

export default Algoritmolineal;
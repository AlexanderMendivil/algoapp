import React, {useState} from "react";

import "./Algoritmos.css";

import Headerbar from "./Headerbar";
function Algoritmos(){

    const [numero1, setNumero1] = useState("");
    const [valora, setValora] = useState("");
    const [valorc, setValorc] = useState("");
    const [valorm, setValorm] = useState("");
    const [valori, setValori] = useState("");

    const valorPrimero = (e) => {
        let valor = e.target.value;
        setNumero1(valor)
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
 
    const valorI = (e) => {
        setValori(e.target.value);
    }

    const calcularLineal = (e) =>{
        e.preventDefault()
        let nextx;
        let r;

        for(let i = 0; i < parseInt(valori); i++){

            nextx = ((parseInt(valora)* parseInt(numero1)) + parseInt(valorc)) % parseInt(valorm)
            setNumero1(nextx)
            console.log(nextx)
            console.log(numero1)
            r = numero1/(valorm-1)
            console.log(r)
    }

    }
    return(
        <div className="">
            <Headerbar/>

        <div className="algoritmos">
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

            <label>Cuantos numeros quiere</label>
            <input type="text" onChange={valorI}></input>

            <h3>RESULTADO</h3>
            <div>
                {

                }
            </div>

            <button type="submit" onClick={calcularLineal}>CALCULAR</button>
            </form> 

            <form className="algos"> 
            <h2>Algoritmo 2</h2>
            <label>Primer numero</label>
            <input type="text"></input>
            
            <label>Segundo numero</label>
            <input type="text"></input>
            </form> 

            <form className="algos"> 
            <h2>Algoritmo 3</h2>
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
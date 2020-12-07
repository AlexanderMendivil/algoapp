import React, {useState} from "react";

import "./Algoritmos.css";

import Headerbar from "./Headerbar";
import Resultados from "./Resultados";
import Esqueletoresultados from "./Esqueletoresultados";

function Algoritmos(){

    const [numero1, setNumero1] = useState("");
    const [valora, setValora] = useState("");
    const [valorc, setValorc] = useState("");
    const [valorm, setValorm] = useState("");
    const [arrayresultante, setResultados] = useState([]);

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
         setResultados([...arrayresultante,r])
    }
    
    return(
        <div className="">
            <Headerbar/>

        <div className="algoritmos">
            <div className="algos"> 
            <h2>Algoritmo Lineal</h2>
            <label>Semilla X</label>
            <input type="text" onChange={valorPrimero}></input>
            
            <label>Valor A</label>
            <input type="text" onChange={valorA}></input>
            
            <label>Valor C</label>
            <input type="text" onChange={valorC}></input>
            
            <label>Valor M</label>
            <input type="text" onChange={valorM}></input>

            <h3>RESULTADO</h3>
              
                
               <Esqueletoresultados>
                {
                      arrayresultante.map((item, key) => <Resultados  resultado ={item} key={Math.random(1,100)}/>) 
                }
                </Esqueletoresultados>

            <button  onClick={calcularLineal}>CALCULAR</button>
            </div> 

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
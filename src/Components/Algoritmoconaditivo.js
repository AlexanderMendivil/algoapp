import React, {useState} from "react"
import "./Algoritmolineal.css";

function Algoritmoaditivo(){
    
    const [numero1, setNumero1] = useState("");
    const [valora, setValora] = useState("");
    const [valorc, setValorc] = useState("");
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
  
    const calcularConMulti = (e) =>{
        e.preventDefault()
        let a = 5 + 8*valora
        let m = Math.sqrt(2,valorc)
        let semilla = numero1
        let valor
        let r = []
        let counter;
        do{
            valor = (a*semilla)%m
             r.push(valor/(m-1)) 
            counter++
        }while(r[0] === r[counter-1])

            setResultados(...arrayresultante, r)
    }
    return(
        <div>
             <form className="algos"> 
            <h2>Algoritmo Congruencial </h2>
            <label>Semilla X</label>
            <input type="text" onChange={valorPrimero}></input>
            
            <label>Valor k</label>
            <input type="text" onChange={valorA}></input>
            
            <label>Valor g</label>
            <input type="text" onChange={valorC}></input>

            <h3>RESULTADO</h3>
            <button type="submit" onClick={calcularConMulti}>CALCULAR</button>
            </form> 
        </div>
    )
}

export default Algoritmoaditivo;
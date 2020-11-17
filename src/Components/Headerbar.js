import React from "react";
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import {useHistory} from "react-router-dom";
import "./Headerbar.css";

function Headerbar (){

    const history = useHistory();
    
    const Pagalgo = () =>{
        history.push("/");
    }

    return(

    <div className="headerbar">
            
        <div className="home">
            <HomeIcon className="icon" onClick={()=> Pagalgo()}/>
        </div>
        
        <div className="menu">
            <MenuIcon className="icon" />    
        </div>
     </div>
    );
}

export default Headerbar;
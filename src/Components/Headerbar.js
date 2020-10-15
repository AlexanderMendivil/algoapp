import React from "react";
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import "./Headerbar.css";

function Headerbar (){

    return(

    <div className="headerbar">
            
        <div className="home">
            <HomeIcon className="icon" />
        </div>
        
        <div className="menu">
            <MenuIcon className="icon" />    
        </div>
     </div>
    );
}

export default Headerbar;
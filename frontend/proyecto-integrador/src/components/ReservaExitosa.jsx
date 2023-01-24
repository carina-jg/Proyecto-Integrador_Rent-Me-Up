import React from "react";
import "../styles/ReservaExitosa.css"
import VerifiedIcon from '@mui/icons-material/Verified';
import Text from './atoms/Text'
import Button from './atoms/Button'
import { Link } from "react-router-dom";

function ReservaExitosa () {
    return (
        <div className="RExitosa">
            <span className="iconR"><VerifiedIcon sx={{ fontSize: 80 }}/></span>
        <h1>¡Muchas gracias!</h1>
        <h2><Text type="h2" color='secondary' text="Su reserva se ha realizado con éxito"/></h2>
        <div><Link to={"/"}><Button text="OK"  width="s" className="btnR"/></Link></div>
        </div>
    );
}

export default ReservaExitosa
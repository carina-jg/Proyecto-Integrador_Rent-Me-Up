import React from "react";
import "../styles/ProductoExitoso.css"
import VerifiedIcon from '@mui/icons-material/Verified';
import Text from './atoms/Text'
import Button from './atoms/Button'
import { Link } from "react-router-dom";

function ReservaExitosa () {
    return (
        <div className="PExitoso">
            <span className="iconP"><VerifiedIcon sx={{ fontSize: 80 }}/></span>
        <h2><Text type="h2" color='secondary' text="Tu producto se ha creado con éxito."/></h2>
        <div><Link to={"/"}><Button text="volver"  width="s"/></Link></div>
        </div>
    );
}

export default ReservaExitosa
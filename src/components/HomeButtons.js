import React from 'react';
import { Link } from "react-router-dom";

export default function HomeButtons() {

    return (
        <div className="homeButtons"> 
           <h2 className="secondaryHeadline">Acceso exclusivo empleados</h2>
           <Link to="/order"><button className="OptionsButton">Ingresar nuevo pedido</button></Link>
           <button className="OptionsButton">Pedidos pendientes</button>
        </div>
    )
}

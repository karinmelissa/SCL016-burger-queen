import React from 'react';
import logo from '../images/MitiMotaLogo.png';
import { Link } from "react-router-dom";

export const Header = ()=>{
    return (
        <nav className="header">
            <Link to="/"><img className="menuLogo" src={logo} alt="MitiMota-Logo"/></Link>
        </nav>
    )
}
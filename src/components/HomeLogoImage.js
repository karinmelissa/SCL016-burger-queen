import React, { Component } from 'react';
import logo from '../images/MitiMotaLogo.png';

export default function HomeLogoImage() {
    return (
        <div>
           <img className="mitiMotaLogo" src={logo} alt="MitiMota"/>
           <h1 className="principalHeadline">Buena Mano</h1>
        </div>
    )
}

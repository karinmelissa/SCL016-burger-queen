import React, { Component } from 'react';
import logo from '../images/MitiMotaLogo.png';

class MainLogo extends Component{
    render() {
        return <>
                <img src={logo} alt="Miti-Mota"/>
                <p className="secundaryText">Acceso exclusivo empleaados</p>
            </>;
    }
}
export default MainLogo;
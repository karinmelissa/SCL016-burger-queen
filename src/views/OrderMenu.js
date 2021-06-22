import React from 'react';
import Menu from '../components/Menu.js';
import { Header } from '../components/Header.js';
import ClienteOrder from '../components/ClientOrder.js';
//uuidv4 from uuidv4 generated random id so we dont have duplicated id's
//import uuidv4 from 'uuid/v4'

export default function OrderMenu() {
    return (
        <div>
            <Header/>
            <div className="orderMenu">
            <Menu/>
            <ClienteOrder/>
            </div>
        </div>
    )
}

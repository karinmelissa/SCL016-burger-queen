import React, { useState } from 'react';
import Menu from '../components/Menu.js';
import { Header } from '../components/Header.js';
import ClienteOrder from '../components/ClientOrder.js';
import Footer from '../components/Footer.js';
import TotalPrice from '../components/TotalPrice.js';
//uuidv4 from uuidv4 generated random id so we dont have duplicated id's
//import uuidv4 from 'uuid/v4'

export default function OrderMenu() {
  const [order, setOrder] = useState([]);
  let sumPrices =0;
  order.forEach(element => { sumPrices += element.quantity*element.price ;
  });

  return (
    <div>
      <Header />
      <div className="orderMenu">
        <Menu order={order} setOrder={setOrder}/>
        <ClienteOrder name={localStorage.getItem('clientName')} order={order} setOrder={setOrder}/>
        <TotalPrice order={order} totalSum={sumPrices} />
      </div>
      <Footer/>
    </div>
  )
}

import React, { useState }  from 'react';
import { db } from '../fireBaseConfig.js';

const ClienteOrder = (props) => {
  const {order , setOrder} = props;
  console.log(order)
  
  return (
    <aside className="clientOrder">
      <h2>{props.name}</h2>
      {order.map( item =>(
        <div className="cartItems">
        <p>{item.name}</p>
        <p>${item.price} <i className="far fa-trash-alt"></i></p>
        </div>
      ))}
    </aside>
  )
}
export default ClienteOrder;
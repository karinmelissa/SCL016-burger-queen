import React from 'react'
import { db } from '../fireBaseConfig.js'

const TotalPrice = (props) => {
  //send order to firebase 
  const sendOrder = ()=>{
    if(props.order.length>0){
      return db
      .collection('orders')
      .add({
        client : localStorage.getItem('clientName'),
        order : props.order,
        total : props.totalSum,
        status : 'En preparacion'
      })
      .then(()=>{
        console.log('enviado a cocina')
      })
      .catch((error)=>{
        console.error('Error writing new message to database', error);
      })
    }
    console.log('debe ingresar un pedido')
  }

  return (
    <div className="orderTotal">
      <h3>Total : ${props.totalSum}</h3>
      <button onClick={sendOrder}>Listo!</button>
    </div>
  )
}
export default TotalPrice
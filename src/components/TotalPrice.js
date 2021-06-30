import React, { useState }  from 'react';
import { db } from '../fireBaseConfig.js';
import SentOrderModal from './SentOrderModal.js';

const TotalPrice = (props) => {
  //send order to firebase 
  const sendOrder = ()=>{
    if(props.order.length>0){
      const dateOrder = new Date();
      return db
      .collection('orders')
      .add({
        client : localStorage.getItem('clientName'),
        order : props.order,
        total : props.totalSum,
        status : 'En preparacion',
        date: dateOrder.toLocaleString(),
      })
      .then(()=>{
        openModal();
      })
      .catch((error)=>{
        console.error('Error writing new message to database', error);
      })
    }
    console.log('debe ingresar un pedido')
  }
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(prev => !prev);
  };

  return (
    <>
    <div className="orderTotal">
      <h3>Total : ${props.totalSum}</h3>
      <button className="OrderReadyButton" onClick={sendOrder}>Listo!</button>
    </div>
    <SentOrderModal showModal={showModal} setShowModal={setShowModal}/>
    </>
  )
}
export default TotalPrice
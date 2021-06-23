import React  from 'react';
import { db } from '../fireBaseConfig.js';

const ClienteOrder = (props) => {
  console.log(localStorage.getItem('orderId'))
  const database = db.collection('orders').where('orderId', '==', localStorage.getItem('orderId'))
  const clientName = database.get().then((querySnapshot) =>  { 
    querySnapshot.forEach((doc) =>{
      return doc.data().client
    })
    })
    .catch(error => {
      console.log(error)
    })
  console.log(clientName)  
  return (
    <aside className="clientOrder">
      <h2>Nombre cliente</h2>
    </aside>
  )
}
export default ClienteOrder;
import React, { useRef } from 'react'
import { db } from '../fireBaseConfig.js';

const PendingOrdersCard = () => {

  //React.useEffect(()  async function could  work here 
  const orders = db.collection('orders')
  orders.where('status', '==', 'En preparacion')
  .get()
  .then((querySnapShot) => {
    querySnapShot.forEach((doc) => { console.log(doc.data())})
  });


  return <>
  </>

}
export default PendingOrdersCard
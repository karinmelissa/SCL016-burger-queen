import React, { useState } from 'react';
import { db } from '../fireBaseConfig.js';
import { useHistory } from "react-router-dom";
import { v4 as uuid_v4 } from "uuid";

const ClientModal = ({ showModal , setShowModal }) => {
  const [clientName, setClientName] = useState("");
  let history = useHistory();
  const orderId = uuid_v4() ;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (clientName !== "") {
      return db
        .collection('orders')
        .add({
          orderId : orderId,
          client: clientName,
          order : [],
        })
        .then(
          localStorage.setItem('orderId', orderId),
          console.log("cliente creado" + localStorage.getItem('orderId')),
          history.push("/order")
        )
        .catch((error) => {
          console.error('Error writing new message to database', error);
        });
    }
  };
  const closeModal = ()=>{
    setShowModal(prev => !prev);
  }

  return (
    <>
    {showModal ? <form className="clientNameModal" onSubmit={handleSubmit}>
    <i onClick={closeModal} className="far fa-times-circle"></i>
      <label>Nombre de cliente o nº de mesa</label>
      <input className="inputTextarea" type="text"
        placeholder="Escribe aqui..."
        onChange={(e) => setClientName(e.target.value)} />
        <button className="button-form" type="submit">Confirmar</button>
    </form> : null}
    </>
  );

}
export default ClientModal;
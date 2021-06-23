import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { v4 as uuid_v4 } from "uuid";

const ClientModal = ({ showModal , setShowModal }) => {
  const [clientName, setClientName] = useState("");
  let history = useHistory();
  const orderId = uuid_v4() ;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (clientName !== "") {
      return (localStorage.setItem('orderId', orderId),
      localStorage.setItem('clientName', clientName),
      history.push("/order"))
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
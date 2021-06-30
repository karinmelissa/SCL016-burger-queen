import React from 'react';
import { Link } from "react-router-dom";

const SentOrderModal = ({ showModal, setShowModal }) => {
  const closeModal = () => {
    setShowModal(prev => !prev);
  }
  return <>
    {showModal ? <form className="sentOrderModal">
      <label>Pedido enviado a cocina, muchas gracias!</label>
      <Link to="/"><button onClick={closeModal} className="button-form" type="submit">Menu Principal</button></Link>
    </form> : null}
  </>

}
export default SentOrderModal
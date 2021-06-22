import React, { useState } from 'react';
import ClientModal from './ClientNameModal.js';

export default function HomeButtons() {

  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(prev => !prev);
  };


  return (
    <>
    <div className="homeButtons">
      <h2 className="secondaryHeadline">Acceso exclusivo empleados</h2>
      <button onClick={openModal} className="OptionsButton">Ingresar nuevo pedido</button>
      <button className="OptionsButton">Pedidos pendientes</button>
    </div>
    <ClientModal  showModal={showModal} setShowModal={setShowModal} />
    </>
  )
}

import React, { useState } from 'react';

const ProductCard = (props) => {

  //switch case for category 
  const rendererSwitch = (param) => {
    switch (param) {
      case 'Pizza':
        return <p className="whiteText">{props.item.ingredients}</p>;
      case 'Bebestibles':
        return <p className="whiteText">{props.item.options}</p>;
      case 'Agregados':
        return;
      default:
        return;
    }
  }

  return <div className="productCard">
    <h1 className="whiteText">{props.item.name}</h1>
    <h2>${props.item.price}</h2>
    {rendererSwitch(props.category)}
    
  </div>
};

export default ProductCard;
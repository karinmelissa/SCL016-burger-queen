import React from 'react';

const ProductCard = (props) => {
  const {order , setOrder} = props;

  const addCart = (item) => {
    console.log('clicked ' + item.name)
    const newOrder = [
      ...order,
      {
        name: item.name,
        price: item.price,
        id: item.id,
      },
    ];
    setOrder(newOrder);
  }

  //switch case for category 
  const rendererSwitch = (param) => {
    switch (param) {
      case 'Pizza':
        return <p className="menuItem menuItemSecond">{props.item.ingredients}</p>;
      case 'Bebestibles':
        return <p className="menuItem menuItemSecond">{props.item.options}</p>;
      case 'Agregados':
        return;
      default:
        return;
    }
  }

  return <div className="productCard">
    <h1 className="menuItem menuItemHead">{props.item.name}</h1>
    <h2 className="menuItemPrice">${props.item.price}</h2>
    <i className="fas fa-plus-circle"
      onClick={() => addCart(props.item)}></i>
    {rendererSwitch(props.category)}
    
  </div>
};

export default ProductCard;
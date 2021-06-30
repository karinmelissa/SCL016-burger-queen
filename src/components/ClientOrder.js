import React  from 'react';

const ClienteOrder = (props) => {
  const {order , setOrder} = props;
  const removeItem =(item)=>{
    const removedItem = order.filter(elem => elem.id === item.id);
    //Se me actualizan el carrito de compras solo al agregar nuevos productos :c
    if(removedItem[0].quantity >=2){
      order.map((elem)=> {
        if(elem.id === item.id){
          elem.quantity --;
        }
      });
      setOrder(order)
    }
    else{
      const newOrder = order.filter(elem => {return elem.id !== item.id});
      setOrder(newOrder);
    }
  }

  return (
    <aside className="clientOrder">
      <h2>{props.name}</h2>
      {order.map( item =>(
        //key=item.key
        <div className="cartItems" key={item.id}>
        <p>{item.quantity} {item.name}</p>
        <p>${item.price * item.quantity} <i className="far fa-trash-alt" onClick={() => removeItem(item)}></i></p>
        </div>
      ))}
    </aside>
  )
}
export default ClienteOrder;
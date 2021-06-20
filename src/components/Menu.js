import React, { useState } from 'react'
import data from '../menu.json';
import MenuDrinksButton from './MenuDrinksButton.js';
import MenuPizzaButton from './MenuPizzaButton.js';
import MenuExtrasButton from './MenuExtrasButton.js';


const Menu = (props) => {
    const MenuPizzeria = data.filter((items) => items.category === "Pizza");
    const MenuBebestible = data.filter((items) => items.category === "Bebestible");
    const MenuAgregados = data.filter((items) => items.category === "Agregados");
    const [options, setOptions] = useState(MenuPizzeria);


    const drinkClick = () => {
        setOptions(MenuBebestible);
    };
    const pizzaClick = () => {
        setOptions(MenuPizzeria);
    };
    const extrasClick = () => {
        setOptions(MenuAgregados);
    };
    
    
    const manageOptions = ()=>{
        return <>
        <MenuPizzaButton onClick={()=>pizzaClick()}/>
        <MenuDrinksButton onClick={()=>drinkClick()} />
        <MenuExtrasButton onClick={()=>extrasClick()}/>
        </>
    }

    const renderedGoods = options.map(item => {
        return <>
        <h1 className="whiteText" key={item.id}>{item.name}</h1>
        {/* <h2 className="whiteText" key={item.id}>{item.prices.medium ? true : item.prices.medium}</h2>
        //<p className="whiteText" key={item.id}>{item.ingredients || item.options}</p> */}
        </>
    })
    return <div>
        {manageOptions()}{renderedGoods}</div>


}
export default Menu;

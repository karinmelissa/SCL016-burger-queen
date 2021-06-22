import React, { useState } from 'react'
import data from '../menu.json';
import MenuDrinksButton from './MenuDrinksButton.js';
import MenuPizzaButton from './MenuPizzaButton.js';
import MenuExtrasButton from './MenuExtrasButton.js';
import ProductCard from './ProductCard.js';


const Menu = () => {
    const MenuPizzeria = data.filter((items) => items.category === "Pizza");
    const MenuBebestible = data.filter((items) => items.category === "Bebestible");
    const MenuAgregados = data.filter((items) => items.category === "Agregados");
    const [options, setOptions] = useState(MenuPizzeria);
    const [category, setCategory] = useState("Pizza");


    const drinkClick = () => {
        setOptions(MenuBebestible);
        setCategory("Bebestibles")
    };
    const pizzaClick = () => {
        setOptions(MenuPizzeria);
        setCategory("Pizza")
    };
    const extrasClick = () => {
        setOptions(MenuAgregados);
        setCategory("Agregados")
    };
    
    
    const manageOptions = ()=>{
        return <div className="menuButtons">
        <MenuPizzaButton onClick={()=>pizzaClick()}/>
        <MenuDrinksButton onClick={()=>drinkClick()} />
        <MenuExtrasButton onClick={()=>extrasClick()}/>
        </div>
    }

    const renderedGoods = options.map(item => {
        return <ProductCard key={item.id}item={item} category={category}/>
    })
    return <>
    <div className="menuContainer">
    {manageOptions()}
    <section className="menuItemsContainer">{renderedGoods}</section>
    </div>
    </>
}
export default Menu;

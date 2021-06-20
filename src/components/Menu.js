import React from 'react'
import Data from '../menu.js';

export default function Menu() {
    return (
        <h1>{Data.map(menu =><h1 className="whiteText" >{menu}</h1> )}</h1>
    )
}

import React from 'react'
import { Link } from 'react-router-dom';

const Item = ({prod}) => {
    return(
        <div>
            <h1>{prod.name}</h1>
            <h2>${prod.price}</h2>
            <img src={prod.img} alt="1"/>
            <Link to={`/detail/${prod.id}`}>Detalles</Link>
        </div>
        )
}

export default Item;
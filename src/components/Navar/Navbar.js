import React from 'react';
import { Link } from "react-router-dom";
import CartWidget from '../CartWidget/CartWidget';
import './Navbar.css'

const Navbar = () => {
    return(
        <nav className="NavBar">
            <h1 className='Title'>Ecommerce</h1>
            <div className="Buttons">
                <Link  className="Option" to={'/category/celular'}>Celulares</Link>
                <Link className="Option" to={'/category/tablet'}>Tablets</Link>
                <Link className="Option" to={'/category/notebooks'}>Notebooks</Link>
            </div>
            <CartWidget />
        </nav>
    )
}

export default Navbar;
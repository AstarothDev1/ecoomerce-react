import React from 'react';
import { Link } from "react-router-dom";
import CartWidget from '../CartWidget/CartWidget';
import './Navbar.css';
import Logo from './../../Media/Imgs/Logo.png'

const Navbar = () => {
    return(
        <nav className="NavBar">
            <Link className="Title" to='/'>
                <img className="img" src={Logo} alt="Logo" />
               
            </Link>
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
import React from 'react';

import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <div className="topnav">
            <Link className="active" to="/Home">Home</Link>
            <Link to="/News">News</Link>
            <Link to="/Contacts">Contacts</Link>
            <Link to="/About">About</Link>
            <Link to="/Cart" 
                className="my-cart" 
                title="Add item to cart"
            >
                <i 
                    className="cart plus large icon"
                ></i>
            </Link>
        </div>
    );
}

export default NavBar;
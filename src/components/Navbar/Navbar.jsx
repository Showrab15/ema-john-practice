import React from 'react';
import './Navbar.css';
import logo from '../../images/Logo.svg'

const Navbar = () => {
    return (
        <div className='navbar-container'>
            <img src={logo} alt="" />
            <div className='nav-container'>
            <a href="/order">Order</a>
            <a href="review">Review</a>
            <a href="/inventory">Manage Inventory</a>
            <a href="login">Login</a>
            </div>
          
        </div>
    );
};

export default Navbar;
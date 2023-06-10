import React from 'react';
import logo from '../../images/logo.png';
import './Header.css'
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <div className="header">
            <img className="logo" src={logo} alt="logo of ema-john" />
            <nav>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/review">Order Review</NavLink>
                <NavLink to="/inventory">Manage Inventory</NavLink>
                { user.email && <span style={{color: 'white'}}>Hello {user.displayName} </span> }
                { user.email ? <button 
                onClick={logOut} 
                className='btn btn-regular'
                >Logout</button>
                : <NavLink to="/login">Login</NavLink>}
            </nav>
        </div>
    );
};

export default Header;
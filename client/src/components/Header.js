import React from 'react';
import { NavLink } from "react-router-dom";
import Green from '../assets/green.svg';
import HeaderLogo from '../assets/logo.svg';
import OkikeWriteUp from '../assets/okike_foods.svg';
import './Header.css';

const Header = () => {
    return (
        <div className="custom-header" style={{ top: 0 }}>
            <div className="header-logo">
                <NavLink to='/'>
                    <img alt='' src={HeaderLogo} />
                    <img alt='' className="header-writeup" src={OkikeWriteUp} />
                </NavLink>
            </div>
            <div className="green"> <img alt='' src={Green} />
                <button  onClick={() => { window.open('https://wa.me/15551234567?text') }}>Whatsapp Okike</button>
            </div>
        </div>
    )
};


export default Header;
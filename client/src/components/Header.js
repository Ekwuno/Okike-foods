import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import Green from '../assets/green.svg';
import HeaderLogo from '../assets/logo.svg';
import OkikeWriteUp from '../assets/okike_foods.svg';
import './Header.css';

const Header = () => {
    return (
        <div className="custom-header">
            <div className="header-logo">
                <img src={HeaderLogo}/>   
                <img className="header-writeup" src={OkikeWriteUp}/>              
            </div>
            <div className="green"> <img src={Green}/>
                <button>Whatsapp Okike</button>
            </div>
        </div>
         )
};

export default Header;
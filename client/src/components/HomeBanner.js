import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import './HomeBanner.css';
import Banner from '../assets/banner-image.png';
import WhatsappLogo from '../assets/whatsapp-logo.svg';
import FacebookLogo from '../assets/facebook-logo.svg';
import TwitterLogo from '../assets/twitter-logo.svg';
import InstaLogo from '../assets/insta-logo.svg';

const HomeBanner = () => {
    return (
        <div className="home-banner">
            <div className="home-left-banner">
                <img src={Banner} />
            </div>
            <div className="home-right-banner">
                <p id="home-whatsapp-text">WHATSAPP</p>
                <h2>Okike Foods</h2>
                <p id="home-banner-desc">Okike is a whatsapp food delivery medium, meant to make good food easily assessable at affordable rate.
                 We are here to satisfy your love for food through prompt delivery of the best national dishes within your radar</p>
                <div className="banner-buttons">
                    <button className="btn btn-danger">View Full Menu</button>
                    <button className="btn btn-success">Order Now</button>
                </div>
                <div className="home-contact-details">
                    <img src={WhatsappLogo}/>
                    <p>+2430000000000</p>
                    <p>info@okikefoods.ng</p>
                    <img src={FacebookLogo}/>
                    <img src={TwitterLogo}/>
                    <img src={InstaLogo}/>
                </div>
            </div>
        </div>
    )
}

export default HomeBanner;
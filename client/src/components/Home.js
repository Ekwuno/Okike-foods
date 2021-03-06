import React, { Component, Fragment } from 'react';
import { NavLink } from "react-router-dom";
// import Header from './Header';
import HomeBanner from './HomeBanner';
import './home.css'
import HomeBody from './homebody';
import serving from '../assets/serving-dish.svg';
import group from '../assets/Group.svg';
import call from '../assets/menu (2).svg'
import Footer from './footer';

class Home extends Component {
    render() {
        return (
            <Fragment>
                <HomeBanner />
                <center>
                    <h3><b> How Easy It is</b></h3>
                    <div className='icon-pan'>
                        <div className='icon-box'>
                            <img src={call} alt='' />
                            <p>Pick Your Meal </p>
                        </div>
                        <div className='icon-box'>
                            <img src={group} alt='' />
                            <p>Whatsapp Okike And Place Order</p>
                        </div>
                        <div className='icon-box'>
                            <img src={serving} alt='' />
                            <p>Enjoy Your Meal</p>
                        </div>
                    </div>
                </center>
                <center>
                    <h2> What's available </h2>
                </center>
                <div className='bookshelf'>
                    <HomeBody container='card' />
                    <HomeBody container='card' />
                    <HomeBody container='card' />
                </div>
                <center>
                    <h3><b>Our Offerings</b></h3>
                    <div className='icon-pan'>
                        <div className='icon-box'>
                            <NavLink to='/order/afiaNkwu'> <img style={{ width: '100%', height: '100%' }} src={HomeBanner} alt='' />
                            </NavLink>
                            <p>Afia Nkwu</p>
                        </div>
                        <div className='icon-box'>
                            <NavLink to='/order/fruitChef'> <img style={{ width: '100%', height: '100%' }} src={HomeBanner} alt='' />
                            </NavLink>
                            <p>Fruit Chef</p>
                        </div>
                        <div className='icon-box'>
                            <NavLink to='/order/olc'> <img style={{ width: '100%', height: '100%' }} src={HomeBanner} alt='' />
                            </NavLink>
                            <p>OLC</p>
                        </div>
                    </div>
                </center>
                <Footer />
            </Fragment>
        )
    }
}

export default Home;
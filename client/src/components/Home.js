import React, { Component, Fragment } from 'react';
// import { Link, withRouter } from "react-router-dom";
// import Header from './Header';
import HomeBanner from './HomeBanner';
import './home.css'
import HomeBody from './homebody';



class Home extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Fragment>
                <HomeBanner />
                <center>
                    <h3><b> How Easy It is</b></h3>
                    <div className='icon-pan'>
                        <div className='icon-box'>
                            <img src={HomeBanner} alt='' />
                            <p>I am for this one</p>
                        </div>
                        <div className='icon-box'>
                            <img src={HomeBanner} alt='' />
                            <p>I am for this one</p>
                        </div>
                        <div className='icon-box'>
                            <img src={HomeBanner} alt='' />
                            <p>I am for this one</p>
                        </div>
                    </div>
                </center>
                <center><h2> What's available </h2></center>
                <div className='bookshelf'>
                    <HomeBody container='card'/>
                    <HomeBody />
                    <HomeBody />
                </div>
            </Fragment>
        )
    }
}

export default Home;
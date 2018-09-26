import React, { Component } from 'react';
// import logo from './logo.svg';
import Header from './components/Header'
// import {
//     BrowserRouter as Router,
//     Route
// } from 'react-router-dom';
import Home from './components/Home.js'
import './App.css';
import './container/css/bootstrap.css'
import HomeBody from './components/homebody';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Home />
                <div className='bookshelf'>
                    <HomeBody />
                    <HomeBody />
                    <HomeBody />
                </div>
            </div >
        );
    }
}

export default App;
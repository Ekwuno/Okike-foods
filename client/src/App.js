import React, { Component } from 'react';
// import logo from './logo.svg';
import Header from './components/Header'
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import Home from './components/Home.js'
import './App.css';
import './container/css/bootstrap.css'
import HomeBody from './components/homebody';
import Homepagedata from './components/homepagedata';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Home />
                <HomeBody/>
                <Homepagedata/>
            </div >
        );
    }
}

export default App;
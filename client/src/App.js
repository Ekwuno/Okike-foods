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

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Home />
            </div >
        );
    }
}

export default App;
import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home.js';
import Menu from './components/Menu.js';
import FruitChef from './components/fruitChef.js';
import Olc from './components/Olc.js';
import './App.css';
import './container/css/bootstrap.css';
import Footer from './components/footer'

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Fragment>
                        <Header />
                        <Route path='/' exact component={Home} />
                        <Route path='/menu' exact component={Menu} />
                        <Route path='/fruitChef' exact component={FruitChef} />
                        <Route path='/order/:id' exact component={Olc} />
                        <Footer />
                    </Fragment>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
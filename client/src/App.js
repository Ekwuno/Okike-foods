import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home.js'
import './App.css';
import './container/css/bootstrap.css';
import Footer from './components/footer'
import Menu from './components/Menu'

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Fragment>
                        <Header />
                        <Route path='/' exact component={Home} />
                        <Route path='/menu' exact component={Menu} />
                        {/* <Route path='/fruitChef' exact component={} />
                        <Route path='/afiaNkwu' exact component={} />
                        <Route path='/olc' exact component={} /> */}
                        <Footer />
                    </Fragment>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
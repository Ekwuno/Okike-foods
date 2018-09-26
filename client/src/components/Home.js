import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
// import Header from './Header';
import HomeBanner from './HomeBanner';

class Home extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div>
                {/* <Header/> */}
                <HomeBanner/>
            </div>
        )
    }
}

export default Home;
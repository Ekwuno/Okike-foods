import React, { Component, Fragment } from 'react'
import './menu.css';
import HomeBody from './homebody'
import Footer from './footer';


class Menu extends Component {
    render() {
        return (
            <Fragment>
                <div className='MenuRecipe'>
                    {/* image goes here */}
                    <div className='MenuRecipeImage'>

                    </div>
                    <div className='MenuRecipeDetail'>
                        <h3><b>Breakfast Special</b></h3><br /><br />
                        <p>Isnt she lovely, Haalleluyah? <br />
                            she says she loves me, Halleluyah<br />
                            isnt she lovely, Drille la Simi</p>
                        <button className='btn btn-success btn-md' style={{ float: 'right' }}>Order Now</button>
                    </div>
                </div>
                <div className='bookshelf'>
                    <HomeBody container='card' />
                    <HomeBody container='card' />
                    <HomeBody container='card' />
                    <HomeBody container='card' />
                    <HomeBody container='card' />
                    <HomeBody container='card' />
                    <HomeBody container='card' />
                    <HomeBody container='card' />
                    <HomeBody container='card' />
                </div>
                <Footer />
            </Fragment>
        )
    }
}

export default Menu

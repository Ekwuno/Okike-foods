import React, { Component, Fragment } from 'react'
// import Banner from 
import './menu.css';
import HomeBody from './homebody'


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

                    <HomeBody />
                    <HomeBody />
                    <HomeBody />
                    <HomeBody />
                    <HomeBody />
                    <HomeBody />
                    <HomeBody />
                    <HomeBody />
                    <HomeBody />
                </div>
            </Fragment>
        )
    }
}

export default Menu
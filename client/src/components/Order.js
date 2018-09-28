import React, { Component } from 'react';
import './fruitChef.css'

class Order extends Component {
    render() {
        return (
            <div className='specialCard'>
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
        )
    }
}

export default Order;
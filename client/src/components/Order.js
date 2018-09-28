import React, { Component, Fragment } from 'react';
import Footer from './footer'

class Order extends Component {

    state = {
        title: null,
        description: null,
        orderText: null
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        (id === 'olc') ?
            this.setState({
                title: 'Owambe Gigi Gaan',
                description: 'Awon boys ti yapa si adugbo',
                orderText: 'i want to order for delicacies'
            }) :
            (id === 'afiaNkwu') ?
                this.setState({
                    title: 'Awon AfiaNkwu Ni Adugbo',
                    description: 'Afia Nkwu issa goal, issa bae sontin',
                    orderText: 'I want to order for palm-wine( Nkwu )'
                })
                :
                (id === 'fruitChef') ?
                    this.setState({
                        title: 'Fruit Chef something',
                        description: 'This fruitty drink is so making sense',
                        orderText: 'i want to order for fruit drinks/smoothies'
                    })
                    : null
    }

    render() {
        const { title, description } = this.state;
        const orderText = encodeURI(this.state.orderText);
        return (
            <Fragment>
                <div className='specialCard'>
                    <div className='MenuRecipeImage'>

                    </div>
                    <div className='MenuRecipeDetail'>
                        <h3><b>{title}</b></h3><br /><br />
                        <p>{description}</p>
                        <button onClick={() => { window.open(`https://wa.me/15551234567?text=${orderText}`) }} className='btn btn-success btn-md' style={{ float: 'right' }}>Order Now</button>
                    </div>
                </div>
                <Footer position='absolute' />
            </Fragment>
        )
    }
}

export default Order;
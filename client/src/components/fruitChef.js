import React,{Component} from 'react';
import HomeBody from './homebody';
import './fruitChef.css'

class FruitChecf extends Component {
    render() {
        return (
            <div className="book-wrapper">
                <div className='bookshelf bookshelf-fruitChef'>
                    <HomeBody container="card card-fruitChef"/>
                    <HomeBody container="card card-fruitChef"/>
                    <HomeBody container="card card-fruitChef"/>
                {/* </div>
                <div className='bookshelf'> */}
                <HomeBody container="card card-fruitChef"/>
                <HomeBody container="card card-fruitChef"/>
                <HomeBody container="card card-fruitChef"/>
                </div>
            </div>
        )
    }
}

export default FruitChecf;
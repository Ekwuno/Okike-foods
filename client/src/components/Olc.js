import React,{Component} from 'react';
import './olc.css';

class Olc extends Component {
    render() {
        return (
            <div className="olc-wrapper">
                <h1>Afia Nku (Palm wine Market)</h1>
                <form className="olc-form">
                <p className="form-desc">SELECT QUANTITY</p>
                    <select className="form-select">Select
                        <option>ONE</option>
                        <option>TWO</option>
                        <option>THREE</option>
                        <option>FOUR</option>
                    </select>
                    <p className="form-desc">SELECT QUANTITY</p>
                    <select className="form-select">Select
                        <option>ONE</option>
                        <option>TWO</option>
                        <option>THREE</option>
                        <option>FOUR</option>
                    </select>
                    <p className="form-desc">SELECT QUANTITY</p>
                    <input type="text" className="olc-input" placeholder="Enter delivery Address"/>
                    <p className="form-desc">SELECT QUANTITY</p>
                    <input type="text" className="olc-input" placeholder="Enter phone number"/>
                    <button className="btn btn-success olc-button">Place Order</button>
                </form>
            </div>
        )
    }
}

export default Olc;
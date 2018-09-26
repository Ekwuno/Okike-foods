import React, {Component } from 'react';
import './homebody.css'
import Pickyourmeal from '../assets/Pick your Meal.svg';
import whatsapp from '../assets/Whatsapp Okike and Place Order.svg';
import enjoy from '../assets/Enjot your meal.svg';
import playsymbol from '../assets/play-symbol.svg';

export default class HomeBody extends Component {
  render() {
    return (
      <div>
        <h1 className='label-1' >How Easy It Is</h1>
        <img className= 'icon-1'src = {Pickyourmeal} alt='icon' />
        <img className='playButton' src = {playsymbol} alt='icon'/>  
        <img className= 'icon-2'src = {whatsapp} alt='icon'/>
        <img className='playButton2' src = {playsymbol} alt='icon'/>
        <img className = 'icon-3' src = {enjoy} alt='icon' />
        
      </div>
    )
  }
}

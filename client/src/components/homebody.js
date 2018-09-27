import React, { Component, Fragment } from 'react';
import './homebody.css'
import {NavLink} from 'react-router-dom'


export default class HomeBody extends Component {
  render() {
    return (
      <Fragment>
        <div className={this.props.container}>
          <div className='cardImage'>
            {/* <img src={book.image_url} alt='' style={{ width: '100%', height: '100%' }} /> */}
          </div>
          <div className='cardName'>
            <h4 style={{ margin: 0 }}><b>i am</b></h4>
            <NavLink to='/' >
                  <button className='btn btn-success btn-md' style={{ float: "right", borderRadius: 10 }} >Read now</button>
              </NavLink>
            <br />
            <b> i am </b>
          </div>
        </div>
      </Fragment >
    )
  }
}

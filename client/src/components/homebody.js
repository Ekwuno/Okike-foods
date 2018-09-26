import React, { Component, Fragment } from 'react';
import './homebody.css'

export default class HomeBody extends Component {
  render() {
    return (
      <Fragment>
        <div className='card'>
          <div className='cardImage'>
            {/* <img src={book.image_url} alt='' style={{ width: '100%', height: '100%' }} /> */}
          </div>
          <div className='cardName'>
            <h4 style={{ margin: 0 }}><b>i am</b></h4>
            {/* <NavLink to={`/`} >
                  <button className='btn btn-primary btn-md' style={{ float: "right" }} >Read now</button>
              </NavLink> */}
            <br />
            {/* <b> {book.author} </b> */}
          </div>
        </div>
      </Fragment >
    )
  }
}

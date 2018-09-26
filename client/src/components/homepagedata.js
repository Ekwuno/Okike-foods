import React, { Component } from 'react'
// import axios from 'axios'
import './homebody.css'

export default class  Homepagedata extends Component {
    // state ={
    //     items:[],

    // }

    // componentDidMount(){
    //     axios.get()
    //     .then(res =>{
    //         console.log(res.data)
    //         this.setState({items:res.data})
    //     })
    // }
  render() {
    return (
      <div>
         <h1 className='label-2' >What's Available</h1>
            {/* <div className= 'itembox'>
            {this.state.items.map(value =>(
                <div className = "menudiv">

                </div>
            ))} */}
        {/* </div> */}
        <div className = "menudiv">
        
        </div>
        <div className = "menudiv2">
        
        </div>
        <div className = "menudiv3">
        
        </div>
      </div>
    )
  }
}
 
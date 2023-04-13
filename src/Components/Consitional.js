import React, { Component } from 'react'

export class Consitional extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: false,
      }
    }
  render() {
    if(this.state.isLoggedIn){
        return (
            <div>
                Welcome kartik
            </div>
        )
    }else{
        return(
            <div>
                Welcome user
            </div>
        )
    }
    // return (
    //   <div>Welcome , Kartik</div>
    // )
  }
}

export default Consitional
import React, { Component } from 'react'

export class Batch extends Component {
    constructor(){
        super()
        this.state = {
            message: " hey guys welcome to devtown"
        }
    }
    changeMessage() {
        this.setState({
            message:"Thanks for your feedback"
        })
    }
  render() {
    return (
      <div>
        <h1>
           {this.state.message}
        </h1>
        <button onClick={() => this.changeMessage()}>Press Me</button>
      </div>
    )
  }
}

export default Batch
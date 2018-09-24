import React, { Component } from 'react';

class Input extends Component {
  state = {
    currentText: "" 
  }
   
  render () {
    return (
    <form>
     <input type="text" onChange={this.handleChange}></input>
    </form>
    )
  }

  handleChange = (event) => {
    this.setState = {
      currentText: event.target.value
    }
  }
}

export default Input
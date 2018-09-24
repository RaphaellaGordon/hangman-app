import React, { Component } from 'react';

class Input extends Component {
  state = {
    currentText: ""
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.currentText} onChange={this.handleChange}></input><button >Play</button>
      </form>
    )
  }

  handleChange = (event) => {
    this.setState({
      currentText: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.setGoalWord(this.state.currentText.toUpperCase());
    this.setState({ currentText: "" })
  }
}

export default Input
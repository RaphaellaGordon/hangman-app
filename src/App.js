import React, { Component } from 'react';
import './App.css';
import Input from './components/Input';

class App extends Component {
  state = {
    goalWord:''
  }

  render() {
    return (
      <div className="App">
        <h1 className="App-title">Hangman</h1>
        <Input />
      </div>
    );
  }
}

export default App;

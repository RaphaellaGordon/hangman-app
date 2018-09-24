import React, { Component } from 'react';
import './App.css';
import Input from './components/Input';
import Image from './components/Image';
import Letters from './components/Letters';
import Response from './components/Response';
import Button from './components/Button';

class App extends Component {
  state = {
    goalWord: '',
    correctGuesses: [],
    incorrectGuesses: []
  }

  render() {
    return (
      <div className="App">
        <h1 className="App-title">Hangman</h1>
        {this.state.goalWord.length === 0 && <Input setGoalWord={this.setGoalWord} correctGuesses={this.state.correctGuesses} />}
        <Image incorrectGuesses={this.state.incorrectGuesses} />
        <Response goalWord={this.state.goalWord} correctGuesses={this.state.correctGuesses} />
        <Letters makeGuess={this.makeGuess} incorrectGuesses={this.state.incorrectGuesses} />
        <Button refreshBoard={this.refreshBoard} />
      </div>
    );
  }

  setGoalWord = (goalWord) => {
    this.setState({
      goalWord: goalWord
    })
  }

  makeGuess = (guess) => {
    if (this.state.goalWord.split('').includes(guess)) {
      this.setState({
        correctGuesses: this.state.correctGuesses.concat(guess)
      })
    } else {
      this.setState({
        incorrectGuesses: this.state.incorrectGuesses.concat(guess.toUpperCase())
      })
    }
  }

  refreshBoard = () => {
    this.setState({
      goalWord: '',
      correctGuesses: [],
      incorrectGuesses: []
    })
  }


}

export default App;

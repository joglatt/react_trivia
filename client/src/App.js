import React, { Component } from "react";
import logo from "./logo.png";
import "./App.css";
import Panel from "./components/Panel";
import api from "./api";

class App extends Component {
  constructor() {
    super();
    this.state = {
      questions: [],
      currentQuestion: {},
      usedQuestions: [],
      score: 0,
      time: 10
    };
  }
  componentDidMount() {
    api
      .getAll()
      .then(res => {
        console.log(res.data);
        this.setState({
          questions: res.data,
          currentQuestion: res.data[0]
        });
        console.log(this.state.currentQuestion);
      })
      .catch(err => console.log(err));
  }

  testUserGuess(guess, qArray, used) {
    if (guess === this.state.currentQuestion.correct) {
      let score = this.state.score + 1;
      this.setState({
        questions: qArray,
        currentQuestion: this.state.questions[0],
        usedQuestions: used,
        score: score
      });
    } else {
      this.setState({
        questions: qArray,
        currentQuestion: this.state.questions[0],
        usedQuestions: used
      });
    }
  }
  // On each click, remove currentQuestion from the questions array and place it in the usedQuestions array
  handleSelection = event => {
    let qArray = this.state.questions;
    let used = [];
    used.push(qArray.splice(qArray.indexOf(this.state.currentQuestion), 1));
    this.testUserGuess(event.currentTarget.value, qArray, used);
  };

  render() {
    const { currentQuestion, score, time } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Trivia</h1>
        </header>
        <Panel
          handleSelection={this.handleSelection}
          currentQuestion={currentQuestion}
          score={score}
          time={time}
        />
      </div>
    );
  }
}

export default App;

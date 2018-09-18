import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Panel from "./components/Panel";
import api from "./api";

class App extends Component {
  constructor() {
    super();
    this.state = {
      questions: [],
      currentQuestion: {},
      usedQuetions: []
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

  // On each click, remove currentQuestion from the questions array and place it in the usedQuestions array
  handleSelection = e => {
    let qArray = this.state.questions;
    let used = [];
    used.push(qArray.splice(qArray.indexOf(this.state.currentQuestion), 1));
    console.log(used);
    console.log (qArray);
    this.setState({
      questions: qArray,
      currentQuestion: this.state.questions[0]
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Trivia</h1>
        </header>
        <Panel handleSelection={this.handleSelection} currentQuestion={this.state.currentQuestion} />
      </div>
    );
  }
}

export default App;

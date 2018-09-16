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
          currentQuestion:res.data[0]
        });
        console.log(this.state.currentQuestion);
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Trivia</h1>
        </header>
        <Panel currentQuestion={this.state.currentQuestion} />
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import logo from "./logo.png";
import "./App.css";
import Panel from "./components/Panel";
import api from "./api";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Context from "./Context.js";

class Provider extends Component {
  state = {
    counter: 0,
    questions: [],
    currentQuestion: {},
    usedQuestions: [],
    score: 0,
    time: 10,
    started: false,
    endGame: false
  };
  getQuestions = () => {
    api
      .getAll()
      .then(res => {
        // console.log(res.data);
        this.setState({
          questions: res.data,
          currentQuestion: res.data[0]
        });
        // console.log(this.state.currentQuestion);
      })
      .catch(err => console.log(err));
  };
  initGame = () => {
    this.setState({
      started: true
    });
    // this.startClock();
  };

  // startClock() {
  //   console.log(this.state.time);
  //   setInterval(
  //     this.setState({
  //       time: this.state.time - 1
  //     }),
  //     1000
  //   );
  // }

  endGame() {
    if (this.state.counter === 10) {
      this.setState({
        endGame: true
      });
    }
  }
  testUserGuess(guess, qArray, used) {
    if (guess === this.state.currentQuestion.correct) {
      this.setState({
        counter: this.state.counter + 1,
        questions: qArray,
        currentQuestion: this.state.questions[0],
        usedQuestions: used,
        score: this.state.score + 1
      });
    } else {
      this.setState({
        counter: this.state.counter + 1,
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
    return (
      <Context.Provider value={{ state: this.state }}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      // counter: 0,
      // questions: [],
      // currentQuestion: {},
      // usedQuestions: [],
      // score: 0,
      // time: 10,
      // started: false,
      // endGame: false
    };
  }
  // componentDidMount() {





  
  //   api
  //     .getAll()
  //     .then(res => {
  //       // console.log(res.data);
  //       this.setState({
  //         questions: res.data,
  //         currentQuestion: res.data[0]
  //       });
  //       // console.log(this.state.currentQuestion);
  //     })
  //     .catch(err => console.log(err));
  // }
  // initGame = () => {
  //   this.setState({
  //     started: true
  //   });
  //   // this.startClock();
  // };

  // startClock() {
  //   console.log(this.state.time);
  //   setInterval(
  //     this.setState({
  //       time: this.state.time - 1
  //     }),
  //     1000
  //   );
  // }

  // endGame() {
  //   if (this.state.counter === 10) {
  //     this.setState({
  //       endGame: true
  //     });
  //   }
  // }
  // testUserGuess(guess, qArray, used) {
  //   if (guess === this.state.currentQuestion.correct) {
  //     this.setState({
  //       counter: this.state.counter + 1,
  //       questions: qArray,
  //       currentQuestion: this.state.questions[0],
  //       usedQuestions: used,
  //       score: this.state.score + 1
  //     });
  //   } else {
  //     this.setState({
  //       counter: this.state.counter + 1,
  //       questions: qArray,
  //       currentQuestion: this.state.questions[0],
  //       usedQuestions: used
  //     });
  //   }
  // }
  // On each click, remove currentQuestion from the questions array and place it in the usedQuestions array
  // handleSelection = event => {
  //   let qArray = this.state.questions;
  //   let used = [];
  //   used.push(qArray.splice(qArray.indexOf(this.state.currentQuestion), 1));
  //   this.testUserGuess(event.currentTarget.value, qArray, used);
  // };

  render() {
    // const {
    //   currentQuestion,
    // score, time,
    //   started
    // } = this.state;

    return (
      <Provider>
        <div className="App">
          <CssBaseline />
          <AppBar className="appBar">
            <img src={logo} className="App-logo" alt="logo" />
          </AppBar>
          <Panel
          // initGame={this.initGame}
          // started={started}
          // handleSelection={this.handleSelection}
          // currentQuestion={currentQuestion}
          // score={score}
          // time={time}
          />
        </div>
      </Provider>
    );
  }
}

export default App;

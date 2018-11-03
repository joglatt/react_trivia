import React, { Component } from "react";
import "../App.css";
import Context from "../Context.js";
import GameStarted from "./GameStarted.js";
// import NotStarted from "./NotStarted.js";
class Panel extends Component {
  componentDidMount() {
    this.props.getQuestions();
  }

  render() {
    // const {
    //   currentQuestion,
    // score,
    // time,
    //   handleSelection,
    //   started,
    //   initGame
    // } = this.props;

    // if (started) {
    return (
      <Context.Consumer>
        <GameStarted />
      </Context.Consumer>
    );
    // } else {
    // return <NotStarted />;
    // }
  }
}

export default Panel;

import React, { Component } from "react";
import Question from "./Question";
import ScoreBoard from "./Scoreboard";
import Selections from "./Selections";
class Panel extends Component {
  render() {
    console.log(this.props.questions[0])
    return (
      <div>
        <Question question={this.props.questions[0]}/>
        <ScoreBoard />
        <Selections />
      </div>
    );
  }
}

export default Panel;

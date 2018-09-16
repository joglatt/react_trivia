import React, { Component } from "react";
import Question from "./Question";
import ScoreBoard from "./Scoreboard";
import Selections from "./Selections";
class Panel extends Component {
  
  render() {
    console.log(this.props.currentQuestion)
    return (
      <div>
        <Question question={this.props.currentQuestion}/>
        <ScoreBoard />
        <Selections question={this.props.currentQuestion} />
      </div>
    );
  }
}

export default Panel;

import React, { Component } from "react";
import Question from "./Question";
import ScoreBoard from "./Scoreboard";
import Selections from "./Selections";
class Panel extends Component {
  render() {
    return (
      <div>
        <Question question={this.props.currentQuestion} />
        <ScoreBoard />
        <Selections
          handleSelection={this.props.handleSelection}
          question={this.props.currentQuestion}
        />
      </div>
    );
  }
}

export default Panel;

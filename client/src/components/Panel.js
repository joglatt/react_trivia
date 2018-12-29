import React, { Component } from "react";
import "../App.css";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

class Panel extends Component {
  // componentDidMount() {
  //   this.props.getQuestions();
  // }

  render() {
    const {
      currentQuestion,
      score,
      time,
      handleSelection,
      started,
      startClock
    } = this.props;
    if (started) {
      return (
        <Paper className="panel" align="center">
          <ScoreBoard score={score} time={time} />
          <Question question={currentQuestion} />
          <Selections
            handleSelection={handleSelection}
            question={currentQuestion}
          />
        </Paper>
      );
    } else {
      return (
        <Paper className="panel">
          <Button onClick={startClock}>
            {" "}
            <Typography variant="display1"> Start Game </Typography>
          </Button>
        </Paper>
      );
    }
  }
}

export default Panel;

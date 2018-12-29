import React, { Component } from "react";
import "../App.css";
<<<<<<< HEAD
import Context from "../Context.js";
import GameStarted from "./GameStarted.js";
// import NotStarted from "./NotStarted.js";
=======
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

>>>>>>> parent of b1a0f4d... more style and tweaks
class Panel extends Component {
  // componentDidMount() {
  //   this.props.getQuestions();
  // }

  render() {
<<<<<<< HEAD
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
      // <Context.Consumer>
        <GameStarted />
      /* </Context.Consumer> */
    );
    // } else {
    // return <NotStarted />;
    // }
=======
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
>>>>>>> parent of b1a0f4d... more style and tweaks
  }
}

export default Panel;

import React, { Component } from "react";
import "../App.css";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

class StartButton extends Component {
  render() {
    const { initGame } = this.props;
    return (
      <div>
        <Paper className="panel">
          <Button onClick={initGame}>
            {" "}
            <Typography color="primary" variant="display4">
              {" "}
              Start Game{" "}
            </Typography>
          </Button>
        </Paper>
      </div>
    );
  }
}

export default StartButton;

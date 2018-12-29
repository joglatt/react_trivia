import React, { Component } from "react";
import "typeface-roboto";
import "../App.css";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Context from "../Context.js";
class Scoreboard extends Component {
  render() {
<<<<<<< HEAD
    // const { score } = this.props;
    return (
      <Grid className="scoreBoard">
        <Context.Consumer>
          {/* <Typography color="primary" variant="display1" gutterBottom>
          Time:
          {time}
        </Typography> */}

          {context => (
            <Typography color="primary" variant="display1" gutterBottom>
              Score:
              {context.state.score}
            </Typography>
          )}
        </Context.Consumer>
      </Grid>
    );
=======
    const { score, time,} = this.props;
      return (
        <Grid className="scoreBoard">
          <Typography variant="display1" gutterBottom align="center">
            Time:
            {time}
          </Typography>
          <Typography variant="display1" gutterBottom align="center">
            Score:
            {score}
          </Typography>
        </Grid>
      );
  
>>>>>>> parent of b1a0f4d... more style and tweaks
  }
}

export default Scoreboard;

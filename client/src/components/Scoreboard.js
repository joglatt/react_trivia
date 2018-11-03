import React, { Component } from "react";
import "typeface-roboto";
import "../App.css";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Context from "../Context.js";
class Scoreboard extends Component {
  render() {
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
  }
}

export default Scoreboard;

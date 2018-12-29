import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
<<<<<<< HEAD
import "../App.css";
import Context from "../Context.js";
=======
>>>>>>> parent of b1a0f4d... more style and tweaks

class Question extends Component {
  render() {
    return (
      <Grid className="question">
        <Context.Consumer>
          {context => (
            <Typography
              color="primary"
              variant="display2"
              gutterBottom
              align="center"
            >
              {context.state.currentQuestion}
            </Typography>
          )}
        </Context.Consumer>
      </Grid>
    );
  }
}

export default Question;

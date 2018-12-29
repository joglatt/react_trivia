import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

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

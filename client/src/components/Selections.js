import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import "../App.css";
import Context from "../Context.js";
class Selections extends Component {
  render() {
    return (
      <React.Fragment>
        <Context.Consumer>
          {context => (
            <React.Fragment>
              <Grid className="answer" item sm={12}>
                <Button
                  variant="contained"
                  onClick={context.handleSelection}
                  size="large"
                  color="primary"
                  value={context.currentQuestion.a1}
                >
                  {" "}
                  {context.currentQuestion.a1}{" "}
                </Button>
              </Grid>
              <Grid className="answer" item sm={12}>
                <Button
                  variant="contained"
                  onClick={context.handleSelection}
                  size="large"
                  color="primary"
                  value={context.currentQuestion.a2}
                >
                  {" "}
                  {context.currentQuestion.a2}{" "}
                </Button>
              </Grid>
              <Grid className="answer" item sm={12}>
                <Button
                  variant="contained"
                  onClick={context.handleSelection}
                  size="large"
                  color="primary"
                  value={context.currentQuestion.a3}
                >
                  {" "}
                  {context.currentQuestion.a3}{" "}
                </Button>
              </Grid>
              <Grid className="answer" item sm={12}>
                <Button
                  variant="contained"
                  onClick={context.handleSelection}
                  size="large"
                  color="primary"
                  value={context.currentQuestion.a4}
                >
                  {" "}
                  {context.currentQuestion.a4}{" "}
                </Button>
              </Grid>
            </React.Fragment>
          )}
        </Context.Consumer>
      </React.Fragment>
    );
  }
}

export default Selections;

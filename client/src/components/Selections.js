import React, { Component } from "react";
import Button from "@material-ui/core/Button";
class Selections extends Component {
  render() {
    return (
      <div>
        <Button size="large" color="primary">1</Button>
        <Button color="primary">2</Button>
        <Button color="primary">3</Button>
        <Button color="primary">4</Button>
      </div>
    );
  }
}

export default Selections;

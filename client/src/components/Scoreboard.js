import React, { Component } from "react";

class Scoreboard extends Component {
  render() {
    const { score, time } = this.props;
    return (
      <div>
        <h1>
          Time:
          {time}
        </h1>
        <h2>
          Score:
          {score}
        </h2>
      </div>
    );
  }
}

export default Scoreboard;

import React, { Component } from "react";

export default class ScoreCard extends Component {
  render() {
    let { turn, score, number } = this.props;
    return (
      <div style={{ color: turn === number ? "green" : "black" }}>
        <div>
          Player {number + 1} ({number === 0 ? "O" : "X"})
        </div>
        <div>{score} </div>
      </div>
    );
  }
}

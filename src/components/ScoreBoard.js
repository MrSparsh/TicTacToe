import React, { Component } from "react";
import ScoreCard from "./ScoreCard";
import "../styles/ScoreBoard.css";
export default class ScoreBoard extends Component {
  render() {
    let { scores, turn } = this.props;
    return (
      <div className="ScoreBoard">
        <ScoreCard number={0} score={scores[0]} turn={turn} />
        <ScoreCard number={1} score={scores[1]} turn={turn} />
      </div>
    );
  }
}

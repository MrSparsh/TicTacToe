import React from "react";
import GameBoard from "./GameBoard";
import ScoreBoard from "./ScoreBoard";
import "../styles/Game.css";
export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      finished: false,
      isXTurn: false,
      cellValues: new Array(9).fill(null),
      scores: [0, 0],
    };
  }

  onCellClick = (index) => {
    let { cellValues, finished, isXTurn, scores } = this.state;
    if (cellValues[index] !== null || finished) {
      return;
    }
    cellValues[index] = isXTurn ? "X" : "O";
    this.result = getResult(cellValues);
    if (this.result >= 1) {
      let winner = this.result - 1;
      scores[winner]++;
    }
    this.setState({
      finished: this.result >= 0 ? true : false,
      isXTurn: !isXTurn,
      cellValues,
      scores,
    });
  };

  onFinish = () => {
    if (this.result === 0) {
      alert("Match is draw");
    } else {
      alert(`Player ${this.result} wins`);
    }
    this.reset();
  };

  reset = () => {
    this.result = -1;
    this.setState({
      finished: false,
      isXTurn: false,
      cellValues: new Array(9).fill(null),
    });
  };

  componentDidUpdate() {
    if (this.state.finished) {
      setTimeout(this.onFinish, 0);
    }
  }

 
  startNewGame = () => {
      this.setState({
            finished: false,
            isXTurn: false,
            cellValues: new Array(9).fill(null),
            scores: [0, 0],
      })
      this.result=-1;
  }
  render() {
    let { cellValues, scores, isXTurn } = this.state;
    return (
      <div>
        <GameBoard onCellClick={this.onCellClick} cellValues={cellValues} />
        <ScoreBoard scores={scores} turn={isXTurn ? 1 : 0} />
        <div style={{ width: "300px" }}>
          <button id="playAgainButton" onClick={this.startNewGame}>
            Start New Game
          </button>
        </div>
      </div>
    );
  }
}

function getResult(cellValues) {
  let lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let line of lines) {
    let [a, b, c] = line;
    if (
      cellValues[a] !== null &&
      cellValues[a] === cellValues[b] &&
      cellValues[b] === cellValues[c]
    ) {
      return cellValues[a] === "O" ? 1 : 2;
    }
  }
  if (!cellValues.includes(null)) {
    return 0;
  }
  return -1;
}

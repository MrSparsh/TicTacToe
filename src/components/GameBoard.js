import React from "react";
import "../styles/GameBoard.css";
import Cell from "./Cell";

export default class GameBoard extends React.Component {
  getTiles() {
    let { onCellClick, cellValues } = this.props;
    console.log(this.props);
    let tiles = [];
    for (let index = 0; index < 9; index++) {
      tiles.push(
        <Cell
          key={index}
          text={cellValues[index]}
          onCellClick={onCellClick}
          index={index}
        />
      );
    }
    return tiles;
  }

  render() {
    return <div className="GameBoard">{this.getTiles()}</div>;
  }
}

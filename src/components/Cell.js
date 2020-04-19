import React from "react";
import "../styles/Cell.css";
export default class Cell extends React.Component {
  render() {
    return (
      <button
        className="Cell"
        onClick={() => this.props.onCellClick(this.props.index)}
      >
        {this.props.text}
      </button>
    );
  }
}

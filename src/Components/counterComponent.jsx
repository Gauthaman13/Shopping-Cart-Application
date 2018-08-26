import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeStyle()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrements}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }

  handleIncrements = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  getBadgeStyle() {
    let badgeStyle = "badge m-2 badge-";
    badgeStyle += this.state.count === 0 ? "warning" : "primary";
    return badgeStyle;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? <h1>ZERO</h1> : count;
  }
}

export default Counter;

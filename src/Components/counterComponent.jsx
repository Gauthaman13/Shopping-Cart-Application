import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };

  styles = {
    fontSize: 10,
    fontWeight: "bold"
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeStyle()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </div>
    );
  }

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

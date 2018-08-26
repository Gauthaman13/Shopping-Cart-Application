import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value
  };

  render() {
    return (
      <div>
        {this.props.children}
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
      value: this.state.value + 1
    });
  };

  getBadgeStyle() {
    let badgeStyle = "badge m-2 badge-";
    badgeStyle += this.state.value === 0 ? "warning" : "primary";
    return badgeStyle;
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? <h1>ZERO</h1> : value;
  }
}

export default Counter;

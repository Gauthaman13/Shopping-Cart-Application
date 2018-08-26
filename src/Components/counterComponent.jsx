import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"]
  };

  styles = {
    fontSize: 10,
    fontWeight: "bold"
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeStyle()}>{this.formatCount()}</span>
        {this.renderTags()}
        <button className="btn btn-secondary btn-sm">Increment</button>
      </div>
    );
  }

  renderTags() {
    if (this.state.tags.count === 0) return <p>There are no tags</p>;

    return (
      <ul style={{ fontSize: 20, fontWeight: "bold" }}>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
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

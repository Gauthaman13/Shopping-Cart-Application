import React, { Component } from "react";
import Counter from "./counterComponent";
class Counters extends Component {
  state = {
    counters: [
      { id: 1, vlaue: 2 },
      { id: 2, vlaue: 5 },
      { id: 3, vlaue: 7 },
      { id: 4, vlaue: 0 }
    ]
  };
  render() {
    return (
      <div>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            value={counter.vlaue}
            onDelete={this.handleDelete}
            id={counter.id}
          />
        ))}
      </div>
    );
  }

  handleDelete = deletedCounter => {
    const counters = this.state.counters.filter(
      counter => counter.id !== deletedCounter
    );
    this.setState({
      counters: counters
    });
  };
}

export default Counters;

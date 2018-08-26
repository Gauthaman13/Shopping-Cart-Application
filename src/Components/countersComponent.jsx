import React, { Component } from "react";
import Counter from "./counterComponent";
class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 2 },
      { id: 2, value: 5 },
      { id: 3, value: 7 },
      { id: 4, value: 0 }
    ]
  };
  render() {
    return (
      <div>
        <button
          onClick={this.resetCounters}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            onIncrement={this.handleIncrements}
            onDelete={this.handleDelete}
            counter={counter}
          />
        ))}
      </div>
    );
  }

  handleIncrements = incrementedCounter => {
    const counters = [...this.state.counters];
    const counterIndex = counters.indexOf(incrementedCounter);
    counters[counterIndex] = { ...incrementedCounter };
    counters[counterIndex].value++;
    this.setState({ counters });
  };

  resetCounters = () => {
    const updatedCounter = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ updatedCounter });
  };

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

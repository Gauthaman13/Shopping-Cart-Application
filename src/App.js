import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Counters from "./Components/countersComponent";
import NavBar from "./Components/navBar";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 2 },
      { id: 2, value: 5 },
      { id: 3, value: 7 },
      { id: 4, value: 0 }
    ]
  };

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

  render() {
    return (
      <React.Fragment>
        <header className="App App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App App-title">Shopping cart Application</h1>
        </header>
        <NavBar
          totalCounters={
            this.state.counters.filter(counter => counter.value > 0).length
          }
        />
        <Counters
          className="App App-intro"
          counters={this.state.counters}
          onReset={this.resetCounters}
          onIncrement={this.handleIncrements}
          onDelete={this.handleDelete}
        />
      </React.Fragment>
    );
  }
}

export default App;

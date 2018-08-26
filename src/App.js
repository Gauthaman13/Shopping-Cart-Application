import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Counters from "./Components/countersComponent";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Shopping cart Application</h1>
        </header>
        <Counters className="App-intro" />
      </div>
    );
  }
}

export default App;

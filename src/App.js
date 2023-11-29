import "./App.css";
import React from "react";
import BatchMates, { BatchMatesFn } from "./BatchMates";
import Login from "./components/Login";
import { Counter } from "./components/Counter";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* <BatchMates />
        <BatchMatesFn /> */}
        {/* <Login name="Trisandya Login Form" /> */}
        <Counter />
      </div>
    );
  }
}

export default App;

import "./App.css";
import React from "react";
import BatchMates, { BatchMatesFn } from "./BatchMates";
import Login from "./components/Login";
import { Counter } from "./components/Counter";
import { TodoList } from "./components/TodoList";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* <BatchMates />
        <BatchMatesFn /> */}
        {/* <Login name="Trisandya Login Form" /> */}
        {/* <Counter /> */}
        <TodoList />
      </div>
    );
  }
}

export default App;

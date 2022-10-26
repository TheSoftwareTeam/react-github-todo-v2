import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Todo from "./components/Todo/Todo";
import TodoDetail from "./components/TodoDetails/TodoDetail";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/todo" element={<Todo />} />
          <Route exact path="/tododetail" element={<TodoDetail />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;

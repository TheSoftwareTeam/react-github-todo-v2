import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import Todo from "./components/Todo/Todo";
import TodoDetail from "./components/TodoDetail/TodoDetail";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/todo" element={<Todo />} />
        <Route exact path="/totodetail" element={<TodoDetail />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

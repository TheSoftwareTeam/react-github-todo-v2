import React, { Component } from "react";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";
import Card from "@mui/material/Card";
class Todo extends Component {
  render() {
    return (
      <Card className="todoCard">
        <h3 style={{ fontSize: "24px" }}>My Todo List</h3>

        <TodoList handleToggle={this.props.handleToggle}  getTaskId={this.props.getTaskId} />
        <AddTodoForm />
        
      </Card>
    );
  }
}

export default Todo;


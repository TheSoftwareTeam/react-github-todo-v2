import React, { Component } from "react";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import TodoList from "./TodoList";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

export default class Todo extends Component {
  constructor(props) {
    super(props);
    var lists = localStorage.getItem("todos");

    this.state = {
      todos: lists !== null ? JSON.parse(lists) : [],
      todo: "",
    };
  }

 
  ChangeTodo(event) {
    this.setState({
      todo: event.target.value,
    });
  }

  AddTodo(event) {
    event.preventDefault();
    const date = new Date();
    if (this.state.todo.trim() === "") {
      return;
    }
    const title = this.state.todo.trim();
    const newTodo = {
      taskId: date.getTime(),
      title: title.charAt(0).toUpperCase() + title.slice(1),
      
    };
    this.setState(
      {
        todos: [...this.state.todos, newTodo],
        todo: "",
      },
      () => {
        localStorage.setItem("todos", JSON.stringify(this.state.todos));
      }
    );
  }
  
  render() {
 
    return (
      <Card className="todoCard">
        <h3 style={{ fontSize: "24px" }}>My Todo List</h3>

        <TodoList
          todos={this.state.todos}
          handleToggle={this.props.handleToggle}  
          getTaskId={this.props.getTaskId} 
      
        />

        <div>
          <form className="TodoInput">
            <TextField
              id="outlined-basic"
              label="Task Description"
              variant="outlined"
              value={this.state.todo}
              onChange={(e) => this.ChangeTodo(e)}
              className="textField"
            />

            <Button
              className="addBtn"
              onClick={(e) => this.AddTodo(e)}
              variant="contained"
              endIcon={<AddIcon />}
              style={{ marginTop: 10, marginLeft: 10 }}
            >
              Add
            </Button>
          </form>
        </div>
      </Card>
    );
  }
}

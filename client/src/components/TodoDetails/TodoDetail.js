import React, { Component } from "react";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import TodoDetailList from "./TodoDetailList";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

class TodoDetail extends Component {
  constructor(props) {
    super(props);
    var detailLists = localStorage.getItem("todosDetail");

    this.state = {
      todosDetail: detailLists !== null ? JSON.parse(detailLists) : [],
      todoDetail: "",
    };
  }

  MarkCompleteDetail(subtaskId) {
    this.setState(
      {
        todosDetail: this.state.todosDetail.map((todoDetail) => {
          if (todoDetail.subtaskId === subtaskId) {
            todoDetail.completed = !todoDetail.completed;
          }
          return todoDetail;
        }),
      },
      () => {
        localStorage.setItem(
          "todosDetail",
          JSON.stringify(this.state.todosDetail)
        );
      }
    );
  }

  DeleteTodoDetail(subtaskId) {
    this.setState(
      {
        todosDetail: [
          ...this.state.todosDetail.filter(
            (todoDetail) => todoDetail.subtaskId !== subtaskId
          ),
        ],
      },
      () => {
        localStorage.setItem(
          "todosDetail",
          JSON.stringify(this.state.todosDetail)
        );
      }
    );
  }

  ChangeTodoDetail(event) {
    this.setState({
      todoDetail: event.target.value,
    });
  }

  AddTodoDetail(event) {
    event.preventDefault();
    const date = new Date();
    if (this.state.todoDetail.trim() === "") {
      return;
    }
    const title = this.state.todoDetail.trim();

    const newTodoDetail = {
      subtaskId: date.getTime(),
      title: title.charAt(0).toUpperCase() + title.slice(1),
      completed: false,
      taskId: this.props.getTaskId,
    };
    this.setState(
      {
        todosDetail: [...this.state.todosDetail, newTodoDetail],
        todoDetail: "",
      },
      () => {
        localStorage.setItem(
          "todosDetail",
          JSON.stringify(this.state.todosDetail)
        );
      }
    );
  }
  render() {
    return (
      <Card className="todoCard">
        <Button
          style={{
            maxWidth: "35px",
            maxHeight: "35px",
            minWidth: "35px",
            minHeight: "35px",
            borderRadius: "25px",
            marginBottom: "-10px",
          }}
          onClick={this.props.handleToggle}
          variant="contained"
        >
          <ArrowBackIcon />
        </Button>
        <h3 style={{ fontSize: "24px" }}>Todo Detail</h3>

        <TodoDetailList
          todosDetail={this.state.todosDetail}
          DeleteTodoDetail={(subtaskId) => this.DeleteTodoDetail(subtaskId)}
          MarkCompleteDetail={(subtaskId) => this.MarkCompleteDetail(subtaskId)}
          handleToggle={this.props.handleToggle}
          getTaskId={this.props.getTaskId}
        />

        <div>
          <form className="TodoInput">
            <TextField
              id="outlined-basic"
              label="Sub Task Description"
              variant="outlined"
              value={this.state.todoDetail}
              onChange={(e) => this.ChangeTodoDetail(e)}
              className="textField"
            />

            <Button
              className="addBtn"
              onClick={(e) => this.AddTodoDetail(e)}
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
export default TodoDetail;

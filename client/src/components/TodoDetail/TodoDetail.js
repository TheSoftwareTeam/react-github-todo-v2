import React, { Component } from "react";
import AddTodoDetailForm from "./AddTodoDetailForm";
import TodoDetailList from "./TodoDetailList";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Button from "@mui/material/Button";
class TodoDetail extends Component {
  render() {
    return (
      <div className="todoDetailCard">
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

        <TodoDetailList getTaskId={this.props.getTaskId} />
        <AddTodoDetailForm getTaskId={this.props.getTaskId} />
      </div>
    );
  }
}

export default TodoDetail;

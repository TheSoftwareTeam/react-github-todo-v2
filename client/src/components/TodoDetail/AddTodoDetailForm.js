import React, { Component } from "react";
import { connect } from "react-redux";
import TextField from "@mui/material/TextField";
import { addTodoDetail } from "../../actions/index";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
class AddTodoDetailForm extends Component {
  state = {
    subtask: "",
    taskId: "",
  };

  handleInput = (e) => {
    this.setState({
      subtask: e.target.value,
      taskId: this.props.getTaskId,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const taskId = this.props.getTaskId;
    const subtask = this.state.subtask.trim();
    if (subtask.length === 0) return;
    console.log(this.state);
    this.props.dispatch(addTodoDetail(subtask, taskId));
    this.setState({
      subtask: "",
      taskId: "",
    });
  };

  render() {
    return (
      <form className="TodoInput">
        <TextField
          id="outlined-basic"
          label="Sub Task Description"
          variant="outlined"
          autoFocus
          value={this.state.subtask}
          onInput={this.handleInput}
          type="text"
          className="textField"
        />

        <Button
          className="addBtn"
          onClick={this.handleSubmit}
          variant="contained"
          endIcon={<AddIcon />}
          style={{ marginTop: 10, marginLeft: 10 }}
        >
          Add
        </Button>
      </form>
    );
  }
}

export default connect()(AddTodoDetailForm);

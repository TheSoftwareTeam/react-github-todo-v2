import React, { Component } from "react";
import { connect } from "react-redux";
import AddIcon from "@mui/icons-material/Add";
import { addTodo } from "../../actions/index";
import TextField from "@mui/material/TextField";

import Button from "@mui/material/Button";
class AddTodoForm extends Component {
  state = {
    input: "",
  };

  handleInput = (e) => {
    this.setState({
      input: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const task = this.state.input.trim();
    if (task.length === 0) return;

    this.props.dispatch(addTodo(task));
    this.setState({
      input: "",
    });
  };

  render() {
    return (
      <form  className="TodoInput">
       
        <TextField
          id="outlined-basic"
          label="Task Description"
          variant="outlined"
          value={this.state.input}
          onInput={this.handleInput}
          type="text"
          className="textField"
        />
        <Button
          onClick={this.handleSubmit}
          className="addBtn"
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

export default connect()(AddTodoForm);

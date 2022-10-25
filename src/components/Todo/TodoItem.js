import React, { Component } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom";

class TodoItem extends Component {
  constructor(props) {
    super(props);
    var detailLists = localStorage.getItem("todosDetail");

    this.state = {
      todosDetail: detailLists !== null ? JSON.parse(detailLists) : [],
      todoDetail: "",
    };
  }
  render() {
    var index2 = 0;
    this.state.todosDetail.map((todoDetail) =>
      this.props.todo.taskId === todoDetail.taskId ? (index2 = index2 + 1) : ""
    );
    return (
      <>
        <List>
          <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <Link
                  onClick={() => {
                    this.props.handleToggle();
                    this.props.getTaskId(this.props.todo.taskId);

                    console.log(this.props.todo.taskId);
                  }}
                >
                  Details
                </Link>
              </IconButton>
            }
            style={{ height: "45px" }}
          >
            <h3>{this.props.index + " . "}</h3>
            <h3>{this.props.todo.title}</h3>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <h4>{"(" + index2 +" Subtasks"}{")"}</h4>
          </ListItem>

          <Divider variant="fullWidth" component="li" />
        </List>
      </>
    );
  }
}
export default TodoItem;

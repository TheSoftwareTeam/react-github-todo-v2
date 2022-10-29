import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleTodoDetail, removeTodoDetail } from "../../actions";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import IconButton from "@mui/material/IconButton";
import Checkbox from "@mui/material/Checkbox";
import DeleteIcon from "@mui/icons-material/Delete";
import Divider from "@mui/material/Divider";

class TodoDetailItem extends Component {
  handleTodoToggle = () => {
    const subtaskId = this.props.todoDetail.subtaskId;
    this.props.dispatch(toggleTodoDetail(subtaskId));
  };

  handleTodoRemove = () => {
    const subtaskId = this.props.todoDetail.subtaskId;
    this.props.dispatch(removeTodoDetail(subtaskId));
  };

  render() {
    const { subtask, completed, taskId } = this.props.todoDetail;
    return (
      <>
        {completed &&
          (this.props.getTaskId === taskId ? (
            <List>
              {
                <ListItem
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon onClick={this.handleTodoRemove} />
                    </IconButton>
                  }
                >
                  <Checkbox
                    onClick={this.handleTodoToggle}
                    checked={completed}
                  />

                  <h3 className={completed ? "line" : "noneLine"}>{subtask}</h3>
                </ListItem>
              }
              <Divider variant="fullWidth" component="li" />
            </List>
          ) : (
            <></>
          ))}
        {!completed &&
          (this.props.getTaskId === taskId ? (
            <List>
              {
                <ListItem
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon onClick={this.handleTodoRemove} />
                    </IconButton>
                  }
                >
                  <h3>{this.props.index + " . "}</h3>

                  <Checkbox
                    onClick={this.handleTodoToggle}
                    checked={completed}
                  />

                  <h3 className={completed ? "line" : "noneLine"}>{subtask}</h3>
                </ListItem>
              }
              <Divider variant="fullWidth" component="li" />
            </List>
          ) : (
            <></>
          ))}
      </>
    );
  }
}

export default connect()(TodoDetailItem);

import React, { Component } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import IconButton from "@mui/material/IconButton";
import Checkbox from "@mui/material/Checkbox";
import DeleteIcon from "@mui/icons-material/Delete";
import Divider from "@mui/material/Divider";

class TodoDetailItem extends Component {
  render() {
    return (
      <>
        {this.props.todoDetail.completed &&
          (this.props.getTaskId === this.props.todoDetail.taskId ? (
            <List>
              {
                <ListItem
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon
                        onClick={() =>
                          this.props.DeleteTodoDetail(
                            this.props.todoDetail.subtaskId
                          )
                        }
                      />
                    </IconButton>
                  }
                >
                  <Checkbox
                    className={
                      this.props.todoDetail.completed ? "line" : "noneLine"
                    }
                    onClick={() =>
                      this.props.MarkCompleteDetail(
                        this.props.todoDetail.subtaskId
                      )
                    }
                    checked={this.props.todoDetail.completed}
                    value={this.props.todoDetail.subtaskId}
                    onChange={(e) =>
                      this.props.MarkCompleteDetail(e.target.value)
                    }
                  />

                  <h3
                    className={
                      this.props.todoDetail.completed ? "line" : "noneLine"
                    }
                  >
                    {this.props.todoDetail.title}
                  </h3>
                </ListItem>
              }
              <Divider variant="fullWidth" component="li" />
            </List>
          ) : (
            <></>
          ))}
        {!this.props.todoDetail.completed &&
          (this.props.getTaskId === this.props.todoDetail.taskId ? (
            <List>
              {
                <ListItem
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon
                        onClick={() =>
                          this.props.DeleteTodoDetail(
                            this.props.todoDetail.subtaskId
                          )
                        }
                      />
                    </IconButton>
                  }
                >
                  <h3>{this.props.index + " . "}</h3>

                  <Checkbox
                    onClick={() =>
                      this.props.MarkCompleteDetail(
                        this.props.todoDetail.subtaskId
                      )
                    }
                    checked={this.props.todoDetail.completed}
                    value={this.props.todoDetail.subtaskId}
                    onChange={(e) =>
                      this.props.MarkCompleteDetail(e.target.value)
                    }
                  />

                  <h3
                    className={
                      this.props.todoDetail.completed ? "line" : "noneLine"
                    }
                  >
                    {this.props.todoDetail.title}
                  </h3>
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
export default TodoDetailItem;

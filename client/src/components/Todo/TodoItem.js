import React, { Component } from "react";
import { connect } from "react-redux";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";

class TodoItem extends Component {
  constructor(props) {
    super(props);
    var detailLists = localStorage.getItem("TodosDetail");

    this.state = {
      todosDetail: detailLists !== null ? JSON.parse(detailLists) : [],
      todoDetail: "",
    };
  }
  render() {
    var index2 = 0;
    this.state.todosDetail
      .reverse()
      .map((todoDetail) =>
        this.props.todo.taskId === todoDetail.taskId
          ? (index2 = index2 + 1)
          : ""
      );

    return (
      <>
        <List>
          <Card className="todoListCard">
            <ListItem
              secondaryAction={
                <button
                  className="detailsBtn"
                  onClick={() => {
                    this.props.handleToggle();
                    this.props.getTaskId(this.props.todo.taskId);

                    console.log(this.props.todo.taskId);
                  }}
                >
                  Details
                </button>
              }
              style={{ height: "48px" }}
            >
              <h3>{this.props.index + " . "}</h3>
              <h3>{this.props.todo.task}</h3>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <h4>
                {"(" + index2 + " Subtasks"}
                {")"}
              </h4>
            </ListItem>
          </Card>
          <Divider variant="fullWidth" component="li" />
        </List>
      </>
    );
  }
}

export default connect()(TodoItem);

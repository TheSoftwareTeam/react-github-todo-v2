import { connect } from "react-redux";
import TodoDetailItem from "./TodoDetailItem";

import React, { Component } from "react";

class TodoDetailList extends Component {

render() {
  var index = 0;
  return (
    <>
      {/* Tamamlanmayan Todo detay */}
      {this.props.todosDetail.reverse().map((todoDetail) =>
        todoDetail.completed ? (
          <div></div>
        ) : this.props.getTaskId === todoDetail.taskId ? (
          <TodoDetailItem
          key={todoDetail.subtaskId} index={(index = index + 1)} todoDetail={todoDetail} getTaskId={this.props.getTaskId}
           
          />
        ) : (
          []
        )
      )}

      <hr></hr>
      {/* Tamamlanan Todo detay */}
      <h2>Completed Subtasks</h2>

      {this.props.todosDetail.reverse().map((todoDetail, index) =>
        todoDetail.completed ? (
          this.props.getTaskId === todoDetail.taskId ? (
            <TodoDetailItem
            key={todoDetail.subtaskId} index={(index = index + 1)} todoDetail={todoDetail} getTaskId={this.props.getTaskId}
              
            />
          ) : (
            []
          )
        ) : (
          <div></div>
        )
      )}
    </>
  );
}
}











const mapStateToProps = (todosDetail) => ({ todosDetail });

export default connect(mapStateToProps)(TodoDetailList);

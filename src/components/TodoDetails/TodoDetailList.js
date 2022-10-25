import React, { Component } from "react";
import TodoDetailItem from "./TodoDetailItem";

class TodoDetailList extends Component {
  render() {
    var index = 0;
    return (
      <>
        {/* Tamamlanmayan Todo detay */}
        {this.props.todosDetail.map((todoDetail) =>
          todoDetail.completed ? (
            <div></div>
          ) : this.props.getTaskId === todoDetail.taskId ? (
            <TodoDetailItem
              key={todoDetail.subtaskId}
              todoDetail={todoDetail}
              index={(index = index + 1)}
              DeleteTodoDetail={this.props.DeleteTodoDetail}
              MarkCompleteDetail={this.props.MarkCompleteDetail}
              getTaskId={this.props.getTaskId}
             
            />
          ) : (
            []
          )
        )}

        <hr></hr>
        {/* Tamamlanan Todo detay */}
        <h2>Completed Subtasks</h2>

        {this.props.todosDetail.map((todoDetail, index) =>
          todoDetail.completed ? (
            this.props.getTaskId === todoDetail.taskId ? (
              <TodoDetailItem
                key={todoDetail.subtaskId}
                todoDetail={todoDetail}
                index={(index = index + 1)}
                DeleteTodoDetail={this.props.DeleteTodoDetail}
                MarkCompleteDetail={this.props.MarkCompleteDetail}
                getTaskId={this.props.getTaskId}
                
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
export default TodoDetailList;

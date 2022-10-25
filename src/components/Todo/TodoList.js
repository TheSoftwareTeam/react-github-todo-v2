import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  render() {
    return (
      <>
        {this.props.todos.map((todo, index) => (
          <TodoItem
            key={todo.taskId}
            todo={todo}
            index={index + 1}
            handleToggle={this.props.handleToggle}  
            getTaskId={this.props.getTaskId} 
     
          />
        ))}
      </>
    );
  }
}
export default TodoList;

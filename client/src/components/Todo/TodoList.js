
import { connect } from "react-redux";
import TodoItem from "./TodoItem";


import React, { Component } from 'react'

class TodoList extends Component {
  render() {
    return (
      this.props.todos.length > 0 ? (
        <ul className="TodoList">
          {this.props.todos.reverse().map((todo, index) => (
            <TodoItem key={todo.taskId} todo={todo} index={index + 1} handleToggle={this.props.handleToggle} getTaskId={this.props.getTaskId}  />
          ))}
        </ul>
      ) : (
        <p className="EmptyTodoMessage">No Todos Added!</p>
      )
    )
  }
}
const mapStateToProps = (todos) => ({ todos });

export default connect(mapStateToProps)(TodoList);


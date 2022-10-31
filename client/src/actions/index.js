import { ADDTODODETAIL, TOGGLE, REMOVE } from "../reducers/todosDetail";
import { ADDTODO } from "../reducers/todos";

//Todo
export const addTodo = (task) => ({
  type: ADDTODO,
  task,
});

//TodoDetail
export const addTodoDetail = (subtask, taskId) => ({
  type: ADDTODODETAIL,
  subtask,
  taskId,
});

export const toggleTodoDetail = (subtaskId) => ({
  type: TOGGLE,
  subtaskId,
});

export const removeTodoDetail = (subtaskId) => ({
  type: REMOVE,
  subtaskId,
});

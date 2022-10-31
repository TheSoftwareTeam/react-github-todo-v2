import {
  addTodoDetail,
  toggleTodoDetail,
  removeTodoDetail,
} from "../services/todosDetail";

const ADDTODODETAIL = "ADDTODODETAIL";
const TOGGLE = "TOGGLE";
const REMOVE = "REMOVE";

const todosDetail = (state = [], action) => {
  switch (action.type) {
    case ADDTODODETAIL:
      return addTodoDetail(action.subtask, action.taskId, state);
    case TOGGLE:
      return toggleTodoDetail(action.subtaskId, state);
    case REMOVE:
      return removeTodoDetail(action.subtaskId, state);
    default:
      return state;
  }
};

export default todosDetail;
export { ADDTODODETAIL, TOGGLE, REMOVE };

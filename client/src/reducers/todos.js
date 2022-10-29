import { addTodo } from "../services/todos";

const ADDTODO = "ADDTODO";

const todos = (state = [], action) => {
  switch (action.type) {
    case ADDTODO:
      return addTodo(action.task, state);
    default:
      return state;
  }
};

export default todos;
export { ADDTODO };

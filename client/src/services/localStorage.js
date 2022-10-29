const todos_Key = "Todos";
const todosDetail_Key = "TodosDetail";

export const setTodosInStorage = (todos) =>
  localStorage.setItem(todos_Key, JSON.stringify(todos));

export const getTodosFromStorage = () =>
  JSON.parse(localStorage.getItem(todos_Key)) || undefined;

export const setTodosDetailInStorage = (todosDetail) =>
  localStorage.setItem(todosDetail_Key, JSON.stringify(todosDetail));

export const getTodosDetailFromStorage = () =>
  JSON.parse(localStorage.getItem(todosDetail_Key)) || undefined;

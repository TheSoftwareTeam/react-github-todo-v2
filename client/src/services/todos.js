const addTodo = (todoText, todos) => [
  {
    taskId: Date.now(),
    task: todoText,
    completed: false,
  },
  ...todos,
];

export { addTodo };

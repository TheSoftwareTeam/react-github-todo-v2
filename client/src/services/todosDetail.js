const addTodoDetail = (todoDetailText, getTaskId, todosDetail) => [
  {
    subtaskId: Date.now(),
    subtask: todoDetailText,
    completed: false,
    taskId: getTaskId,
  },
  ...todosDetail,
];

const toggleTodoDetail = (todoDetailId, todosDetail) =>
  todosDetail.map((todoDetail) =>
    todoDetail.subtaskId === todoDetailId
      ? {
          ...todoDetail,
          completed: !todoDetail.completed,
        }
      : todoDetail
  );

const removeTodoDetail = (todoDetailId, todosDetail) =>
  todosDetail.filter((todoDetail) => todoDetail.subtaskId !== todoDetailId);

export { addTodoDetail, toggleTodoDetail, removeTodoDetail };

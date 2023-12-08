const API_ROOT = "http://192.168.1.6:8080";
const addTodo = async (todoBody) => {
  const res = await fetch(`${API_ROOT}/todos`, {
    method: "POST",
    body: JSON.stringify(todoBody),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const todo = await res.json();
  return todo;
};

const getTodos = async () => {
  const res = await fetch(`${API_ROOT}/todos`);
  const todos = await res.json();
  return todos;
};

const deleteTodo = async (todoId) => {
  const res = await fetch(`${API_ROOT}/todos/${todoId}`, {
    method: "DELETE",
  });
  const deleteTodo = await res.json();
  return deleteTodo;
};

export const API = {
  addTodo,
  deleteTodo,
  getTodos,
};

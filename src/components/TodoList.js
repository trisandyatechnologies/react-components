import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, setTodos, deleteTodo } from "../redux/todoSlice";
import { API } from "../lib/todoApi";

export function TodoList() {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const handleAddTodo = async () => {
    const newTodo = await API.addTodo({ text, active: true });
    dispatch(addTodo(newTodo));
  };

  const handleDelete = async (todoId) => {
    const deletedTodo = await API.deleteTodo(todoId);
    dispatch(deleteTodo({ id: deletedTodo.id }));
  };

  useEffect(() => {
    API.getTodos().then((todos) => {
      dispatch(setTodos(todos));
    });
  }, []);

  return (
    <div>
      <div>
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <button aria-label="Increment value" onClick={handleAddTodo}>
          Add Todo
        </button>
        <div>
          {todos.map((todo) => (
            <div key={todo.id}>
              <span>{todo.text}</span>
              <button onClick={() => handleDelete(todo.id)}>x</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

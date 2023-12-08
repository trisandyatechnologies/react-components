import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setTodos: (state, action) => {
      state.todos = action.payload;
    },
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    updateTodo: (state, action) => {
      const { id, data } = action.payload;
      const todoIndex = state.todos.findIndex((todo) => todo.id === id);
      const updatedTodo = { ...state.todos[todoIndex], ...data };
      state.todos = [
        ...state.todos.slice(0, todoIndex),
        updatedTodo,
        ...state.todos.slice(todoIndex + 1),
      ];
    },
    deleteTodo: (state, action) => {
      const { id } = action.payload;
      const todoIndex = state.todos.findIndex((todo) => todo.id === id);
      state.todos = [
        ...state.todos.slice(0, todoIndex),
        ...state.todos.slice(todoIndex + 1),
      ];
    },
  },
});

// Action creators are generated for each case reducer function
export const { setTodos, addTodo, updateTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;

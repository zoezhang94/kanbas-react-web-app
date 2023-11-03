import React from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
function TodoList() {
    const { todos } = useSelector((state) => state.todosReducer);

  return (
    <div>
      <h2>Todo List</h2>
      <TodoForm />
      <ul className="list-group">
      {todos.map((todo) => (
          <TodoItem todo={todo} />
        ))}
      </ul>
    </div>
  );
}
export default TodoList;

import React, { useEffect } from "react";
import "../assets/css/TodoList.css";
import TodoItem from "./TodoItem";
import useTodoStore from "../hooks/useTodoStore";
import ClipLoader from "react-spinners/ClipLoader";

function TodoList() {
  const { todos, loadTodos, loading, error } = useTodoStore();

  useEffect(() => {
    loadTodos();
  }, [loadTodos]);

  if (error) {
    return (
      <div>
        <div style={{ textAlign: "center" }}>
          <span className="material-symbols-outlined">warning</span>오류가 발생
        </div>
      </div>
    );
  }

  return (
    <div className="todo-list">
      <ClipLoader
        color="#38d9a9"
        loading={loading}
        cssOverride={{
          position: "fixed",
          top: "calc(50% - (35px / 2))",
          right: "calc(50% - (35px / 2))",
        }}
        size={35}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          done={todo.done}
        />
      ))}
    </div>
  );
}

export default TodoList;

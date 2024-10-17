import React, { useEffect } from "react";
import "../assets/css/TodoList.css";
import TodoItem from "./TodoItem";
import useTodoStore from "../hooks/useTodoStore";
import ClipLoader from "react-spinners/ClipLoader";
import { Bounce, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    <>
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
        {todos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              id={todo.id}
              text={todo.text}
              done={todo.done}
              dueDate={todo.due_date}
            />
          );
        })}
      </div>
      {/* <button onClick={notify}>Notify !</button> */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
    </>
  );
}

export default TodoList;

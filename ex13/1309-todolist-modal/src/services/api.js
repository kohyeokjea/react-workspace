export const fetchTodos = async () => {
  const response = await fetch("http://localhost:4000/todos");
  if (!response.ok) throw new Error("Failed to fetch todos");

  const todos = await response.json();

  const today = new Date();
  const todayStr = today.toISOString().split("T")[0];

  const filteredTodos = todos.filter((todo) => {
    return !todo.due_date || todo.due_date >= todayStr;
  });

  return filteredTodos;
};

export const toggleTodo = async (id, done) => {
  const response = await fetch(`http://localhost:4000/todos/${String(id)}`, {
    method: "PATCH",
    headers: { "content-Type": "application/json" },
    body: JSON.stringify({ done: !done }),
  });
  if (!response.ok) throw new Error("Failed to toggle todos");
  return response.json();
};

export const removeTodo = async (id) => {
  const response = await fetch(`http://localhost:4000/todos/${String(id)}`, {
    method: "DELETE",
  });
  if (!response.ok) throw new Error("Failed to remove todos");
  return response.json();
};

export const createTodo = async (text, creationDate, dueDate) => {
  const response = await fetch(`http://localhost:4000/todos`, {
    method: "POST",
    headers: { "content-Type": "application/json" },
    body: JSON.stringify({
      text,
      create_date: creationDate,
      due_date: dueDate,
      done_date: null,
      done: false,
    }),
  });
  if (!response.ok) throw new Error("Failed to create todos");
  return response.json();
};

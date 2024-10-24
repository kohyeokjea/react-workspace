export const fetchTodos = async () => {
  const response = await fetch("http://localhost:4000/todos");
  if (!response.ok) throw new Error("Failed to fetch todos");
  return response.json();
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

export const createTodo = async (text) => {
  const response = await fetch(`http://localhost:4000/todos`, {
    method: "POST",
    headers: { "content-Type": "application/json" },
    body: JSON.stringify({
      text,
      done: false,
    }),
  });
  if (!response.ok) throw new Error("Failed to create todos");
  return response.json();
};

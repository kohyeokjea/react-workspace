const token =
  "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzIiwiaWF0IjoxNzI5NzcxOTUxLCJleHAiOjE3Mjk4NTgzNTF9.-j4YBhZk7drG8PhZrqzczhkfauV7rsqO7bzT7ipvm3qHpZy4EeuJBcH4H9RkYL32NA5LxTKinTUYbMQYR6m5Vw";
export async function fetchQuestions(pageNumber) {
  const response = await fetch(
    `http://localhost:8080/question/list?page=${pageNumber - 1}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.json();
}

export async function fetchQuestionDetail(postId) {
  const response = await fetch(
    `http://localhost:8080/question/detail/${postId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.json();
}

export async function createQuestion(question) {
  const response = await fetch(`http://localhost:8080/question/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(question),
  });

  return response.status;
}

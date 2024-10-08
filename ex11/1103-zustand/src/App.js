import React, { useMemo, useReducer } from "react";
import UserList from "./UserList";
import CreateUser from "./CreateUser";
import useUserStore from "./hooks/useUserStore";

function countActiveUsers(users) {
  console.log("활성 사용자 수를 세는중")
  return users.filter(user => user.active).length;
}

const initialState = {
  inputs: {
    username: '',
    email: ''
  }
}

function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_INPUT":
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.payload.name]: action.payload.value
        }
      }
    case "CREATE_USER":
      const newArr = [...state.users, action.payload]
      // console.log(newArr);
      return { inputs: initialState.inputs, users: newArr };
    case "TOGGLE_USER":
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.id ? { ...user, active: !user.active } : user
        )
      }

    case "REMOVE_USER":
      const result = {
        ...state,
        users: state.users.filter(user => user.id !== action.payload.id)
      }
      console.log(result);
      return result;

    default:
      return state;
  }
}

function App() {
  const { users } = useUserStore();

  const [state, dispatch] = useReducer(reducer, initialState);
  // const { users } = state;

  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <>
      <CreateUser />
      <UserList />
      <div>활성사용자 수 : {count}</div>
    </>
  );
}

export default App;
import { useRef, useState } from "react";
import UserList from "./UserList";
import CreateUser from "./CreateUser";

function countActiveUsers(users) {
  console.log("활성 사용자 수를 세는중")
  return users.filter(user => user.active).length;
}

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  })

  // console.log(inputs)
  const { username, email } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs, [name]: value
    })
  }

  const [users, setUsers] = useState([
    {
      id: 1,
      username: '오일남',
      email: 'o1@naver.com',
      active: false
    },
    {
      id: 2,
      username: '오이남',
      email: 'o2@naver.com',
      active: false
    },
    {
      id: 3,
      username: '오삼남',
      email: 'o3@naver.com',
      active: false
    }
  ]);

  const nextId = useRef(4);
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username: username,
      email: email
    };

    setUsers([...users, user])
    // console.log(users)

    nextId.current += 1;
  }

  const onRemove = (id) => {
    setUsers(users.filter(user => user.id !== id))
  }

  const onToggle = (id) => {
    setUsers(
      users.map(user => user.id === id ? { ...user, active: !user.active } : user)
    )
  }
  const count = countActiveUsers(users)
  return (
    <>
      <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate} />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      <div>활성사용자 수 : {count}</div>
    </>
  );
}

export default App;
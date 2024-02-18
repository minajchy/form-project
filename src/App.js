import React, { useState } from "react";  
import FormInput from "./components/FormInput";

const App = () => {
  const [users, setUsers] = useState([]);

  const addUserHandler = (user) => {
    setUsers((prevUsers) => [
      ...prevUsers,
      {...user, id: Math.random().toString()}
    ])
  }

  return (
    <div>
      <FormInput onAddUser={addUserHandler}></FormInput>
      <div>
        <h2>User List</h2>
        <ul>
          {users.map ((user) => (
            <li key={user.id}>
              {user.userName} ({user.age} Years old)
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;

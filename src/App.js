import { useState } from "react";
import "./App.css";
import MainContainer from "./Components/MainContainer/MainContainer";
import AddUser from "./Components/AddUser/AddUser.jsx";

function App() {
  const [users, setUsers] = useState([
    {
      id: 1,
      fname: "Leanne ",
      lname: "Bret",
      email: "Sincere@april.biz",
    },
    {
      id: 2,
      fname: "Leanne Graham",
      lname: "Bret",
      email: "Sincere@april.biz",
    },
  ]);
  const [users2, setUsers2] = useState([
    {
      id: 1,
      fname: "Leanne ",
      lname: "Bret",
      email: "Sincere@april.biz",
    },
    {
      id: 2,
      fname: "Leanne Graham",
      lname: "Bret",
      email: "Sincere@april.biz",
    },
  ]);
  const [newUser, setNewUser] = useState({
    id: "",
    fname: "",
    lname: "",
    email: "",
  });

  const HandleDelete = (target) => {
    const newUsers = users.filter((user) => user.id != target);
    setUsers(newUsers);
  };
  const handleAddUser = (e) => {
    e.preventDefault();
    console.log();
    setUsers([...users, newUser]);
    setNewUser({
      id: "",
      fname: "",
      lname: "",
      email: "",
    });
  };
  const handleAddUserChange = (e) => {
    setNewUser({
      ...newUser,
      id: users.length + 1,
      [e.target.name]: e.target.value,
    });
  };
  // updated logic
  const [updateUser, setUpdateUser] = useState({});
  const handleUpdateUserChange = (e) => {
    // console.log(e.target.name);
    const selectedUser = users.filter((user) => {
      return user.id == e.target.parentNode.parentNode.id;
    });
    setUpdateUser({ ...selectedUser[0], [e.target.name]: e.target.value });
  };
  const handleUpdateUser = (singleUser) => {
    const newState = users.map((user) => {
      // 👇️ if id equals 2 replace object
      if (user.id === singleUser.id) {
        return updateUser;
      }

      // 👇️ otherwise return object as is
      return user;
    });

    setUsers(newState);
    // setUsers([...users, updateUser]);
    // console.log(users2[1]);
    console.log(newState);
  };
  return (
    <div>
      <AddUser
        handleAddUser={handleAddUser}
        newUser={newUser}
        handleAddUserChange={handleAddUserChange}
      />
      <MainContainer
        handleUpdateUserChange={handleUpdateUserChange}
        handleUpdateUser={handleUpdateUser}
        users={users}
        HandleDelete={HandleDelete}
      />
    </div>
  );
}
export default App;

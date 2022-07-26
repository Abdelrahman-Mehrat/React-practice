import { useEffect, useState } from "react";
import "./App.css";
import MainContainer from "./Components/MainContainer/MainContainer";
import AddUser from "./Components/AddUser/AddUser.jsx";
import NavBarTitle from "./Components/FixedNavBar/NavBarTitle";

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
      fname: " Graham",
      lname: "abdo",
      email: "mail2@april.biz",
    },
  ]);
  useEffect(() => {
    console.log(JSON.parse(localStorage.getItem("all-data")));
    if (JSON.parse(localStorage.getItem("all-data")) !== null) {
      setUsers(JSON.parse(localStorage.getItem("all-data")));
    }
  }, []);
  const [updateUser, setUpdateUser] = useState({});
  // add user state
  const [newUser, setNewUser] = useState({
    id: "",
    fname: "",
    lname: "",
    email: "",
  });

  const HandleDelete = (target) => {
    const newUsers = users.filter((user) => user.id != target);
    setUsers(newUsers);
    localStorage.setItem("all-data", JSON.stringify(newUsers));
  };
  // form add user functions
  const handleAddUser = (e) => {
    e.preventDefault();
    console.log(e.target);
    setUsers([...users, newUser]);
    localStorage.setItem("all-data", JSON.stringify([...users, newUser]));
    // reset input values
    setNewUser({
      id: "",
      fname: "",
      lname: "",
      email: "",
    });
  };
  const handleAddUserChange = (e) => {
    console.log(users[users.length - 1].id);
    setNewUser({
      ...newUser,
      id: users.length + 1,
      [e.target.name]: e.target.value,
    });
  };
  // updated logic
  const handleUpdateUserChange = (e, user) => {
    setUpdateUser({ ...user, [e.target.name]: e.target.value });
    console.log(updateUser);
  };
  const handleUpdateUser = (event, singleUser) => {
    console.log(updateUser);
    const newState = users.map((user) => {
      if (user.id === singleUser.id) {
        return updateUser;
      }
      return user;
    });
    console.log(newState);
    setUsers(newState);
    localStorage.setItem("all-data", JSON.stringify(newState));
  };
  return (
    <div className="homePage-container">
      <NavBarTitle />
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

import { useState } from "react";
import "./App.css";
import MainContainer from "./Components/MainContainer/MainContainer";

function App() {
  const [users, setUsers] = useState([
    {
      id: 1,
      fname: "Leanne Graham",
      lname: "Bret",
      city: "Alex",
      email: "Sincere@april.biz",
      phone: "1-770-736-8031 x56442",
    },
    {
      id: 2,
      fname: "Leanne Graham",
      lname: "Bret",
      city: "Alex",
      email: "Sincere@april.biz",
      phone: "1-770-736-8031 x56442",
    },
  ]);
  const HandleDelete = (e) => {
    const newUsers = users.filter((user) => user.id != e.target.id);
    setUsers(newUsers);
  };
  return (
    <div>
      <MainContainer users={users} HandleDelete={HandleDelete} />
    </div>
  );
}

export default App;

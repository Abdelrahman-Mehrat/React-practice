import SingleUser from "../SingleUser/SingleUser";
import "./MainContainer.css";
import Table from "react-bootstrap/Table";
import AddUser from "../AddUser/AddUser";
const MainContainer = ({ users, HandleDelete }) => {
  console.log(users);

  return (
    <div>
      <div className="container">
        <AddUser />
        <Table className="" striped variant="dark" bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>City</th>
              <th>Email</th>
              <th>Phone</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return <SingleUser user={user} HandleDelete={HandleDelete} />;
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
};
export default MainContainer;

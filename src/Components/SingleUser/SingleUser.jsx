import "./SingleUser.css";
const SingleUser = ({ user, HandleDelete }) => {
  return (
    <tr>
      <td>{user.id}</td>
      <td>{`${user.fname} - ${user.lname}`}</td>
      <td>{user.city}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <td>
        {" "}
        <button>Update</button>{" "}
      </td>
      <td>
        <button id={user.id} onClick={HandleDelete}>
          Delete
        </button>
      </td>
    </tr>
  );
};
export default SingleUser;

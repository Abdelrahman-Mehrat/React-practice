import { useState } from "react";
import "./SingleUser.css";
const SingleUser = ({
  user,
  HandleDelete,
  index,
  id,
  handleUpdateUserChange,
  handleUpdateUser,
}) => {
  const [toggleUpdate, setToggleUpdate] = useState(true);
  return (
    <tr id={user.id}>
      <td>{index}</td>
      <td>{user.id}</td>
      <td>
        {toggleUpdate ? (
          user.fname
        ) : (
          <input
            defaultValue={user.fname}
            name="fname"
            onChange={(e) => {
              handleUpdateUserChange(e, user);
            }}
          />
        )}
      </td>
      <td>
        {toggleUpdate ? (
          user.lname
        ) : (
          <input
            defaultValue={user.lname}
            name="lname"
            onChange={(e) => {
              handleUpdateUserChange(e, user);
            }}
          />
        )}
      </td>
      <td>
        {toggleUpdate ? (
          user.email
        ) : (
          <input
            defaultValue={user.email}
            name="email"
            onChange={(e) => {
              handleUpdateUserChange(e, user);
            }}
          />
        )}
      </td>
      <td>
        {" "}
        {!toggleUpdate ? (
          <button
            onClick={(e) => {
              handleUpdateUser(e, user);
              setToggleUpdate(!toggleUpdate);
            }}
          >
            save Update
          </button>
        ) : (
          <button
            onClick={() => {
              setToggleUpdate(!toggleUpdate);
            }}
          >
            Update
          </button>
        )}
      </td>
      <td>
        <button onClick={HandleDelete}>Delete</button>
      </td>
    </tr>
  );
};
export default SingleUser;

import { useContext } from "react";
import { LogUserContext } from "../../Context/LogUserContext";
import "./UserProfile.css";
const UserProfile = () => {
  const { name } = useContext(LogUserContext);
  return (
    <div>
      <h1>
        Welcome{" "}
        <span style={{ color: "#00ff58", fontSize: "60px" }}>{name}</span>{" "}
      </h1>
    </div>
  );
};
export default UserProfile;

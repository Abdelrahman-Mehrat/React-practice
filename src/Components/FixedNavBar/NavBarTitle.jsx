import "./NavBarTitle.css";
import { useContext, useEffect } from "react";
import { LogUserContext } from "../Context/LogUserContext";
const NavBarTitle = () => {
  const value = useContext(LogUserContext);
  useEffect(() => {
    console.log(value);
  });
  return (
    <div className="fixed-nav">
      <div className="container py-3 mb-3">
        <h1 className="text-center">Add Users {value}</h1>
      </div>
    </div>
  );
};
export default NavBarTitle;

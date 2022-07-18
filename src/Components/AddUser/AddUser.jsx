import { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./AddUser.css";
const AddUser = () => {
  const [toggleForm, setToggleForm] = useState(false);
  const handleForm = () => {
    setToggleForm(!toggleForm);
    console.log(!toggleForm);
  };
  return (
    <div>
      <div className="switch-userForm-btn">
        <button className="btn btn-primary" onClick={handleForm}>
          Add
        </button>
      </div>
      {toggleForm ? (
        <form action="" className="userForm ">
          <Row>
            <Col md={6} className="px-3">
              <input
                type="text"
                className="userForm-input"
                placeholder="Fname"
              />
            </Col>
            <Col md={6} className="px-3">
              <input
                type="text"
                className="userForm-input"
                placeholder="Lname"
              />
            </Col>
            <Col md={6} className="px-3">
              <input
                type="text"
                className="userForm-input"
                placeholder="City"
              />
            </Col>
            <Col md={6} className="px-3">
              <input
                type="text"
                className="userForm-input"
                placeholder="Email"
              />
            </Col>
            <Col md={6} className="px-3">
              <input
                type="number"
                className="userForm-input"
                placeholder="Phone Number"
              />
            </Col>
          </Row>
        </form>
      ) : (
        ""
      )}
    </div>
  );
};
export default AddUser;

// hooks
import { useState } from "react";
// react router and bootstrap
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";
// components
import NavBarTitle from "./Components/FixedNavBar/NavBarTitle";
import HomePage from "./Components/Pages/HomePage/HomePage";
import ProtectedRoute from "./Components/ProtectedComponent/ProtectedRoute";
import SignIn from "./Components/Pages/SignIn/SignIn";
import UserProfile from "./Components/Pages/Profile/UserProfile";
// style
import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <NavBarTitle />
      <Nav>
        <NavLink className="p-2 text-black bg-danger m-1" to={"/"}>
          home
        </NavLink>
        <NavLink className="p-2 text-black bg-danger m-1" to={"/signin"}>
          signin
        </NavLink>
        <NavLink className="p-2 text-black bg-danger m-1" to={"/userprofile"}>
          UserProfile
        </NavLink>
      </Nav>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route
          path="/userprofile"
          element={
            <ProtectedRoute>
              <UserProfile />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
export default App;

import NavBarTitle from "./Components/FixedNavBar/NavBarTitle";
import "./App.css";
import HomePage from "./Components/Pages/HomePage/HomePage";
import { BrowserRouter, Routes, Route, Navigates } from "react-router-dom";
import ProtectedRoute from "./Components/ProtectedComponent/ProtectedRoute";
import SignIn from "./Components/Pages/SignIn/SignIn";
function App() {
  return (
    <BrowserRouter>
      <NavBarTitle />
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route
          exact
          path="/"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
export default App;

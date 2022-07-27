import { useState } from "react";
import { Navigate } from "react-router-dom";
const ProtectedRoute = (props) => {
  const [isLogin, setIsLogin] = useState(false);
  if (!isLogin) {
    return <Navigate to="/signin" replace />;
  } else {
    return props.children;
  }
};
export default ProtectedRoute;

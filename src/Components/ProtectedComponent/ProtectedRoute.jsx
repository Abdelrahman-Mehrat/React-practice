import { Navigate } from "react-router-dom";
const ProtectedRoute = (props) => {
  console.log(props);
  if (props.isLogin == null) {
    return <Navigate to="/signin" replace />;
  } else {
    return props.children;
  }
};
export default ProtectedRoute;

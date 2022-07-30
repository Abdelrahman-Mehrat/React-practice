import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LogUserContext } from "../../Context/LogUserContext";

const SignIn = () => {
  const { handleName, isLogin } = useContext(LogUserContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (isLogin !== null) {
      console.log("joinnnnnnnn");
      navigate("/userprofile");
    }
  }, [isLogin]);
  return (
    <section>
      <div className="container">
        <h2>login</h2>
        <button onClick={handleName}>Login</button>
      </div>
    </section>
  );
};
export default SignIn;

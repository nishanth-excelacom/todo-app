import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./security/AuthContext";

function LoginComponent() {
  const [username, setUsername] = useState("username");
  const [password, setPassword] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const navigate = useNavigate();
  const authContext = useAuth();

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleSubmit() {
    if (username === "username" && password === "dummy") {
      authContext.setAuthenticated(true);
      console.log("Success");
      setShowSuccessMessage(true);
      setShowErrorMessage(false);
      navigate(`/welcome/${username}`);
    } else {
      authContext.setAuthenticated(false);
      console.log("Failed");
      setShowSuccessMessage(false);
      setShowErrorMessage(true);
    }
  }

  return (
    <div className="Login d-flex justify-content-center ">
      <div className="LoginForm form w-25  mt-5 ">
        <h1>Time to Login!</h1>
        {showSuccessMessage && (
          <div className="successMessage text-success">
            Authenticated Successfully
          </div>
        )}
        {showErrorMessage && (
          <div className="errorMessage text-danger">
            Authentication Failed. Please check your credentials.
          </div>
        )}
        <div>
          <label className="form-lable">User Name</label>
          <input
            className="form-control"
            type="text"
            name="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label className="form-lable">Password</label>
          <input
            className="form-control"
            type="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div>
          <button
            type="submit"
            name="submit"
            className="btn btn-primary mt-1"
            onClick={handleSubmit}
          >
            submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginComponent;

import React, { useState } from "react";
import { useHistory } from "react-router-use-history";
import { Link } from "react-router-dom";
import Logo from "../logo/logo";
import "./Login.css";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();

  const handleSubmitButton = (event:any) => {
    event.preventDefault();

    if (userName === "admin" && password === "admin") {
      history.push("/Admin");
    } else {
      setError("incorect Username or password");
    }
  };
  return (
    <div className="login-body-container">
      <div className="login-body">
        <div className="form-and-logo-container">
          <span className="logo-signin-container">
            <Logo />
          </span>
          <div className="login-container">
            <h5 className="greeting">Hello, Welcome Back!</h5>
            <form onSubmit={handleSubmitButton} className="login-form">
              <div className="input-container">
                <input
                  type="Text"
                  placeholder="Enter your Email"
                  value={userName}
                  onChange={(event) => setUserName(event.target.value)}
                />
              </div>
              <div className="input-container">
                <input
                  type="password"
                  placeholder="Enter your Password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
              <div className="login-btn-container">
                <input type="submit" value="Login" />
              </div>
              {error && <p style={{ color: "red" }}>{error}</p>}
              <Link to="/Register">
                <strong>Don't have an account</strong>
              </Link>
            </form>
          </div>
        </div>
        <div className="img-container">
          <img src="asset\images\img-3.png" />
        </div>
      </div>
      <div className="login-footer">
        <p>The most reliable virtual learning Platform</p>
      </div>
    </div>
  );
}

export default Login;

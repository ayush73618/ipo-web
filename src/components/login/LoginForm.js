import React, { useState } from "react";
import "./LoginForm.css";
import { Link, Navigate } from "react-router-dom";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "ayush" && password === "ayush") {
      setAuthenticated(true);
    } else {
      alert("Invalid Credentials");
    }
  };

  if (authenticated) {
    return <Navigate to="/ipo" />;
  }

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Enter User Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <Link to="/register">New User Register Here</Link>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;

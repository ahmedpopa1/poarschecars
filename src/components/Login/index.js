import "./style.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      const response = await axios.post("/api/uses/login", {
        email: email,
        password: password,
      });

      if (response.status === 200) {
        setError(null);
        navigate("/admin_dashboard", { state: { user: response.data.user } });
      } else {
        setError(response.data.message || "Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setError("Login failed. Please check your credentials.");
    }
  };

  return (
    <>
      <div className="login-box">
        <p>Login</p>
        <div className="go-back-container">
          <button className="go-back" onClick={() => navigate(-1)}>
            ⬅ Go Back
          </button>
        </div>
        <form onSubmit={handleLogin}>
          <div className="user-box">
            <input
              required=""
              name=""
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Email</label>
          </div>
          <div className="user-box">
            <input
              required=""
              name=""
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label>Password</label>
          </div>

          <Link to="/profile">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </Link>
        </form>
        <p>
          Don't have an account?{" "}
          <Link to="/signup" className="a2">
            Sign up!
          </Link>
        </p>
      </div>
    </>
  );
}

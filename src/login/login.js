import React from "react";
import "./login.css";
import axios from "axios";
import { useContext, useRef } from "react";
import { Context } from "../context/context";

const Login = () => {
  const userRef = useRef();
  const passwordRef = useRef();
  const { isFetching, dispatch } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(dispatch);
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  return (
    <div>
      <div className="login">
        <span className="loginTitle">Login</span>
        <form className="loginForm" onSubmit={handleSubmit}>
          <label>Username</label>
          <input
            className="loginInput"
            type="text"
            placeholder="Enter your email..."
            ref={userRef}
          />
          <label>Password</label>
          <input
            className="loginInput"
            type="password"
            placeholder="Enter your password..."
            ref={passwordRef}
          />
          <button className="loginButton" type="submit" disabled={isFetching}>
            Login
          </button>
        </form>
        <button className="loginRegisterButton">Register</button>
      </div>
    </div>
  );
};

export default Login;

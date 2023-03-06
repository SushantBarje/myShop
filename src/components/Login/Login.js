import React, { useRef } from "react";
import "./Login.css";
import APP_LOGO from "../../assets/logo.png";

import { Form } from "react-router-dom";
import { EmailOutlined, LockOutlined } from "@mui/icons-material";

function Login() {
  return (
    <div className="login">
      <img src={APP_LOGO} alt="" />
      <h1>Log In</h1>
      <Form method="POST" className="login__form">
        <div className="form-input">
          <EmailOutlined></EmailOutlined>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder="Enter Email"></input>
        </div>
        <div className="form-input">
          <LockOutlined></LockOutlined>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
          ></input>
        </div>

        <button type="submit">Log In</button>
      </Form>
    </div>
  );
}

export default Login;

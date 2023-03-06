import React from "react";
import "./Register.css";

import APP_LOGO from "../../assets/logo.png";

import { Form } from "react-router-dom";
import {
  EmailOutlined,
  LockOutlined,
  PermIdentityOutlined,
  PersonAddAlt1Outlined,
} from "@mui/icons-material";

function Register() {
  return (
    <div className="register">
      <img src={APP_LOGO} alt="" />
      <h1>Sign Up</h1>
      <Form method="POST" className="register__form">
        <div className="register__form__input__name__field">
          <div className="register__form__input">
            <PermIdentityOutlined></PermIdentityOutlined>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              placeholder="Enter First Name"
            ></input>
          </div>
          <div className="register__form__input">
            <PermIdentityOutlined></PermIdentityOutlined>
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              placeholder="Enter Last Name"
            ></input>
          </div>
        </div>

        <div className="register__form__input">
          <EmailOutlined></EmailOutlined>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder="Enter Email"></input>
        </div>
        <div className="register__form__input">
          <LockOutlined></LockOutlined>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
          ></input>
        </div>
        <div className="register__form__input">
          <LockOutlined></LockOutlined>
          <label htmlFor="cpassword">Confirm Password</label>
          <input
            type="password"
            name="cpassword"
            placeholder="Enter Confirm Password"
          ></input>
        </div>

        <button type="submit">Sign Up</button>
      </Form>
    </div>
  );
}

export default Register;

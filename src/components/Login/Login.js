import React, { useRef } from "react";
import "./Login.css";
import APP_LOGO from "../../assets/logo.png";

import { Form } from "react-router-dom";

export const action = async ({ request, params }) => {
  const data = await request.formData();
  const updates = Object.fromEntries(data);
  
  return params;
};

// export async function action() {
// c
// }

function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();

  return (
    <div className="login">
      <img src={APP_LOGO} alt="" />
      <h2>Log In</h2>
      <Form method="POST">
        <div className="form-input">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            defaultValue={""}
            placeholder="Enter Email"
          ></input>
        </div>
        <div className="form-input">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            defaultValue={""}
            placeholder="Enter Password"
          ></input>
        </div>
        <button type="submit">Log in</button>
      </Form>
    </div>
  );
}

export default Login;

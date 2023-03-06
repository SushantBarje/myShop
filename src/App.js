import React from "react";
import "./App.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import MainLayout from "./components/MainLayout/MainLayout";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import { loginAction as loginActionLoader } from "./api-endpoint/api";
import ErrorPage from "./components/ErrorPage/ErrorPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<MainLayout></MainLayout>}
      errorElement={<ErrorPage />}
      action={loginActionLoader}
    >
      <Route index element={<Dashboard></Dashboard>}></Route>
      <Route
        path="login"
        element={<Login></Login>}
        action={loginActionLoader}
      ></Route>
      <Route path="signup" element={<Register></Register>}></Route>
    </Route>
  )
);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

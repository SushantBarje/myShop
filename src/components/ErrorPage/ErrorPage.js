import React from "react";
import { useRouteError } from "react-router-dom";
import "./ErrorPage.css";

function ErrorPage() {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="errorPage">
      <p>{error.statusText}</p>
      <p>{error.message} </p>
    </div>
  );
}

export default ErrorPage;

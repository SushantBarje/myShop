import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const useHeaderHook = () => {
  const location = useLocation();
  const [whichButton, setWhichButton] = useState("Sign In");

  useEffect(() => {
    if (location.pathname == "/signup") {
      setWhichButton({ to: "/login", text: "Log In" });
    } else if (location.pathname == "/login") {
      setWhichButton({ to: "/signup", text: "Sign Up" });
    } else {
      setWhichButton({});
    }
  }, [location]);

  return { whichButton };
};

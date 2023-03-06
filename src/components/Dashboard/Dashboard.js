import React, { useEffect, useState } from "react";
import { redirect, useNavigate } from "react-router-dom";
import "./Dashboard";

function Dashboard() {
  const [isUser, setUser] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isUser) {
      navigate("login");
    }
  }, []);

  return (
    <div className="dashboard">
      <h3>This is Dashboard component</h3>
    </div>
  );
}

export default Dashboard;

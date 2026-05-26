import React from "react";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  return (
    <div className="main-wrapper">
      <TopBar />
      <Dashboard />
    </div>
  );
};

export default Home;

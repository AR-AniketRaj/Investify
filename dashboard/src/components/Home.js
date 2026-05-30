import React from "react";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import StockCard from "./stockCard";

const Home = () => {
  return (
    <div className="main-wrapper">
      <TopBar />
      <Dashboard />
      <StockCard />
    </div>
  );
};

export default Home;

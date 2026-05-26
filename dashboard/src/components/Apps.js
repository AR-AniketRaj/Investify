import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login, Signup } from "../pages";
import Home from "./Home";
// import Dashboard from "./Dashboard";

const Apps = () => {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </div>
    </>
  );
};

export default Apps;

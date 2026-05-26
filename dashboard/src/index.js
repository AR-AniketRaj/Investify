import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Apps from "./components/Apps";
import "react-toastify/dist/ReactToastify.css";
import { CookiesProvider } from "react-cookie";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CookiesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Apps />} />
        </Routes>
      </BrowserRouter>
    </CookiesProvider>
  </React.StrictMode>,
);

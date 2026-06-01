import React from "react";
import { Link } from "react-router-dom";

function OpenAccount() {
  return (
    <div className="container p-5">
      <div className=" text-center">
        <h1 className="mt-5">Open a Zerodha account</h1>
        <p className="mb-4 text-muted">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O traders.
        </p>
        <div className="d-flex justify-content-center">
          <Link to="/signup">
            <button className=" btn btn-primary fs-5 px-5">Sign up now</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OpenAccount;

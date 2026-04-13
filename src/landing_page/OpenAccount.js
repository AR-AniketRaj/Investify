import React from "react";

function OpenAccount() {
  return (
    <div className="container p-5">
      <div className=" text-center">
        <h1 className="mt-5">Open a Zerodha account</h1>
        <p className="mb-4 text-muted">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O traders.
        </p>
        <button
          className=" btn btn-primary fs-5 "
          style={{ width: "200px" }}
        >
          Sign up now
        </button>
      </div>
    </div>
  );
}

export default OpenAccount;

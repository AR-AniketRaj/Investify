import React from "react";

function Pricing() {
  return (
    <div className="container mt-5">
      <div className="row align-text-center text-center">
        <div className="col col-md-6 text-center">
          <h1 className="mb-3">Unbeatable Pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="" className="d-inline-block mb-5" style={{ textDecoration: "none" }}>
            See Pricing{" "}
            <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
          </a>
        </div>

        <div className="col-12 col-md-6 ">
          <div className="row text-center">
            <div className="col-6 border">
              <h1>
                <i class="fa-solid fa-indian-rupee-sign fs-2"></i>0
              </h1>
              <p>Free equity delivery and direct mutual funds</p>
            </div>
            <div className="col-6 border">
              <h1>
                <i class="fa-solid fa-indian-rupee-sign fs-2"></i>20
              </h1>
              <p>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;

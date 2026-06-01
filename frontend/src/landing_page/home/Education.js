import React from "react";

function Education() {
  return (
    <div className="container mt-5 me-">
      <div className="row align-text-center text-center">
        <div className="col-12 col-md-6">
          <img src="media/images/education.svg" />
        </div>

        <div className="col-12 col-md-6 mt-5">
          <h1 className="mb-3">Free and open market education</h1>
          <p>
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a
            href=""
            style={{ textDecoration: "none" }}
            className="d-inline-block mb-4"
          >
            Versity <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
          </a>

          <p>
            YradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            TradingQ&A
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;

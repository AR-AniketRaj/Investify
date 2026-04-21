import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row text-center my-5">
        <div className="col">
          <h2 className="aboutteam">People</h2>
        </div>
      </div>
      <div className="row pt-5 mb-5 ">
        <div className="col-12 col-md-6 text-center">
          <img
            src="media/images/nithinKamath.jpg"
            style={{ borderRadius: "100%", width: "68%" }}
          />
          <h6 className="mt-4 ">Nithin Kamath</h6>
          <p className="text-muted p-3">Founder, CEO</p>
        </div>
        <div className="col-12 col-md-6 px-4">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>

          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>

          <p>Playing basketball is his zen.</p>

          <p>
            Connect on{" "}
            <a href="" style={{ textDecoration: "none" }}>
              Homepage
            </a>{" "}
            /{" "}
            <a href="" style={{ textDecoration: "none" }}>
              TradingQnA
            </a>{" "}
            /{" "}
            <a href="" style={{ textDecoration: "none" }}>
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;

import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row">
        <div className="col text-center">
          <h1 className="fs-3 mt-5 py-3">Pricing</h1>
          <h3 className="text-muted border-bottom pb-5 mb-5 fs-5">
            Free equity investments and flat
            <i className="fa-solid fa-indian-rupee-sign fs-6"></i>20 traday and
            F&O trades
          </h3>
        </div>
        <div className="row">
          <div className="col-12 col-md-4 text-center">
            <img src="media/images/pricing0.svg" style={{ width: "200px" }} />
            <h2 className="mb-4">Free equity delivery</h2>
            <p className="text-muted">
              All equity delivery investments (NSE, BSE), are absolutely free -{" "}
              ₹ 0 brokerage.
            </p>
          </div>
          <div className="col-12 col-md-4 text-center">
            <img
              src="media/images/intradayTrades.svg"
              style={{ width: "200px" }}
            />
            <h2>Intraday and F&O trades</h2>
            <p className="text-muted mt-4">
              Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
              intraday trades across equity, currency, and commodity trades.
              Flat ₹20 on all option trades.
            </p>
          </div>
          <div className="col-12 col-md-4 text-center">
            <img
              src="media/images/pricingEquity.svg"
              style={{ width: "200px" }}
            />
            <h2>Free direct MF</h2>
            <p className="text-muted mt-4">
              All direct mutual fund investments are absolutely free — ₹ 0
              commissions & DP charges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

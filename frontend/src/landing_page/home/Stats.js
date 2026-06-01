import React from "react";

function Stats() {
  return (
    <div className="container mt-5">
      <div className="row align-item-center ">
        <div className="col-12 col-md-6 p-5 item-center">
          <h2>Trust with confidence</h2>
          <h4>Customer-first always</h4>
          <p className="text-muted">
            That's why 1.3+ crore customers trust Investify with{" "}
            <i className="fa-solid fa-indian-rupee-sign fs-6"></i>3.5 lakh crores
            worth of equity investments.
          </p>
          <h4>No spam or gimmicks</h4>
          <p className="text-muted">
            No gimmicks,spam,"gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
          </p>
          <h4>The Zerodha universe</h4>
          <p className="text-muted">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>
          <h4>Do better with money</h4>
          <p className="text-muted">
            With initiatives like Nudge and kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>
        <div className="col-12 col-md-6 p-5 text-center text-md-center">
          <img src="media/images/ecosystem.png" width={"80%"} />
          <div className="">
            <a href="" className="me-5" style={{ textDecoration: "none" }}>
              Explore our products{" "}
              <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
            </a>
            <a href="" style={{ textDecoration: "none" }}>
              Try Kite demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;

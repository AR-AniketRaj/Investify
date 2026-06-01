import React from "react";
import { Link } from "react-router-dom";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="text-center">
          <p className="fs-4" style={{ marginBottom: "50px" }}>
            Want to know more about our technology stack? Check out the&nbsp;
            <a href="" style={{ textDecoration: "none" }}>
              Zerodha.tech
            </a>
            &nbsp;blog.
          </p>
          <h2 style={{ marginBottom: "20px" }}>The Zerodha Universe</h2>
          <p className="text-muted" style={{ marginBottom: "40px" }}>
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
        </div>
        <div className="col-6 col-md-4 universe">
          <img src="media/images/zerodhaFundhouse.png" />
          <p>
            Our asset management venture that is creating simple and transparent
            index funds to heop you save for your goals.
          </p>
        </div>
        <div className="col-6 col-md-4 universe">
          <img src="media/images/sensibullLogo.svg" />
          <p>
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-6 col-md-4 universe">
          <img src="media/images/streakLogo.png" />
          <p>
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="col-6 col-md-4 universe">
          <img src="media/images/smallcaseLogo.png" />
          <p>
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-6 col-md-4 universe">
          <img src="media/images/goldenpiLogo.png" />
          <p>Bonds trading platform.</p>
        </div>

        <div className="col-6 col-md-4 universe">
          <img src="media/images/dittoLogo.png" />
          <p>
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>
        <div className="d-flex justify-content-center">
          <Link to="/signup">
            <button className=" btn btn-primary fs-5 px-5">Sign up now</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Universe;

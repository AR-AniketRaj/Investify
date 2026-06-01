import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="container p-5">
      <div className="row text-center">
        <img
          src="media/images/homeHero.png"
          alt="Hero Image"
          className="mb-5"
        />
        <h1 className="mt-5">Invest in everything</h1>
        <p>
          Online platform to invest in stocks, derivatives, mutual funds, and
          more
        </p>
        <div className="d-flex justify-content-center">
          <Link to="/signup">
            <button className="btn btn-primary fs-5 px-5">Signup now</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;

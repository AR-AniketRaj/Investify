import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row mt-5 p-5 ">
        <div className="col text-center ">
          <h1 className="fs-1">Technology</h1>
          <h4 className="one-line text-muted">Sleek, modern, and intuitive trading platforms</h4>
          <p>
            Check out our <a href="" style={{textDecoration: "none"}}>investment offerings <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;

import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="mt-5 mb-5 p-3" id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="">Track Tickets</a>
      </div>
      <div className="row">
        <div className="col-12 col-md-6">
          <h3
            className="fs-4"
            style={{ marginLeft: "100px", marginBottom: "20px" }}
          >
            Search for an answer or browse help topics to Create a ticket
          </h3>
          <input
            placeholder="Eg. how do i activate F&O, why is my order getting rejected."
            style={{
              marginLeft: "100px",
              marginBottom: "20px",
            }}
          />{" "}
          <br />
          <a href="" style={{marginLeft: "100px"}}>Track account opening</a>
          <a href="" style={{marginLeft: "5px"}}>Track segment activation</a>
          <a href="" style={{marginLeft: "10px"}}>Intraday margins</a>
          <a href="" style={{marginLeft: "10px"}}>Kite user manual</a>
        </div>
        <div className="col-12 col-md-6">
          <h3 style={{ marginLeft: "100px", marginBottom: "20px" }}>
            Featured
          </h3>
          <ol style={{ marginLeft: "100px" }}>
            <li>
              <a href="">Current Takeovers and Delisting</a>
            </li>
            <li>
              <a href="">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;

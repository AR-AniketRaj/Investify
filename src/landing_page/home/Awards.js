import React from "react";

function Awards() {
  return (
    <div className="container mt-5">
      <div className="row align items-center">
        <div className="col-12 col-md-6 p-5 text-center">
          <img src="media/images/largestBroker.svg" alt="broker" />
        </div>
        <div className="col-12 col-md-6 p-5 text-center text-md-start">
          <h1>Largest stock broker in india</h1>
          <p>
            2+ million investify clients contribute to over 15% of all retail
            order volume in india daily by trading and investing in:
          </p>
          <div className="row">
            <div className="col-6">
              <ul>
                <li>
                  <p>Futures and Options</p>
                </li>
                <li>
                  <p>Commodity derivatives</p>
                </li>
                <li>
                  <p>Currency derivatives</p>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  <p>Stocks & IPOs</p>
                </li>
                <li>
                  <p>Direct mutual funds</p>
                </li>
                <li>
                  <p>Bonds and Govt. Securities</p>
                </li>
              </ul>
            </div>
          </div>
          <img
            src="media/images/pressLogos.png"
            style={{ width: "80%" }}
            alt="logos"
          />
        </div>
      </div>
    </div>
  );
}

export default Awards;

import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container">
      <div className="row align-items-center mt-5 mb-5 g-5">
        <div className="col-12 col-md-6 px-md-5 mb-4">
          <h1>{productName}</h1>
          <p className="text-muted">{productDescription}</p>
          <a href={learnMore} style={{ textDecoration: "none" }}>
            Learn More
          </a>
        </div>
        <div className="col-12 col-md-6 text-center">
          <img src={imageURL} style={{ width: "450px" }} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;

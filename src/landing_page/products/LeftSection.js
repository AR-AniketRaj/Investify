import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row align-items-center mt-5 g-5">
        <div className="col-12 col-md-6 text-center">
          <img src={imageURL} style={{width: "400px"}}/>
        </div>
        <div className="col-12 col-md-6 px-md-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div className="text-muted mb-4">
            <a href={tryDemo} style={{ textDecoration: "none" }}>
              Try Demo
            </a>
            <a
              href={learnMore}
              style={{ marginLeft: "50px", textDecoration: "none" }}
            >
              Learn More
            </a>
          </div>
          <div>
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" />
            </a>
            <a href={appStore} style={{ marginLeft: "50px" }}>
              <img src="media/images/appstoreBadge.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;

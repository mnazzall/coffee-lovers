import React from "react";
import "./BeansAndVarieties.css";

function BeansAndVarieties() {
  return (
    <div className="beans-and-varieties-container">
      <div className="intro-section">
        <div className="image-container">
          <img
            src="/coffee-lovers/photos/coffee-beans-intro.jpeg"
            alt="Coffee Beans"
          />
        </div>
        <div className="intro-text-beans">
          <h1>Coffee Beans & Varieties</h1>
          <p>Explore the flavors, aromas, and stories behind every bean.</p>
        </div>
      </div>
      <div className="content-section">
        <div>
          <img
            src="/coffee-lovers/photos/coffeeTreeForBeansAndVerieties.jpeg"
            alt="coffee tree"
          />
        </div>
        <div>
          <p>
            Coffee beans are the seeds of the coffee cherry, and while over 100
            species exist, only a few are widely cultivated. Each bean type
            offers unique flavors, caffeine levels, and cultural significance.
          </p>
        </div>
      </div>
    </div>
  );
}

export default BeansAndVarieties;

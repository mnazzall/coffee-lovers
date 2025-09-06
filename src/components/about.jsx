import React from "react";
import "./about.css";


function About() {
  return (
    

    <div className="about-page">

      {/* Hero / Intro Section */}
      <section className="about-hero">
        <div className="hero-overlay">
          <h1>Welcome to Coffee Lovers</h1>
          <p>
            Explore the rich world of coffee—from its origins and beans to brewing techniques, recipes, culture, and sustainability.
            Our goal is to guide both beginners and coffee enthusiasts through everything coffee.
          </p>
        </div>
      </section>

      {/* Mission / Vision Section */}
      <section className="about-mission">
        <div className="mission-container">
          <div className="mission-text">
            <h2>Our Mission</h2>
            <p>
              To educate and inspire coffee lovers worldwide by providing accurate, engaging, and visually appealing
              information about all things coffee.
            </p>
          </div>
          <div className="mission-text">
            <h2>Our Vision</h2>
            <p>
              To become the go-to online resource for coffee enthusiasts and anyone curious about coffee culture.
            </p>
          </div>
        </div>
      </section>

      {/* What You’ll Find Section */}
      <section className="about-categories">
        <h2>What You'll Find Here</h2>
        <div className="categories-grid">
          <div className="category-card">
            <h3>Coffee Beans & Varieties</h3>
            <p>Learn about Arabica, Robusta, and more from around the world.</p>
            <a href="/coffee-beans" className="btn">Explore →</a>
          </div>

          <div className="category-card">
            <h3>Brewing Methods</h3>
            <p>Discover the best ways to make your perfect cup of coffee.</p>
            <a href="/brewing-methods" className="btn">Explore →</a>
          </div>

          <div className="category-card">
            <h3>Roasting Levels</h3>
            <p>Understand light, medium, and dark roasts and how they affect flavor.</p>
            <a href="/roasting-levels" className="btn">Explore →</a>
          </div>

          <div className="category-card">
            <h3>Coffee Culture</h3>
            <p>Explore how coffee is enjoyed in different countries and traditions.</p>
            <a href="/coffee-culture" className="btn">Explore →</a>
          </div>

          <div className="category-card">
            <h3>Health & Benefits</h3>
            <p>Learn about coffee’s effects on your health and the science behind it.</p>
            <a href="/health-benefits" className="btn">Explore →</a>
          </div>

          <div className="category-card">
            <h3>Coffee Recipes</h3>
            <p>From classic espresso drinks to creative desserts, find your next favorite.</p>
            <a href="/coffee-recipes" className="btn">Explore →</a>
          </div>

          <div className="category-card">
            <h3>Around the World</h3>
            <p>See how coffee is brewed, served, and celebrated across the globe.</p>
            <a href="/around-the-world" className="btn">Explore →</a>
          </div>

          <div className="category-card">
            <h3>Sustainability & Trade</h3>
            <p>Learn how coffee affects the planet and the communities who grow it.</p>
            <a href="/sustainability-trade" className="btn">Explore →</a>
          </div>
        </div>
      </section>

      {/* Optional Fun / Visual Section */}
      <section className="about-funfact">
        <h2>Did You Know?</h2>
        <p>
          Over 2.25 billion cups of coffee are consumed every day worldwide! Coffee has fueled creativity, conversation,
          and connection for centuries.
        </p>
      </section>

      {/* Call to Action Section */}
      <section className="about-cta">
        <h2>Ready to Explore?</h2>
        <p>Dive into our categories to discover your next favorite cup of coffee.</p>
        <a href="/categories" className="btn-main">Explore Categories</a>
      </section>

    </div>
  );
}

export default About;

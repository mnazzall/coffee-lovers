import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./home.css"

function Home() {
  return (
    <div className="home">
      <div className="top-image-container">
        <img
          className="home-img"
          src="/photos/coffeeToWrite.jpeg"
          alt="Coffee Beans"
        />
        <div className="text-overlay">
          <h1>What is Coffee?</h1>
        </div>
      </div>
      <div className="intro-text">
        <p>
          Coffee is a brewed beverage made from roasted and ground seeds of the
          coffee plant-most often served hot, but also enjoyed iced. Its
          distinctive, somewhat bitter flavor and stimulating effect stem
          primarily from caffeine, though decaffeinated options are also
          available.
        </p>
      </div>
      <div className="intro-history-section">
        <h1>Origins & Early History</h1>
        <p>
          Coffee has its roots in the Ethiopian Highlands—specifically the
          region historically known as Kaffa—dating as far back as the 9th
          century, where legend tells of a goat herder, Kaldi, who observed his
          goats becoming unusually energetic after eating coffee cherries.
        </p>
        <p>
          By the 15th century, coffee cultivation and consumption had spread to
          Yemen, flourishing in Sufi monasteries. From there, it traveled across
          the Middle East, reaching Europe by the 16th and 17th centuries via
          trade routes.
        </p>
        <Link to="/history">
        <button className="learn-more-button">Learn More...</button>
        </Link>
      </div>
      <div className="coffee-varieties-section">
        <h1>Coffee Varieties & Botany</h1>
        <div><img src="/photos/ArabicaAndRobusta.jpeg" alt="Arabica and Robusta Coffee Beans" /></div>
        <ul>
          <li>
            Arabica is valued for its smoother, sweeter, more aromatic profile
            and accounts for approximately 60–80% of global coffee production.
          </li>
          <li>
            Robusta offers a stronger, more bitter flavor and higher caffeine
            content, and is generally more resilient and lower-cost.
          </li>
        </ul>
      </div>



     
      {/* <div className="first-section">
        <div className="coffeeTree-img-container">
          <img src="/photos/CoffeeTree.jpeg" alt="Coffee Tree" />
        </div>
        <div className="coffee-info">
          <h1>What is coffee made of? Meet the coffee tree.</h1>
          <br />
          <br />
          <p>
            Coffee trees have range. They can be anything from small shrubs to
            tall trees, and if they’re not pruned, they can grow to more than 30
            feet (9 meters) high. Their veiny, waxy leaves can measure from one
            to 16 inches in size, and their colors can range from purple to
            yellow to dark green (the most common). Each tree is covered in
            leaves, which grow in pairs across from each other, and the coffee
            cherries grow along the branches. The average coffee tree produces
            10 pounds of coffee cherries per year, or 2 pounds of green,
            unprocessed beans.
          </p>
        </div>
      </div>

      <div className="second-section">
        <h1>The lifespan of a coffee tree</h1>
        <ul className="timeline">
          <li>
            <strong>100 years:</strong> How long a coffee tree can live
          </li>
          <li>
            <strong>Nearly 1 year:</strong> A coffee cherry matures (after first
            flowering)
          </li>
          <li>
            <strong>3 years:</strong> A coffee tree begins producing cherries
            (approximately)
          </li>
          <li>
            <strong>5 years:</strong> A coffee tree reaches full cherry
            production
          </li>
          <li>
            <strong>7-20 years:</strong> The time when a coffee tree is
            generally most productive
          </li>
        </ul>
      </div>

      <div className="third-section">
        <div className="coffeeInside-text">
          <h1>Inside the coffee cherry</h1>
          <p>
            While the characteristics of different coffee trees can vary widely,
            their cherries share a similar structure – and each part plays a
            role in the coffee you drink.
          </p>
        </div>
        <div className="coffeeInside-img-container">
          <img src="/photos/coffeeInside.jpeg" alt="Coffee Cherry Diagram" />
        </div>
        <div className="coffeeInside-info">
          <ul>
            <li>
              <strong>Outer skin (exocarp):</strong> The outermost layer of the
              coffee cherry. It is generally thin and smooth, and as it ripens,
              it transitions from green to yellow to red.
            </li>
            <li>
              <strong>Pulp (mesocarp):</strong> The juicy pulp around the coffee
              beans. This layer gives the cherry its sweetness, contributing to
              the overall flavor profile.
            </li>
            <li>
              <strong>Parchment (endocarp):</strong> A thin layer that covers
              and protects the beans as they develop within the cherry.
            </li>
            <li>
              <strong>Silver skin (testa, epidermis):</strong> The outer layer
              of the bean. This tissue supports the bean in its early
              development.
            </li>
            <li>
              <strong>Bean (endosperm):</strong> The core of the coffee bean. It
              contains carbohydrates, proteins, and lipids that influence the
              flavor and aroma of the coffee beans when brewed.
            </li>
          </ul>
        </div>
      </div>
 */}

    </div>
  );
}

export default Home;

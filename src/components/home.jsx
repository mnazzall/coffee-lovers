import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./home.css";

const categories = [
  {
    title: "Coffee Beans & Varieties",
    image: "/coffee-lovers/photos/CoffeeBeansAndVarieties.jpeg",
    description: "Learn about Arabica, Robusta, and rare coffee types",
    link: "/BeansAndVarieties",
    button: "Explore Beans",
  },
  {
    title: "Brewing Methods",
    image: "/coffee-lovers/photos/BrewingMethods.jpeg",
    description: "Discover classic and modern brewing techniques",
    link: "/BrewingMethods",
    button: "Learn Brewing",
  },
  {
    title: "Roasting Levels",
    image: "/coffee-lovers/photos/gradientOfBeans.png",
    description: "Understand how roasting affects flavor",
    link: "/RoastingLevels",
    button: "Explore Roasting",
  },
  {
    title: "Coffee Culture",
    image: "/coffee-lovers/photos/CafeCulture.jpeg",
    description: "Learn global coffee traditions and ceremonies",
    link: "/Culture",
    button: "Explore Culture",
  },
  {
    title: "Health & Benefits",
    image: "/coffee-lovers/photos/Health.jpeg",
    description: "Discover coffee’s effects on your body and mind",
    link: "/HealthAndBenefits",
    button: "Learn Health",
  },
  {
    title: "Coffee Recipes",
    image: "/coffee-lovers/photos/Recipes.jpeg",
    description: "Try classic, trendy, and dessert recipes",
    link: "/Recipes",
    button: "View Recipes",
  },
  {
    title: "Around the World",
    image: "/coffee-lovers/photos/AroundTheWorld.jpeg",
    description: "Explore regional coffee practices and flavors",
    link: "/AroundTheWorld",
    button: "Explore World",
  },
  {
    title: "Sustainability & Trade",
    image: "/coffee-lovers/photos/SusTrade.jpeg",
    description: "Learn about ethical sourcing and environmental impact",
    link: "/SustainabilityAndTrade",
    button: "Learn Sustainability",
  },
];

const images = [
  "/coffee-lovers/photos/G1.jpeg",
  "/coffee-lovers/photos/G2.jpeg",
  "/coffee-lovers/photos/G3.jpeg",
  "/coffee-lovers/photos/G4.jpeg",
  "/coffee-lovers/photos/G5.jpeg",
  "/coffee-lovers/photos/G6.jpeg",
  "/coffee-lovers/photos/G7.jpeg",
  "/coffee-lovers/photos/G8.jpeg",
  "/coffee-lovers/photos/G9.jpeg",
  "/coffee-lovers/photos/G10.jpeg",
];

function Home() {

  const [offset, setOffset] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const cardRef = useRef(null);

  const [current, setCurrent] = useState(0);
  const [galleryWidth, setGalleryWidth] = useState(0);
  const galleryRef = useRef(null);


  useEffect(() => {
    const updateWidth = () => {
      if (cardRef.current) {
        setCardWidth(cardRef.current.offsetWidth + 20); // include margin
      }
    };

    updateWidth(); 
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);


  useEffect(() => {
    const updateWidth = () => {
      if (galleryRef.current) {
        setGalleryWidth(galleryRef.current.offsetWidth  + 20); // include margin
      }
    };

    updateWidth(); 
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);


  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => (prev + 1) % categories.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const prevSlide = () =>
    setOffset((prev) => (prev - 1 < 0 ? categories.length - 1 : prev - 1));

  const nextSlide = () => setOffset((prev) => (prev + 1) % categories.length);

  return (
    <div className="home">
      <div className="top-image-container">
        <div className="top-image-wrapper">
          <img
            className="home-img"
            src="/coffee-lovers/photos/coffeeToWrite.jpeg"
            alt="Coffee Beans"
          />
        </div>
        <div className="text-overlay">
          <h1>Discover the World of Coffee</h1>
          <p>Everything you need to know about coffee in one place</p>
        </div>
      </div>

      <div className="intro-text">
        <p>
          Coffee is brewed from roasted seeds of the Coffea plant, enjoyed
          worldwide for its flavor, aroma, and culture. On this website, you’ll
          explore coffee beans, brewing methods, recipes, global culture, and
          health benefits.
        </p>
        <Link to="/About">
          <button className="learn-more-button">Learn More...</button>
        </Link>
      </div>

      <div className="intro-history-section">
        <h1>Origins & Early History</h1>
        <p>
          Coffee has its roots in the Ethiopian Highlands-specifically the
          region historically known as Kaffa-dating as far back as the 9th
          century, where legend tells of a goat herder, Kaldi, who observed his
          goats becoming unusually energetic after eating coffee cherries.
          <br />
          <br />
          By the 15th century, coffee cultivation and consumption had spread to
          Yemen, flourishing in Sufi monasteries. From there, it traveled across
          the Middle East, reaching Europe by the 16th and 17th centuries via
          trade routes.
        </p>
        <Link to="/History">
          <button className="learn-more-button">Learn More...</button>
        </Link>
        
      </div>

      <div className="carousel-container">
        <button className="arrow left" onClick={prevSlide}>
          &#10094;
        </button>
        <div className="carousel-wrapper">
          <div
            className="carousel"
            style={{
              transform: `translateX(-${offset * cardWidth}px)`,
            }}
          >
            {categories.concat(categories).map((cat, index) => (
              <div
                className="card"
                ref={index === 0 ? cardRef : null}
                key={index}
              >
                <img src={cat.image} alt={cat.title} />
                <h3>{cat.title}</h3>
                <p>{cat.description}</p>
                <Link to={cat.link}>
                  <button className="card-button">{cat.button}</button>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <button className="arrow right" onClick={nextSlide}>
          &#10095;
        </button>
      </div>

      <div className="intro-text">
        <h2>Did You Know?</h2>
        <p>
          Did you know? Coffee was discovered in Ethiopia in the 9th century and
          has been fueling creativity ever since.
        </p>
      </div>

      <div className="gallery-section">
        <h1>Gallery Preview</h1>

        <div className="gallery-image-wrapper">
          <div
            className="gallery-img"
            style={{ transform: `translateX(-${current * galleryWidth}px)` }}
          >
            {images.concat(images).map((img, index) => (
              <div
                className="card-img"
                key={index}
                ref={index === 0 ? galleryRef : null}
              >
                <img src={img} alt={`coffee-${index}`} />
              </div>
            ))}
          </div>
        </div>

        <div className="dots">
          {images.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === current % images.length ? "active" : ""}`}
              onClick={() => setCurrent(i)}
            ></span>
          ))}
        </div>

        
      </div>

    </div>
  );
}

export default Home;

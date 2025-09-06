import React from "react";
import "./about.css";

function About() {
  return (
    <div className="about-container">
      <div className="coffee-tree-image">
        <img src="/coffee-lovers/photos/CoffeeTree.jpeg" alt="Coffee Tree" />
      </div>

      <div className="What-is-Coffee">
        <h1>What is Coffee?</h1>
        <p>
          Coffee is a beverage made from roasted beans of the Coffea plant, but
          it is far more than that. It’s a global tradition, an economic
          powerhouse, a cultural symbol, and for many, an essential daily
          ritual. From its rich aroma to its complex flavors, coffee touches
          nearly every aspect of modern life—work, leisure, and even art.
        </p>
      </div>

      <div className="Why-Coffee-Matters">
        <h1>Why Coffee Matters</h1>
        <ul>
          <li>
            <strong>Daily Life: </strong>For billions, coffee is the first step
            of the morning, a companion during work, or a moment of pause in a
            busy day.
          </li>
          <li>
            <strong>Culture: </strong>Across the world, coffeehouses are
            gathering places for conversation, business, creativity, and
            friendship.
          </li>
          <li>
            <strong>Global Economy: </strong>Coffee supports more than 10
            million farming families worldwide, making it one of the most
            valuable agricultural products.
          </li>
        </ul>
      </div>

      <div className="Coffees-Role-in-the-World">
        <h1>Coffee’s Role in the World</h1>
        <h3>
          Coffee is truly international—grown in tropical regions but consumed
          everywhere. Each cup represents:
        </h3>
        <ul>
          <li>
            <strong>The farmer’s dedication</strong> – from planting to harvest.
          </li>
          <li>
            <strong>The roaster’s craft</strong> – transforming raw beans into
            aromatic blends.
          </li>
          <li>
            <strong>The consumer’s experience</strong> – savoring flavors shaped
            by origin, roast, and preparation.
          </li>
        </ul>
        <h4>
          This chain of connection makes coffee one of the most unifying
          beverages in human history.
        </h4>
      </div>

      <div className="What-Makes-Coffee-Unique">
        <h1>What Makes Coffee Unique</h1>
        <h3>Coffee is unlike any other drink because of its:</h3>
        <ul>
          <li>
            <strong>Flavor diversity:</strong> More than 800 aromatic compounds
            can be found in coffee, giving it endless taste possibilities.
          </li>
          <li>
            <strong>Adaptability:</strong> Hot or iced, light or strong, quick
            espresso or slow brew—it fits every personality and mood.
          </li>
          <li>
            <strong>Ritual & experience:</strong> Making coffee can be a simple
            routine or an elaborate craft, but it’s always personal.
          </li>
        </ul>
      </div>

      <div className="Coffee-and-Community">
        <h1>Coffee and Community</h1>
        <h3>Wherever it is found, coffee brings people together:</h3>
        <ul>
          <li>
            In Europe, cafés were once called “penny universities” because of
            the knowledge exchanged over a single cup.
          </li>
          <li>
            In the Middle East, coffeehouses were hubs of poetry, music, and
            conversation.
          </li>
          <li>
            Today, coffee shops remain centers for creativity, remote work, and
            social connection.
          </li>
        </ul>
      </div>

      <div className="Fascinating-Facts-About-Coffee">
        <h1>Fascinating Facts About Coffee</h1>
        <ul>
          <li>Coffee is the second most traded commodity after oil.</li>
          <li>
            Over 2.25 billion cups of coffee are consumed worldwide every day.
          </li>
          <li>A coffee tree takes 3–4 years before producing cherries</li>
          <li>
            Finland has the highest coffee consumption per capita in the world.
          </li>
          <li>
            Beethoven was such a fan that he counted exactly 60 beans for each
            cup he made.
          </li>
        </ul>
      </div>

      <div className="Our-Passion-for-Coffee">
        <h1>Our Passion for Coffee</h1>
        <p>
          To us, coffee is not just a drink—it’s a story of people, culture, and
          connection. It represents the dedication of farmers, the artistry of
          roasters, and the joy of sharing a cup with others.
        </p>
      </div>
    </div>
  );
}

export default About;

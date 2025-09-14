import React from "react";
import "./Culture.css";

function Culture() {
  return (
    <div className="culture-container">
      <div className="culture-intro-container">
        <img src="/coffee-lovers/photos/Cultureintro.jpg" alt="latte" />
        <h1>Coffee Culture</h1>
        <p>More than a drink—it's a way of life.</p>
      </div>
      <div className="culture-content-container">
        <p>
          Coffee is far more than a beverage—it’s a ritual, a tradition, and a
          shared experience connecting people worldwide. From its ancient
          origins to today’s specialty cafés, coffee has influenced communities,
          inspired creativity, and become a central part of daily life. This
          page explores the essence of coffee culture and why it continues to
          thrive across generations.
        </p>
      </div>
      <div className="culture-roots-container">
        <h1>The Roots of Coffee Culture</h1>
        <div className="culture-roots-shared">
          <h2>Ethiopian Origins-The Birthplace of Coffee</h2>
          <img
            src="/coffee-lovers/photos/Ethiopiancoffee.jpg"
            alt="Ethiopian coffee"
          />
          <p>
            Coffee’s story begins in Ethiopia around the 9th century. Legend
            tells of a goat herder named Kaldi whose goats became unusually
            energetic after eating red coffee cherries. Monks began using coffee
            to stay awake during prayers.
          </p>
          <ul>
            <li>
              <strong>Cultural Significance:</strong> Coffee ceremonies highlight hospitality and
              respect.
            </li>
            <li>
              <strong>Symbolism:</strong> Coffee represents community and shared
              experiences.
            </li>
          </ul>
        </div>
        <div className="culture-roots-shared">
          <h2>The Middle Eastern Coffeehouses-“Schools of the Wise”</h2>
          <img
            src="/coffee-lovers/photos/middleeastcoffee.jpg"
            alt="coffee on sand"
          />
          <p>
            By the 15th century, coffee spread to Yemen and the Middle East.
            Coffeehouses, or qahveh khaneh, became hubs for socializing, music,
            games, and debate.
          </p>
          <ul>
            <li>
              <strong>Impact:</strong> Encouraged learning, intellectual
              discussion, and networking.
            </li>
          </ul>
        </div>
        <div className="culture-roots-shared">
          <h2>European Expansion-Coffee Meets the Enlightenment</h2>
          <img
            src="/coffee-lovers/photos/Coffeetimein1600s.jpg"
            alt="Coffee time in 1600s"
          />
          <p>
            Coffee reached Europe in the 17th century. Initially controversial,
            coffeehouses quickly became centers of art, philosophy, and social
            interaction.
          </p>
          <ul>
            <li>
              <strong>English Coffeehouses:</strong> “Penny universities” where
              people exchanged ideas.
            </li>
            <li>
              <strong>French Cafés:</strong> Hotspots for writers and
              philosophers like Voltaire and Rousseau.
            </li>
            <li>
              <strong>Viennese Coffeehouse Tradition:</strong> Elegant spaces
              fostering intellectual exchange.
            </li>
          </ul>
        </div>
        <div className="culture-roots-shared">
          <h2>Global Spread-Coffee as a Commodity</h2>
          <img
            src="/coffee-lovers/photos/GlobalSpreadCoffeeasaCommodity.jpg"
            alt="coffee tree"
          />
          <p>
            By the 18th century, coffee plantations expanded in the Caribbean,
            South America, and Southeast Asia. Brazil became a global leader in
            production. Coffee evolved from an elite beverage to a daily staple.
          </p>
        </div>
      </div>

      <div className="Coffee-as-a-Social-Connector-container">
        <h1>Coffee as a Social Connector</h1>
        <div className="Coffee-as-a-Social-Connector">
        <div className="Coffee-as-a-Social-Connector-img">
          <img
            src="/coffee-lovers/photos/FreeFriendsEnjoyingCoffee.jpg"
            alt="Friends Enjoying Coffee"
          />
        </div>
        <div className="Coffee-as-a-Social-Connector-list">
          <ul>
            <li>
              <strong>Gathering Spaces:</strong> Cafés serve as modern social
              hubs for friends, students, and professionals.
            </li>
            <li>
              <strong>Ceremonies & Rituals:</strong> From Ethiopian coffee
              ceremonies to European coffeehouse traditions, rituals create
              meaningful experiences.
            </li>
            <li>
              <strong>Work & Study:</strong> Cafés act as “third places” outside
              home and work for studying, meetings, and relaxation.
            </li>
          </ul>
        </div>
        </div>
      </div>

      <div className="coffee-lifestyle-container">
        <h1>The Modern Coffee Lifestyle</h1>
        <div className="coffee-lifestyle">
        <div className="coffee-lifestyle-img">
          <img
            src="/coffee-lovers/photos/Baristadoingesspreso.jpg"
            alt="Barista doing esspreso"
          />
        </div>
        <div className="coffee-lifestyle-list">
          <ul>
            <li>
              <strong>Third-Wave Coffee Movement:</strong> Focuses on quality,
              sustainability, and artisanal brewing.
            </li>
            <li>
              <strong>Home Brewing Renaissance:</strong> Pour-overs, French
              presses, and espresso machines allow coffee to become a personal
              ritual.
            </li>
            <li>
              <strong>Coffee & Creativity:</strong> Coffee fuels writers,
              artists, and innovators by offering comfort, energy, and
              inspiration.
            </li>
          </ul>
        </div>
        </div>
      </div>

      <div className="Fun-Facts-About-Coffee-Culture-container">
        <h1>Fun Facts About Coffee Culture</h1>
        <ul>
          <li>
            Coffee is the second most traded commodity in the world after oil.
          </li>
          <li>Over 2 billion cups are consumed globally every day.</li>
          <li>
            Coffee breaks are often considered essential for wellbeing and
            productivity.
          </li>
          <li>
            Traditions vary—some cultures favor fast coffee, others focus on
            ceremonial preparation.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Culture;

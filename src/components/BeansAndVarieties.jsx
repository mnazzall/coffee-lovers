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
        <div className="content-section-image">
          <img
            src="/coffee-lovers/photos/coffeeTreeForBeansAndVerieties.jpeg"
            alt="coffee tree"
          />
        </div>
        <div className="content-section-text">
          <p>
            Coffee beans are the seeds of the coffee cherry, and while over 100
            species exist, only a few are widely cultivated. Each bean type
            offers unique flavors, caffeine levels, and cultural significance.
          </p>
        </div>
      </div>

      <div className="varieties-section">
        <div className="variety-card">
          <img
            src="/coffee-lovers/photos/ArabicaBeans.jpeg"
            alt="arabica beans"
          />
          <h1>Arabica (Coffea Arabica)</h1>
          <ul>
            <li>60–70% of world production</li>
            <li>Smooth, fruity, floral</li>
            <li>Best for: Specialty & lattes</li>
            <li>Sub-varieties (Typica, Bourbon, Geisha, etc.)</li>
          </ul>
        </div>
        <div className="variety-card">
          <img
            src="/coffee-lovers/photos/EspressoCup.jpeg"
            alt="arabica beans"
          />
          <h1>Robusta (Coffea Canephora)</h1>
          <ul>
            <li>30–40% of world production</li>
            <li>Strong, bold, bitter</li>
            <li>Higher caffeine (2–2.7%)</li>
            <li>Best for: Espresso & instant</li>
          </ul>
        </div>
        <div className="variety-card">
          <img src="/coffee-lovers/photos/Liberica.jpeg" alt="arabica beans" />
          <h1>Liberica (Coffea Liberica)</h1>
          <ul>
            <li>Grown in Philippines, Malaysia, West Africa</li>
            <li>Fruity, smoky, woody</li>
            <li>Rare & unique</li>
          </ul>
        </div>
        <div className="variety-card">
          <img
            src="/coffee-lovers/photos/ExcelsaCoffee.jpeg"
            alt="arabica beans"
          />
          <h1>Excelsa (Coffea Excelsa)</h1>
          <ul>
            <li>Tart, fruity, wine-like</li>
            <li>Adds depth in blends</li>
            <li>Very rare</li>
          </ul>
        </div>
      </div>

      <div className="detailed-info-section">
        <h1>Inside the Coffee Bean</h1>
        <p>
          A coffee bean is not actually a bean at all, but the seed of a fruit
          called the coffee cherry. Each cherry is wrapped in several protective
          layers: the outer skin, a sticky layer of pulp, the parchment shell,
          and finally a thin silver skin that clings to the seed. In most
          cherries, there are two seeds lying flat against each other, but in
          around 5–10% of cherries, only one seed develops. This single round
          seed is known as a peaberry, and it is often prized for its more
          concentrated flavors and even roasting properties. <br />
          <br /> The physical form of the bean itself can tell you a lot about
          its type. Arabica beans are oval and slightly larger, with a curved
          crease running along the flat side. Robusta beans are smaller,
          rounder, and usually have a straighter crease. Liberica beans are
          irregular and much larger, often with an asymmetrical shape. These
          structural differences affect how the beans are processed, roasted,
          and ultimately how their flavors are extracted in the cup.
        </p>
      </div>

      <div className="detailed-info-section">
        <h1>Cultivars & Sub-Varieties</h1>
        <p>
          While Arabica and Robusta are the dominant commercial species, the
          world of coffee goes much deeper. Within these species exist countless
          cultivars and sub-varieties that have been shaped by geography,
          climate, and careful cultivation over centuries.
          <br />
          <br />
          Arabica, in particular, is incredibly diverse. Typica and Bourbon are
          two of the most historically important cultivars, forming the genetic
          base for many others. Typica is known for its clean, balanced flavor,
          while Bourbon offers sweeter, more complex notes. From these origins,
          many distinct cultivars emerged: Geisha (or Gesha), originally from
          Ethiopia but made famous in Panama, is celebrated for its tea-like
          body and intense floral aroma. SL28 and SL34, developed in Kenya, are
          admired for their bright acidity and wine-like fruitiness. Pacamara, a
          cross between Pacas and Maragogipe, is notable for its giant beans and
          bold flavors.
          <br />
          <br />
          Robusta has fewer well-known cultivars but plays an essential role in
          global coffee production due to its resistance to disease and higher
          caffeine content. Hybrid varieties such as Catimor and Sarchimor
          combine the resilience of Robusta with the flavor complexity of
          Arabica, ensuring sustainable production in regions prone to pests and
          climate challenges.
        </p>
      </div>

      <div className="detailed-info-section">
        <h1>Global Reach & Rare Varieties</h1>
        <img
          src="/coffee-lovers/photos/BeanBelt.jpeg"
          alt="coffee beans world map"
        />
        <p>
          Coffee beans are truly global, grown in more than 70 countries across
          the “coffee belt” between the Tropics of Cancer and Capricorn. Arabica
          thrives in high-altitude regions with cooler climates, making
          countries like Ethiopia, Colombia, Costa Rica, and Brazil famous for
          their distinctive flavors. Robusta, which is hardier and better suited
          to lower elevations, is concentrated in Vietnam, Uganda, India, and
          parts of Brazil. Liberica and Excelsa are far rarer, found mainly in
          the Philippines, Malaysia, and small parts of West Africa.
          <br />
          <br />
          Beyond their agricultural role, coffee beans are also an economic
          lifeline. Coffee is the second-most traded commodity in the world
          after oil, and more than 25 million farming families depend on it for
          their livelihoods. The type of bean grown in each region not only
          shapes local economies but also defines cultural traditions of coffee
          drinking.
          <br />
          <br />
          Among these beans, a few stand out for their rarity and prestige.
          Jamaica Blue Mountain is renowned for its smooth, mild character and
          limited production, making it one of the most expensive coffees in the
          world. Maragogipe, sometimes called “elephant beans,” produces
          unusually large Arabica beans with a lighter body and delicate taste.
          Exotic offerings like Kopi Luwak (processed by civets) and Black Ivory
          Coffee (processed by elephants) highlight the extremes of rarity and
          price, though they remain controversial in terms of ethics and
          sustainability.
        </p>
      </div>
    </div>
  );
}

export default BeansAndVarieties;

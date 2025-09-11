import React from "react";
import { Link } from "react-router-dom";
import "./BrewingMethods.css";

function BrewingMethods() {
  return (
    <div className="brewing-methods-container">
      <div className="brewing-first-section">
        <img
          src="/coffee-lovers/photos/brewinghero.jpeg"
          alt="Coffee Brewing"
        />
        <h1>Brewing Methods</h1>
        <h4>
          Discover how each brewing method unlocks different flavors, aromas,
          and textures from your coffee beans.
        </h4>
      </div>

      <div className="brewing-intro-section">
        <img
          src="/coffee-lovers/photos/brewingintro.jpeg"
          alt="Coffee Brewing Methods"
        />
        <p>
          Brewing coffee is both an art and a science. Each method impacts
          flavor, body, aroma, and acidity differently. From precise pour-overs
          to bold French Press immersion, this guide explores the most popular
          brewing methods in detail.
        </p>
      </div>

      <div className="methods-section">
        <div className="shared-methods-styles">
          <h1>Pour-Over (V60 / Chemex)</h1>
          <img
            src="/coffee-lovers/photos/pourover.jpeg"
            alt="Pour Over Coffee"
          />
          <h3>Equipment Needed:</h3>
          <ul>
            <li>Dripper (V60, Chemex, Kalita Wave)</li>
            <li>Paper filter</li>
            <li>Gooseneck kettle</li>
            <li>Scale & timer</li>
            <li>Grinder</li>
          </ul>
          <p>
            <strong>Grind Texture:</strong> Medium - like sea salt
          </p>
          <p>
            <strong>Best Beans:</strong> Light to medium roast, single origins
            (e.g., Ethiopian, Kenyan)
          </p>
          <h3>Brewing Science:</h3>
          <ul>
            <li>
              Gravity percolation extracts soluble compounds, highlighting
              aromatics and acidity.
            </li>
            <li>Blooming releases CO₂ to prevent sourness.</li>
            <li>Pour technique controls extraction balance.</li>
          </ul>
          <h3>Step-by-Step Instructions:</h3>
          <ol>
            <li>Rinse paper filter and preheat dripper/carafe.</li>
            <li>Add 20g medium grind coffee.</li>
            <li>Pour 60ml water → bloom 30s.</li>
            <li>
              Continue slow circular pours in 60-70ml increments until 320ml.
            </li>
            <li>Brew time: 3-4 minutes.</li>
            <li>Remove dripper, swirl, serve.</li>
          </ol>
          <h3>Tips & Variations:</h3>
          <ul>
            <li>Chemex: cleaner, lighter cup</li>
            <li>Kalita Wave: balanced extraction</li>
            <li>Adjust grind size to control flow rate</li>
          </ul>
        </div>

        <div className="shared-methods-styles">
          <h1>French Press</h1>
          <img
            src="/coffee-lovers/photos/frenchpress.jpeg"
            alt="French Press Coffee"
          />
          <h3>Equipment Needed:</h3>
          <ul>
            <li>French Press</li>
            <li>Coarse grinder</li>
            <li>Kettle</li>
            <li>Scale & timer</li>
          </ul>
          <p>
            <strong>Grind Texture:</strong> Coarse - like breadcrumbs
          </p>
          <p>
            <strong>Best Beans:</strong> Medium-dark to dark roast (e.g.,
            Colombian, Sumatran)
          </p>
          <h3>Brewing Science:</h3>
          <ul>
            <li>Immersion method: grounds steep fully → uniform extraction.</li>
            <li>Metal mesh allows oils and fines → full-bodied, rich cup.</li>
          </ul>
          <h3>Step-by-Step Instructions:</h3>
          <ol>
            <li>Add 30g coarse coffee to French Press.</li>
            <li>Pour 450ml hot water at 95°C.</li>
            <li>Stir gently, place lid with plunger up, steep 4 minutes.</li>
            <li>Press plunger slowly, serve immediately.</li>
          </ol>
          <h3>Tips & Variations:</h3>
          <ul>
            <li>Cold brew French Press: steep 12–18 hours</li>
            <li>Optional paper filter for cleaner cup</li>
          </ul>
        </div>

        <div className="shared-methods-styles esspresso-method">
          <h1>Espresso</h1>
          <img
            src="/coffee-lovers/photos/espresso.jpeg"
            alt="Espresso Coffee"
          />
          <h3>Equipment Needed:</h3>
          <ul>
            <li>Espresso machine</li>
            <li>Fine grinder</li>
            <li>Tamper, scale, timer</li>
          </ul>
          <p>
            <strong>Grind Texture:</strong> Very fine - like powdered sugar
          </p>
          <p>
            <strong>Best Beans:</strong> Medium-dark blends, Brazilian or
            Italian
          </p>
          <h3>Brewing Science:</h3>
          <ul>
            <li>
              High pressure (~9 bars) extracts oils and solubles in 25–30
              seconds.
            </li>
            <li>Crema forms from emulsified oils & CO₂.</li>
            <li>
              Extraction balance is critical: under → sour, over → bitter.
            </li>
          </ul>
          <h3>Step-by-Step Instructions:</h3>
          <ol>
            <li>Grind 18g fine coffee.</li>
            <li>Dose & tamp evenly in portafilter.</li>
            <li>Brew at 93°C, 9 bars pressure.</li>
            <li>Extract ~36g in 25–30 seconds.</li>
            <li>Serve or use as base for latte/cappuccino.</li>
          </ol>
          <h3>Tips & Variations:</h3>
          <ul>
            <li>Ristretto: shorter, more concentrated shot</li>
            <li>Lungo: longer, more diluted shot</li>
          </ul>
        </div>

        <div className="shared-methods-styles aeroPress-method">
          <h1>AeroPress</h1>
          <img
            src="/coffee-lovers/photos/aeroPress.jpeg"
            alt="AeroPress Coffee"
          />
          <h3>Equipment Needed:</h3>
          <ul>
            <li>AeroPress</li>
            <li>Paper filter</li>
            <li>Kettle, scale, timer</li>
          </ul>
          <p>
            <strong>Grind Texture:</strong> Medium-fine
          </p>
          <p>
            <strong>Best Beans:</strong> Light to medium roast, single origin or
            blends
          </p>
          <h3>Brewing Science:</h3>
          <ul>
            <li>Immersion + gentle pressure → smooth extraction.</li>
            <li>Short contact time preserves delicate aromatics.</li>
          </ul>
          <h3>Step-by-Step Instructions:</h3>
          <ol>
            <li>Set up inverted AeroPress, plunger at bottom.</li>
            <li>Add 17g coffee.</li>
            <li>Pour 250ml water at 85–92°C, stir 10–15 seconds.</li>
            <li>Steep 1–2 minutes.</li>
            <li>Flip and press slowly for 20–30 seconds.</li>
          </ol>
          <h3>Tips & Variations:</h3>
          <ul>
            <li>Standard upright method → lighter taste</li>
            <li>Cold brew AeroPress: steep 12–24 hours</li>
          </ul>
        </div>

        <div className="shared-methods-styles coldBrew-method">
          <h1>Cold Brew</h1>
          <img
            src="/coffee-lovers/photos/coldBrew.jpeg"
            alt="Cold Brew Coffee"
          />
          <h3>Equipment Needed:</h3>
          <ul>
            <li>Mason jar or cold brew maker</li>
            <li>Coarse coffee</li>
            <li>Filter/cloth</li>
            <li>Refrigerator</li>
          </ul>
          <p>
            <strong>Grind Texture:</strong> Coarse - like sea salt
          </p>
          <p>
            <strong>Best Beans:</strong> Dark roast, low-acidity beans
          </p>
          <h3>Brewing Science:</h3>
          <ul>
            <li>Cold water extraction → less acidic, smooth, sweet.</li>
            <li>Long steep allows oils and soluble compounds to extract.</li>
          </ul>
          <h3>Step-by-Step Instructions:</h3>
          <ol>
            <li>Combine 100g coarse coffee with 500ml cold water.</li>
            <li>Stir gently, cover, refrigerate 12–24 hours.</li>
            <li>Strain through cloth or filter.</li>
            <li>Dilute 1:1 for serving.</li>
          </ol>
          <h3>Tips & Variations:</h3>
          <ul>
            <li>Nitro cold brew: infused with nitrogen</li>
            <li>Add vanilla, cinnamon, or chocolate for flavor</li>
          </ul>
        </div>

        <div className="shared-methods-styles mokaPot-method">
          <h1>Moka Pot (Stovetop Espresso)</h1>
          <img src="/coffee-lovers/photos/mokaPot.jpeg" alt="Moka Pot Coffee" />
          <h3>Equipment Needed:</h3>
          <ul>
            <li>Moka Pot</li>
            <li>Medium-fine coffee</li>
            <li>Stove</li>
          </ul>
          <p>
            <strong>Grind Texture:</strong> Medium-fine – slightly coarser than
            espresso
          </p>
          <p>
            <strong>Best Beans:</strong> Dark roast, Italian blends
          </p>
          <h3>Brewing Science:</h3>
          <ul>
            <li>
              Steam pressure forces hot water through coffee → strong
              espresso-like flavor.
            </li>
            <li>
              Less control than espresso machine → slightly more bitter notes.
            </li>
          </ul>
          <h3>Step-by-Step Instructions:</h3>
          <ol>
            <li>
              Fill bottom chamber with preheated water below the safety valve.
            </li>
            <li>Add 18g coffee to basket, do not tamp.</li>
            <li>Assemble pot and place on medium heat.</li>
            <li>Coffee rises in 4–5 minutes; remove at first gurgle.</li>
            <li>Serve hot.</li>
          </ol>
          <h3>Tips & Variations:</h3>
          <ul>
            <li>Add sugar to basket for a sweeter brew</li>
            <li>Serve with milk for traditional caffè latte</li>
          </ul>
        </div>
      </div>

      <div className="comparison-table-section">
        <table>
          <thead>
            <tr>
              <th>Method</th>
              <th>Grind</th>
              <th>Brew Time</th>
              <th>Ratio</th>
              <th>Flavor Profile</th>
              <th>Body</th>
              <th>Equipment Needed</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Pour-Over</td>
              <td>Medium</td>
              <td>3-4 min</td>
              <td>1:16</td>
              <td>Bright, clean</td>
              <td>Light</td>
              <td>Dripper, filter, kettle, scale</td>
            </tr>
            <tr>
              <td>French Press</td>
              <td>Coarse</td>
              <td>4 min</td>
              <td>1:15</td>
              <td>Bold, earthy</td>
              <td>Full</td>
              <td>French Press, kettle, scale</td>
            </tr>
            <tr>
              <td>Espresso</td>
              <td>Fine</td>
              <td>25-30 sec</td>
              <td>1:2</td>
              <td>Rich, intense</td>
              <td>Full</td>
              <td>Espresso machine, fine grinder, tamper, scale</td>
            </tr>
            <tr>
              <td>AeroPress</td>
              <td>Medium-fine</td>
              <td>2 min</td>
              <td>1:15</td>
              <td>Smooth, mild</td>
              <td>Medium</td>
              <td>AeroPress, paper filter, kettle, scale</td>
            </tr>
            <tr>
              <td>Cold Brew</td>
              <td>Coarse</td>
              <td>12-24 h</td>
              <td>1:5</td>
              <td>Sweet, smooth</td>
              <td>Medium</td>
              <td>Mason jar/cold brew maker, filter/cloth</td>
            </tr>
            <tr>
              <td>Moka Pot</td>
              <td>Medium-fine</td>
              <td>4-5 min</td>
              <td>1:7</td>
              <td>Strong, slightly bitter</td>
              <td>Medium</td>
              <td>Moka Pot, stove, medium-fine coffee</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="explore-beans-section">
        <img
          src="/coffee-lovers/photos/brewingclose.jpeg"
          alt="A group of friends sitting around an urban cafe table sharing coffee cups with intricate latte art"
        />
        <p>
          Every method is a journey into the bean’s hidden flavors. Experiment
          with ratios, grind sizes, and techniques to find your personal
          favorite cup.
        </p>
        <Link to="/BeansAndVarieties">
          <button className="card-button">Explore Beans</button>
        </Link>
      </div>
    </div>
  );
}

export default BrewingMethods;

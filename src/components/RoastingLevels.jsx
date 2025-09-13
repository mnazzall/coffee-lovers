import React from "react";
import "./RoastingLevels.css";

function RoastingLevels() {
  return (
    <div className="roasting-levels-container">
      <div className="roasting-levels-intro">
        <img
          src="/coffee-lovers/photos/roastingintro.jpg"
          alt="Roasting Levels"
        />
        <h1>Coffee Roasting Levels</h1>
        <p>
          Roasting is the stage where green coffee beans transform into the
          aromatic, flavorful beans we know and love. The roast level determines
          the taste, aroma, body, and even caffeine content of your cup. From
          light and bright to dark and bold, each roast offers a unique
          experience.
        </p>
      </div>

      <div className="roasting-levels-what-happens">
        <h1>What Happens During Roasting?</h1>

        <div className="roasting-levels-what-happens-container">

        <div className="roasting-levels-what-happens-img">
        <img
          src="/coffee-lovers/photos/GreatRoastedCoffee.jpg"
          alt="Roasting Levels"
        />
        </div>

        <div className="roasting-levels-what-happens-list">
        <ul>
          <li>
            <strong>Color Change:</strong> Beans go from green → yellow → brown
            as sugars caramelize.
          </li>
          <li>
            <strong>First Crack:</strong> A popping sound signals the release of
            steam-this is when light roasts are achieved.
          </li>
          <li>
            <strong>Second Crack:</strong> A second round of cracks happens as
            oils emerge-common in darker roasts.
          </li>
          <li>
            <strong>Flavor Development:</strong> Longer roasting reduces acidity
            but increases bitterness and smoky notes.
          </li>
        </ul>
        </div>

        </div>

      </div>

      <div className="roasting-levels-main-levels">
        <h1>Main Coffee Roasting Levels</h1>
        <ol>
          <li>
            Light Roast
            <ul>
              <li>
                <strong>Color:</strong> Light brown, no oils on surface.
              </li>
              <li>
                <strong>Flavor:</strong> Bright, acidic, floral, and fruity
                notes.
              </li>
              <li>
                <strong>Body:</strong> Lighter, tea-like.
              </li>
              <li>
                <strong>Caffeine:</strong> Slightly higher than darker roasts.
              </li>
              <li>
                <strong>Common Names:</strong> Light City, Half City, Cinnamon
                Roast.
              </li>
              <li>
                <strong>Best For:</strong> Specialty single-origin beans,
                pour-over, Aeropress.
              </li>
            </ul>
          </li>
          <li>
            Medium Roast
            <ul>
              <li>
                <strong>Color:</strong> Medium brown, dry surface.
              </li>
              <li>
                <strong>Flavor:</strong> Balanced—acidity, sweetness, and body
                harmonize.
              </li>
              <li>
                <strong>body:</strong> Smooth and rounded.
              </li>
              <li>
                <strong>caffeine:</strong> Slightly less than light roast, but
                still high.
              </li>
              <li>
                <strong>Common Names:</strong> City Roast, American Roast,
                Breakfast Roast.
              </li>
              <li>
                <strong>Best For:</strong> Drip coffee, cold brew, everyday
                blends.
              </li>
            </ul>
          </li>
          <li>
            Medium-Dark Roast
            <ul>
              <li>
                <strong>color:</strong> Rich, dark brown, slight oil may appear.
              </li>
              <li>
                <strong>flavor:</strong> Bolder, deeper caramelization, notes of
                chocolate, spice, or nuttiness.
              </li>
              <li>
                <strong>body:</strong> Fuller and heavier.
              </li>
              <li>
                <strong>caffeine:</strong> Slightly lower than light/medium.
              </li>
              <li>
                <strong>Common Names:</strong> Full City Roast, After Dinner
                Roast, Vienna Roast.
              </li>
              <li>
                <strong>Best For:</strong> Espresso, French press, moka pot.
              </li>
            </ul>
          </li>
          <li>
            Dark Roast
            <ul>
              <li>
                <strong>color:</strong> Very dark brown to nearly black, oily
                surface.
              </li>
              <li>
                <strong>flavor:</strong> Smoky, bitter-sweet, with roasted notes
                (charcoal, dark chocolate).
              </li>
              <li>
                <strong>body:</strong> Heavy, bold, less acidity.
              </li>
              <li>
                <strong>caffeine:</strong> Lowest (though not dramatically
                less).
              </li>
              <li>
                <strong>Common Names:</strong> French Roast, Italian Roast,
                Espresso Roast.
              </li>
              <li>
                <strong>Best For:</strong> Espresso, cappuccinos, lattes, strong
                brews.
              </li>
            </ul>
          </li>
        </ol>
      </div>
      <div className="roasting-levels-choosing-the-right-roast">
        <h1>Choosing the Right Roast for You</h1>
        <div className="roasting-levels-choosing-the-right-roast-container">
        <div className="roasting-levels-choosing-the-right-roast-img">
        <img
          src="/coffee-lovers/photos/ChoosingtheRightRoastforYou.jpg"
          alt="Choosing the Right Roast for You"
        />
        </div>
        <div className="roasting-levels-choosing-the-right-roast-list">
        <ul>
          <li>
            <strong>Prefer Bright & Fruity?</strong> → Light Roast.
          </li>
          <li>
            <strong>Want Balance?</strong> → Medium Roast.
          </li>
          <li>
            <strong>Enjoy Rich & Chocolatey?</strong> → Medium-Dark Roast.
          </li>
          <li>
            <strong>Love Bold, Smoky Flavors?</strong> → Dark Roast.
          </li>
        </ul>
        </div>
        </div>
      </div>
      <div className="roasting-levels-myths-about-roasting-levels">
        <h1>Myths About Roasting Levels</h1>
        <ul>
          <li>
            <strong>Myth:</strong> Dark roast has more caffeine.
            <ul>
           <li> <strong>✅</strong> Light roasts often retain slightly more
            caffeine.</li>
            </ul>
          </li>
          <li>
            <strong>Myth:</strong> Dark roast = higher quality 
            <ul>
            <li><strong>✅</strong> Roast level ≠ bean quality-it’s about taste
            preference.</li>
            </ul>
          </li>
          <li>
            <strong>Myth:</strong> Light roast is always sour.
            <ul>
            <li><strong>✅</strong> Properly roasted light beans can be sweet
            and floral.</li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="roasting-levels-conclusion">
        <h1>Conclusion</h1>
        <p>
          Roast level is the key to coffee’s character. Whether you love the
          fruity vibrancy of a light roast, the harmony of a medium roast, or
          the bold depth of a dark roast, there’s a perfect roast for every
          taste.
        </p>
      </div>
      <div className="roasting-levels-quote">
        <p>
          "Roasting is the art of unlocking a coffee bean’s hidden flavors-every
          level tells a different story."
        </p>
      </div>
    </div>
  );
}

export default RoastingLevels;

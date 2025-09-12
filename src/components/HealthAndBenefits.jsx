import React from "react";
import "./HealthAndBenefits.css";

function HealthAndBenefits() {
  return (
    <div className="health-container">
      <div className="health-intro-container">
        <div className="health-intro-img">
          <img src="/coffee-lovers/photos/healthintro.jpg" alt="Latte" />
        </div>

        <div className="health-intro-content">
          <h1>The Health Benefits of Coffee</h1>
          <h4>
            Discover how your daily cup of coffee can boost your body and mind.
          </h4>
        </div>
      </div>

      <div className="health-p">
        <p>
          Coffee is more than just a morning ritual - it’s a beverage packed
          with beneficial compounds that can enhance your overall well-being.
          From boosting energy to supporting heart and brain health, coffee has
          a range of scientifically supported advantages when consumed in
          moderation.
        </p>
      </div>

      <div className="benefits-section">
        <h1>Key Health Benefits</h1>
        <ol>
          <li>
            Boosts Mental Alertness and Focus
            <ul>
              <li>
                Caffeine, the natural stimulant in coffee, blocks adenosine in
                the brain, reducing fatigue and increasing alertness.
              </li>
              <li>Improves concentration, memory, and cognitive function.</li>
              <li>
                Can enhance mood by increasing dopamine and serotonin levels.
              </li>
            </ul>
          </li>
          <li>
            Supports Physical Performance
            <ul>
              <li>
                Caffeine increases adrenaline levels, helping improve physical
                performance during exercise.
              </li>
              <li>
                Helps burn fat more efficiently by mobilizing fatty acids from
                fat tissues.
              </li>
            </ul>
          </li>
          <li>
            Rich in Antioxidants
            <ul>
              <li>
                Coffee is loaded with antioxidants like chlorogenic acid and
                polyphenols.
              </li>
              <li>
                These antioxidants help fight free radicals, reducing oxidative
                stress and lowering the risk of chronic diseases.
              </li>
            </ul>
          </li>
          <li>
            Heart Health
            <ul>
              <li>
                Moderate coffee consumption (2–4 cups per day) is linked to a
                lower risk of heart disease and stroke.
              </li>
              <li>
                Coffee may improve blood vessel function and reduce
                inflammation.
              </li>
            </ul>
          </li>
          <li>
            Supports Liver Health
            <ul>
              <li>
                Coffee consumption has been associated with a reduced risk of
                liver diseases such as fatty liver disease, fibrosis, and
                cirrhosis.
              </li>
              <li>It may help maintain healthy liver enzyme levels.</li>
            </ul>
          </li>
          <li>
            Reduces Risk of Certain Diseases
            <ul>
              <li>
                <strong>Type 2 Diabetes:</strong> Regular coffee drinkers have a
                lower risk of developing type 2 diabetes.
              </li>
              <li>
                <strong>Neurodegenerative Diseases:</strong> Studies suggest
                coffee may reduce the risk of Alzheimer’s and Parkinson’s
                disease.
              </li>
              <li>
                <strong>Some Cancers:</strong> Antioxidants in coffee may help
                reduce the risk of liver and colorectal cancers.
              </li>
            </ul>
          </li>
          <li>
            Supports Mental Health
            <ul>
              <li>
                Moderate coffee intake is linked to a lower risk of depression.
              </li>
              <li>Can improve mood and overall sense of well-being.</li>
            </ul>
          </li>
        </ol>
      </div>

      <div className="health-table-container">
        <table>
          <caption>Nutritional Profile (Per Cup)</caption>
          <thead>
            <tr>
              <th>Nutrient</th>
              <th>Amount (8 oz)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Calories</td>
              <td>2</td>
            </tr>
            <tr>
              <td>Protein</td>
              <td>0.3 g</td>
            </tr>
            <tr>
              <td>Fat</td>
              <td>0 g</td>
            </tr>
            <tr>
              <td>Carbohydrates</td>
              <td>0 g</td>
            </tr>
            <tr>
              <td>Caffeine</td>
              <td>80-100 mg</td>
            </tr>
            <tr>
              <td>Antioxidants</td>
              <td>High</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="Recommended-Consumption-container">
        <h1>Recommended Consumption</h1>
        <ul>
          <li>Optimal intake: 2-4 cups per day (up to 400 mg of caffeine).</li>
          <li>
            Avoid excessive consumption as it can cause insomnia, jitteriness,
            or increased heart rate.
          </li>
          <li>
            Best consumed black or with minimal sugar/cream for maximum health
            benefits.
          </li>
        </ul>
      </div>

      <div className="health-tips-container">
        <h1>Tips for a Healthier Coffee Experience</h1>
        <ol>
          <li>
            Choose high-quality beans: Arabica beans are richer in antioxidants.
          </li>
          <li>
            Limit added sugar and cream: Opt for natural sweeteners or milk
            alternatives.
          </li>
          <li>
            Mind the brewing method: Methods like pour-over or French press
            preserve more antioxidants.
          </li>
          <li>
            Stay hydrated: Coffee is mildly diuretic; drink water alongside your
            coffee.
          </li>
        </ol>
      </div>

      <div className="Recommended-Consumption-container">
        <h1>Fun Facts</h1>
        <ul>
          <li>
            Coffee is the second most traded commodity in the world after oil.
          </li>
          <li>
            Drinking coffee may help you live longer — moderate consumption is
            linked to increased lifespan.
          </li>
          <li>
            A cup of coffee contains more antioxidants than many fruits and
            vegetables.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HealthAndBenefits;

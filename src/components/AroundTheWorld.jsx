import React from "react";
import "./AroundTheWorld.css";

function AroundTheWorld() {
  return (
    <div className="around-the-world-container">
      <div className="aroundtheworld-intro-container">
        <img
          src="/coffee-lovers/photos/aroundtheworldintro.jpg"
          alt="coffee around the world"
        />
        <h1>Coffee Around the World</h1>
        <p>
          From the highlands of Ethiopia to the bustling cafés of Europe and the
          sweet iced blends of Asia, coffee is more than a drink — it’s a
          cultural journey.
        </p>
      </div>

      <div className="aroundtheworld-main-container">
        <div className="world-shared-img">
          <img
            src="/coffee-lovers/photos/aroundtheworldafrica.jpg"
            alt="coffee ceremony in ethiopia"
          />
        </div>
        <div className="world-shared">
          <h2>Africa – The Birthplace of Coffee</h2>
          <ul>
            <li>
              Ethiopia
              <ul>
                <li>Known as the origin of coffee.</li>
                <li>
                  Traditional Ethiopian coffee ceremony: beans roasted, ground,
                  and brewed in a jebena.
                </li>
                <li>
                  Served in three rounds (Abol, Tona, Baraka) symbolizing
                  respect and community.
                </li>
              </ul>
            </li>

            <li>
              Eritrea
              <ul>
                <li>Shares similar traditions with Ethiopia.</li>
                <li>
                  Coffee is often brewed with spices like ginger or cinnamon.
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="world-shared-img">
          <img
            src="/coffee-lovers/photos/aroundtheworldturkishcoffee.jpg"
            alt="turkish coffee"
          />
        </div>
        <div className="world-shared">
          <h2>Middle East – Spiritual & Social Roots</h2>
          <ul>
            <li>
              Yemen
              <ul>
                <li>First country to cultivate and trade coffee.</li>
                <li>Coffee brewed strong, sometimes with cardamom.</li>
                <li>Famous Port of Mocha gave the world “mocha coffee.”</li>
              </ul>
            </li>

            <li>
              Turkey
              <ul>
                <li>
                  <strong>Turkish coffee:</strong> finely ground beans simmered
                  in a cezve with sugar (not stirred afterward).
                </li>
                <li>
                  Recognized by UNESCO as an Intangible Cultural Heritage.
                </li>
                <li>
                  Traditionally served with Turkish delight and fortune-telling
                  from coffee grounds.
                </li>
              </ul>
            </li>

            <li>
              Saudi Arabia
              <ul>
                <li>
                  <strong>Gahwa:</strong> lightly roasted coffee with cardamom,
                  saffron, and cloves.
                </li>
                <li>Always served with dates, symbolizing hospitality.</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="world-shared-img">
          <img
            src="/coffee-lovers/photos/aroundtheworldparis.jpg"
            alt="coffee near to evil tower"
          />
        </div>
        <div className="world-shared">
          <h2>Europe – Coffeehouse Culture</h2>
          <ul>
            <li>
              Italy
              <ul>
                <li>The homeland of espresso.</li>
                <li>
                  Drinks like cappuccino, macchiato, and latte all originated
                  here.
                </li>
                <li>
                  Espresso bars are quick, social stops — Italians rarely
                  linger.
                </li>
              </ul>
            </li>

            <li>
              France
              <ul>
                <li>
                  <strong>Café au lait:</strong> brewed coffee with hot milk.
                </li>
                <li>
                  Parisian cafés became hubs for intellectuals, artists, and
                  revolutionaries.
                </li>
              </ul>
            </li>

            <li>
              Austria (Vienna)
              <ul>
                <li>
                  <strong>Viennese coffeehouses:</strong> elegant, social
                  gathering places.
                </li>
                <li>Famous for coffee served with whipped cream.</li>
                <li>Added to UNESCO’s Intangible Cultural Heritage list.</li>
              </ul>
            </li>

            <li>
              Greece
              <ul>
                <li>
                  <strong>Frappé:</strong> instant coffee shaken with sugar,
                  water, and ice → frothy, refreshing.
                </li>
                <li>Popular during hot Mediterranean summers.</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="world-shared-img">
          <img
            src="/coffee-lovers/photos/VietnameseIcedCoffee.jpg"
            alt="Vietnamese Iced Coffee"
          />
        </div>
        <div className="world-shared">
          <h2>Asia – Unique Flavors & Traditions</h2>
          <ul>
            <li>
              Vietnam{" "}
              <ul>
                <li>
                  <strong>Cà Phê Sữa Đá:</strong> strong coffee brewed through a
                  phin filter, mixed with condensed milk and poured over ice.
                </li>
                <li>
                  <strong>Egg Coffee (Cà Phê Trứng):</strong> coffee topped with
                  whipped egg yolk and sugar — creamy and rich.
                </li>
              </ul>
            </li>

            <li>
              Japan
              <ul>
                <li>Known for precision brewing (pour-over, siphon).</li>
                <li>Popularized canned coffee from vending machines.</li>
                <li>
                  Strong café culture blending modern minimalism with tradition.
                </li>
              </ul>
            </li>

            <li>
              India
              <ul>
                <li>
                  <strong>Indian Filter Coffee:</strong> brewed in a metal
                  filter, mixed with hot milk and sugar.
                </li>
                <li>
                  Strong, aromatic, and often served in a stainless steel
                  tumbler and dabarah.
                </li>
              </ul>
            </li>

            <li>
              Indonesia
              <ul>
                <li>Famous for Kopi Tubruk (unfiltered sweet coffee).</li>
                <li>
                  <strong>Kopi Luwak (civet coffee):</strong> beans digested by
                  civet cats — rare and expensive.
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="world-shared-img">
          <img
            src="/coffee-lovers/photos/aroundtheworldmaxic.jpg"
            alt="maxican coffee with cinnamon sticks"
          />
        </div>
        <div className="world-shared">
          <h2>Americas – Innovation & Modern Influence</h2>
          <ul>
            <li>
              Brazil
              <ul>
                <li>The world’s largest coffee producer.</li>
                <li>
                  Coffee often served cafezinho style: small, strong, very
                  sweet.
                </li>
                <li>Coffee is deeply tied to daily life and hospitality.</li>
              </ul>
            </li>

            <li>
              Colombia{" "}
              <ul>
                <li>Renowned for smooth, well-balanced Arabica beans.</li>
                <li>
                  Coffee farms welcome tourists to experience harvesting and
                  tasting.
                </li>
              </ul>
            </li>

            <li>
              United States{" "}
              <ul>
                <li>Popularized large chain cafés (Starbucks).</li>
                <li>Drip coffee is a household staple.</li>
                <li>Known for specialty and “third wave” coffee culture.</li>
              </ul>
            </li>

            <li>
              Mexico{" "}
              <ul>
                <li>
                  <strong>afé de Olla:</strong>C brewed with cinnamon and
                  piloncillo (unrefined sugar).
                </li>
                <li>Served in clay mugs for earthy flavor.</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <div className="aroundtheworld-table-container">
        <table>
          <caption>Comparison of Coffee Traditions</caption>
          <thead>
            <tr>
              <th>Country</th>
              <th>Local Name / Style</th>
              <th>Preparation Method</th>
              <th>Flavors / Additions</th>
              <th>Cultural Significance</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Saudi Arabia</td>
              <td>Gahwa (Arabic Coffee)</td>
              <td>
                Light roast, brewed with cardamom & saffron, served in dallah
              </td>
              <td>Cardamom, saffron, cloves</td>
              <td>Hospitality & respect, always with dates</td>
            </tr>
            <tr>
              <td>UAE</td>
              <td>Majlis Coffee</td>
              <td>Similar to Saudi style, often with rose water</td>
              <td>Rose water, cardamom</td>
              <td>Ritual of guest honor, served in social gatherings</td>
            </tr>
            <tr>
              <td>Yemen</td>
              <td>Mocha Coffee</td>
              <td>Brewed strong, often spiced</td>
              <td>Cardamom, cinnamon</td>
              <td>Birthplace of global coffee trade</td>
            </tr>
            <tr>
              <td>Oman</td>
              <td>Omani Kahwa</td>
              <td>Brewed in dallah, spiced heavier than Saudi</td>
              <td>Cloves, rose water, saffron</td>
              <td>Symbol of tradition & generosity</td>
            </tr>
            <tr>
              <td>Qatar / Bahrain</td>
              <td>Khaleeji Coffee</td>
              <td>Gulf-style, light roast</td>
              <td>Spices + always served with sweets</td>
              <td>Generosity & cultural pride</td>
            </tr>
            <tr>
              <td>Jordan</td>
              <td>Qahwa Sada (Bitter Coffee)</td>
              <td>Unsweetened, very bitter, served in 3 rounds</td>
              <td>Cardamom</td>
              <td>Ritualized serving: respect, friendship, hospitality</td>
            </tr>
            <tr>
              <td>Lebanon / Syria</td>
              <td>Ahweh</td>
              <td>Strong, dark, unfiltered, served in small cups</td>
              <td>Often cardamom</td>
              <td>Social drink, political & intellectual discussions</td>
            </tr>
            <tr>
              <td>Palestine</td>
              <td>Arabic/Turkish Blend</td>
              <td>Boiled in small pot, thick & strong</td>
              <td>Cardamom, sugar optional</td>
              <td>Family & community traditions</td>
            </tr>
            <tr>
              <td>Egypt</td>
              <td>Ahwa (Mazboot / Sada)</td>
              <td>Boiled strong, served in small glasses</td>
              <td>Variable sugar</td>
              <td>Café culture, everyday socializing</td>
            </tr>
            <tr>
              <td>Turkey</td>
              <td>Turkish Coffee</td>
              <td>Finely ground, boiled in cezve, unfiltered</td>
              <td>Sugar, sometimes cardamom</td>
              <td>UNESCO heritage, fortune-telling with grounds</td>
            </tr>
            <tr>
              <td>Morocco</td>
              <td>Spiced Coffee</td>
              <td>Brewed with North African spices</td>
              <td>Cinnamon, cloves, nutmeg</td>
              <td>Tied to spice trade, ceremonial hospitality</td>
            </tr>
            <tr>
              <td>Ethiopia</td>
              <td>Coffee Ceremony</td>
              <td>Beans roasted, ground, brewed fresh in jebena</td>
              <td>None or sugar</td>
              <td>Communal ritual, 3 rounds symbolize blessings</td>
            </tr>
            <tr>
              <td>Eritrea</td>
              <td>Coffee Ceremony</td>
              <td>Similar to Ethiopian</td>
              <td>Often with incense</td>
              <td>Family & communal unity</td>
            </tr>
            <tr>
              <td>Sudan</td>
              <td>Jabana Coffee</td>
              <td>Brewed in clay pot, spiced</td>
              <td>Ginger, cloves</td>
              <td>Social bonding & hospitality</td>
            </tr>
            <tr>
              <td>Italy</td>
              <td>Espresso / Cappuccino</td>
              <td>Espresso machine, small strong shot</td>
              <td>Sometimes milk foam</td>
              <td>Quick daily ritual, cultural identity</td>
            </tr>
            <tr>
              <td>France</td>
              <td>Café au Lait</td>
              <td>Strong coffee with hot milk</td>
              <td>Milk, sugar</td>
              <td>Slow, social café culture</td>
            </tr>
            <tr>
              <td>Austria</td>
              <td>Viennese Coffee</td>
              <td>Espresso with whipped cream</td>
              <td>Cream, sugar, pastries</td>
              <td>Historic intellectual cafés</td>
            </tr>
            <tr>
              <td>Greece</td>
              <td>Greek Coffee / Frappe</td>
              <td>Boiled like Turkish; or iced instant shaken</td>
              <td>Sugar, milk (for frappe)</td>
              <td>Everyday leisure & conversation</td>
            </tr>
            <tr>
              <td>India</td>
              <td>Filter Kaapi</td>
              <td>Slow-drip filter, mixed with milk & sugar</td>
              <td>Chicory blend, milk</td>
              <td>South Indian tradition, home comfort</td>
            </tr>
            <tr>
              <td>Vietnam</td>
              <td>Cà Phê Sữa Đá</td>
              <td>Strong drip over condensed milk, iced</td>
              <td>Sweetened condensed milk</td>
              <td>Street culture, refreshing drink</td>
            </tr>
            <tr>
              <td>Japan</td>
              <td>Pour-over / Siphon</td>
              <td>Slow, precise brewing</td>
              <td>Minimal additives</td>
              <td>Kissaten cafés, specialty culture</td>
            </tr>
            <tr>
              <td>Indonesia</td>
              <td>Kopi Tubruk / Luwak</td>
              <td>Strong, unfiltered; civet-processed beans</td>
              <td>None or sugar</td>
              <td>Everyday tradition + luxury export</td>
            </tr>
            <tr>
              <td>Brazil</td>
              <td>Cafezinho</td>
              <td>Strong, sweetened small cups</td>
              <td>Sugar</td>
              <td>National daily habit, warm hospitality</td>
            </tr>
            <tr>
              <td>Cuba</td>
              <td>Café Cubano</td>
              <td>Espresso whipped with sugar</td>
              <td>Very sweet</td>
              <td>Social, family, and café culture</td>
            </tr>
            <tr>
              <td>Mexico</td>
              <td>Café de Olla</td>
              <td>Clay pot brew with cinnamon & piloncillo</td>
              <td>Cinnamon, brown sugar</td>
              <td>Rural tradition, warmth & comfort</td>
            </tr>
            <tr>
              <td>Colombia</td>
              <td>Tinto</td>
              <td>Light black coffee, served all day</td>
              <td>Sugar optional</td>
              <td>Daily fuel, part of national pride</td>
            </tr>
            <tr>
              <td>USA</td>
              <td>Filter Coffee & Waves</td>
              <td>Drip/filter, modern specialty methods</td>
              <td>Wide variety</td>
              <td>From diner culture to third-wave artisanal</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="aroundtheworld-closing">
        <p>“Coffee is a universal language with a thousand dialects.”</p>
      </div>
    </div>
  );
}

export default AroundTheWorld;

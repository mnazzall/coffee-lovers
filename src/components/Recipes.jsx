import React from "react";
import "./Recipes.css"


function Recipes() {
    return(
        <div className="recipes-container">
            <div className="recipes-intro-container">
                <img src="/coffee-lovers/photos/Recipesintro.jpg" alt="latte" />
                <h1>Coffee Recipes: From Classic Brews to Creative Delights</h1>
                <p>Discover timeless coffee recipes and innovative creations from around the world. Whether you’re a beginner or a coffee connoisseur, there’s something here for every palate.</p>
            </div>

            <div className="recipes-drinkes-container">
                <h1>Coffee Recipes: Classics, Specialties & Signature Drinks</h1>
                <ol>
                    <li>Classic Coffee Recipes
                        <ul>
                            <li>Espresso
                                <ul>
                                    <li>Short, strong, concentrated coffee.</li>
                                    <li><strong>Ratio:</strong> 1:2 (coffee to water).</li>
                                    <li><strong>Notes:</strong> The base of most coffee drinks.</li>
                                </ul>
                            </li>
                            <li>Americano
                                <ul>
                                    <li>Espresso + hot water.</li>
                                    <li>Smooth, longer black coffee.</li>
                                </ul>
                            </li>
                            <li>Cappuccino
                                <ul>
                                    <li>1/3 espresso, 1/3 steamed milk, 1/3 foam.</li>
                                    <li>Light, creamy, and foamy texture.</li>
                                </ul>
                            </li>
                            <li>Latte
                                <ul>
                                    <li>Espresso with more steamed milk, light foam.</li>
                                    <li>Milder and creamier than cappuccino.</li>
                                </ul>
                            </li>
                            <li>Macchiato
                                <ul>
                                    <li>Espresso “stained” with a dollop of milk foam.</li>
                                    <li>Intense with a hint of creaminess.</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>Cold & Refreshing Recipes
                        <ul>
                            <li>Iced Coffee
                                <ul>
                                    <li>Brewed coffee chilled over ice.</li>
                                    <li>Optional milk, sugar, or flavor syrups.</li>
                                </ul>
                            </li>
                            <li>Cold Brew
                                <ul>
                                    <li>Coffee grounds steeped in cold water for 12–24 hours.</li>
                                    <li>Smooth, low-acidity, naturally sweet.</li>
                                </ul>
                            </li>
                            <li>Affogato
                                <ul>
                                    <li>Espresso poured over vanilla ice cream.</li>
                                    <li>Dessert-style coffee treat.</li>
                                </ul>
                            </li>
                            <li>Frappé (Greek)
                                <ul>
                                    <li>Instant coffee, water, sugar, and ice shaken into foam.</li>
                                    <li>Refreshing and frothy.</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>International Coffee Recipes
                        <ul>
                            <li>Turkish Coffee
                                <ul>
                                    <li>Finely ground coffee simmered in a cezve with sugar.</li>
                                    <li>Served unfiltered in a small cup.</li>
                                    <li>Rich, strong, and cultural.</li>
                                </ul>
                            </li>
                            <li>Arabic Coffee (Qahwa)
                                <ul>
                                    <li>Lightly roasted coffee brewed with cardamom, sometimes with cloves or saffron.</li>
                                    <li>Traditionally served in small handle-less cups (finjan) alongside dates.</li>
                                    <li>Symbol of hospitality across the Middle East.</li>
                                </ul>
                            </li>
                            <li>Saudi / Gulf-Style Qahwa
                                <ul>
                                    <li>Very light roast with spices (cardamom, cloves, saffron).</li>
                                    <li>Served from a dallah (traditional pot) into tiny cups.</li>
                                    <li>Known for its golden color and aromatic, spiced profile.</li>
                                </ul>
                            </li>
                            <li>Ethiopian Coffee Ceremony Style
                                <ul>
                                    <li>Coffee roasted, ground, and brewed fresh in a jebena.</li>
                                    <li>Traditional communal ritual.</li>
                                </ul>
                            </li>
                            <li>Café au Lait (France)
                                <ul>
                                    <li>Brewed coffee mixed with hot milk.</li>
                                    <li>Softer than espresso-based drinks.</li>
                                </ul>
                            </li>
                            <li>Flat White (Australia/New Zealand)
                                <ul>
                                    <li>Espresso with velvety microfoam.</li>
                                    <li>Similar to latte but stronger coffee flavor.</li>
                                </ul>
                            </li>
                            <li>Vietnamese Iced Coffee (Cà Phê Sữa Đá)
                                <ul>
                                    <li>Strong coffee brewed through a metal phin filter.</li>
                                    <li>Mixed with sweetened condensed milk, poured over ice.</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>Sweet & Dessert-Inspired Recipes
                        <ul>
                            <li>Mocha
                                <ul>
                                    <li>Espresso + steamed milk + chocolate syrup.</li>
                                    <li>Topped with whipped cream.</li>
                                </ul>
                            </li>
                            <li>Irish Coffee
                                <ul>
                                    <li>Hot coffee + Irish whiskey + sugar.</li>
                                    <li>Cream floated on top.</li>
                                </ul>
                            </li>
                            <li>Caramel Macchiato
                                <ul>
                                    <li>Espresso + steamed milk + vanilla syrup.</li>
                                    <li>Drizzled with caramel.</li>
                                </ul>
                            </li>
                            <li>Pumpkin Spice Latte
                                <ul>
                                    <li>Espresso + milk + pumpkin purée + spices.</li>
                                    <li>Autumn specialty drink.</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>Creative & Specialty Recipes
                        <ul>
                            <li>Nitro Cold Brew
                                <ul>
                                    <li>Cold brew infused with nitrogen gas.</li>
                                    <li>Creamy, beer-like head, no dairy.</li>
                                </ul>
                            </li>
                            <li>Dalgona Coffee
                                <ul>
                                    <li>Whipped instant coffee + sugar + water.</li>
                                    <li>Served over milk (went viral in 2020).</li>
                                </ul>
                            </li>
                            <li>Coffee Smoothie
                                <ul>
                                    <li>Cold brew + banana + protein powder.</li>
                                    <li>Breakfast-friendly energy boost.</li>
                                </ul>
                            </li>
                            <li>Spiced Coffee
                                <ul>
                                    <li>Brewed coffee with cinnamon, cardamom, or nutmeg.</li>
                                    <li>Inspired by Middle Eastern traditions.</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ol>
            </div>

            <div className="recipes-closing-container">
                <img src="/coffee-lovers/photos/recipesclosing.jpg" alt="cups of coffee" />
                <p>Coffee is more than a drink - it’s a recipe for connection, comfort, and creativity.</p>
            </div>
        </div>
    );
}


export default Recipes
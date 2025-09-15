import React, { useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";

import Home from "./components/home";
import About from "./components/about";
import BeansAndVarieties from "./components/BeansAndVarieties";
import BrewingMethods from "./components/BrewingMethods";
import HealthAndBenefits from "./components/HealthAndBenefits";
import Culture from "./components/Culture"
import RoastingLevels from "./components/RoastingLevels";
import History from "./components/History"; 
import Recipes from "./components/Recipes"
import AroundTheWorld from "./components/AroundTheWorld"
import SustainabilityAndTrade from "./components/SustainabilityAndTrade"
import Gallery from "./components/Gallery"

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/BeansAndVarieties" element={<BeansAndVarieties />} />
          <Route path="/BrewingMethods" element={<BrewingMethods />} />
          <Route path="/HealthAndBenefits" element={<HealthAndBenefits />} />
          <Route path="/Culture" element={<Culture />} />
          <Route path="/RoastingLevels" element={<RoastingLevels />} />
          <Route path="/History" element={<History />} />
          <Route path="/Recipes" element={<Recipes />} />
          <Route path="/AroundTheWorld" element={<AroundTheWorld />} />
          <Route path="/SustainabilityAndTrade" element={<SustainabilityAndTrade />} />
          <Route path="/Gallery" element={<Gallery />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

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
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

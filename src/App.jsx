import React, { useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";

import Home from "./components/home";
import About from "./components/about";
import BeansAndVarieties from "./components/BeansAndVarieties";
import BrewingMethods from "./components/BrewingMethods";

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
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

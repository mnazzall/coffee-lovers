import React, { useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";

import Home from "./components/home";
import About from "./components/about";
import History from "./components/history";
import BeansAndVarieties from "./components/BeansAndVarieties";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/BeansAndVarieties" element={<BeansAndVarieties />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";
import Faq from "./pages/Faq";
import Home from "./components/Home";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;

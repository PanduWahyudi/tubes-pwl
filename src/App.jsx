import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import LupaKataSandi from "./pages/lupaKataSandi";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lupa-kata-sandi" element={<LupaKataSandi />} />
      </Routes>
    </Router>
  );
};

export default App;

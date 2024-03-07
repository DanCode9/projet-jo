// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./components/Cart";
import OlympicGamesForm from "./components/Billetterie";

export default function App() {
  const [tickets, setTickets] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/billetterie"
          element={<OlympicGamesForm setTickets={setTickets} />}
        />
      </Routes>
    </Router>
  );
}

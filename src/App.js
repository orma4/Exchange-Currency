import React from "react";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Header from "./components/ui/Header";
import UsdToGbp from "./components/currencies/UsdToGbp";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EuroToUsd from "./components/currencies/EuroToUsd";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<h1>Home page</h1>} />
          <Route path="/UsdToGpb" element={<UsdToGbp />} />
          <Route path="/EuroToUsd" element={<EuroToUsd />} />
          <Route path="*" element={<h1>Not found!</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

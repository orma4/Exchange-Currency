import React from "react";
import "./App.css";
import Header from "./components/ui/Header";
import UsdToGbp from "./components/currencies/UsdToGbp";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import EuroToUsd from "./components/currencies/EuroToUsd";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/UsdToGpb"/>}/>
          <Route path="/UsdToGpb" element={<UsdToGbp />} />
          <Route path="/EuroToUsd" element={<EuroToUsd />} />
          <Route path="*" element={<h1>Not found!</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

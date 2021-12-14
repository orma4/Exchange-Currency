import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header class="header">
      <Link className="logo" to="/">
        Exchange App
      </Link>

      <div class="header-right">
        <Link to="/EuroToUsd">EURO to USD</Link>
        <Link to="/UsdToGpb">USD to GBP</Link>
      </div>
    </header>
  );
};

export default Header;

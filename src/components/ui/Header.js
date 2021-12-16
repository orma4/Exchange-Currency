import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Header.css";

const Header = () => {
  const [state, setState] = useState({
    menu: false,
    isOpen: false,
  });

  const toggleMenu = () => {
    setState({
      ...state,
      menu: !state.menu,
    });
  };

  const show = state.menu ? "show" : "";

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand px-2" to="/">
        Exchange App
      </Link>
      <button className="navbar-toggler" type="button" onClick={toggleMenu}>
        <span className="navbar-toggler-icon" />
      </button>
      <div className={"collapse navbar-collapse " + show}>
        <div className="navbar-nav">
          <Link className="nav-item nav-link px-3" to="/UsdToGpb">
            💲 to 💷
          </Link>
          <Link className="nav-item nav-link px-3" to="/EuroToUsd">
            💶 to 💲
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;

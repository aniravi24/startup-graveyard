import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav id="navbar" className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        Startup Graveyard
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarLinks"
        aria-controls="navbarLinks"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarLinks">
        <ul className="navbar-nav ml-auto">
          {props.routes.map((route, key) => {
            return (
              <li key={key} className="nav-item">
                <NavLink
                  exact
                  to={route.path}
                  className="nav-link"
                  activeStyle={{ color: "white" }}
                >
                  {route.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

Navbar.defaultProps = {
  color: "white"
};

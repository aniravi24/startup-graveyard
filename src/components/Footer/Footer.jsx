import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";

export default function Footer(props) {
  return (
    <footer
      id="footer"
      className="page-footer font-small special-color-dark pt-4"
    >
      <div className="container-fluid text-center text-md-left">
        <div className="row">
          <div className="col-md-6 mt-md-0 mt-3">
            <h5 className="text-uppercase text-white">Startup Graveyard</h5>
            <p className="text-white">
              A place where founders of failed startups can tell their story.
              For people thinking about starting a startup, this would be a
              great place to learn from people who've done it and failed.
            </p>
          </div>
          <div className="col-md-3 offset-md-2 mb-md-0 mb-3">
            <h5 className="text-uppercase text-white">Links</h5>
            <ul className="list-unstyled">
              {props.routes.map((route, key) => {
                return (
                  <li key={key} className="nav-item">
                    <NavLink exact to={route.path} className="text-white">
                      {route.name}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright text-center py-3 text-white">
        <p>© 2018 Copyright Startup Graveyard</p>
      </div>
    </footer>
  );
}

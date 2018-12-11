import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <nav id="navbar" className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">Startup Graveyard</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarLinks" aria-controls="navbarLinks" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarLinks">
        <ul className="navbar-nav ml-auto">
          {props.routes.map((route, key) => {
            return (
              <li key={key} className="nav-item">
                <NavLink exact to={route.path} className="nav-link" activeStyle={{ color: "white" }}>{route.name}</NavLink>
              </li>
            )
          })}
        </ul>
        {/* <form className="form-inline my-2 my-lg-0 ml-5">
          <input className="form-control mr-sm-2 mui--text-body1" type="search" placeholder="Search" aria-label="Search"/>
          <button className="mui-btn mui-btn--flat mui-btn--primary my-2 my-sm-0 text-capitalize" type="submit">Search</button>
        </form> */}
      </div>
    </nav>
  )
}

Navbar.defaultProps = {
  color: 'white'
};
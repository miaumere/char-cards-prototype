import React from 'react';
import { Link } from "react-router-dom";

import "./Navbar.scss";

function Navbar() {

  return (
    <nav className="Navbar">
      <ul className="nav-list">
        <li className="nav-list__item">
          <Link to="/" className="link link--disabled" label="Strona główna" />
        </li>

        <li className="nav-list__item">
          <Link to="/karty" className="link link--disabled" label="karty" />
        </li>

        <li className="nav-list__item">
          <Link to="/historia" className="link link--disabled" label="Historia" />
        </li>

        <li className="nav-list__item">
          <Link to="/others" className="link link--disabled" label="Postacie poboczne" />
        </li>

        <li className="nav-list__item nav-list__item--right">
          <Link to="/admin" className="link link--disabled" label="Panel admina" />
        </li>
      </ul>

    </nav>
  )


}

export default Navbar
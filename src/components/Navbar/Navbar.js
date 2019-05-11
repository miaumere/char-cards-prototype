import React from 'react';
import { Link  } from "react-router-dom";

import NavLink from  "./NavLink/NavLink";
import "./Navbar.scss";

function Navbar() {

  return (





    <nav className="Navbar">
      <ul className="nav-list">
        <li className="nav-list__item">
        <NavLink activeOnlyWhenExact={true} to="/" label="Strona główna" />
        </li>

        <li className="nav-list__item">
        <NavLink activeOnlyWhenExact={true} to="/karty" label="Karty" />
        </li>

        <li className="nav-list__item">
          <Link to="/historia" className="link link--disabled">Historia</Link>
        </li>

        <li className="nav-list__item">
          <Link to="/others" className="link link--disabled">Postacie poboczne</Link>
        </li>

        <li className="nav-list__item nav-list__item--right">
          <Link to="/admin" className="link link--disabled">Panel admina</Link>
        </li>
      </ul>

    </nav>
  )


}


export default Navbar
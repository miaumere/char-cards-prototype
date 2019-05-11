import React from 'react';
import { Link  } from "react-router-dom";

import LinkCustom from  "../common/Link-custom/Link-custom";
import "./Navbar.scss";

function Navbar() {

  return (

    <nav className="Navbar">
      <ul className="nav-list">
        <li className="nav-list__item">
        <LinkCustom activeOnlyWhenExact={true} to="/" label="Strona główna" className="" />
        </li>

        <li className="nav-list__item">
        <LinkCustom activeOnlyWhenExact={true} to="/karty" label="Karty" />
        </li>

        <li className="nav-list__item">
          <LinkCustom activeOnlyWhenExact={true} to="/historia"  className="link link--disabled" label="Historia"/>
        </li>

        <li className="nav-list__item">
          <LinkCustom activeOnlyWhenExact={true} to="/others"  className="link link--disabled" label="Postacie poboczne" />
        </li>

        <li className="nav-list__item nav-list__item--right">
          <Link to="/admin" className="link link--disabled">Panel admina</Link>
        </li>
      </ul>

    </nav>
    
  )


}


export default Navbar
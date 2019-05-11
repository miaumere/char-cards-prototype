import React from 'react';

import LinkCustom from  "../common/Link-custom/Link-custom";
import "./Navbar.scss";

function Navbar() {

  return (

    <nav className="Navbar">
      <ul className="nav-list">
        <li className="nav-list__item">
        <LinkCustom activeOnlyWhenExact={true} to="/" label="Strona główna" className="link" />
        </li>

        <li className="nav-list__item">
        <LinkCustom activeOnlyWhenExact={true} to="/karty" label="Karty" className="link" />
        </li>

        <li className="nav-list__item">
          <LinkCustom activeOnlyWhenExact={true} to="/historia"  className="link" label="Historia"/>
        </li>

        <li className="nav-list__item">
          <LinkCustom activeOnlyWhenExact={true} to="/others"  className="link" label="Postacie poboczne" />
        </li>

        <li className="nav-list__item nav-list__item--right">
          <LinkCustom to="/admin" className="link" label="Panel admina" />
        </li>
      </ul>

    </nav>
    
  )


}


export default Navbar
import React from 'react';

import LinkCustom from  "../common/Link-custom/Link-custom";
import "./Navbar.scss";

import { LoggedUserContext}  from '../LoggedUserContext';

export default class Navbar extends React.Component {

static contextType = LoggedUserContext;

  render(){
    const loggedUser = this.context[0];
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
  
        <li className="nav-list__item nav-list__item--user">
          {loggedUser ? 
            (<span className="logged logged--true">Zalogowano: {loggedUser.user}</span>) 
            : (<span className="logged logged--false">Nie zalogowano</span>)
            }
        </li>

        </ul>

      </nav>
      
    )
  }


}
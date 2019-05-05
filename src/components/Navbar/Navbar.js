import React from 'react';
import "./Navbar.scss";

function Navbar() {
    return (
        <nav className="Navbar">
            <ul className="nav-list">
                <li className="nav-list__item">
                    <a href="https://meowmere.art/" className="link link--disabled">Strona główna</a>
                </li>
                <li className="nav-list__item">
                    <a href="https://meowmere.art/" className="link link--disabled">Historia</a>
                </li>
                <li className="nav-list__item">
                    <a href="https://meowmere.art/" className="link link--disabled">Postacie poboczne</a>
                </li>
                <li className="nav-list__item nav-list__item--right">
                    <a href="https://meowmere.art/" className="link link--disabled">Panel admina</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar
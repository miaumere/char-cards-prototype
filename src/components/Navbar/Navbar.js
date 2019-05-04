import React from 'react';
import "./Navbar.scss";

function Navbar(){
    return (
    <nav className="Navbar">
        <ul className="nav-list">
            <li className="nav-list__item">
                <a href="" className="link link--disabled">STRONA GŁÓWNA</a>
            </li>
            <li className="nav-list__item">
                <a href="" className="link link--disabled">HISTORIA</a>
            </li>
            <li className="nav-list__item">
                <a href="" className="link link--disabled">POSTACIE POBOCZNE</a>
            </li>
        </ul>
    </nav>
    );
}

export default Navbar
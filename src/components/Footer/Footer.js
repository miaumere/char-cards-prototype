import React from 'react';
import "./Footer.scss";

function Footer() {

    return (
        <footer className="Footer footer-info">
        <div> © Karty postaci, 2019</div>
           
            <ul class="footer-info__list">Stworzone przez:
                <li>
                    <a href="https://github.com/miaumere">
                    <img className="footer-info__avatar" src="https://avatars3.githubusercontent.com/u/40804624?s=60&v=4" alt="" />
                    /miaumere</a>
                </li>
                <li>
                <a href="https://github.com/SatarisGIT">
                    <img className="footer-info__avatar" src="https://avatars1.githubusercontent.com/u/28608081?s=180&v=4" alt="" />
                    /SatarisGIT</a>
                </li>

            </ul>
        </footer>
    )


}
export default Footer
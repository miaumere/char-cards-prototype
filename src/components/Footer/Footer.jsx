import React from 'react';
import "./Footer.scss";

function Footer() {

    return (
        <footer className="Footer footer-info">
        <div> © Karty postaci, 2019</div>
           
            Authors:
                    <a href="https://github.com/miaumere" className="footer-info__link">
                    <img className="footer-info__avatar" src="https://avatars3.githubusercontent.com/u/40804624?s=60&v=4" alt="" />
                    /miaumere</a>
                <a href="https://github.com/SatarisGIT" className="footer-info__link">
                    <img className="footer-info__avatar" src="https://avatars1.githubusercontent.com/u/28608081?s=180&v=4" alt="" />
                    /SatarisGIT</a>
        <br />
        Heart loader made by: <a href="https://loading.io" className="footer-info__link">loading.io</a>
        </footer>
    )


}
export default Footer
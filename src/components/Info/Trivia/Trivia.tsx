import React from 'react';
import './Trivia.scss'
export default class Trivia extends React.Component {


    render() {
        return (
            <article className="Trivia facts">
            <div className="facts__container">
            <h2 className="facts__title">Ciekawostki</h2>
                <ul className="list facts__content">
                    <li className="list__item">ciekawostka1xxxxxxxxxxxxxxxxdkmvkld,klds;.dv</li>
                    <li className="list__item">ciekawostka2xxxxxxxxxxxxxxxxdkmvkld</li>
                    <li className="list__item">change</li>

                </ul>
            </div>
            </article>

        )
    }
}

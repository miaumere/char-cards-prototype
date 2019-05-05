import React from 'react';
import "./Temperament.scss";

function Temperament(props) {

    return (
        <ul className="temperament-list"> TEMPERAMENT <br />
            <li className="temperament-list__item">Sangwinik:</li>
            <li>
                <div className="progress-bar">
                    <div className="progress-bar__percentage progress-bar__percentage--sanguine" style={{ width: props.sanguine + '%' }}>
                        <span>{props.sanguine}%</span>
                    </div>
                </div>
            </li>
            <li className="temperament-list__item">Choleryk:</li>
            <li>
                <div className="progress-bar">
                    <div className="progress-bar__percentage progress-bar__percentage--choleric" style={{ width: props.choleric + '%' }}>
                        <span>{props.choleric}%</span>
                    </div>
                </div>
            </li>
            <li className="temperament-list__item">Flegmatyk:</li>
            <li>
                <div className="progress-bar">
                    <div className="progress-bar__percentage progress-bar__percentage--flegmatic" style={{ width: props.flegmatic + '%' }}>
                        <span>{props.flegmatic}%</span>
                    </div>
                </div>
            </li>

            <li className="temperament-list__item">Melancholik:</li>
            <li>
                <div className="progress-bar">
                    <div className="progress-bar__percentage progress-bar__percentage--melancholic" style={{ width: props.melancholic + '%' }}>
                        <span>{props.melancholic}%</span>
                    </div>
                </div>
            </li>
        </ul>
    )

}

export default Temperament
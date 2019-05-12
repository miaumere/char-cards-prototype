import React from 'react';
import "./Temperament.scss";

import EmptyInfo from '../../common/Empty-info/Empty-info';

export default class Temperament extends React.Component {

    render() {

        const { temperament } = this.props;

        if(!temperament) {
            return <EmptyInfo />
        }


        return (
            <div className="Temperament">
                <h3 className="title">TEMPERAMENT</h3>
                <ul className="temperament-list">
                    <li className="temperament-list__item">Sangwinik:</li>
                    <li>
                        <div className="progress-bar">
                            <div style={{ width: temperament.sanguine + '%' }}>
                                <div className="progress-bar__percentage progress-bar__percentage--sanguine" >
                                    <span>{temperament.sanguine}%</span>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="temperament-list__item">Choleryk:</li>
                    <li>
                        <div className="progress-bar">
                            <div style={{ width: temperament.spitfire + '%' }}>
                                <div className="progress-bar__percentage progress-bar__percentage--choleric" >
                                    <span>{temperament.spitfire}%</span>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="temperament-list__item">Flegmatyk:</li>
                    <li>
                        <div className="progress-bar">
                            <div style={{ width: temperament.phlegmatic + '%' }}>
                                <div className="progress-bar__percentage progress-bar__percentage--flegmatic" >
                                    <span>{temperament.phlegmatic}%</span>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="temperament-list__item">Melancholik:</li>
                    <li>
                        <div className="progress-bar">
                            <div style={{ width: temperament.melancholy + '%' }}>
                                <div className="progress-bar__percentage progress-bar__percentage--melancholic" >
                                    <span>{temperament.melancholy}%</span>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}
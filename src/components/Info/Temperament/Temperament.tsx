import React from 'react';
import "./Temperament.scss";

import EmptyInfo from '../../common/Empty-info/Empty-info';
import { IPercentages } from '../Info';



export interface ITemperamentProps {
    temperament: IPercentages;
}

export default class Temperament extends React.Component<ITemperamentProps> {

    temperamentList() {
        const { temperament } = this.props;


        return <ul className="temperament-list">
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

    }


    render() {

        const { temperament } = this.props;

        return (
            <div className="Temperament">
                <h3 className="title">TEMPERAMENT</h3>

                {temperament ? this.temperamentList() : <EmptyInfo />}

            </div>
        )
    }
}
import React from 'react';
import "./Temperament.scss";

export default class Temperament extends React.Component {

    render(){

        console.log(this)



        return (
            <div className="Temperament">
            <h3 className="title">TEMPERAMENT</h3>
            <ul className="temperament-list">
                <li className="temperament-list__item">Sangwinik:</li>
                <li>
                    <div className="progress-bar">
                    <div style={{ width: this.props.sanguine + '%' }}>
                            <div className="progress-bar__percentage progress-bar__percentage--sanguine" >
                                <span>{this.props.sanguine}%</span>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="temperament-list__item">Choleryk:</li>
                <li>
                    <div className="progress-bar">
                        <div style={{ width: this.props.choleric + '%' }}>
                            <div className="progress-bar__percentage progress-bar__percentage--choleric" >
                                <span>{this.props.choleric}%</span>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="temperament-list__item">Flegmatyk:</li>
                <li>
                    <div className="progress-bar">
                    <div style={{ width: this.props.flegmatic + '%' }}>
                            <div className="progress-bar__percentage progress-bar__percentage--flegmatic" >
                                <span>{this.props.flegmatic}%</span>
                            </div>
                        </div>
                    </div>
                </li>
    
                <li className="temperament-list__item">Melancholik:</li>
                <li>
                    <div className="progress-bar">
                    <div style={{ width: this.props.melancholic + '%' }}>
                            <div className="progress-bar__percentage progress-bar__percentage--melancholic" >
                                <span>{this.props.melancholic}%</span>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            </div>
        )
    }
}
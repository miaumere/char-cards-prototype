import React from 'react';
import "./AppearanceColors.scss";

export default class AppearanceColors extends React.Component {


render(){
    return(
        <div className="AppearanceColors color">
        
        <div className="color__container">
        <h3 className="color__title">Lista kolorów</h3>

            <ul className="color color__list">

                <li className="color__item">Kolor 1:
                    <div className="color__block color__block--color_1" style={{background: this.props.color_1}}></div>
                </li>

                <li className="color__item">Kolor 2:
                    <div className="color__block color__block--color_2" style={{background: this.props.color_2}}></div>
                </li>

                <li className="color__item">Kolor 3:
                    <div className="color__block color__block--color_3" style={{background: this.props.color_3}}></div>
                </li>

                <li className="color__item">Kolor skóry:
                    <div className="color__block color__block--color_skin" style={{background: this.props.color_skin}}></div>
                </li>

                <li className="color__item">Kolor włosów:
                    <div className="color__block color__block--color_hair" style={{background: this.props.color_hair}}></div>
                </li>

                <li className="color__item color__item--eye">Kolor oczu:
                    <div className="eye">  
                        <div className="eye__color" style={{background: `radial-gradient(ellipse at center, black 0%,black 33%,${this.props.color_eye_1} 33%, ${this.props.color_eye_1} 33%, ${this.props.color_eye_2} 100%, ${this.props.color_eye_2} 100%)`}} />
                    <div className="eye__reflex"></div>
                    </div>
                </li>
            </ul>

        </div>
    </div>
        
    )
}


}
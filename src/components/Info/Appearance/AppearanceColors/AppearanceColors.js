import React from 'react';
import "./AppearanceColors.scss";

export default class AppearanceColors extends React.Component {


render(){
    return(
        <div className="AppearanceColors color">
        
        <div class="color__container">
        <h3 className="color__title">Lista kolorów</h3>

            <ul className="color color__list">
                <li className="color__item">Kolor 1 (dominujący):
                    <div className="color__block" style={{background : this.props.color_1}}></div>
                </li>
                <li>Kolor 2: </li>
                <li>Kolor 3: </li>
                <li>Kolor skóry: </li>
                <li>Kolor włosów: </li>
                


            </ul>
        </div>
        </div>
    )
}


}
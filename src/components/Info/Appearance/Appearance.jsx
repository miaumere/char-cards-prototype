import React from 'react';
import "./Appearance.scss";
import AppearanceColors from "./AppearanceColors/AppearanceColors"

export default class Appearance extends React.Component {

    render(){
    return (
        <article className="Appearance">
            <div className="appearance-section">
                <h2 className="appearance-section__title">Wygląd</h2>
                <p className="appearance-section__desc">
            {this.props.appearance_desc}
            </p>
            </div>

            <AppearanceColors color_1={this.props.color_1} color_2={this.props.color_2} color_3="yellow" 
            color_skin="rgb(247, 215, 169)" color_hair="black"
            color_eye_1="red" color_eye_2="blue"
            />
        </article>
    )
    }
}

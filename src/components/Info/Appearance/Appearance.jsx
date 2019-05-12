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

            <AppearanceColors 
            color_1={this.props.color_1} color_2={this.props.color_2} color_3={this.props.color_3} 
            color_skin={this.props.color_skin} 
            color_hair={this.props.color_hair}
            color_eye_1={this.props.eye_1} color_eye_2={this.props.eye_2}
            />
        </article>
    )
    }
}

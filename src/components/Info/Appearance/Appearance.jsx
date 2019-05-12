import React from 'react';
import "./Appearance.scss";
import AppearanceColors from "./AppearanceColors/AppearanceColors";

import EmptyInfo from '../../common/Empty-info/Empty-info';

export default class Appearance extends React.Component {

    render(){
        const { colors } = this.props;

        if(!colors) {
            return <EmptyInfo />
        }
            
        
        return (
        <article className="Appearance">
            <div className="appearance-section">
                <h2 className="appearance-section__title">Wygląd</h2>
                <p className="appearance-section__desc">
                {colors.appearance_desc}
                </p>
            </div>

            <AppearanceColors 
            color_1={colors.outfit_1} color_2={colors.outfit_2} color_3={colors.outfit_3} 
            color_skin={colors.skin} 
            color_hair={colors.hair}
            color_eye_1={colors.eye_1} color_eye_2={colors.eye_2}
            />
        </article>
    )
    }
}

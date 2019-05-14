import React from 'react';
import "./Appearance.scss";
import AppearanceColors from "./AppearanceColors/AppearanceColors";

import EmptyInfo from '../../common/Empty-info/Empty-info';

export default class Appearance extends React.Component {

    showAppearanceDesc() {
        const { colors } = this.props;

        return(

            colors.appearance_desc
        )
    }

    render(){
        const { colors } = this.props;
            
        console.warn(this)


        return (
        <article className="Appearance">
            <section className="appearance-section">
                <h2 className="appearance-section__title">Wygląd</h2>
                <div className="appearance-section__desc">

                {colors ? this.showAppearanceDesc() : <EmptyInfo />}
                </div>

            </section>

            <AppearanceColors colors={colors}/>

        </article>
    )
    }
}


// color_1={colors.outfit_1} color_2={colors.outfit_2} color_3={colors.outfit_3} 
// color_skin={colors.skin} 
// color_hair={colors.hair}
// color_eye_1={colors.eye_1} color_eye_2={colors.eye_2}
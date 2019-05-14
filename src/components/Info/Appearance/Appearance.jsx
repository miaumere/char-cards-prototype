import React from 'react';
import "./Appearance.scss";
import AppearanceColors from "./AppearanceColors/AppearanceColors";

import EmptyInfo from '../../common/Empty-info/Empty-info';

export default class Appearance extends React.Component {

    showAppearanceDesc() {

        return(

            this.props.appearance_desc
        )
    }

    render(){

        console.log(this.props.appearance_desc)


        return (
        <article className="Appearance">
            <section className="appearance-section">
                <h2 className="appearance-section__title">Wygląd</h2>
                <div className="appearance-section__desc">

                {(this.props.appearance_desc) ? this.showAppearanceDesc() : <EmptyInfo />}
                </div>

            </section>

            <AppearanceColors colors={this.props.colors}/>

        </article>
    )
    }
}
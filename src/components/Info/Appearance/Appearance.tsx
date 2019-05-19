import React from 'react';
import "./Appearance.scss";

import EmptyInfo from '../../common/Empty-info/Empty-info';
import AppearanceColors from './AppearanceColors/AppearanceColors';

import { ColorsType } from '../Info';


interface IAppearanceProps {
    appearance_desc: string | null;
    colors: ColorsType;
}

interface IAppearanceState {

}

export default class Appearance extends React.Component<IAppearanceProps, IAppearanceState> {


    render() {

        return (
            <article className="Appearance">
                <section className="appearance-section">
                    <h2 className="appearance-section__title">Wygląd</h2>
                    <div className="appearance-section__desc">

                        {(this.props.appearance_desc) ? this.props.appearance_desc : <EmptyInfo />}
                    </div>

                </section>


                <AppearanceColors colors={this.props.colors} />


            </article>
        )
    }
}
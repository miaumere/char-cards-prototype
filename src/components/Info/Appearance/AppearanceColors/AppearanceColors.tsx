import React from 'react';
import "./AppearanceColors.scss";
import { IColors } from '../Appearance';


interface IAppearanceColorsProps {
    colors: IColors | null;
}


class Colors {
    outfit_1: null | string  = "grey";
    outfit_2: null | string = "silver";
    outfit_3: null | string = "#727272";

    skin: null | string = "#D8D8D8";
    hair: null | string = "#3D3D3D";

    eye_1: null | string = "#232323";
    eye_2: null | string = "#ADADAD";
}

export default class AppearanceColors extends React.Component<IAppearanceColorsProps> {



    isColorNull(color: null | string) : string {
        if(color) {
            return color;
        } else {
            return "";
        }
    }



    render() {
        let { colors } = this.props;

        if(!colors){
            colors = new Colors();
        }

        return (
            <section className="AppearanceColors color">

                    <div className="color__container">
                        <h3 className="color__title">Lista kolorów</h3>

                        <ul className="color color__list">

                            <li className="color__item">Kolor 1:
                                <div className="color__block color__block--color_1" style={{ background: this.isColorNull(colors.outfit_1) }}></div>
                            </li>

                            <li className="color__item">Kolor 2:
                                <div className="color__block color__block--color_2" style={{ background: this.isColorNull(colors.outfit_2) }}></div>
                            </li>

                            <li className="color__item">Kolor 3:
                                <div className="color__block color__block--color_3" style={{ background: this.isColorNull(colors.outfit_3) }}></div>
                            </li>

                            <li className="color__item">Kolor skóry:
                                <div className="color__block color__block--color_skin" style={{ background: this.isColorNull(colors.skin) }}></div>
                            </li>

                            <li className="color__item">Kolor włosów:
                                <div className="color__block color__block--color_hair" style={{ background: this.isColorNull(colors.hair) }}></div>
                            </li>

                            <li className="color__item color__item--eye">Kolor oczu:
                                <div className="eye">
                                    <div className="eye__color" style={{ background: `radial-gradient(ellipse at center, black 0%,black 33%,${colors.eye_1} 33%, ${colors.eye_1} 33%, ${colors.eye_2} 100%, ${colors.eye_2} 100%)` }} />
                                    <div className="eye__reflex"></div>
                                </div>
                            </li>
                        </ul>

                    </div>
            </section>
        )
    }


}
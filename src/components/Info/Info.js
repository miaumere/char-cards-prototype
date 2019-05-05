import React from 'react';
import "./Info.scss";
import Temperament from './Temperament/Temperament';
import PersonImages from './PersonImages/PersonImages';
import Appearance from './Appearance/Appearance';

function Info() {
    return (
        <section className="Info">

            <PersonImages />

            <div className="desc">
                <h1 className="desc__name">Jean de Valette</h1>
                <div clasName="desc__other">
                    Data urodzenia: xx.xx.1970
                    <br />
                    Status: żyjący
                    <br />
                    Osobowość MBTI: INTJ
                    <br />
                    
                </div>
            </div>

            <Temperament sanguine="50" choleric="30" flegmatic="70" melancholic="90" />

            <Appearance />
        </section>
    )
}


export default Info
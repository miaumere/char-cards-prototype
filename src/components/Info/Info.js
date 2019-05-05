import React from 'react';
import "./Info.scss";
import Temperament from './Temperament/Temperament';
import PersonImages from './PersonImages/PersonImages';

function Info() {
    return (
        <section className="Info">

            <PersonImages />

            <div className="desc">
                <h1 className="name">Jean de Valette</h1>
                <div>
                    DATA URODZENIA: xx.xx.1970
                    <br />
                    STATUS: żyjący
                    <br />
                    OSOBOWOŚĆ MBTI: INTJ
                </div>
            </div>

            <Temperament sanguine="50" choleric="30" flegmatic="70" melancholic="90" />

        </section>
    )
}


export default Info
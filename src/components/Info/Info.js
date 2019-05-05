import React from 'react';
import "./Info.scss";
import Temperament from '../Temperament/Temperament'

function Info() {
    return(
        <section className="Info">
            <h1 className="name">Jean de Valette</h1>
            DATA URODZENIA: xx.xx.1970            
            <br />
            CZY ŻYJE? true
            <br />
            OSOBOWOŚĆ MBTI: INTJ
            <br />
            <Temperament sanguine="50" choleric="30" flegmatic="70" melancholic="90" />

        </section>
    )
}


export default Info
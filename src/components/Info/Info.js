import React from 'react';
import "./Info.scss";
import Temperament from '../Temperament/Temperament'

function Info() {
    return(
        <section className="information">
            Imię: Jean
            <br />
            Nazwisko: De Valette
            <br />
            Data urodzenia: xx.xx.1970            
            <br />
            Czy żyje? true
            <br />
            MBTI: INTJ
            <br />
            <Temperament sanguine="40" choleric="30" flegmatic="70" melancholic="90" />

        </section>
    )
}


export default Info
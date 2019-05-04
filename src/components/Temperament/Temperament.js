import React from 'react';
import "./Temperament.scss";

function Temperament(props){

    return(
        <ul> Temperament <br />
            <li>Sangwinik {props.sanguine}%</li>
            <li>Choleryk {props.choleric}%</li>
            <li>Flegmatyk {props.flegmatic}%</li>
            <li>Melancholik {props.melancholic}%</li>
           
        </ul>
    )

}

export default Temperament
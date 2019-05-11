import React from 'react';
import "./CharactersList.scss"

import LinkCustom from "../common/Link-custom/Link-custom";

export default class CharactersList extends React.Component {
    

    state = {}


    render() {

        const { error } = this.state;
        const { characters } = this.props;


        if(error) {
            return <div>ERR</div>
        }

        if(!characters) {
            return <div>Ladowanie danych...</div>
        }

        return (
            <ul className="CharactersList menu">LISTA POSTACI:{characters.map(item =>
                <li className="menu__item" key={item.id}>
                    <LinkCustom to={`/karty/${item.id}`} className="link link--inactive" label={item.name + " " + item.surname}/>

                </li>
                )}
            </ul>
        )
    }

}
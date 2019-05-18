import React from 'react';
import "./CharactersList.scss"

import LinkCustom from "../common/Link-custom/Link-custom";
import { IResponseData } from '../CharsList/CharsList';



interface ICharachtersListProps {
    characters: Array<IResponseData>;

}

interface ICharachtersListStates {
    error: false;
}

export default class CharactersList extends React.Component<ICharachtersListProps, ICharachtersListStates> {

    state :ICharachtersListStates = {
        error: false,
    }

    render() {

        const { error } = this.state;
        const { characters } = this.props;


        if(error) {
            return <div>Wystąpił niespodziewany błąd!</div>
        }

        if(!characters) {
            return <div>Ładowanie danych...</div>
        }

        return (
            <ul className="CharactersList menu">LISTA POSTACI:
            {characters.map(item =>
                <li className="menu__item" key={`CharListElKey_${item.id}`}>
                    <LinkCustom to={`/karty/${item.id}`} className="link link--inactive" label={item.name + " " + item.surname}/>

                </li>
            )}
            </ul>
        )
    }

}
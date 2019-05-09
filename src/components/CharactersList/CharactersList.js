import React from 'react';
import "./CharactersList.scss"
import { Route, Switch, Link } from "react-router-dom";

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
                    <Link to={`/karty/${item.id}`} className="link link--disabled">{item.name + " " + item.surname}</Link>
                   
                </li>)}</ul>
        )
    }

}
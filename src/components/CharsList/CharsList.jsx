import React from 'react';
import axios from 'axios';
import { Route } from "react-router-dom";

import Info from '../Info/Info';
import CharactersList from '../CharactersList/CharactersList';
import Loader from '../common/Loader/Loader';
import LinkCustom from '../common/Link-custom/Link-custom';

import './CharsList.scss';


class CharsList extends React.Component {

    state = {
        error: false
    }

    componentWillMount() {
        const RESTurl = "/characters-cards/api/get-characters";

        axios.get(RESTurl)
            .then((response) => {

                this.setState({ characters: response.data })

            })
            .catch((error) => {
                console.error(error);
            })

    }


    render() {
        const { characters, error } = this.state;


        if (error) {
            return <div>Wystąpił niespodziewany błąd!</div>
        }

        if (!characters) {
            return <Loader />
        }

        return (
            <div className="CharsList">

                <Loader fadeOut={true} />

                <Route path="/karty/" exact render={() => {

                    return <ul className="list">
                        {this.state.characters.map(item =>
                            <li className="list__el" key={item.id}>
                                <div className="list__image"></div>
                                <LinkCustom to={`/karty/${item.id}`} className="link link--disabled" label={item.name + " " + item.surname} />
                            </li>)}
                    </ul>;
                }} />



                <Route path="/karty/:id" render={() => {

                    return <div style={{ display: "flex" }}>

                        <CharactersList characters={characters} />
                        <Info />

                    </div>;
                }} />





            </div>
        )
    }
}


export default CharsList;
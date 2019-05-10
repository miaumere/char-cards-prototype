import React from 'react';
import axios from 'axios';
import { Route, Link } from "react-router-dom";
import Info from '../Info/Info';
import CharactersList from '../CharactersList/CharactersList';
import Loader from '../common/Loader/Loader';

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
            <>

                <Loader fadeOut={true} />


                <Route path="/karty/" exact render={() => {

                    return <ul className="CharsList">
                        {this.state.characters.map(item =>
                            <li className="" key={item.id}>
                                <Link to={`/karty/${item.id}`} className="link link--disabled">{item.name + " " + item.surname}</Link>
                            </li>)}
                    </ul>;
                }} />


                <Route path="/karty/:id" render={() => {

                    return <div style={{ display: "flex" }}>

                        <CharactersList characters={characters} />
                        <Info />

                    </div>;
                }} />





            </>
        )
    }
}


export default CharsList;
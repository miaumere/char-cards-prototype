import React from 'react';
import axios from 'axios';
import "./CharactersList.scss"

export default class CharactersList extends React.Component {
    state = {
        error: false
    }

    componentWillMount() {
        const RESTurl = "https://meowmere.art/aie/api/char-info/"

        axios.get(RESTurl)
        .then((response) => {
            this.setState({characters: response.data})
          })
          .catch((error) => {
            // handle error
            console.error(error);
          })

        }


    render() {
        const { characters, error } = this.state;


        if(error) {
            return <div>ERR</div>
        }

        if(!characters) {
            return <div>Ladowanie danych...</div>
        }

        return (
            <ul className="CharactersList menu">LISTA POSTACI:{this.state.characters.map(item =>
                <li className="menu__item" key={item.id}>
                    {item.imie + " " + item.nazwisko}
                </li>)}</ul>
        )
    }

}
import React from 'react';
import axios from 'axios';
import "./CharactersList.scss"

export default class CharactersList extends React.Component {
    
    state = {
        error: false
    }

    componentWillMount() {
        const RESTurl = "http://192.168.100.20/characters-cards/api/get-characters"

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
                    {item.name + " " + item.surname}
                </li>)}</ul>
        )
    }

}
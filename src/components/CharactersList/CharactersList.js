import React from 'react';
export default class CharactersList extends React.Component {


    state = {
        error: false
    }

    componentWillMount() {
        const RESTurl = "https://meowmere.art/aie/api/char-info/"
        fetch(RESTurl)
            .then(res => res.json())
            .then((result) => {
                this.setState({characters: result})
            })
            .catch((e) => {
                console.error(e)
                this.setState({error: true})
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
            <ul>{this.state.characters.map(item =>
                <li key={item.id}>
                    {item.imie + " " + item.nazwisko}
                </li>)}</ul>
        )
    }

}
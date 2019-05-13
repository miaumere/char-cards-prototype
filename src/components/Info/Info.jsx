import React from 'react';
import axios from 'axios';


import "./Info.scss";
import Temperament from './Temperament/Temperament';
import PersonImages from './PersonImages/PersonImages';
import Appearance from './Appearance/Appearance';
import Story from './Story/Story';
import Gallery from './Gallery/Gallery';
import Weight from './Weight/Weight';
import Trivia from './Trivia/Trivia';
import Quote from './Quote/Quote';

import Loader from '../common/Loader/Loader';
import Error from '../common/Error/Error';
import EmptyInfo from '../common/Empty-info/Empty-info';


import { withRouter } from "react-router";

class Info extends React.Component {

    state = {
        errorMsg: null,
        charInfo: null

    }

    componentWillMount() {
        // Pobieranie informacji o postaci o ID z query params:
        const currentId = this.props.match.params.id;

        this.getCharInfo(currentId)
    }


    // Zmiana id postaci (wybór z menu):
    componentDidUpdate(props) {
        const lastId = props.match.params.id;
        const currentId = this.props.match.params.id;

        if (lastId !== currentId) {
            this.setState({ charInfo: null })

            this.getCharInfo(currentId)
        }
    }


    getCharInfo(id) {


        const RESTurl = `/characters-cards/api/get-character?id=${id}`;

        // Zmiana state'a za pomocą metody AXIOS:
        axios.get(RESTurl)
            .then((response) => {
                this.setState({ charInfo: response.data })
                JSON.stringify(this.state.charInfo)

            // Zmiana daty z timestamp na datę YYYY-MM-DD:
            const date = new Date(this.state.charInfo.birthday * 1000);
            const birthdayDate = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`

            this.setState({birthdayDate})

            })
            .catch((error) => {
                console.error(error);

                this.setState({errorMsg: "Bład pobierania szczegółów dotyczących postaci"})
            })

    }



    render() {

        const { charInfo, errorMsg } = this.state;


        // if(errorMsg) {
        //     return <Error errorMsg={errorMsg} />
        // }

        if (!charInfo) {
            return <Loader />
        }

        console.log(this.state.charInfo.death)

        return (
            <>
                <Loader fadeOut={true} />

                <PersonImages />

                <section className="Info">


                    <div className="desc">

                        <h1 className="desc__name"> {this.state.charInfo.name} {this.state.charInfo.surname}</h1>
                        <div className="desc__other">
                            <span className="desc__information">Data urodzenia: </span>
                            <span className="desc__data">{this.state.birthdayDate}</span>
                            <br />

                            <span className="desc__information">Status: </span>

                            <span className="desc__data">
                                {(this.state.charInfo.death_date !== false) ? 
                                (<span className="desc__death desc__death--true">trup</span>) : 
                                (<span className="desc__death desc__death--false">żyjący</span>)}
                            </span>

                            <br />
                            <span className="desc__information">
                            Osobowość <a href="https://www.16personalities.com/pl/typy-osobowosci">MBTI</a>:
                            </span>
                            <span className="desc__data">{(this.state.charInfo.personality_mbti)}</span>

                            <br />
                            
                            {this.state.charInfo.quotes.length !== 0 ? <Quote q={this.state.charInfo.quotes} /> : <EmptyInfo />}
                        
                            

                        </div>
                    </div>

                    {this.state.charInfo.temperament !== 0 ? <Temperament temperament={this.state.charInfo.temperament} /> : <EmptyInfo />   }


                    {(this.state.charInfo.appearance_desc !== null) ? <Appearance appearance_desc={this.state.charInfo.appearance_desc} /> : <EmptyInfo/>}

                    {(this.state.charInfo.history !== null) ? <Story history={(this.state.charInfo.history)}/> :  <EmptyInfo />}

                    <Weight />

                    <Gallery />

                    <Trivia />

                </section>

            </>
        )
    }

}



export default withRouter(Info)
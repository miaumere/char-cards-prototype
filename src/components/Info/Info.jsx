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
import TimeFormatter from '../common/time-formatter';


import { withRouter } from "react-router";

class Info extends React.Component {

    state = {
        errorMsg: null,
        charInfo: null

    }

    componentWillMount() {
        // Downloading information about characters with ID from query params:
        const currentId = this.props.match.params.id;

        this.getCharInfo(currentId)
    }


    // ID change (characters menu):
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

        // Changing state with Axios:
        axios.get(RESTurl)
            .then((response) => {
                this.setState({ charInfo: response.data })
                JSON.stringify(this.state.charInfo)

            // Changing birthday date to YYYY-MM-DD:
            const birthdayDate = TimeFormatter(this.state.charInfo.birthday);

            this.setState({birthdayDate})

            const deathDate = TimeFormatter(this.state.charInfo.death_date);
            this.setState({deathDate})

            })
            // Error - backend
            .catch((error) => {
                console.error(error);

                this.setState({errorMsg: "Bład pobierania szczegółów dotyczących postaci"})
            })

    }



    render() {

        const { charInfo, errorMsg } = this.state;


        if(errorMsg) {
            return <Error errorMsg={errorMsg} />
        }

        if (!charInfo) {
            return <Loader />
        }

        return (
            <>
                <Loader fadeOut={true} />


                <section className="Info">
                <PersonImages />


                    <div className="desc">

                        <h1 className="desc__name"> {this.state.charInfo.name} {this.state.charInfo.surname}</h1>
                        <div className="desc__other">
                            <span className="desc__information">Data urodzenia: </span>
                            <span className="desc__data">{this.state.birthdayDate}</span>
                            <br />

                            <span className="desc__information">Status: </span>

                            <span className="desc__data">
                                {(this.state.charInfo.death_date !== false) ? 
                                (<span className="desc__death desc__death--true">trup od: {this.state.deathDate}</span>) : 
                                (<span className="desc__death desc__death--false">żyjący</span>)}
                            </span>

                            <br />
                            <span className="desc__information">
                            Osobowość <a href="https://www.16personalities.com/pl/typy-osobowosci">MBTI</a>:
                            </span>
                            <span className="desc__data">{(this.state.charInfo.personality_mbti)}</span>

                            <br />
                            
                            <Quote q={this.state.charInfo.quotes} />
                        
                            

                        </div>
                    </div>

                   <Temperament temperament={this.state.charInfo.temperament} />

                    <Appearance colors={this.state.charInfo.colors} appearance_desc={this.state.charInfo.appearance_desc} />

                    <Story history={this.state.charInfo.history}/>

                    <Weight />

                    <Gallery />

                    <Trivia />

                </section>

            </>
        )
    }

}



export default withRouter(Info)
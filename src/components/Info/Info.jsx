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


import { withRouter } from "react-router";

class Info extends React.Component {

    state = {
        error: false,
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

        console.log(this.state.charInfo.temperament.sanguine)

        this.setState({birthdayDate: birthdayDate})

            })
            .catch((error) => {
                console.error(error);
            })

    }



    render() {

        const { charInfo } = this.state;

        if (!charInfo) {
            return <Loader />
        }


        return (
            <>

                <Loader fadeOut={true} />

                <PersonImages />

                <section className="Info">


                    <div className="desc">

                        <h1 className="desc__name"> {this.state.charInfo.name} {this.state.charInfo.surname}</h1>
                        <div className="desc__other">
                            Data urodzenia: {this.state.birthdayDate}
                        <br />
                            Status: {(this.state.charInfo.death)? "trup" : "żyjący"}
                        <br />
                            Osobowość MBTI: {(this.state.charInfo.personality_mbti)}
                        <br />

                        <Quote />
                        </div>
                    </div>

                    <Temperament sanguine="2" choleric="30" flegmatic="70" melancholic="90" />

                    <Appearance />

                    <Story />

                    <Weight />

                    <Gallery />

                    <Trivia />

                </section>

            </>
        )
    }

}



export default withRouter(Info)
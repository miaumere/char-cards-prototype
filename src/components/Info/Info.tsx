import React from 'react';
import axios, { AxiosAdapter } from 'axios';


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


import { withRouter, RouteComponentProps } from "react-router";

export interface IColors {
    readonly outfit_1: string | null;
    readonly outfit_2: string | null;
    readonly outfit_3: string | null;

    readonly skin: string | null;
    readonly hair: string | null;

    readonly eye_1: string | null;
    readonly eye_2: string | null;
}

export interface IPercentages {
    sanguine: number | null;
    spitfire: number | null;
    phlegmatic: number | null;
    melancholy: number | null;
}

export type ColorsType = IColors | null;

export interface Quotation {
    quote: string;
    context?: string;
}

interface ICharInfo {
    readonly id: string;
    readonly name: string; 
    readonly surname: string;
    readonly birthday: number;
    readonly death_date: number | null;
    readonly personality_mbti: string;

    readonly appearance_desc: string | null;

    readonly history: string | null;

    readonly profile_pic?: null;

    readonly temperament: IPercentages | null;

    readonly colors: ColorsType | null;

    readonly quotes: Array<Quotation> | null;

}
class CharEmpty {
    id: string = "0";
    name: string = " ";
    surname: string = " ";
    birthday: number = 0;
    death_date: number = 0;
    personality_mbti: null = null;
    appearance_desc: null = null;
    history: null = null;
    profile_pic? : null = null;
    temperament: null = null;
    colors: null = null;
    quotes: null = null;

}


interface MatchParams {
    id: string;
}


interface IInfoProps extends RouteComponentProps<MatchParams> {
}

interface IInfoState {
    errorMsg: string | null;
    charInfo: ICharInfo | CharEmpty | null;
    birthdayDate: string;
    deathDate: string;
}


class Info extends React.Component<IInfoProps, IInfoState> {

    state: IInfoState = {
        errorMsg: null,
        charInfo: new CharEmpty,
        birthdayDate: "",
        deathDate: "",

    }

    componentWillMount() {

        // Downloading information about characters with ID from query params:
        const currentId = this.props.match.params.id;

        this.getCharInfo(currentId)
    }


    // ID change (characters menu):
    componentDidUpdate(props: IInfoProps) {
        const lastId = props.match.params.id;
        const currentId = this.props.match.params.id;

        if (lastId !== currentId) {
            this.setState({ charInfo: null })

            this.getCharInfo(currentId)
        }
    }


    getCharInfo(id: string) {

        const { charInfo } = this.state
        const RESTurl = `/characters-cards/api/get-character?id=${id}`;

        // Changing state with Axios:
        axios.get(RESTurl)
            .then((response) => {
                this.setState({ charInfo: response.data })
                JSON.stringify(this.state.charInfo)

            // Changing birthday date to YYYY-MM-DD:
            const birthdayDate = TimeFormatter(charInfo ? charInfo.birthday : null);

            this.setState({birthdayDate})

            const deathDate = TimeFormatter(charInfo ? charInfo.death_date ? charInfo.death_date : null : null);
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

                        <h1 className="desc__name"> {charInfo.name} {charInfo.surname}</h1>
                        <div className="desc__other">
                            <span className="desc__information">Data urodzenia: </span>
                            <span className="desc__data">{this.state.birthdayDate}</span>
                            <br />

                            <span className="desc__information">Status: </span>

                            <span className="desc__data">
                                {(charInfo.death_date !== null) ? 
                                (<span className="desc__death desc__death--true">trup od: {this.state.deathDate}</span>) : 
                                (<span className="desc__death desc__death--false">żyjący</span>)}
                            </span>

                            <br />
                            <span className="desc__information">
                            Osobowość <a href="https://www.16personalities.com/pl/typy-osobowosci">MBTI</a>:
                            </span>
                            <span className="desc__data">{(charInfo.personality_mbti)}</span>

                            <br />
                            
                            <Quote q={charInfo.quotes} />
                        
                            

                        </div>
                    </div>

                   <Temperament temperament={charInfo.temperament} />

                    <Appearance colors={charInfo.colors} appearance_desc={charInfo.appearance_desc} />

                    <Story history={charInfo.history}/>

                    <Weight />

                    <Gallery />

                    <Trivia />

                </section>

            </>
        )
    }

}



export default withRouter(Info)
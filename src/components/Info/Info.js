import React from 'react';
import "./Info.scss";
import Temperament from './Temperament/Temperament';
import PersonImages from './PersonImages/PersonImages';
import Appearance from './Appearance/Appearance';
import Story from './Story/Story';
import Gallery from './Gallery/Gallery';
import Weight from './Weight/Weight';
import Trivia from './Trivia/Trivia';
import { withRouter } from "react-router";

class Info extends React.Component {

    state = {
        error: false,
        charInfo: null
    }

    componentWillMount() {
        console.log("Komponent bedzie montwany")
        console.log(this)
        const currentId = this.props.match.params.id;
        this.getCharInfo(currentId)

    }


    componentDidUpdate(props, state, d) {
        console.log("component sie zapdejtowal")
        const lastId = props.match.params.id;
        const currentId = this.props.match.params.id;

        console.log(lastId)
        console.log(currentId)

        if(lastId !== currentId) {
            console.warn("zmienilo sie!")

            this.getCharInfo(currentId)

            this.setState({charInfo: null})
        }
    }


    getCharInfo(id) {
        
        let toCoZBackendu = `{
                                    "id":"2",
                                    "name":"Imie1",
                                    "surname":"Nazwisko1",
                                    "birthday":"1992-03-03",
                                    "death_date":null,
                                    "personality_mbti":"QQQQ",
                                    "appearance_desc":null,
                                    "history":null,
                                    "profile_pic":null
                            }`;

        toCoZBackendu = JSON.parse(toCoZBackendu);
  
        this.timeout = setTimeout(() => {
            this.setState({charInfo: toCoZBackendu})
        }, 5000);

    }



    render() {

        const { charInfo } = this.state;

        if(!charInfo) {
            return <div>Nie ma info o postaci</div>
        }


        return (
            <section className="Info">
    
                <PersonImages />
    
                <div className="desc">
                    <h1 className="desc__name">Jean de Valette</h1>
                    <div className="desc__other">
                        Data urodzenia: xx.xx.1970
                        <br />
                        Status: żyjący
                        <br />
                        Osobowość MBTI: INTJ
                        <br />
                        
                    </div>
                </div>
    
                <Temperament sanguine="50" choleric="30" flegmatic="70" melancholic="90" />
    
                <Appearance />
                
                <Story />
    
                <Weight />
    
                <Gallery />
    
                <Trivia />
            </section>
        )
    }

}



export default withRouter(Info)
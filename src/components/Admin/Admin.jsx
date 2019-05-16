

import "./Admin.scss";

import React from 'react';

import { LoggedUserContext } from './LoggedUserContext';


export default class Admin extends React.Component {

    static contextType = LoggedUserContext;

    constructor(props) {
        super(props);

        this.state = {
            userValue: "",
            passValue: "",
        };


        // Funkcja logująca użytkownika:
        function login(user, pass) {
            if(user === "user" && pass === "pass123") {
                 return true;
            }
            return false;
        }


        this.handleSubmit = (e) => {
            let setLoggedUser = this.context[1];

            e.preventDefault();            

            const user = e.target.children['user'].value
            const pass = e.target.children['pass'].value

          if(this.login(user, pass)) {
              
            console.log("udalo sie!!");

            setLoggedUser(user);

       } else {
            console.log("error")

       }
        };


        this.handleChange = (e) => {
            this.setState({
                userValue: e.target.value,
                passValue: e.target.value
            });
        };

      }
      

  render() {
    const { userValue, passValue } = this.state;
    const loggedUser = this.context[0];
    const setLoggedUser = this.context[1];

    return (
        <div className="Admin">
        {
            loggedUser ? 
            <button onClick={() => {setLoggedUser(null)}}>Wyloguj</button> 
            : 

            (
            <div>
            <h2>Panel logowania admina</h2>

            <form onSubmit={this.handleSubmit}>
                <label>
                Nazwa użytkownika:
                <input type="text" name="user" onChange={this.handleChange} value={userValue}/>
                </label>
                <br />
                <label>
                Hasło:
                <input type="text" name="pass" value={this.state.value} onChange={this.handleChange} value={passValue} />
                </label>
                <br />
                <input type="submit" value="Zaloguj" />
            </form>
            </div>
            )
        }
        </div>
    );
  }
}

// sesja uzytkownika po stronie backendu bedzie zaszyta w ciasteczku typu httpOnly
// do ktorego front nie ma dostepu (celowo)
// Dla cwiczen - i to Ci sie przyda - mozesz
// wejsc na strone "Panel admina"
// i zrobic tam komponent - formularz logowania
// 2 pola - user i haslo
// wpisujesz tam user i haslo dajesz submit
// i submit ustawi globalny kontekst o nazwie loggedUser na nową wartośc
// wartością tą niech będzie objekt z tymi dwoma polami
// i teraz w navbarze albo gdziekolwiek w apce mozesz przeczytac ten kontekst i wziac jego wartość
// jezeli user bedzie zalogowany (czyli bylas juz w panelu adma i sie ,,zalogowalas") to wyswietlaj ten nick na belce górnej
// dodatkowo - jezeli user jest zalogowany nie wyswietlaj panelu administratora - formularza
// tylko po kliknięciu niech bedzie napis: WITAJ: "xxx"
// gdzie XXX to nick

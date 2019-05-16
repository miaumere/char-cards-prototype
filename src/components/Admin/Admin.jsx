

import "./Admin.scss";

import React from 'react';


export default class Admin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ""};
    
        
        this.handleSubmit = (e) => {
            console.log(this.state.value);
            e.preventDefault();            
        };
        this.handleChange = (e) => {
            this.setState({value: e.target.value});
        }
      }
      

  render() {

    return (
        <article className="Admin">
            <h2>Panel logowania admina</h2>

            <form onSubmit={this.handleSubmit}>
                <label>
                Nazwa użytkownika:
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <br />
                <label>
                Hasło:
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>

                <input type="submit" value="Submit" />
            </form>
        </article>

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
// jak zrobisz to wszystko to praktycznie masz zrobione 99% zadania xd
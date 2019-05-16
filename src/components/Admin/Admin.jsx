

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
            error: false
        };


        // Funkcja logująca użytkownika:
        function login(user, pass) {
            if(user === "test" && pass === "test") {
                 return true;
            }
            return false;
        }


        // Funkcja podpięta pod button submit:
        this.handleSubmit = (e) => {
            let setLoggedUser = this.context[1];

            e.preventDefault();            


            const user = e.target.elements['user'].value
            const pass = e.target.elements['pass'].value

          if(login(user, pass)) {
              
            setLoggedUser(user);

       } else {
            console.log("error")
            this.setState({error: true})
            console.log(this.state)

       }
        };


        this.handleChange = (e) => {

            switch (e.target.name) {
                case "user":
                
                this.setState({userValue: e.target.value})
                break;
            
                case "pass": 
                this.setState({passValue: e.target.value})

                break;

            }

        };

      }
      

  render() {
    const { userValue, passValue } = this.state;
    const loggedUser = this.context[0];
    const setLoggedUser = this.context[1];

    return (
        <div className="Admin form">
        {
            loggedUser ? 
            (
            <div>
                <span>Logowanie się udało!</span>
                <br />
                <button onClick={() => {setLoggedUser(null)}}>Wyloguj</button> 
            </div>
            )
            : 

            (
            <div>
            <h2>Panel logowania admina</h2>

            <form onSubmit={this.handleSubmit}>
            {this.state.error ? <span className="form__error">Błędne hasło bądź nazwa użytkownika!</span> : ""}
            <br />
                <label>
                Nazwa użytkownika:
                <br />
                <input type="text" name="user" onChange={this.handleChange} value={userValue}/>

                </label>

                <br />

                <label>
                Hasło:
                <br />

                <input type="text" name="pass" onChange={this.handleChange} value={passValue} />
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

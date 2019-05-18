

import "./Admin.scss";

import React from 'react';
import axios from 'axios';

import Loader from '../common/Loader/Loader';

import { LoggedUserContext } from '../LoggedUserContext';


export default class Admin extends React.Component {

    static contextType = LoggedUserContext;

    constructor(props) {
        super(props);

        this.state = {
            userValue: "",
            passValue: "",
            error: false,
        };


        // Function which submits form:
        this.handleSubmit = (e) => {
            e.preventDefault();            
            let setLoggedUser = this.context[1];

            const user = e.target.elements['user'].value
            const pass = e.target.elements['pass'].value


        // Authentication:
        const RESTurl = "/characters-cards/api/login";

        axios.post(RESTurl, {
            "user": user,
            "pass": pass
        })
        .then((response) => {
            // Adding token to local storage:

            setLoggedUser({
                user
            });

            localStorage.setItem('token', response.data)

        })
        .catch((error) => {
            console.error(error);
        })
              
        };


        this.handleChange = (e) => {

            switch (e.target.name) {
                case "user":
                
                this.setState({userValue: e.target.value})
                break;
            
                case "pass": 
                this.setState({passValue: e.target.value})

                break;

                default:
                
            }

        };

      }
      

  render() {
    const { userValue, passValue } = this.state;
    const loggedUser = this.context[0];
    const setLoggedUser = this.context[1];

    return (
        <div className="Admin form">
        {this.state.loading ? <Loader /> : ""}
        {
            loggedUser ? 
            (
            <div className="container">
                <span>Logowanie się udało!</span>
                <br />
                <button onClick={() => {setLoggedUser(null)}}>Wyloguj</button> 
            </div>
            )
            : 

            (
            <div className="container">
            <h2 className="container__title">Panel logowania admina</h2>

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

                <input type="password" name="pass" onChange={this.handleChange} value={passValue} />
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

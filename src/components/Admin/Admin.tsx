

import "./Admin.scss";

import React, { ChangeEvent, FormEvent } from 'react';
import axios from 'axios';

import Loader from '../common/Loader/Loader';

import { LoggedUserContext } from '../LoggedUserContext';

interface IAdminProps {

}

interface IAdminState {
    userValue: string;
    passValue: string;
    error: boolean;
    loading: boolean;

}

export default class Admin extends React.Component<IAdminProps, IAdminState> {

    static contextType = LoggedUserContext;



    state: IAdminState = {
        userValue: "",
        passValue: "",
        error: false,
        loading: true
    };


    // Function which submits form:
    handleSubmit = (e :React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();
        let setLoggedUser = this.context[1];

        const targetCasted = e.target as HTMLFormElement;

        const user = (targetCasted.elements as any)['name'].value as string
        const pass = (targetCasted.elements as any)['pass'].value as string


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


    handleChange = (e: ChangeEvent<HTMLInputElement>) => {

        switch (e.target.name) {
            case "user":

                this.setState({ userValue: e.target.value })
                break;

            case "pass":
                this.setState({ passValue: e.target.value })

                break;

            default:

        }

    };




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
                                <button onClick={() => { setLoggedUser(null) }}>Wyloguj</button>
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
                                        <input type="text" name="user" onChange={this.handleChange} value={userValue} />

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

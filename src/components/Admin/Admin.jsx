

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
            loading: false
        };


        // User login:
        function login(user, pass) {
            if(user === "user" && pass === "pass") {
                 return true;
            }
            return false;
        }


        // Function which submits form:
        this.handleSubmit = (e) => {
            e.preventDefault();            
            let setLoggedUser = this.context[1];

            const user = e.target.elements['user'].value
            const pass = e.target.elements['pass'].value


        // Authentication:
        const RESTurl = "api/login";

        axios.post(RESTurl, {
            "user": user,
            "pass": pass
        })
        .then((response) => {
            this.setState({loading: true})

            console.log(response.data)
            localStorage.setItem('token', response.data)

            const test = localStorage.getItem('token');
            console.log(test)


            setTimeout(() => {
                
                this.setState({loading: false})
            }, 4000);



        })
        .catch((error) => {
            console.log(this.state)
            this.setState({loading: true})

            console.error(error);
            this.setState({loading: false})
        })






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

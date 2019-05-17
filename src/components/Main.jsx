import React from 'react';
import { BrowserRouter,  Route, Switch } from "react-router-dom";
import Footer from './Footer/Footer';

import Test from './Test'
import Navbar from './Navbar/Navbar'
import CharsList from './CharsList/CharsList';
import Admin from './Admin/Admin';

import {LoggedUserContext}  from './LoggedUserContext';

export default class Main extends React.Component {

  state = {
    loggedUser: null
  }

  setLoggedUser = (newLoggedUser) => {
    this.setState({loggedUser: newLoggedUser})
}

  render(){
  
      return (
        <BrowserRouter>
            <LoggedUserContext.Provider value={[this.state.loggedUser, this.setLoggedUser]}>

              <Navbar />

              <Switch>
                <Route path="/" exact component={Test} />
                <Route path="/karty/" component={CharsList} />
                <Route path="/admin/" component={Admin} />

                <Route component={NoMatch} />
              </Switch>

              <Footer /> 
            </LoggedUserContext.Provider>

        </BrowserRouter>

      );
      
      function NoMatch({ location }) {
        return (
          <div>
            <h3>
              Nie znaleziono: <code>{location.pathname}</code>
            </h3>
          </div>
        );
      }

  }
}

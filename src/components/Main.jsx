import React from 'react';
import { BrowserRouter,  Route, Switch } from "react-router-dom";
import axios from "axios";

import Footer from './Footer/Footer';
import Test from './Test'
import Navbar from './Navbar/Navbar'
import CharsList from './CharsList/CharsList';
import Admin from './Admin/Admin';
import Loader from './common/Loader/Loader';

import {LoggedUserContext}  from './LoggedUserContext';
import {ReloginContext} from './ReloginContext';

export default class Main extends React.Component {

  state = {
    loggedUser: null,
    user: null,
    loading: true
  }

  setLoggedUser = (newLoggedUser) => {
    this.setState({loggedUser: newLoggedUser})
  }

  componentWillMount(){
    // User relogin:

    const RESTurl = "api/relogin";
    axios.post(RESTurl)
    .then((response) => {

      this.setState({loading: false})
      this.setLoggedUser(response.data)
  })

  .catch((error) => {
    this.setState({loading: false})
})
}

  render(){
  
    if(this.state.loading) {
      return <Loader />
    }


      return (
        <BrowserRouter>
            <LoggedUserContext.Provider value={[this.state.loggedUser, this.setLoggedUser]}>
            <ReloginContext.Provider value={this.state.user}>

              <Navbar />

              <Switch>
                <Route path="/" exact component={Test} />
                <Route path="/karty/" component={CharsList} />
                <Route path="/admin/" component={Admin} />

                <Route component={NoMatch} />
              </Switch>

              <Footer /> 
            </ReloginContext.Provider>
            
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

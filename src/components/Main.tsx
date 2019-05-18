import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import axios from "axios";

import Footer from './Footer/Footer';
import Test from './Test'
import Navbar from './Navbar/Navbar'
import CharsList from './CharsList/CharsList';
import Admin from './Admin/Admin';
import Loader from './common/Loader/Loader';

import { LoggedUserContext } from './LoggedUserContext';

export interface ILoggedUser {
  user: string;
  token?: string;
}


interface IMainProps {
}


interface IMainState {
  loggedUser: ILoggedUser | null,
  user: string | null,
  loading: boolean
}


export default class Main extends React.Component<IMainProps, IMainState> {

  state: IMainState = {
    loggedUser: null,
    user: null,
    loading: true
  }

  setLoggedUser = (newLoggedUser: ILoggedUser | null) => {
    this.setState({ loggedUser: newLoggedUser })
  }

  componentWillMount() {
    // User relogin:

    const RESTurl = "/characters-cards/api/relogin";
    axios.post(RESTurl)
      .then((response) => {

        this.setState({ loading: false })
        this.setLoggedUser(response.data)
      })

      .catch((error) => {
        this.setState({ loading: false })
      })
  }

  render() {

    if (this.state.loading) {
      return <Loader />
    }


    return (
      <BrowserRouter>
        <LoggedUserContext.Provider value={[this.state.loggedUser, this.setLoggedUser]}>
     
            <Navbar />

            <main className="Main">
              <Switch>
                <Route path="/" exact component={Test} />
                <Route path="/karty/" component={CharsList} />
                <Route path="/admin/" component={Admin} />

                <Route component={NoMatch} />
              </Switch>
            </main>

            <Footer />

        </LoggedUserContext.Provider>

      </BrowserRouter>

    );


    function NoMatch( props: { location: { pathname: React.ReactNode; }; } ) {
      return (
        <div>
          <h3>
            Nie znaleziono: <code>{props.location.pathname}</code>
          </h3>
        </div>
      );
    }

  }
}

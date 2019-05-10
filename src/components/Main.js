import React from 'react';
import { BrowserRouter,  Route, Switch } from "react-router-dom";
import Footer from './Footer/Footer';

import Test from './Test'
import Navbar from './Navbar/Navbar'
import CharsList from './CharsList/CharsList';

function Main() {

  return (
    <BrowserRouter>

        <Navbar />

        <Switch>
          <Route path="/" exact component={Test} />
          <Route path="/karty/" component={CharsList} />

          <Route component={NoMatch} />
        </Switch>

        <Footer /> 

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
export default Main
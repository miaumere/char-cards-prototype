import React from 'react';
import { Link, Route } from "react-router-dom";

import './Link-custom.scss';

function LinkCustom({ label, to, activeOnlyWhenExact }) {
    return (
      <Route
        path={to}
        exact={activeOnlyWhenExact}
        children={({ match }) => (
          <div className={match ? "link link--inactive" : "link link--active"}>
            <Link to={to}>{label}</Link>
          </div>
        )}
      />
    );
  }

export default LinkCustom
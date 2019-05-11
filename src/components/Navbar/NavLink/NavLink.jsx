import React from 'react';
import { Link, Route } from "react-router-dom";

function NavLink({ label, to, activeOnlyWhenExact }) {
    return (
      <Route
        path={to}
        exact={activeOnlyWhenExact}
        children={({ match }) => (
          <div className={match ? "active" : ""}>
            {match ? "> " : ""}
            <Link to={to}>{label}</Link>
          </div>
        )}
      />
    );
  }

export default NavLink
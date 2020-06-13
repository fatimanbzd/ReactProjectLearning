import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import Login from "./Pages/Login";
import PropTypes from "prop-types";

class PrivateRoute extends Component {
  static propTypes = {
    component: PropTypes.func.isRequired,
    auth: PropTypes.bool.isRequired,
    path: PropTypes.string.isRequired,
  };

  render() {
    const { component: Component, auth, ...resetProps } = this.props;

    return (
      <Route
        {...resetProps}
        render={(props) =>
          auth ? console.log(auth) : <Redirect to="/Login" />
        }
      />
    );
  }
}

export default PrivateRoute;

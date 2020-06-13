import React, { Component } from "react";
import NavItem from "./NavItem";
import { Link } from "react-router-dom";

class Header extends Component {
  handlelogOut() {}
  render() {
    const { auth: isAuthenticated } = this.props;
    console.log(this.props);
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
              <NavItem
                activeOnlyWhenExact={true}
                activeClassName="selected"
                to="/"
              >
                Home
              </NavItem>
              <NavItem to="/About">About</NavItem>
              <NavItem to="/Contact">Contact</NavItem>
            </ul>
            <div className="mr-2">
              {isAuthenticated ? (
                <div>
                  <button
                    className="btn btn-sm btn-danger mr-1"
                    onClick={this.props.logout}
                  >
                    Logout
                  </button>
                  <Link to="/UserPanel" className="btn btn-sm btn-secondary">
                    Profile
                  </Link>
                </div>
              ) : (
                <Link to="/Login" className="btn btn-sm btn-success">
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;

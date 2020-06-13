import React, { Component } from "react";
import validator from "validator";
import Axios from "axios";
import { Redirect } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);

    if (this.props.auth) {
      this.props.history.push("/");
    }

    this.state = {
      fields: {
        email: "",
        password: "",
      },
      error: {},
    };
  }

  handleInputChange(e) {
    let fields = this.state.fields;
    const target = e.target;
    fields[target.name] = target.value;
    this.setState({ fields });
  }

  handleValidation(callback) {
    let { fields } = this.state;
    let error = {};
    let isFormValid = true;

    if (validator.isEmpty(fields.email)) {
      isFormValid = false;
      error["email"] = "Please enter email!";
    } else if (!validator.isEmail(fields.email)) {
      isFormValid = false;
      error["email"] = "Email Format is incorect!";
    }

    if (validator.isEmpty(fields.password)) {
      isFormValid = false;
      error["password"] = "Please enter password!";
    } else if (
      !validator.isLength(fields.password, { min: 6, max: undefined })
    ) {
      isFormValid = false;
      error["password"] = "password Format is incorect!";
    }
    this.setState({ error }, () => {
      return callback(isFormValid);
    });
  }

  handleRequest() {
    const { email, password } = this.state.fields;
    let data = new FormData();
    data.append("email", email);
    data.append("password", password);
    Axios.post("http://roocket.org/api/login", data)
      .then((response) => {
        localStorage.setItem("api_token", response.data.data.api_token);
        this.props.Login();
        this.props.history.push("/UserPanel");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (
      this.handleValidation((valid) => {
        if (valid) this.handleRequest();
      })
    ) {
    }
  }
  render() {
    const { email, password } = this.state.fields;
    const { error } = this.state;
    return (
      <div className="container mr-2 p-5">
        <div className="row">
          <form className="col-md-5" onSubmit={this.handleSubmit.bind(this)}>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                name="email"
                className={[
                  "form-control",
                  error["email"] ? "is-invalid" : "",
                ].join(" ")}
                value={email}
                onChange={this.handleInputChange.bind(this)}
                placeholder="please enter your email"
              />
              <span
                className="invalid-feedback"
                style={{ display: error["email"] ? "block" : "none" }}
              >
                {error["email"]}
              </span>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                name="password"
                className={[
                  "form-control",
                  error["password"] ? "is-invalid" : "",
                ].join(" ")}
                value={password}
                onChange={this.handleInputChange.bind(this)}
                placeholder="please enter your password"
              />
              <span
                className="invalid-feedback"
                style={{ display: error["password"] ? "block" : "none" }}
              >
                {error["password"]}
              </span>
            </div>
            <button type="submit" className="btn btn-danger">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;

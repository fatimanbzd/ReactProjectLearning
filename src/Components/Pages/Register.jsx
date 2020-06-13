import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

export default class Register extends Component {
  state = {
    fullName: "",
    typeId: null,
    genderId: 1,
  };

  //change field
  changeFieldSelect(e) {
    let name = e.target.name;
    this.setState({ [name]: e.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    //Fill dropdown
    const types = [
      { id: 1, value: "Admin" },
      { id: 2, value: "User" },
    ];
    const typeList = types.map((m) => (
      <option key={m.id} value={m.id} id={m.id}>
        {m.value}
      </option>
    ));
    ////////////////////////////////////////////////////////

    //Fill Radio buttons
    const genders = [
      { id: 1, value: "Male" },
      { id: 2, value: "Female" },
    ];
    const genderList = genders.map((g) => (
      <div
        key={g.id}
        className="custom-control custom-radio custom-control-inline"
      >
        <input
          id={"radio" + g.value}
          name="genderId"
          type="radio"
          className="custom-control-input"
          value={g.id}
          onChange={this.changeFieldSelect.bind(this)}
          defaultChecked={g.id == 1}
        />
        <label className="custom-control-label" htmlFor={"radio" + g.value}>
          {g.value}
        </label>
      </div>
    ));
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div className="form-group">
          <label>Full Name:</label>
          <input
            type="text"
            name="fullName"
            className="form-control"
            value={this.state.fullName}
            placeholder="Enter your Full Name"
            onChange={this.changeFieldSelect.bind(this)}
          />
        </div>
        <div className="form-group">
          <label>Type:</label>

          <select
            className="form-control"
            onChange={this.changeFieldSelect.bind(this)}
            name="typeId"
          >
            <option value="">Select Type...</option>
            {typeList}
          </select>
        </div>
        <div className="form-group">
          <label className="p-2">Gender: </label>
          {genderList}
        </div>
        <div className="form-group">
          <button className="btn btn-primary btn-sm" type="submit">
            Register
          </button>
        </div>
      </form>
    );
  }
}

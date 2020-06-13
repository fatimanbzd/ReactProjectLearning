import React, { Component } from "react";

class Alert extends Component {
  constructor(props) {
    super(props);
    this.className = "alert";
  }
  render() {
    return <div className={this.className}>{this.props.children}</div>;
  }
}

export class AlertSuccess extends Alert {
  constructor(props) {
    super(props);
    this.className = this.className + " alert-success";
  }
}

export class AlertDanger extends Alert {
  constructor(props) {
    super(props);
    this.className = this.className + " alert-danger";
  }
}

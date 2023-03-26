import React, { Component } from "react";
import "./Buttons.scss";
export default class Buttons extends Component {
  render() {
    return <button className="katolog_button">{this.props.children}</button>;
  }
}

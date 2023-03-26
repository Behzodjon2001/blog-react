import React, { Component } from "react";
import { oKonpanii } from "../../data/o_kompanii";
import "./video.css";
import "./O_kompanii.scss";
import YoutubeEmbed from "./YoutubeEmbed";
export default class OKompanii extends Component {
  render() {
    return (
      <div className="section2">
        <div className="container">
          <div className="card1">
            <h1> {this.props.name} </h1>{" "}
          </div>{" "}
          <div className="card2">
            <div className="youtube">
              <YoutubeEmbed embedId="rokGy0huYEA" />
            </div>{" "}
            <p> {this.props.desc} </p>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    );
  }
}

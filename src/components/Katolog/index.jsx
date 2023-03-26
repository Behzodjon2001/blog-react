import React, { Component } from "react";
import { katolog } from "../../data/katolog";
import { oKonpanii } from "../../data/o_kompanii";
import { sertifikati } from "../../data/sertifikati";
import Home from "../home/Home";
import OKompanii from "../O_koppanii";
import Sertifikati from "../sertifikati";
export default class Katolog extends Component {
  render() {
    return (
      <>
        {katolog.map((el, index) => (
          <Home key={index} {...el} />
        ))}
        {oKonpanii.map((el, index) => (
          <OKompanii key={index} {...el} />
        ))}
        {sertifikati.map((el, index) => (
          <Sertifikati key={index} {...el} />
        ))}
      </>
    );
  }
}

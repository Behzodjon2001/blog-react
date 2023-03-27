import React, { Component } from "react";
import { katolog } from "../../data/katolog";
import { NashaProduct } from "../../data/nasha_produksiya";
import { oKonpanii } from "../../data/o_kompanii";
import { sertifikati } from "../../data/sertifikati";
import Home from "../home/Home";
import OKompanii from "../O_koppanii";
import ReactTabs from "../react_tabs";
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
        {NashaProduct.map((el, index) => (
          <ReactTabs key={index} {...el} />
        ))}
      </>
    );
  }
}

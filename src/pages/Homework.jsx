import React, { Component } from "react";
import Katolog from "../components/Katolog";
import Navbar from "../components/navbar";
import "./homework.scss";
export default class Homework extends Component {
  render() {
    return (
      <>
        <header className="Header">
          <Navbar />
        </header>
        <main className="main">
          <Katolog />
        </main>
      </>
    );
  }
}

import React, { Component } from "react";
import BlogLogo from "../../assets/images/logo.svg";
import "./Navbar.scss";
export default class Navbar extends Component {
  render() {
    return (
      <div className="header">
        <div className="container">
          <div className="div">
            <div className="card1">
              <img src={BlogLogo} alt="" />
            </div>{" "}
            <div className="card2">
              <ul className="list_header">
                <div className="dropdown">
                  <li className="pruduksiya"> Продукция </li>{" "}
                  <div className="dropdown-content">
                    <p> Ламинатные тубы </p> <br />
                    <p> Экструзионные тубы </p> <br /> <p> Другая упаковка </p>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="vertical"> </div> <li> Сертификаты </li>{" "}
                <div className="vertical"> </div> <li> Наша команда </li>{" "}
                <div className="vertical"> </div> <li> О нас </li>{" "}
                <div className="vertical"> </div> <li> Новости </li>{" "}
                <div className="vertical"> </div> <li> Вакансии </li>{" "}
                <div className="vertical"> </div> <li> Контакты </li>{" "}
              </ul>{" "}
            </div>{" "}
            <div className="card3">
              <span className="russian"> ru </span>{" "}
              <div className="vertical"> </div>{" "}
              <span className="english"> en </span>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    );
  }
}

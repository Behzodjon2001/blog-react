import React, { Component } from "react";
import Slider from "react-slick";
import Buttons from "../buttons/buttons";
import "./Home.scss";

export default class Home extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <>
        <Slider {...settings} className="carousel-custom">
          <div className="card1">
            <div
              className="section1"
              style={{
                backgroundImage: `url(${this.props.image})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                height: "700px",
              }}
            >
              <div className="container">
                <div className="carousel-card">
                  <h4>{this.props.type}</h4> <h1>{this.props.name}</h1>
                  <p>{this.props.desc}</p>
                  <Buttons>Каталог</Buttons>
                  <br />
                  <br />
                </div>
              </div>
            </div>
          </div>
          <div className="card1">
            <div
              className="section1"
              style={{
                backgroundImage: `url(${this.props.image})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <div className="container">
                <div className="carousel-card">
                  <h4 className="type_home">{this.props.type2}</h4>{" "}
                  <h1>{this.props.name2}</h1>
                  <p>{this.props.desc2}</p>
                  <Buttons>Каталог</Buttons>
                  <br />
                  <br />
                </div>
              </div>
            </div>
          </div>
          <div className="card1">
            <div
              className="section1"
              style={{
                backgroundImage: `url(${this.props.image})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <div className="container">
                <div className="carousel-card">
                  <h4>{this.props.type3}</h4> <h1>{this.props.name3}</h1>
                  <p>{this.props.desc3}</p>
                  <Buttons>Каталог</Buttons>
                  <br />
                  <br />
                </div>
              </div>
            </div>
          </div>
          <div className="card1">
            <div
              className="section1"
              style={{
                backgroundImage: `url(${this.props.image})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <div className="container">
                <div className="carousel-card">
                  <h4>{this.props.type4}</h4> <h1>{this.props.name4}</h1>
                  <p>{this.props.desc4}</p>
                  <Buttons>Каталог</Buttons>
                  <br />
                  <br />
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </>
    );
  }
}

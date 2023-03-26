import React, { Component } from "react";
import Slider from "react-slick";
import "./Sertifikati.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default class Sertifikati extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 2,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
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
        <div className="section3">
          <div className="container">
            <h2 className="kacehtva-sertifkati">
              {" "}
              Качество продукции подтверждают сертификаты{" "}
            </h2>{" "}
            <Slider {...settings}>
              <div>
                <img src={this.props.image} alt="" />
              </div>{" "}
              <div>
                <img src={this.props.image2} alt="" />
              </div>{" "}
              <div>
                <img src={this.props.image3} alt="" />
              </div>{" "}
              <div>
                <img src={this.props.image4} alt="" />
              </div>{" "}
              <div>
                <img src={this.props.image5} alt="" />
              </div>{" "}
              <div>
                <img src={this.props.image6} alt="" />
              </div>{" "}
              <div>
                <img src={this.props.image7} alt="" />
              </div>{" "}
              <div>
                <img src={this.props.image8} alt="" />
              </div>{" "}
            </Slider>{" "}
          </div>{" "}
        </div>{" "}
      </>
    );
  }
}

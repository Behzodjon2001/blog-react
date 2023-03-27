import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./ReactTabs.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default class ReactTabs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 0,
      contents: [
        {
          image: this.props.image,
          image2: this.props.image2,
          image3: this.props.image3,
          image4: this.props.image4,
          image5: this.props.image5,
          image6: this.props.image6,
          image7: this.props.image7,
          image8: this.props.image8,
        },
        {
          image: this.props.image9,
          image2: this.props.image10,
          image3: this.props.image11,
          image4: this.props.image12,
          image5: this.props.image13,
          image6: this.props.image14,
          image7: this.props.image15,
          image8: this.props.image16,
        },
        {
          image: this.props.image17,
          image2: this.props.image18,
          image3: this.props.image19,
          image4: this.props.image20,
          image5: this.props.image21,
          image6: this.props.image22,
          image7: this.props.image23,
          image8: this.props.image24,
        },
      ],
    };
  }

  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
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
    const getTab = (id) => {
      this.setState({ activeTab: id });
    };
    return (
      <>
        {" "}
        {/* <Tabs>
                                                                                                                                                                                          <TabList>
                                                                                                                                                                                            <Tab> Title 1 </Tab> <Tab> Title 2 </Tab>{" "}
                                                                                                                                                                                          </TabList>{" "}
                                                                                                                                                                                          <TabPanel>
                                                                                                                                                                                            <h2> Any content 1 </h2>{" "}
                                                                                                                                                                                          </TabPanel>{" "}
                                                                                                                                                                                          <TabPanel>
                                                                                                                                                                                            <h2> Any content 2 </h2>{" "}
                                                                                                                                                                                          </TabPanel>{" "}
                                                                                                                                                                                        </Tabs>{" "} */}{" "}
        <div className="section4">
          <div className="container">
            <div className="card1">
              <h2>
                {" "}
                Наша <span> продукция </span>{" "}
              </h2>{" "}
            </div>{" "}
            <div className="card2">
              <button onClick={() => getTab(0)}> Ламинатные тубы </button>{" "}
              <button onClick={() => getTab(1)}> Экструзионные тубы </button>{" "}
              <button onClick={() => getTab(2)}> Другая упаковкаs </button>{" "}
            </div>{" "}
            <div className="card3">
              {" "}
              <Slider className="slider_nasha" {...settings}>
                <div className="image_naha">
                  <img
                    className="imagemain"
                    src={this.state.contents[this.state.activeTab].image}
                    alt=""
                  />
                </div>{" "}
                <div className="image_naha">
                  <img
                    className="imagemain"
                    src={this.state.contents[this.state.activeTab].image2}
                    alt=""
                  />
                </div>{" "}
                <div className="image_naha">
                  <img
                    className="imagemain"
                    src={this.state.contents[this.state.activeTab].image3}
                    alt=""
                  />
                </div>{" "}
                <div className="image_naha">
                  <img
                    className="imagemain"
                    src={this.state.contents[this.state.activeTab].image4}
                    alt=""
                  />
                </div>{" "}
                <div className="image_naha">
                  <img
                    className="imagemain"
                    src={this.state.contents[this.state.activeTab].image5}
                    alt=""
                  />
                </div>{" "}
                <div className="image_naha">
                  <img
                    className="imagemain"
                    src={this.state.contents[this.state.activeTab].image6}
                    alt=""
                  />
                </div>{" "}
                <div className="image_naha">
                  <img
                    className="imagemain"
                    src={this.state.contents[this.state.activeTab].image7}
                    alt=""
                  />
                </div>{" "}
                <div className="image_naha">
                  <img
                    className="imagemain"
                    src={this.state.contents[this.state.activeTab].image8}
                    alt=""
                  />
                </div>{" "}
              </Slider>{" "}
            </div>{" "}
            <div className="card12">
              <button> Перейти в каталог </button>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </>
    );
  }
}

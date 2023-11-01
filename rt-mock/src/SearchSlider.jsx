import { Flex } from "@chakra-ui/react";
import React, { Component } from "react";
import Slider from "react-slick";

export default class searchSlider extends Component {
  render() {
    var settings = {
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      pauseOnHover: true,
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <h3
              style={{
                background: "#5f9ea0",
                color: "#fff",
                fontSize: "36px",
                lineHeight: "100px",
                margin: "10px",
                padding: "2%",
                position: "relative",
                textAlign: "center",
              }}
            >
              1
            </h3>
          </div>
          <div>
            <h3
              style={{
                background: "#5f9ea0",
                color: "#fff",
                fontSize: "36px",
                lineHeight: "100px",
                margin: "10px",
                padding: "2%",
                position: "relative",
                textAlign: "center",
              }}
            >
              2
            </h3>
          </div>
          <div>
            <h3
              style={{
                background: "#5f9ea0",
                color: "#fff",
                fontSize: "36px",
                lineHeight: "100px",
                margin: "10px",
                padding: "2%",
                position: "relative",
                textAlign: "center",
              }}
            >
              3
            </h3>
          </div>
          <div>
            <h3
              style={{
                background: "#5f9ea0",
                color: "#fff",
                fontSize: "36px",
                lineHeight: "100px",
                margin: "10px",
                padding: "2%",
                position: "relative",
                textAlign: "center",
              }}
            >
              4
            </h3>
          </div>
          <div>
            <h3
              style={{
                background: "#5f9ea0",
                color: "#fff",
                fontSize: "36px",
                lineHeight: "100px",
                margin: "10px",
                padding: "2%",
                position: "relative",
                textAlign: "center",
              }}
            >
              5
            </h3>
          </div>
          <div>
            <h3
              style={{
                background: "#5f9ea0",
                color: "#fff",
                fontSize: "36px",
                lineHeight: "100px",
                margin: "10px",
                padding: "2%",
                position: "relative",
                textAlign: "center",
              }}
            >
              6
            </h3>
          </div>
        </Slider>
      </div>
    );
  }
}

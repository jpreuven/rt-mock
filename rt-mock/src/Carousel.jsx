import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Flex } from "@chakra-ui/react";

const Carousel = ({ data }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1550,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          dots: false,
        },
      },
      {
        breakpoint: 1075,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          dots: false,
        },
      },
      {
        breakpoint: 868,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
        },
      },
      //   {
      //     breakpoint: 700,
      //     settings: {
      //       slidesToShow: 3,
      //       slidesToScroll: 1,
      //       dots: false,
      //     },
      //   },
      //   {
      //     breakpoint: 480,
      //     settings: {
      //       slidesToShow: 3,
      //       slidesToScroll: 3,
      //       dots: false,
      //     },
      //   },
    ],
  };

  console.log(data);
  //   https://api.themoviedb.org/3/tv/233629?api_key=caf41b0e2960fd6871b2db9b3af78767
  return (
    // <div style={{ width: "100%", maxWidth: "1500px" }}>
    <div>
      <Slider {...settings} className={"category-slider"}>
        {data
          ? data.map((item) => (
              <Flex key={item.id} justifyContent={"center"}>
                <a href={`tv/${item.id}`}>
                  <div
                    className="carousel-slider-div"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                      alt={item.name}
                      className={"carousel-image"}
                    />
                    <p style={{ textAlign: "center" }}>{item.name}</p>
                  </div>
                </a>
              </Flex>
            ))
          : null}
        {/* {data.map((item, index) => (
          <Flex key={index} justifyContent={"center"}>
            <div
              className="carousel-slider-div"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                className={"carousel-image"}
                // style={{ height: 250 }}
              />
              <p>{item.title}</p>
            </div>
          </Flex>
        ))} */}
      </Slider>
    </div>
  );
};

export default Carousel;

import { Flex } from "@chakra-ui/react";
import React, { Component } from "react";
import Slider from "react-slick";

export default function searchSlider() {
  {
    const imageFolder = `${import.meta.env.BASE_URL}images/banner/`;

    const bannerImages = [
      {
        name: "Cat sunglasses.jpg",
        description:
          " Lorem ipsum dolor sit, amet consectetur adipisicing elit.Ipsum tempora, corrupti reprehenderit similique quidem vitae at, cum dicta ducimus unde ipsam sequi nostrum repellendus sed suscipit maiores id optio ratione laborum error expedita consequatur. Aspernatur eos tempora dolores asperiores fugiat, autem quibusdam delectus. Praesentium tempora fuga qui accusantium sed, fugiat sequi nemo esse eligendi sunt corporis ",
        //Ipsum tempora, corrupti reprehenderit similique quidem vitae at, cum dicta ducimus unde ipsam sequi nostrum repellendus sed suscipit maiores id optio ratione laborum error expedita consequatur. Aspernatur eos tempora dolores asperiores fugiat, autem quibusdam delectus. Praesentium tempora fuga qui accusantium sed, fugiat sequi nemo esse eligendi sunt corporis omnis dolores nesciunt et cumque quas laborum eaque commodi ab enim quis consectetur assumenda ullam pariatur. Optio rerum quas ipsa molestiae ea qui facilis, assumenda natus officia impedit quod consectetur pariatur. Facilis obcaecati doloribus tempore amet asperiores voluptatem voluptas? Quae eius ratione quisquam eum!
      },
      {
        name: "Movie set.jpg",
        description: "Vivamus lacinia odio vitae vestibulum.",
      },
      {
        name: "Screenshot 2023-11-02 112659.jpg",
        description: "Donec sit amet nisl. Sed massa.",
      },
      {
        name: "camera-director.jpg",
        description: "Curabitur sodales ligula in libero.",
      },
      {
        name: "explosion movie set.jpg",
        description: "Sed dignissim lacinia nunc.",
      },
    ];

    var settings = {
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 999999999,
      pauseOnHover: true,
    };
    return (
      <div>
        <Slider {...settings}>
          {bannerImages.map((image, index) => (
            <div key={index} id="banner-image-container">
              <img
                src={`${imageFolder}${encodeURIComponent(image.name)}`}
                alt={`Banner ${index}`}
                style={{ width: "100%" }}
              />
              <div
                id="banner-image-description"
                style={{
                  position: "absolute",
                  bottom: 10,
                  background: "rgba(0, 0, 0, 0.6)",
                  color: "white",
                  width: "100%",
                  wordWrap: "break-word",
                }}
              >
                <p>{image.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

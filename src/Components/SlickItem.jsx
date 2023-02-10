import { Box } from "@mui/material";
import React, { Fragment } from "react";
import clients from "./clientLogos.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SlickItem() {
  const settings = {
    // dots: true,
    // infinite: true,
    // speed: 1000,
    // slidesToShow: 2,
    // slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
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
    <Fragment>
      <Slider autoplay {...settings}>
        {clients.map((img, idx) => (
          <Box
            key={idx}
            sx={{
              p: 1,
              display: "flex",
              gap: { xs: 3, sm: 2, md: 3 },
            }}
          >
            <Box
              sx={{
                width: { xs: "250px", sm: "350px", md: "450px" },
                height: { xs: "180px", sm: "250px", md: "350px" },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "white",
                borderRadius: "15px",
                boxShadow: "0 10px 5px 0 grey",
                p: 3,
              }}
            >
              <img src={img} alt="" className="client-logo" />
            </Box>
          </Box>
        ))}
      </Slider>
    </Fragment>
  );
}

export default SlickItem;

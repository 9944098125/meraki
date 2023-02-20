import { Box } from "@mui/material";
import React, { Fragment } from "react";
// import clients from "./clientLogos.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import symb from "../Assets/Images/symb.jpg";
import iamneo from "../Assets/Images/iamneo.jpg";
import rapido from "../Assets/Images/rapido.jpg";
import sco from "../Assets/Images/sco.jpg";
import clicks from "../Assets/Images/clicks.jpg";

function SlickItem() {
  const clients = [iamneo, symb, rapido, sco, clicks];
  const settings = {
    // dots: true,
    // infinite: true,
    // speed: 1000,
    // slidesToShow: 2,
    // slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1450,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
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
              gap: { xs: 3, sm: 3, md: 3 },
            }}
          >
            <Box
              sx={{
                width: { xs: "150px", sm: "170px", md: "250px" },
                height: { xs: "70px", sm: "80px", md: "150px" },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "white",
                borderRadius: "15px",
                p: 3,
                "&:hover": {
                  boxShadow: "0 5px 5px 0 rgb(172, 172, 188)",
                },
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

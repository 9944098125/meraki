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
import times from "../Assets/Images/times.webp";
import rdp from "../Assets/Images/rdp.png";
import oxford from "../Assets/Images/oxford.png";
import kosh from "../Assets/Images/kosh.png";
import fincare from "../Assets/Images/fincare.png";
import culti from "../Assets/Images/culticators.jpg";
import als from "../Assets/Images/als.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

function SlickItem() {
  React.useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <Fragment>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: { xs: 2, md: 4 },
          mb: 5,
        }}
      >
        <Box
          data-aos="fade-up"
          sx={{
            height: "40%",
            width: "20%",
            borderRadius: "9px",
            p: 2,
            py: { xs: 0, sm: 4, md: 6 },
            "&:hover": { boxShadow: "5px 5px 5px 5px #1a237e" },
          }}
        >
          <img src={iamneo} alt="" className="client-logo" />
        </Box>
        <Box
          data-aos="fade-down"
          sx={{
            height: "40%",
            width: "20%",
            borderRadius: "9px",
            p: 2,
            py: { xs: 0, sm: 2 },
            "&:hover": { boxShadow: "5px 5px 5px 5px #1a237e" },
          }}
        >
          <img src={rapido} alt="" className="client-logo" />
        </Box>
        <Box
          data-aos="fade-up"
          sx={{
            height: "40%",
            width: "20%",
            borderRadius: "9px",
            p: 2,
            py: { xs: 0, sm: 5, md: 8.5 },
            "&:hover": { boxShadow: "5px 5px 5px 5px #1a237e" },
          }}
        >
          <img src={symb} alt="" className="client-logo" />
        </Box>
        <Box
          data-aos="fade-down"
          sx={{
            height: "40%",
            width: "20%",
            borderRadius: "9px",
            p: 2,
            py: 0,
            "&:hover": { boxShadow: "5px 5px 5px 5px #1a237e" },
          }}
        >
          <img src={clicks} alt="" className="client-logo" />
        </Box>
        <Box
          data-aos="fade-up"
          sx={{
            height: "40%",
            width: "20%",
            borderRadius: "9px",
            p: 2,
            py: 0,
            "&:hover": { boxShadow: "5px 5px 5px 5px #1a237e" },
          }}
        >
          <img src={sco} alt="" className="client-logo" />
        </Box>
        <Box
          data-aos="fade-down"
          sx={{
            height: "40%",
            width: "20%",
            borderRadius: "9px",
            p: 2,
            py: 0,
            "&:hover": { boxShadow: "5px 5px 5px 5px #1a237e" },
          }}
        >
          <img src={times} alt="" className="client-logo" />
        </Box>
        <Box
          data-aos="fade-up"
          sx={{
            height: "40%",
            width: "20%",
            borderRadius: "9px",
            p: 2,
            py: 0,
            "&:hover": { boxShadow: "5px 5px 5px 5px #1a237e" },
          }}
        >
          <img src={rdp} alt="" className="client-logo" />
        </Box>
        <Box
          data-aos="fade-down"
          sx={{
            height: "40%",
            width: "20%",
            borderRadius: "9px",
            p: 2,
            py: { xs: 0, sm: 5, md: 7 },
            "&:hover": { boxShadow: "5px 5px 5px 5px #1a237e" },
          }}
        >
          <img src={oxford} alt="" className="client-logo" />
        </Box>
        <Box
          data-aos="fade-up"
          sx={{
            height: "40%",
            width: "20%",
            borderRadius: "9px",
            p: 2,
            py: { xs: 0, sm: 4, md: 6 },
            "&:hover": { boxShadow: "5px 5px 5px 5px #1a237e" },
          }}
        >
          <img src={culti} alt="" className="client-logo" />
        </Box>
        <Box
          data-aos="fade-down"
          sx={{
            height: "40%",
            width: "20%",
            borderRadius: "9px",
            p: 2,
            py: { xs: 0, sm: 4, md: 6 },
            "&:hover": { boxShadow: "5px 5px 5px 5px #1a237e" },
          }}
        >
          <img src={kosh} alt="" className="client-logo" />
        </Box>
        <Box
          data-aos="fade-up"
          sx={{
            height: "40%",
            width: "20%",
            borderRadius: "9px",
            p: 2,
            py: { xs: 0, sm: 4, md: 6 },
            "&:hover": { boxShadow: "5px 5px 5px 5px #1a237e" },
          }}
        >
          <img src={fincare} alt="" className="client-logo" />
        </Box>
        <Box
          data-aos="fade-up"
          sx={{
            height: "40%",
            width: "20%",
            borderRadius: "9px",
            p: 2,
            py: 0,
            "&:hover": { boxShadow: "5px 5px 5px 5px #1a237e" },
          }}
        >
          <img src={als} alt="" className="client-logo" />
        </Box>
      </Box>
    </Fragment>
  );
}

export default SlickItem;

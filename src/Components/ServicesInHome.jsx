import { Typography, Box } from "@mui/material";
import React, { Fragment } from "react";
import trainingServices from "../Assets/ServicesImages/trainingServices.jpg";
import staffingServices from "../Assets/ServicesImages/staffingServices.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

function ServicesInHome() {
  React.useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <Fragment>
      <Box
        sx={{
          marginTop: "50px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          p: 3,
          gap: 3,
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "20px", sm: "35px", md: "40px" },
            fontWeight: "800",
            color: "primary.dark",
          }}
        >
          Our Services
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "12px", sm: "25px", md: "20px" },
            textAlign: "center",
          }}
        >
          Bridging the Gap Between Business And Talent
        </Typography>
        <Box
          data-aos="fade-up"
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: { xs: "none", sm: "space-between" },
            p: 2,
            border: "2px solid grey",
            borderRadius: "9px",
            width: { xs: "95%", sm: "90%" },
            gap: 2,
          }}
        >
          <img
            src={trainingServices}
            alt="trainingServices"
            className="servicesImage"
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 2,
              width: { xs: "100%", md: "50%" },
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "25px", sm: "30px", md: "35px" },
                fontWeight: "700",
                color: "primary.dark",
              }}
            >
              Training Services
            </Typography>
            <Link
              to="/services/it-training"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <button className="primaryBtn">Explore</button>
            </Link>
          </Box>
        </Box>
        <Box
          data-aos="fade-up"
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: { xs: "none", sm: "space-between" },
            p: 2,
            border: "2px solid grey",
            borderRadius: "9px",
            width: { xs: "95%", sm: "90%" },
            gap: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 2,
              width: { xs: "100%", md: "50%" },
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "25px", sm: "30px", md: "35px" },
                fontWeight: "700",
                color: "primary.dark",
              }}
            >
              Staffing Services
            </Typography>
            <Link
              to="/services/staffing-services"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <button className="primaryBtn">Explore</button>
            </Link>
          </Box>
          <img
            src={staffingServices}
            alt="trainingServices"
            className="servicesImage"
          />
        </Box>
      </Box>
    </Fragment>
  );
}

export default ServicesInHome;

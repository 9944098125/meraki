import { Typography, Box } from "@mui/material";
import React, { Fragment } from "react";
import trainingServices from "../Assets/ServicesImages/trainingServices.jpg";
import staffingServices from "../Assets/ServicesImages/staffingServices.jpg";

function ServicesInHome() {
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
          className="headings"
          sx={{
            fontSize: { xs: "50px", sm: "65px", md: "70px" },
            fontWeight: "800",
            color: "primary.dark",
          }}
        >
          Our Services
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "20px", sm: "35px", md: "40px" },
            textAlign: "center",
          }}
        >
          Bridging the Gap Between Business And Talent
        </Typography>
        <Box
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
            <button className="primaryBtn">Explore</button>
          </Box>
        </Box>
        <Box
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
            <button className="primaryBtn">Explore</button>
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

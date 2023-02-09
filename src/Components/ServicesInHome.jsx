import { Typography, Box } from "@mui/material";
import React, { Fragment } from "react";
import trainingServices from "../Assets/Images/trainingServices.jpg";

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
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            p: 2,
            border: "2px solid grey",
            borderRadius: "9px",
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
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "25px", sm: "30px", md: "35px" },
                fontWeight: "700",
                color: "secondary.dark",
              }}
            >
              Training Services
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "15px", sm: "18px", md: "23px" },
                fontStyle: "italic",
                textAlign: "center",
              }}
            >
              Connecting Talent With Right Opportunities
            </Typography>
            <button className="primaryBtn">Explore</button>
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
}

export default ServicesInHome;

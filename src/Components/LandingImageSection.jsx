import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { Fragment } from "react";
import landingImage from "../Assets/Images/landingImage.jpg";

function LandingImageSection() {
  return (
    <Fragment>
      <Box
        sx={{
          width: "100%",
          height: { xs: "100vh", sm: "80vh", md: "70vh" },
          backgroundImage: `url(${landingImage})`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: {
              xs: "80%",
              sm: "70%",
              md: "30%",
            },
            borderBottom: "3px solid cyan",
            mb: 4,
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "17px", sm: "19px", md: "22px" },
              fontWeight: "700",
              color: "white",
            }}
          >
            The Ultimate Destination For Your Staffing And Training Needs
          </Typography>
        </Box>
        <Typography
          sx={{
            fontSize: { xs: "15px", sm: "17px", md: "20px" },
            color: "white",
            mb: 3,
          }}
        >
          96% of the clients are satisfied
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            justifyContent: "space-evenly",
            gap: 3,
          }}
        >
          <Typography
            sx={{
              color: "white",
              fontSize: "25px",
              p: 1,
              border: "2px solid white",
              borderRadius: "15px",
            }}
          >
            Staffing Services
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontSize: "25px",
              p: 1,
              border: "2px solid white",
              borderRadius: "15px",
            }}
          >
            Training Services
          </Typography>
        </Box>
      </Box>
    </Fragment>
  );
}

export default LandingImageSection;

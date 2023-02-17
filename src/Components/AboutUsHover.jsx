import React, { Fragment } from "react";
import { Box, Typography } from "@mui/material";
import { HashLink } from "react-router-hash-link";

function AboutUsHover() {
  return (
    <Fragment>
      <Box
        sx={{
          backgroundColor: "white",
          minHeight: { xs: "20vh", md: "25vh", lg: "30vh" },
          maxHeight: { xs: "60vh", md: "75vh" },
          overflowX: "hidden",
          width: { xs: "40vw", sm: "40vw", md: "20vw" },
          borderRadius: "12px",
          boxShadow: "5px 5px 0px 0px grey",
          display: "flex",
          flexDirection: "column",
          gap: 3,
          pt: 3,
          pl: 2,
        }}
      >
        <HashLink
          to="/about#header"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Typography
            sx={{
              color: "primary.dark",
              fontSize: { xs: "16px", sm: "18px", md: "20px" },
              fontWeight: "800",
            }}
          >
            About Us
          </Typography>
        </HashLink>
        <HashLink
          to="/about#vm"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Typography
            sx={{
              color: "primary.dark",
              fontSize: { xs: "16px", sm: "18px", md: "20px" },
              fontWeight: "800",
            }}
          >
            Vision & Mission
          </Typography>
        </HashLink>
        <HashLink
          to="/about#values"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Typography
            sx={{
              color: "primary.dark",
              fontSize: { xs: "16px", sm: "18px", md: "20px" },
              fontWeight: "800",
            }}
          >
            Values
          </Typography>
        </HashLink>
      </Box>
    </Fragment>
  );
}

export default AboutUsHover;

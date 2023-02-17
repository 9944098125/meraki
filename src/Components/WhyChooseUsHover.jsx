import React, { Fragment } from "react";
import { Box, Typography } from "@mui/material";
import { HashLink } from "react-router-hash-link";

function WhyChooseUsHover() {
  return (
    <Fragment>
      <Box
        sx={{
          backgroundColor: "white",
          minHeight: { xs: "20vh", md: "25vh", lg: "30vh" },
          maxHeight: { xs: "60vh", md: "75vh" },
          overflowX: "hidden",
          width: { xs: "55vw", sm: "45vw", md: "45vw" },
          borderRadius: "12px",
          boxShadow: "5px 5px 0px 0px grey",
          display: "flex",
          flexDirection: "column",
          gap: 3,
          pt: 3,
          pl: 2,
          pb: 2,
        }}
      >
        <HashLink
          to="/why-choose-us#irtcots"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Typography
            sx={{
              color: "primary.dark",
              fontSize: { xs: "16px", sm: "18px", md: "20px" },
              fontWeight: "800",
            }}
          >
            Irresistible Reasons to choose our Training Services
          </Typography>
        </HashLink>
        <HashLink
          to="/why-choose-us#training-methodology"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Typography
            sx={{
              color: "primary.dark",
              fontSize: { xs: "16px", sm: "18px", md: "20px" },
              fontWeight: "800",
            }}
          >
            Our Training Methodology
          </Typography>
        </HashLink>
        <HashLink
          to="/why-choose-us#irtcoss"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Typography
            sx={{
              color: "primary.dark",
              fontSize: { xs: "16px", sm: "18px", md: "20px" },
              fontWeight: "800",
            }}
          >
            Irresistible Reasons to choose our staffing Services
          </Typography>
        </HashLink>

        <HashLink
          to="/why-choose-us#milestones-achievements"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Typography
            sx={{
              color: "primary.dark",
              fontSize: { xs: "16px", sm: "18px", md: "20px" },
              fontWeight: "800",
            }}
          >
            A Sneak Peak Into Our Achievements
          </Typography>
        </HashLink>
      </Box>
    </Fragment>
  );
}

export default WhyChooseUsHover;

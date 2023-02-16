import React, { Fragment } from "react";
import { Box, Typography } from "@mui/material";

function AboutUsComponent() {
  return (
    <Fragment>
      <Box
        id="header"
        className="hero"
        sx={{
          p: { xs: 6, sm: 7, md: 10 },
          pb: 0,
          mb: 4,
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "20px", sm: "35px", md: "40px" },
            fontWeight: "700",
            color: "primary.dark",
            position: "relative",
            mb: 3,
          }}
        >
          About Us
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "14px", sm: "16px", md: "20px" },
            mb: 5,
            position: "relative",
            position: "relative",
          }}
        >
          Since our inception in 2022, Meraki Training Solutions has carved a
          niche for itself in the Talent transformation vertical through our
          Pragmatic training solutions.
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "14px", sm: "16px", md: "20px" },
            mb: 5,
            position: "relative",
          }}
        >
          We specialize in addressing the skills gap of employees to resolute
          competency based - learning programs and interventions that help
          enrich business growth and performance.
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "14px", sm: "16px", md: "20px" },
            mb: 5,
            position: "relative",
          }}
        >
          We also partner with organizations to understand their staffing
          requirements for their training departmentsand procure the candidates
          with the desired profile
        </Typography>
        <Typography
          sx={{
            fontSize: {
              xs: "14px",
              sm: "16px",
              md: "20px",
              mb: 5,
              position: "relative",
            },
          }}
        >
          With our headquarters in Bangalore, we aim to be a globally preferred
          training partner by providing pragmatic learning solutions and through
          our innovative and strategy driven approach.
        </Typography>
      </Box>
    </Fragment>
  );
}

export default AboutUsComponent;

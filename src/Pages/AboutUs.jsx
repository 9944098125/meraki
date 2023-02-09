import { Box, Typography } from "@mui/material";
import React, { Fragment } from "react";

function AboutUs() {
  return (
    <Fragment>
      <Box sx={{ p: { xs: 6, sm: 7, md: 10 } }}>
        <Typography
          sx={{
            fontSize: { xs: "50px", sm: "65px", md: "70px" },
            fontWeight: "700",
            color: "primary.dark",
          }}
        >
          About Us
        </Typography>
        <Typography
          sx={{ fontSize: { xs: "14px", sm: "16px", md: "20px" }, mb: 5 }}
        >
          Since our inception in 2022, Meraki Training Solutions has carved a
          niche for itself in the Talent transformation vertical through our
          Pragmatic training solutions.
        </Typography>
        <Typography
          sx={{ fontSize: { xs: "14px", sm: "16px", md: "20px" }, mb: 5 }}
        >
          We specialize in addressing the skills gap of employees to resolute
          competency based - learning programs and interventions that help
          enrich business growth and performance.
        </Typography>
        <Typography
          sx={{ fontSize: { xs: "14px", sm: "16px", md: "20px" }, mb: 5 }}
        >
          We also partner with organizations to understand their staffing
          requirements for their training departmentsand procure the candidates
          with the desired profile
        </Typography>
      </Box>
    </Fragment>
  );
}

export default AboutUs;

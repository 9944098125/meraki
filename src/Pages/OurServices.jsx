import { Typography, Box } from "@mui/material";
import React, { Fragment } from "react";
import CollegePartnerships from "../Components/CollegePartnerships";
import ItTraining from "../Components/ItTraining";
import PowerSkills from "../Components/PowerSkills";
import SoftSkills from "../Components/SoftSkills";
import StaffingServices from "../Components/StaffingServices";
import ItSolutions from "../Components/ItSolutions";

function OurServices() {
  return (
    <Fragment>
      <Box
        id="our-services"
        sx={{
          backgroundColor: "white",
          minHeight: { xs: "40vh", md: "47.5vh", lg: "50vh" },
          maxHeight: { xs: "60vh", md: "75vh" },
          overflowY: "scroll",
          overflowX: "hidden",
          width: { xs: "70vw", sm: "50vw", md: "35vw" },
          borderRadius: "12px",
          boxShadow: "5px 5px 0px 0px grey",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: { xs: 3, sm: 4, md: 2 },
            p: { xs: 2, md: 7 },
          }}
        >
          {/* technical / it training */}
          <ItTraining />
          <PowerSkills />
          <SoftSkills />
          <CollegePartnerships />
          <StaffingServices />
          <ItSolutions />
        </Box>
      </Box>
    </Fragment>
  );
}

export default OurServices;

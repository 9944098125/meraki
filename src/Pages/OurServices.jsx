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
          minHeight: { xs: "30vh", md: "30vh" },
          maxHeight: { xs: "60vh", md: "65vh" },
          overflowY: "scroll",
          width: "70vw",
          borderRadius: "12px",
          boxShadow: "5px 5px 0px 0px grey",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: { xs: 3, sm: 4, md: 5 },
            p: { xs: 2, md: 5 },
          }}
        >
          {/* technical / it training */}
          <ItTraining />
          <PowerSkills />
          <SoftSkills />
          <CollegePartnerships />
          <ItSolutions />
          <StaffingServices />
        </Box>
      </Box>
    </Fragment>
  );
}

export default OurServices;

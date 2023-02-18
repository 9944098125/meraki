import React, { Fragment } from "react";
import IRTCOTS from "../Components/IRTCOTS";
import TrainingMethodology from "../Components/TrainingMethodology";
import IRTCOSS from "../Components/IRTCOSS";
import MileStones from "../Components/MileStones";
import DownloadBrochure from "../Components/DownloadBrochure";
import whyChooseUs from "../Assets/Images/whyChooseUs.jpg";
import { Box, Typography } from "@mui/material";

function WhyChooseUs() {
  return (
    <Fragment>
      <Box
        id="header"
        sx={{
          width: "100%",
          height: { xs: "50vh", sm: "60vh", md: "70vh" },
          backgroundImage: `url(${whyChooseUs})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-end",
          py: 3,
          px: 3,
          mb: 10,
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "35px", sm: "45px", md: "55px" },
            color: "white",
            fontWeight: "800",
          }}
        >
          Why Choose Us ?
        </Typography>
      </Box>
      <IRTCOTS />
      <TrainingMethodology />
      <IRTCOSS />
      <Box id="achievements" sx={{ p: { xs: 2, sm: 3, md: 3 } }}>
        <MileStones title="A Sneak Peek into Our Achievements" />
      </Box>
      <DownloadBrochure />
    </Fragment>
  );
}

export default WhyChooseUs;

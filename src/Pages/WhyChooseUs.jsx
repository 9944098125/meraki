import React, { Fragment } from "react";
import IRTCOTS from "../Components/IRTCOTS";
import TrainingMethodology from "../Components/TrainingMethodology";
import IRTCOHRS from "../Components/IRTCOHRS";
import MileStones from "../Components/MileStones";
import DownloadBrochure from "../Components/DownloadBrochure";
import { Box } from "@mui/material";

function WhyChooseUs() {
  return (
    <Fragment>
      <IRTCOTS />
      <TrainingMethodology />
      {/* <IRTCOHRS /> */}
      <Box id="achievements" sx={{ p: { xs: 2, sm: 3, md: 3 } }}>
        <MileStones title="A Sneak Peek into Our Achievements" />
      </Box>
      <DownloadBrochure />
    </Fragment>
  );
}

export default WhyChooseUs;

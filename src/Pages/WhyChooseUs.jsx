import React, { Fragment } from "react";
import IRTCOTS from "../Components/IRTCOTS";
import TrainingMethodology from "../Components/TrainingMethodology";
import IRTCOSS from "../Components/IRTCOSS";
import MileStones from "../Components/MileStones";
import DownloadBrochure from "../Components/DownloadBrochure";
import { Box } from "@mui/material";

function WhyChooseUs() {
  return (
    <Fragment>
      <Box sx={{ width: "100%", height: "50vh", mb: 10 }}>
        <img
          src="https://d-connect.net/wp-content/uploads/2019/10/why-choose-us-750x393.jpg"
          alt=""
          className="why-choose-us-header-img"
        />
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

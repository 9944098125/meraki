import { Box, Typography } from "@mui/material";
import React, { Fragment } from "react";
import AboutUsComponent from "../Components/AboutUs";
import VisionAndMission from "../Components/VisionAndMission";
import passion from "../Assets/Images/passion.jpg";
import diligence from "../Assets/Images/diligence.gif";
import integrity from "../Assets/Images/integrity.png";
import DownloadBrochure from "../Components/DownloadBrochure";

function AboutUs() {
  return (
    <Fragment>
      <AboutUsComponent />
      <VisionAndMission />
      <Box
        sx={{
          p: 2,
          mt: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "50px", sm: "65px", md: "70px" },
            fontWeight: "700",
            color: "primary.dark",
          }}
        >
          Values
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            justifyContent: { xs: "none", sm: "center" },
            gap: 3,
          }}
        >
          <Box
            sx={{
              backgroundImage: `url(${passion})`,
              height: { xs: "120px", md: "170px" },
              width: { xs: "200px", sm: "200px", md: "300px" },
              backgroundSize: "cover",
              boxShadow: "5px 5px 5px 5px black",
              borderRadius: "9px",
              p: 2,
            }}
          >
            <Typography
              sx={{
                color: "white",
                fontWeight: "700",
                fontSize: { xs: "35px", sm: "40px", md: "50px" },
              }}
            >
              Passion
            </Typography>
          </Box>
          <Box
            sx={{
              backgroundImage: `url(${diligence})`,
              height: { xs: "120px", md: "170px" },
              width: { xs: "200px", sm: "200px", md: "300px" },
              backgroundSize: "cover",
              boxShadow: "5px 5px 5px 5px black",
              borderRadius: "9px",
              p: 2,
            }}
          >
            <Typography
              sx={{
                color: "white",
                fontWeight: "700",
                fontSize: { xs: "35px", sm: "40px", md: "50px" },
              }}
            >
              Diligence
            </Typography>
          </Box>
          <Box
            sx={{
              backgroundImage: `url(${integrity})`,
              height: { xs: "120px", md: "170px" },
              width: { xs: "200px", sm: "200px", md: "300px" },
              backgroundSize: "cover",
              boxShadow: "5px 5px 5px 5px black",
              borderRadius: "9px",
              p: 2,
            }}
          >
            <Typography
              sx={{
                color: "white",
                fontWeight: "700",
                fontSize: { xs: "35px", sm: "40px", md: "50px" },
              }}
            >
              Integrity
            </Typography>
          </Box>
        </Box>
      </Box>
      <DownloadBrochure />
    </Fragment>
  );
}

export default AboutUs;

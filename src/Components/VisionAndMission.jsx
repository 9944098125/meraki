import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { Fragment } from "react";
import vision from "../Assets/Images/vision.png";
import mission from "../Assets/Images/mission.png";

function VisionAndMission() {
  return (
    <Fragment>
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#E2DFD2",
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          mb: 5,
          p: 3,
        }}
      >
        <Box
          sx={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            p: 2,
            borderRadius: "9px",
            cursor: "alias",
            height: { xs: "100%", md: "400px" },
            "&:hover": { backgroundColor: "white" },
          }}
        >
          <Box
            sx={{
              p: 3,
              borderRadius: "50%",
              mt: 5,
              mb: 2,
              backgroundColor: "rgb(228, 248, 250)",
            }}
          >
            <img src={vision} alt="vision" className="visionAndMissionImage" />
          </Box>
          <Typography
            sx={{
              fontSize: { xs: "25px", sm: "30px", md: "35px" },
              fontWeight: "700",
              color: "primary.dark",
            }}
          >
            Vision
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "17px", sm: "20px", md: "23px" },
              textAlign: "center",
            }}
          >
            Committed to become a globally preferred training & staffing partner
            by providing pragmatic learning solutions through our innovative and
            strategy driven approach.
          </Typography>
        </Box>
        <Box
          sx={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            p: 2,
            borderRadius: "9px",
            cursor: "alias",
            height: { xs: "100%", md: "400px" },
            "&:hover": { backgroundColor: "white" },
          }}
        >
          <Box
            sx={{
              p: 3,
              borderRadius: "50%",
              mt: 5,
              mb: 2,
              backgroundColor: "rgb(235, 227, 253)",
            }}
          >
            <img src={mission} alt="vision" className="visionAndMissionImage" />
          </Box>
          <Typography
            sx={{
              fontSize: { xs: "25px", sm: "30px", md: "35px" },
              fontWeight: "700",
              color: "primary.dark",
            }}
          >
            Mission
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "17px", sm: "20px", md: "23px" },
              textAlign: "center",
            }}
          >
            To be a valuable strategic partner to enhance our clients’ business
            growth by delivering exclusive staffing solutions and resolute
            competency-based learning programs and interventions that enrich the
            organization’s performance.
          </Typography>
        </Box>
      </Box>
    </Fragment>
  );
}

export default VisionAndMission;

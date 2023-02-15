import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { Fragment } from "react";
import vision from "../Assets/Images/vision.jpg";
import mission from "../Assets/Images/mission.jpg";

function VisionAndMission() {
  return (
    <Fragment>
      <Box
        sx={{
          width: "100%",
          height: { xs: "100%", sm: "90vh", md: "80vh" },
          backgroundColor: "#F5F5F5",
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { xs: "center", sm: "none" },
          mb: 5,
          p: { xs: 1, sm: 2, md: 3 },
        }}
      >
        <Box
          sx={{
            width: { xs: "95%", sm: "50%" },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            p: { xs: 0, sm: 1, md: 2 },
            borderRadius: "9px",
            cursor: "alias",
            height: { xs: "100%", md: "90%" },
            "&:hover": { backgroundColor: "white" },
          }}
        >
          <Box
            sx={{
              p: { xs: 1, sm: 1.5, md: 2 },
              borderRadius: "50%",
              mt: 5,
              mb: 2,
              backgroundColor: "white",
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
            width: { xs: "95%", sm: "50%" },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            p: { xs: 0, sm: 1, md: 2 },
            borderRadius: "9px",
            cursor: "alias",
            height: { xs: "100%", md: "90%" },
            "&:hover": { backgroundColor: "white" },
          }}
        >
          <Box
            sx={{
              p: { xs: 1, sm: 1.5, md: 2 },
              borderRadius: "50%",
              mt: 5,
              mb: 2,
              backgroundColor: "white",
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

import { Typography, Box } from "@mui/material";
import React, { Fragment } from "react";

function OurServices() {
  return (
    <Fragment>
      <Box
        sx={{
          backgroundColor: "white",
          minHeight: { xs: "100%", sm: "100%", md: "50vh" },
          width: "90vw",
          borderRadius: "12px",
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
          <Box sx={{}}>
            <Typography
              sx={{
                color: "primary.dark",
                fontSize: { xs: "16px", sm: "18px", md: "20px" },
                fontWeight: "800",
              }}
            >
              Technical/IT Training
            </Typography>
          </Box>
          <Box sx={{}}>
            <Typography
              sx={{
                color: "primary.dark",
                fontSize: { xs: "16px", sm: "18px", md: "20px" },
                fontWeight: "800",
              }}
            >
              Power Skills For Leadership & Management
            </Typography>
          </Box>
          <Box sx={{}}>
            <Typography
              sx={{
                color: "primary.dark",
                fontSize: { xs: "16px", sm: "18px", md: "20px" },
                fontWeight: "800",
              }}
            >
              Soft Skills & Business Communication
            </Typography>
          </Box>
          <Box sx={{}}>
            <Typography
              sx={{
                color: "primary.dark",
                fontSize: { xs: "16px", sm: "18px", md: "20px" },
                fontWeight: "800",
              }}
            >
              College Partnerships
            </Typography>
          </Box>
          <Box sx={{}}>
            <Typography
              sx={{
                color: "primary.dark",
                fontSize: { xs: "16px", sm: "18px", md: "20px" },
                fontWeight: "800",
              }}
            >
              Staffing services
            </Typography>
          </Box>
          <Box sx={{}}>
            <Typography
              sx={{
                color: "primary.dark",
                fontSize: { xs: "16px", sm: "18px", md: "20px" },
                fontWeight: "800",
              }}
            >
              IT Solutions
            </Typography>
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
}

export default OurServices;

import { Typography, Box } from "@mui/material";
import React, { Fragment } from "react";

function IRTCOSS() {
  return (
    <Fragment>
      <Box
        id="irtcohr"
        sx={{
          p: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            color: "primary.dark",
            fontWeight: "800",
            fontSize: { xs: "20px", sm: "35px", md: "40px" },
            width: "70%",
            textAlign: "center",
          }}
        >
          Irresistible Reasons To Choose Our Staffing Services
        </Typography>
      </Box>
    </Fragment>
  );
}

export default IRTCOSS;

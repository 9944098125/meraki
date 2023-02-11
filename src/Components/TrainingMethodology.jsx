import { Box, Typography } from "@mui/material";
import React, { Fragment } from "react";

function TrainingMethodology() {
  return (
    <Fragment>
      <Box sx={{ p: 3 }}>
        <Typography
          sx={{
            color: "primary.dark",
            fontWeight: "800",
            fontSize: { xs: "30px", sm: "45px", md: "50px" },
          }}
        >
          Our Training Methodology
        </Typography>
      </Box>
    </Fragment>
  );
}

export default TrainingMethodology;

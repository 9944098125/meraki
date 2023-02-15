import { Typography, Box } from "@mui/material";
import React, { Fragment } from "react";

function Careers() {
  return (
    <Fragment>
      <Box sx={{ p: { xs: 2, sm: 4, md: 6 } }}>
        <Typography
          sx={{
            fontSize: { xs: "50px", sm: "65px", md: "70px" },
            fontWeight: "700",
            color: "primary.dark",
          }}
        >
          Careers
        </Typography>
      </Box>
    </Fragment>
  );
}

export default Careers;

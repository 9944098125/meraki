import { Typography, Box } from "@mui/material";
import React, { Fragment } from "react";

function IRTCOHRS() {
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
          Irresistible Reasons To Choose Our HR Services
        </Typography>
      </Box>
    </Fragment>
  );
}

export default IRTCOHRS;

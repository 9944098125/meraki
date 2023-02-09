import { Box, Typography } from "@mui/material";
import React, { Fragment } from "react";

function Clients() {
  return (
    <Fragment>
      <Box sx={{ display: "flex", justifyContent: "center", p: 3 }}>
        <Typography
          sx={{
            fontSize: { xs: "50px", sm: "65px", md: "70px" },
            fontWeight: "700",
            color: "primary.dark",
          }}
        >
          Our Clients
        </Typography>
      </Box>
    </Fragment>
  );
}

export default Clients;

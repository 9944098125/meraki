import { Box, Typography } from "@mui/material";
import React, { Fragment } from "react";
import SlickItem from "./SlickItem";

function Clients() {
  return (
    <Fragment>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          p: 3,
          pb: 0,
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "20px", sm: "35px", md: "40px" },
            fontWeight: "700",
            color: "primary.dark",
            mb: { xs: 2, md: 4 },
          }}
        >
          Our Clients
        </Typography>
        <Box
          sx={{
            width: "100%",
            p: 2,
            pb: 0,
          }}
        >
          <SlickItem />
        </Box>
      </Box>
    </Fragment>
  );
}

export default Clients;

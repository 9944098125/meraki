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
          mb: { xs: 3, sm: 4, md: 5 },
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "50px", sm: "65px", md: "70px" },
            fontWeight: "700",
            color: "primary.dark",
          }}
        >
          Our Clients
        </Typography>
        <Box
          sx={{
            width: "100%",
            height: "60vh",
            p: 2,
          }}
        >
          <SlickItem />
        </Box>
      </Box>
    </Fragment>
  );
}

export default Clients;

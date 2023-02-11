import { Box } from "@mui/system";
import React, { Fragment } from "react";
import Clients from "../Components/Clients";

function OurClients() {
  return (
    <Fragment>
      <Box sx={{ p: { xs: 1, sm: 2, md: 3 } }}>
        <Clients />
      </Box>
    </Fragment>
  );
}

export default OurClients;

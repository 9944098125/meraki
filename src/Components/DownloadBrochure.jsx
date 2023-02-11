import { Box } from "@mui/system";
import React, { Fragment } from "react";

function DownloadBrochure() {
  return (
    <Fragment>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: 5,
        }}
      >
        <button style={{ height: "100%" }} className="primaryBtn">
          Download Brochure
        </button>
      </Box>
    </Fragment>
  );
}

export default DownloadBrochure;

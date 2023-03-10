import { Box } from "@mui/system";
import React, { Fragment } from "react";

function DownloadBrochure() {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("MerakiPortfolio.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "MerakiPortfolio.pdf";
        alink.click();
      });
    });
  };
  return (
    <Fragment>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: 5,
          pb: 0,
          mb: 4,
        }}
      >
        <button
          onClick={onButtonClick}
          style={{ height: "100%" }}
          className="primaryBtn"
        >
          Download Brochure
        </button>
      </Box>
    </Fragment>
  );
}

export default DownloadBrochure;

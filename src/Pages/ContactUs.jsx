import { Box, Typography } from "@mui/material";
import React, { Fragment } from "react";
import GetInTouch from "../Components/GetInTouch";

class Map extends React.Component {
  componentDidMount() {
    const google = window.google;
    new google.maps.Map(this.refs.map, {
      center: { lat: 12.972442, lng: 77.580643 },
      zoom: 12,
    });
  }

  render() {
    return <div ref="map" style={{ height: "500px", width: "100%" }}></div>;
  }
}

function ContactUs() {
  return (
    <Fragment>
      <Box id="header" sx={{ width: "100%" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: { xs: "center", sm: "flex-start" },
            justifyContent: { xs: "none", sm: "flex-start" },
            mt: 4,
          }}
        >
          <Box
            sx={{
              px: 3,
              width: { xs: "100%", sm: "50%" },
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "20px", sm: "25px", md: "32px" },
                color: "primary.dark",
                fontWeight: "800",
                borderBottom: "2px solid #1a237e",
              }}
            >
              OFFICE ADDRESS
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "16px", sm: "23px", md: "25px" },
                fontWeight: "700",
                color: "primary.dark",
              }}
            >
              Kasavanahalli, 743, 15th Cross Rd, KPC Layout, Bengaluru,
              Karnataka 560035
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "16px", sm: "23px", md: "25px" },
                color: "primary.dark",
              }}
            >
              hr@merakitrainings.in
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "16px", sm: "23px", md: "25px" },
                color: "primary.dark",
              }}
            >
              +91 74119 78909
            </Typography>
          </Box>
          {/* google maps */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15554.33360246679!2d77.61924415!3d12.934475849999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1677307715626!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: "0", width: "100%" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </Box>
        <GetInTouch />
      </Box>
    </Fragment>
  );
}

export default ContactUs;

// google maps api key
// AIzaSyAEwhhCSy5wLnVU1sgnGbDeDGZTKIe6n14

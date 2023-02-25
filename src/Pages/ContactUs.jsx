import { Box, Typography } from "@mui/material";
import React, { Fragment } from "react";
import MlogoDesktop from "../Assets/Images/Mlogo_desktop.svg";

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
            alignItems: "center",
            justifyContent: "center",
            mt: 4,
          }}
        >
          <Box
            sx={{
              backgroundColor: "white",
              width: { xs: "90%", sm: "45%", md: "45%" },
              // mt: { xs: -55, sm: -55, md: -55 },
              p: { xs: 2, sm: 3, md: 4 },
              zIndex: "99",
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: { xs: "40px", sm: "50px", md: "60px" },
                backgroundColor: "primary.dark",
                mb: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                sx={{
                  color: "white",
                  fontSize: { xs: "18px", sm: "22px", md: "28px" },
                  fontWeight: "800",
                  textAlign: "center",
                }}
              >
                Contact Us
              </Typography>
            </Box>
            <form action="https://formspree.io/f/mqkoprjw" method="POST">
              <div className="getInTouchColumns">
                {/* <label htmlFor="name" className="getInTouchLabel">
                Name
              </label> */}
                <input
                  id="name"
                  type="text"
                  className="getInTouchFields"
                  name="name"
                  placeholder="Please Enter Your Name"
                  required
                />
              </div>

              <div className="getInTouchColumns">
                {/* <label htmlFor="email" className="getInTouchLabel">
                Email
              </label> */}
                <input
                  id="email"
                  type="email"
                  className="getInTouchFields"
                  name="email"
                  placeholder="Please Enter Your Email"
                  required
                />
              </div>

              <div className="getInTouchColumns">
                {/* <label htmlFor="phone" className="getInTouchLabel">
                Phone Number
              </label> */}
                <input
                  id="phone"
                  type="text"
                  className="getInTouchFields"
                  name="phone"
                  placeholder="Please Enter Your Phone Number"
                  required
                />
              </div>

              <div className="getInTouchColumns">
                {/* <label htmlFor="message" className="getInTouchLabel">
                Message
              </label> */}
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  required
                  placeholder="Message"
                  style={{
                    backgroundColor: "rgb(231, 226, 226)",
                    border: "none",
                    outline: "none",
                  }}
                />
              </div>

              <div className="">
                <button
                  style={{ width: "100%" }}
                  className="primaryBtn"
                  type="submit"
                >
                  Send
                </button>
              </div>
            </form>
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
          {/* <Map /> */}
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: { xs: 1, sm: 2, md: 3 },
            py: 2,
          }}
        >
          <Box sx={{ width: "40%" }}>
            <Typography
              sx={{
                fontSize: { xs: "15px", sm: "18px", md: "20px" },
                color: "primary.dark",
                fontWeight: "800",
              }}
            >
              OFFICE ADDRESS
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "13px", sm: "15px", md: "17px" },
                fontWeight: "700",
                color: "primary.dark",
              }}
            >
              Kasavanahalli, 743, 15th Cross Rd, KPC Layout, Bengaluru,
              Karnataka 560035
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "13px", sm: "15px", md: "17px" },
                color: "primary.dark",
              }}
            >
              hr@merakitrainings.in
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "13px", sm: "15px", md: "17px" },
                color: "primary.dark",
              }}
            >
              +91 74119 78909
            </Typography>
          </Box>
          <Box sx={{ height: "35vh", width: { xs: "100%", sm: "40vw" } }}>
            <img
              src={MlogoDesktop}
              style={{ height: "100%", width: "100%", objectFit: "cover" }}
              alt=""
            />
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
}

export default ContactUs;

// google maps api key
// AIzaSyAEwhhCSy5wLnVU1sgnGbDeDGZTKIe6n14

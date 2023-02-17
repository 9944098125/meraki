import { Box, Typography } from "@mui/material";
import React, { Fragment } from "react";
import MlogoDesktop from "../Assets/Images/Mlogo_desktop.svg";

function ContactUs() {
  return (
    <Fragment>
      <Box sx={{ width: "100%" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1023899.010284416!2d77.83153591768009!3d13.042398374422994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1676451271991!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0, p: 2 }}
          allowfullscreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <Box
          sx={{
            width: { xs: "90%", sm: "45%", md: "45%" },
            mt: { xs: -55, sm: -55, md: -55 },
            p: { xs: 2, sm: 3, md: 4 },
            zIndex: "99",
          }}
        >
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
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: { xs: 1, sm: 2, md: 3 },
            py: 2,
          }}
        >
          <Box sx={{ width: "50%" }}>
            <Typography
              sx={{
                fontSize: { xs: "16px", sm: "18px", md: "20px" },
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
          <Box sx={{ height: "30vh", width: "40vw" }}>
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

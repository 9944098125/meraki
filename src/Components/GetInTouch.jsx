import { Box, Typography } from "@mui/material";
import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import getInTouch from "../Assets/ServicesImages/getInTouch.png";

function GetInTouch() {
  return (
    <Fragment>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: { xs: "center", sm: "space-between" },
          alignItems: { xs: "center", sm: "space-between" },
          height: "100%",
          width: "100%",
          backgroundColor: "#d8d8d8",
          my: { xs: 2, sm: 3, md: 4 },
          p: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Box
          sx={{
            backgroundColor: "white",
            p: { xs: 2, sm: 3, md: 4 },
          }}
        >
          <Typography
            sx={{
              color: "#1a237e",
              fontSize: { xs: "20px", sm: "23px", md: "25px" },
              fontWeight: "900",
              textAlign: "center",
            }}
          >
            Get In Touch With Us
          </Typography>
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
        <img src={getInTouch} alt="" className="getInTouchImg" />
      </Box>
    </Fragment>
  );
}

export default GetInTouch;

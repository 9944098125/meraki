import { Box } from "@mui/material";
import React, { Fragment } from "react";

function GetInTouch() {
  return (
    <Fragment>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: { xs: "center", sm: "space-between" },
          alignItems: { xs: "center", sm: "space-between" },
          height: { xs: "100vh", sm: "80vh", md: "70vh" },
          width: "100%",
        }}
      >
        <Box
          sx={{
            backgroundColor: "white",
            p: 2,
          }}
        >
          <form action="https://formspree.io/f/xdovejdb" method="POST">
            <div className="">
              <label htmlFor="name" className="getInTouchLabel">
                Name
              </label>
              <input
                type="text"
                className="getInTouchFields"
                name="name"
                placeholder="Please Enter Your Name"
                required
              />
            </div>

            <div className="">
              <label htmlFor="email" className="getInTouchLabel">
                Email
              </label>
              <input
                type="email"
                className="getInTouchFields"
                name="email"
                placeholder="Please Enter Your Email"
                required
              />
            </div>

            <div className="">
              <textarea name="message" rows="6" required />
            </div>

            <div className="">
              <button className="primaryBtn" type="submit">
                Send
              </button>
            </div>
          </form>
        </Box>
      </Box>
    </Fragment>
  );
}

export default GetInTouch;

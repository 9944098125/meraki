import { Typography, Box } from "@mui/material";
import React, { Fragment } from "react";
import MlogoDesktop from "../Assets/Images/Mlogo_desktop.svg";

function Careers() {
  // const [designation, setDesignation] = React.useState("");

  // const selectDesignation = (e) => {
  //   if (designation === "") return;
  //   setDesignation(e.target.value);
  // };

  return (
    <Fragment>
      <Box sx={{ p: { xs: 2, sm: 4, md: 6 } }}>
        <Typography
          sx={{
            fontSize: { xs: "20px", sm: "35px", md: "40px" },
            fontWeight: "700",
            color: "primary.dark",
            mb: 3,
          }}
        >
          Careers
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
          }}
        >
          <Box sx={{ width: { xs: "100%", sm: "50%" } }}>
            {/* form */}
            {/* https://formspree.io/f/mqkoqead */}
            <form action="https://formspree.io/f/mdovgajk" method="POST">
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
                <select
                  className="getInTouchFields"
                  name="designation"
                  // value={designation}
                  type="text"
                  // onChange={selectDesignation}
                >
                  <option value="">Select one designation</option>
                  <option value="hr">HR</option>
                  <option value="sub-vendor">Sub Vendor</option>
                  <option value="technical-trainer">Technical Trainer</option>
                  <option value="soft-skills-trainer">
                    Soft Skills Trainer
                  </option>
                  <option value="vna-trainer">Voice and Accent Trainer</option>
                  <option value="leadership-coach">Leadership Coach</option>
                  <option value="sales-trainer">Sales Trainer</option>
                </select>
              </div>

              <div className="getInTouchColumns">
                {/* <label htmlFor="message" className="getInTouchLabel">
                Message
              </label> */}
                <input
                  name="resume"
                  type="file"
                  className="getInTouchFields"
                  enctype="multipart/form-data"
                  required
                />{" "}
              </div>

              <div className="getInTouchColumns">
                {/* <label htmlFor="message" className="getInTouchLabel">
                Message
              </label> */}
                <input
                  name="phone"
                  type="text"
                  className="getInTouchFields"
                  placeholder="Enter your Phone Number"
                  required
                />{" "}
              </div>

              <div className="">
                <button
                  // style={{ width: "100%" }}
                  className="primaryBtn"
                  type="submit"
                >
                  Send
                </button>
              </div>
            </form>
          </Box>
          <Box sx={{ height: "45vh", width: { xs: "100%", sm: "50vw" } }}>
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

export default Careers;

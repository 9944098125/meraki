import { Box } from "@mui/material";
import React, { Fragment } from "react";
import GetInTouch from "../Components/GetInTouch";

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
        <GetInTouch />
      </Box>
    </Fragment>
  );
}

export default ContactUs;

import { Typography, Box } from "@mui/material";
import React, { Fragment } from "react";
import MlogoDesktop from "../Assets/Images/alternateLogo.jpg";

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
            textAlign: "center",
          }}
        >
          Careers
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "15px", sm: "17px", md: "20px" },
              fontWeight: "900",
              color: "primary.dark",
              fontStyle: "italic",
            }}
          >
            Join Our Amazing Team
          </Typography>
        </Box>
        <Box
          id="header"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box sx={{ width: "100%", height: "150vh", mb: 4 }}>
            {/* form */}
            {/* https://formspree.io/f/mqkoqead */}
            <div
              id="googleForm"
              dangerouslySetInnerHTML={{
                __html:
                  '<iframe src="https://formfacade.com/public/104893989102626958401/all/form/1FAIpQLSc7hEL3ugkcexRejcdoIyNmdPvWPTJo_YzrIarmLQtahyljpw"></iframe>',
              }}
            />
          </Box>
          {/* <Box
            sx={{
              height: "60vh",
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <img
              src={MlogoDesktop}
              style={{
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
                right: "0",
                width: "90%",
              }}
              alt=""
            />
          </Box> */}
        </Box>
      </Box>
    </Fragment>
  );
}

export default Careers;

// https://formfacade.com/public/107103390700787080270/all/form/1FAIpQLSdCvhp3G3XYTmbjULhA8fTv7q23NnbVY1erYsRYUrv94Cjvuw

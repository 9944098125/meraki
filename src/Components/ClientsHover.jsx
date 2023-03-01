import React, { Fragment } from "react";
import { Box, Typography } from "@mui/material";
import { HashLink } from "react-router-hash-link";

function ClientsHover() {
  const scrollToTop = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -100;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };
  return (
    <Fragment>
      <Box
        sx={{
          backgroundColor: "white",
          minHeight: { xs: "15vh", md: "17vh", lg: "20vh" },
          maxHeight: { xs: "60vh", md: "75vh" },
          overflowX: "hidden",
          width: { xs: "40vw", sm: "40vw", md: "20vw" },
          borderRadius: "12px",
          boxShadow: "5px 5px 0px 0px grey",
          display: "flex",
          flexDirection: "column",
          gap: 3,
          pt: 3,
          pl: 2,
        }}
      >
        <HashLink
          scroll={scrollToTop}
          to="/clients#clients"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Typography
            sx={{
              color: "primary.dark",
              fontSize: { xs: "16px", sm: "18px", md: "20px" },
              fontWeight: "800",
            }}
          >
            Our Clients
          </Typography>
        </HashLink>
        <HashLink
          scroll={scrollToTop}
          to="/clients#wocs"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Typography
            sx={{
              color: "primary.dark",
              fontSize: { xs: "16px", sm: "18px", md: "20px" },
              fontWeight: "800",
            }}
          >
            What Our Clients say
          </Typography>
        </HashLink>
      </Box>
    </Fragment>
  );
}

export default ClientsHover;

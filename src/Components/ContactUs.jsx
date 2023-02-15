import { Box, Typography } from "@mui/material";
import React, { Fragment } from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailIcon from "@mui/icons-material/Mail";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import facebookLogo from "../Assets/Images/fb-logo.png";
import twitterLogo from "../Assets/Images/twitter-logo.png";
import linkedInLogo from "../Assets/Images/linkedIn-logo.png";
import pintrestLogo from "../Assets/Images/pintrest-logo.png";
import instagramLogo from "../Assets/Images/instagram-logo.png";
import youtubeLogo from "../Assets/Images/youtube-logo.png";
import whatsappLogo from "../Assets/Images/whatsapp-icon.png";
import canadaLogo from "../Assets/Images/canada-logo.webp";
import usaLogo from "../Assets/Images/usa-logo.png";
import india from "../Assets/Images/india.jpg";
import { Badge } from "@mui/material";

function ContactUs() {
  return (
    <Fragment>
      <Box sx={{ backgroundColor: "#1a237e", p: 5 }}>
        <Typography
          sx={{
            fontSize: { xs: "50px", sm: "65px", md: "70px" },
            fontWeight: "700",
            color: "white",
            ml: { xs: 2, sm: 3, md: 7 },
          }}
        >
          Contact Us
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "none", sm: "center", md: "space-between" },
            alignItems: { xs: "center", sm: "center" },
            flexDirection: { xs: "column", md: "row" },
            pl: { xs: "none", sm: 3, md: 5 },
            mt: { xs: 3, sm: 5, md: 7 },
            mb: { xs: 3, sm: 5, md: 7 },
            gap: 4,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: { xs: "90%", md: "25%" },
              mb: { xs: 3, sm: 2, md: 1 },
              boxShadow: "0px 5px 5px 0px black",
              borderRadius: "12px",
              px: 1,
              minHeight: "80px",
              backgroundColor: "white",
            }}
          >
            <LocalPhoneIcon sx={{ fontSize: "25px", color: "red" }} />
            <Box sx={{}}>
              <Typography sx={{ fontSize: "16px", fontWeight: "700" }}>
                +91 9080652812
              </Typography>
              <Typography sx={{ fontSize: "16px", fontWeight: "700" }}>
                +91 8678910338
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: { xs: "90%", md: "25%" },
              mb: { xs: 3, sm: 2, md: 1 },
              boxShadow: "0px 5px 5px 0px black",
              borderRadius: "12px",
              px: 1,
              minHeight: "80px",
              backgroundColor: "white",
            }}
          >
            <MailIcon sx={{ fontSize: "25px", color: "purple" }} />
            <Box sx={{}}>
              <Typography sx={{ fontSize: "16px", fontWeight: "700" }}>
                indira@merakitrainings.in
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: { xs: "90%", md: "25%" },
              mb: { xs: 3, sm: 2, md: 1 },
              boxShadow: "0px 5px 5px 0px black",
              borderRadius: "12px",
              px: 1,
              minHeight: "80px",
              backgroundColor: "white",
            }}
          >
            <LocationOnIcon sx={{ fontSize: "25px", color: "green" }} />
            <Box sx={{}}>
              <Typography sx={{ fontSize: "16px", fontWeight: "700" }}>
                #8, Chowdappa Layout,
              </Typography>
              <Typography sx={{ fontSize: "16px", fontWeight: "700" }}>
                Kaikondrahalli, Bangalore - 35
              </Typography>
            </Box>
          </Box>
        </Box>
        {/* navbar upper part for mobile */}
        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            justifyContent: "center",
            flexWrap: "wrap",
            alignItems: "center",
            p: { xs: 2, sm: 3, md: 5 },
            boxShadow: "0 5px 5px 0 grey",
            height: "100%",
            width: "100%",
            gap: 3,
            backgroundColor: "white",
            borderRadius: "9px",
          }}
        >
          <img
            style={{ width: "23px", height: "23px" }}
            src={facebookLogo}
            alt="facebookLogo"
            className="header-icons"
          />
          <img
            style={{ width: "22px", height: "22px" }}
            src={twitterLogo}
            alt="facebookLogo"
            className="header-icons"
          />
          <img
            style={{ width: "21px", height: "21px" }}
            src={linkedInLogo}
            alt="facebookLogo"
            className="header-icons"
          />
          <img
            style={{ width: "20px", height: "20px" }}
            src={pintrestLogo}
            alt="facebookLogo"
            className="header-icons"
          />
          <img
            src={instagramLogo}
            alt="facebookLogo"
            style={{ width: "20px", height: "20px" }}
            className="header-icons"
          />
          <img
            src={youtubeLogo}
            alt="facebookLogo"
            style={{ width: "28px", height: "22px" }}
            className="header-icons"
          />
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.3 }}>
            <Badge
              overlap="circular"
              badgeContent={
                <img
                  src={whatsappLogo}
                  alt="whatsapp"
                  style={{ height: "12px", width: "12px" }}
                />
              }
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
            >
              <img
                alt="flag1"
                src={canadaLogo}
                style={{ height: "25px", width: "25px", borderRadius: "50%" }}
              />
            </Badge>
            <Typography
              sx={{ fontSize: { xs: "12px", md: "13px" }, color: "black" }}
            >
              + 123 654323 234234
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.3 }}>
            <Badge
              overlap="circular"
              badgeContent={
                <img
                  src={whatsappLogo}
                  alt="whatsapp"
                  style={{ height: "12px", width: "12px" }}
                />
              }
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
            >
              <img
                alt="flag1"
                src={usaLogo}
                style={{ height: "25px", width: "25px", borderRadius: "50%" }}
              />
            </Badge>
            <Typography
              sx={{ fontSize: { xs: "12px", md: "13px" }, color: "black" }}
            >
              + 123 654323 234234
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.3 }}>
            <Badge
              overlap="circular"
              badgeContent={
                <img
                  src={whatsappLogo}
                  alt="whatsapp"
                  style={{ height: "12px", width: "12px" }}
                />
              }
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
            >
              <img
                alt="flag1"
                src="https://e7.pngegg.com/pngimages/1012/988/png-clipart-flag-of-turkey-computer-icons-national-flag-flag-miscellaneous-flag.png"
                style={{ height: "25px", width: "25px", borderRadius: "50%" }}
              />
            </Badge>
            <Typography
              sx={{ fontSize: { xs: "12px", md: "13px" }, color: "black" }}
            >
              + 123 654323 234234
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.3 }}>
            <Badge
              overlap="circular"
              badgeContent={
                <img
                  src={whatsappLogo}
                  alt="whatsapp"
                  style={{ height: "12px", width: "12px" }}
                />
              }
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
            >
              <img
                alt="flag1"
                src={india}
                style={{ height: "25px", width: "25px", borderRadius: "50%" }}
              />
            </Badge>
            <Typography
              sx={{ fontSize: { xs: "12px", md: "13px" }, color: "black" }}
            >
              + 123 654323 234234
            </Typography>
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
}

export default ContactUs;

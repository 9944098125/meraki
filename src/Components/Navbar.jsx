import { Box } from "@mui/system";
import React, { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import facebookLogo from "../Assets/Images/fb-logo.png";
import twitterLogo from "../Assets/Images/twitter-logo.png";
import linkedInLogo from "../Assets/Images/linkedIn-logo.png";
import pintrestLogo from "../Assets/Images/pintrest-logo.png";
import instagramLogo from "../Assets/Images/instagram-logo.png";
import youtubeLogo from "../Assets/Images/youtube-logo.png";
import whatsappLogo from "../Assets/Images/whatsapp-icon.png";
import canadaLogo from "../Assets/Images/canada-logo.webp";
import email from "../Assets/Images/email.png";
import usaLogo from "../Assets/Images/usa-logo.png";
import MlogoDesktop from "../Assets/Images/Mlogo_desktop.svg";
import MlogoMobile from "../Assets/Images/Mlogo_mobile.svg";
import india from "../Assets/Images/india.jpg";
import { Badge, Typography } from "@mui/material";

function Navbar() {
  return (
    <Fragment>
      <Box
        sx={{
          px: 5,
          py: 1,
          height: { xs: "100%", md: "6vh" },
          borderBottom: "0.5px solid lightgrey",
          margin: { xs: "0px 10px", sm: "0px 25px", md: "0px 50px" },
          display: { xs: "none", md: "flex" },
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            flexWrap: "wrap",
            alignItems: { xs: "space-between", sm: "center" },
            gap: 1.5,
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
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            flexWrap: "wrap",
            alignItems: "center",
            gap: 1,
          }}
        >
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
              sx={{ fontSize: { xs: "12px", md: "13px" }, color: "grey" }}
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
              sx={{ fontSize: { xs: "12px", md: "13px" }, color: "grey" }}
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
              sx={{ fontSize: { xs: "12px", md: "13px" }, color: "grey" }}
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
              sx={{ fontSize: { xs: "12px", md: "13px" }, color: "grey" }}
            >
              + 123 654323 234234
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.3,
              ml: { xs: -3, sm: 0 },
            }}
          >
            <img
              alt="flag1"
              src={email}
              style={{ height: "20px", width: "25px", borderRadius: "2px" }}
            />
            <Typography
              sx={{ fontSize: { xs: "12px", md: "13px" }, color: "grey" }}
            >
              info@meraki.com
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          height: { xs: "100%", md: "12vh" },
        }}
        className="sticky"
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: { xs: "center", sm: "center" },
            pt: { xs: 1, sm: 3, md: 0 },
          }}
        >
          <Box
            sx={{
              pb: { xs: 1, sm: 2, md: 5 },
              mr: { xs: 0, sm: 7, md: 10 },
              px: 0,
            }}
          >
            <img src={MlogoMobile} alt="mobileLogo" className="mobileLogo" />
            <img src={MlogoDesktop} alt="desktopLogo" className="desktopLogo" />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: { xs: 1, sm: 1.5, md: 2.5, lg: 3 },
              justifyContent: { xs: "center", sm: "none" },
              pb: { xs: 1, sm: 2, md: 5 },
              px: 0,
            }}
          >
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              <Typography
                className="headings"
                sx={{
                  color: "#778899",
                  fontWeight: "600",
                  fontSize: { xs: "12px", sm: "17px", md: "20px" },
                  cursor: "pointer",
                  "&:hover": {
                    borderBottom: "4px solid cyan",
                  },
                }}
              >
                Home
              </Typography>
            </Link>
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Typography
                className="headings"
                sx={{
                  color: "#778899",
                  fontWeight: "600",
                  fontSize: { xs: "12px", sm: "17px", md: "20px" },
                  cursor: "pointer",
                  "&:hover": {
                    borderBottom: "4px solid cyan",
                  },
                }}
              >
                About Us
              </Typography>
            </Link>
            <Link
              to="/why-choose-us"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Typography
                className="headings"
                sx={{
                  color: "#778899",
                  fontWeight: "600",
                  fontSize: { xs: "12px", sm: "17px", md: "20px" },
                  cursor: "pointer",
                  "&:hover": {
                    borderBottom: "4px solid cyan",
                  },
                }}
              >
                Why Choose Us
              </Typography>
            </Link>
            <Link
              to="/clients"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Typography
                className="headings"
                sx={{
                  color: "#778899",
                  fontWeight: "600",
                  fontSize: { xs: "12px", sm: "17px", md: "20px" },
                  cursor: "pointer",
                  "&:hover": {
                    borderBottom: "4px solid cyan",
                  },
                }}
              >
                Clients
              </Typography>
            </Link>
            <Link
              to="/services"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Typography
                className="headings"
                sx={{
                  color: "#778899",
                  fontWeight: "600",
                  fontSize: { xs: "12px", sm: "17px", md: "20px" },
                  cursor: "pointer",
                  "&:hover": {
                    borderBottom: "4px solid cyan",
                  },
                }}
              >
                Our services
              </Typography>
            </Link>
            <Link
              to="/careers"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Typography
                className="headings"
                sx={{
                  color: "#778899",
                  fontWeight: "600",
                  fontSize: { xs: "12px", sm: "17px", md: "20px" },
                  cursor: "pointer",
                  "&:hover": {
                    borderBottom: "4px solid cyan",
                  },
                }}
              >
                Careers
              </Typography>
            </Link>
            <Link
              to="/contact-us"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Typography
                className="headings"
                sx={{
                  color: "#778899",
                  fontWeight: "600",
                  fontSize: { xs: "12px", sm: "17px", md: "20px" },
                  cursor: "pointer",
                  "&:hover": {
                    borderBottom: "4px solid cyan",
                  },
                }}
              >
                Contact Us
              </Typography>
            </Link>
          </Box>
        </Box>
      </Box>
      <Box sx={{}}>
        <Outlet />
      </Box>
    </Fragment>
  );
}

export default Navbar;

import { Box } from "@mui/system";
import React, { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import facebookLogo from "../Assets/Images/fb-logo.png";
import twitterLogo from "../Assets/Images/twitter-logo.png";
import linkedInLogo from "../Assets/Images/linkedIn-logo.png";
import pintrestLogo from "../Assets/Images/pintrest-logo.png";
import instagramLogo from "../Assets/Images/instagram-logo.png";
import youtubeLogo from "../Assets/Images/youtube-logo.png";
import email from "../Assets/Images/email.png";
import MlogoDesktop from "../Assets/Images/Mlogo_desktop.svg";
import MlogoMobile from "../Assets/Images/Mlogo_mobile.svg";
import { Typography } from "@mui/material";
import OurServices from "../Pages/OurServices";
import Footer from "./Footer";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import WhatsappModal from "./WhatsappModal";

function Navbar() {
  const [style, setStyle] = React.useState({ display: "none" });
  const [showWhatsappModal, setShowWhatsappModal] = React.useState(false);

  function displayWhatsappModal() {
    setShowWhatsappModal(!showWhatsappModal);
  }

  function closeModal() {
    setShowWhatsappModal(false);
  }

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
            <LocalPhoneIcon />
            <Typography
              sx={{ fontSize: { xs: "12px", md: "13px" }, color: "grey" }}
            >
              +91 74119 78909
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
              hr@merakitrainings.in
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
            position: "relative",
          }}
        >
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <Box
              sx={{
                pb: { xs: 1, sm: 2, md: 5 },
                mr: { xs: 0, sm: 7, md: 10 },
                px: 0,
              }}
            >
              <img src={MlogoMobile} alt="mobileLogo" className="mobileLogo" />
              <img
                src={MlogoDesktop}
                alt="desktopLogo"
                className="desktopLogo"
              />
            </Box>
          </Link>
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
                  color: "#080808",
                  fontWeight: "600",
                  fontSize: { xs: "12px", sm: "17px", md: "20px" },
                  cursor: "pointer",
                  "&:hover": {
                    borderBottom: "4px solid #1a237e",
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
                  color: "#080808",
                  fontWeight: "600",
                  fontSize: { xs: "12px", sm: "17px", md: "20px" },
                  cursor: "pointer",
                  "&:hover": {
                    borderBottom: "4px solid #1a237e",
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
                  color: "#080808",
                  fontWeight: "600",
                  fontSize: { xs: "12px", sm: "17px", md: "20px" },
                  cursor: "pointer",
                  "&:hover": {
                    borderBottom: "4px solid #1a237e",
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
                  color: "#080808",
                  fontWeight: "600",
                  fontSize: { xs: "12px", sm: "17px", md: "20px" },
                  cursor: "pointer",
                  "&:hover": {
                    borderBottom: "4px solid #1a237e",
                  },
                }}
              >
                Clients
              </Typography>
            </Link>

            <Box
              onMouseEnter={() => setStyle({ display: "block" })}
              onMouseLeave={() => setStyle({ display: "none" })}
              sx={{}}
              id="parent"
            >
              <Typography
                className="headings"
                sx={{
                  color: "#080808",
                  fontWeight: "600",
                  fontSize: { xs: "12px", sm: "17px", md: "20px" },
                  cursor: "pointer",
                  "&:hover": {
                    borderBottom: "4px solid #1a237e",
                  },
                }}
              >
                Our services
              </Typography>
              <Box
                style={style}
                sx={{
                  position: "absolute",
                  right: "5%",
                }}
                id="child"
              >
                <OurServices />
              </Box>
            </Box>
            <Link
              to="/careers"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Typography
                className="headings"
                sx={{
                  color: "#080808",
                  fontWeight: "600",
                  fontSize: { xs: "12px", sm: "17px", md: "20px" },
                  cursor: "pointer",
                  "&:hover": {
                    borderBottom: "4px solid #1a237e",
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
                  color: "#080808",
                  fontWeight: "600",
                  fontSize: { xs: "12px", sm: "17px", md: "20px" },
                  cursor: "pointer",
                  "&:hover": {
                    borderBottom: "4px solid #1a237e",
                  },
                }}
              >
                Contact Us
              </Typography>
            </Link>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-end",
            position: "fixed",
            bottom: "10px",
            right: "10px",
            cursor: "pointer",
          }}
        >
          <img
            src="https://png.pngtree.com/png-clipart/20221019/original/pngtree-whatsapp-phone-icon-png-image_8704826.png"
            alt=""
            className="whatsapp-icon"
            onClick={displayWhatsappModal}
          />
          {showWhatsappModal && (
            <WhatsappModal
              showWhatsappModal={showWhatsappModal}
              close={closeModal}
            />
          )}
        </Box>
      </Box>
      <Box sx={{}}>
        <Outlet />
      </Box>
      <Footer />
    </Fragment>
  );
}

export default Navbar;

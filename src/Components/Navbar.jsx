import { Box } from "@mui/system";
import React, { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import email from "../Assets/Images/email.png";
import MlogoDesktop from "../Assets/Images/Mlogo_desktop.svg";
import MlogoMobile from "../Assets/Images/Mlogo_mobile.svg";
import { Typography } from "@mui/material";
import OurServices from "../Pages/OurServices";
import Footer from "./Footer";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import WhatsappModal from "./WhatsappModal";
import AboutUsHover from "./AboutUsHover";
import WhyChooseUsHover from "./WhyChooseUsHover";

function Navbar() {
  const [style, setStyle] = React.useState({ display: "none" });
  const [style2, setStyle2] = React.useState({ display: "none" });
  const [style3, setStyle3] = React.useState({ display: "none" });
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
          width: "100%",
          borderBottom: "0.5px solid lightgrey",
          display: { xs: "none", md: "flex" },
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "primary.dark",
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
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG9qEiGpqIVMx5ckJZo6FOysaOhRSGCmmztejXmVf0EkQC9YE-LsHSsIqoU0oNOiPiNME&usqp=CAU"
            alt="facebookLogo"
            className="header-icons"
          />
          <img
            src="https://www.kindpng.com/picc/m/276-2764036_social-media-icons-grey-twitter-clipart-png-download.png"
            alt="facebookLogo"
            className="header-icons"
          />
          <img
            src="https://icones.pro/wp-content/uploads/2021/03/icone-linkedin-ronde-grise.png"
            alt="facebookLogo"
            className="header-icons"
            style={{ height: "25px", width: "25px" }}
          />
          <img
            src="https://www.logologo.com/freelogos/Pinterest-P-white-rounded-square-grey.png"
            alt="facebookLogo"
            className="header-icons"
          />
          <img
            src="https://simg.nicepng.com/png/small/88-884395_insta-instagram-icon-vector-green.png"
            alt="facebookLogo"
            className="header-icons"
          />
          <img
            src="https://w7.pngwing.com/pngs/748/989/png-transparent-new-york-city-youtube-computer-icons-computer-software-grey-angle-text-logo-thumbnail.png"
            alt="facebookLogo"
            className="header-icons"
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            flexWrap: "wrap",
            alignItems: "center",
            gap: 3,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.3 }}>
            <LocalPhoneIcon sx={{ color: "lightgrey" }} />
            <Typography
              sx={{ fontSize: { xs: "12px", md: "13px" }, color: "white" }}
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
              sx={{ fontSize: { xs: "12px", md: "13px" }, color: "white" }}
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
              <Box
                onMouseEnter={() => setStyle2({ display: "block" })}
                onMouseLeave={() => setStyle2({ display: "none" })}
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
                  About Us
                </Typography>
                <Box
                  style={style2}
                  sx={{
                    position: "absolute",
                    right: "60%",
                  }}
                  id="child"
                >
                  <AboutUsHover />
                </Box>
              </Box>
            </Link>
            <Link
              to="/why-choose-us"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Box
                onMouseEnter={() => setStyle3({ display: "block" })}
                onMouseLeave={() => setStyle3({ display: "none" })}
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
                  Why Choose Us
                </Typography>
                <Box
                  style={style3}
                  sx={{
                    position: "absolute",
                    right: "25%",
                  }}
                  id="child"
                >
                  <WhyChooseUsHover />
                </Box>
              </Box>
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
            backgroundColor: "white",
            padding: 2,
            borderRadius: "50%",
          }}
        >
          <img
            src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-whatsapp-mobile-software-icon-png-image_6315991.png"
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

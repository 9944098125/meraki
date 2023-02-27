import { Box } from "@mui/system";
import React, { Fragment } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import MlogoDesktop from "../Assets/Images/Mlogo_desktop.svg";
import MlogoMobile from "../Assets/Images/Mlogo_mobile.svg";
import { Typography } from "@mui/material";
import OurServices from "../Pages/OurServices";
import Footer from "./Footer";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import WhatsappModal from "./WhatsappModal";
import AboutUsHover from "./AboutUsHover";
import WhyChooseUsHover from "./WhyChooseUsHover";
import insta from "../Assets/Images/instagram-logo.png";
import linkedIn from "../Assets/Images/linkedIn-logo.png";
import fb from "../Assets/Images/fb-logo.png";
import ClientsHover from "./ClientsHover";

function Navbar() {
  const location = useLocation();
  const [style, setStyle] = React.useState({ display: "none" });
  const [style2, setStyle2] = React.useState({ display: "none" });
  const [style3, setStyle3] = React.useState({ display: "none" });
  const [style4, setStyle4] = React.useState({ display: "none" });
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
          <a
            href="https://www.facebook.com/MerakiTrainingSolutionsBangalore"
            target="_blank"
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRBZFd_YkK7PH1wTqqpFXbuhAcaTqnszsh9Q&usqp=CAU"
              alt="facebookLogo"
              className="header-icons"
            />
          </a>
          {/* <a href="" target="_blank">
            <img
              src="https://www.kindpng.com/picc/m/276-2764036_social-media-icons-grey-twitter-clipart-png-download.png"
              alt="twitter"
              className="header-icons"
            />
          </a> */}
          <a
            href="https://www.linkedin.com/company/meraki-training-consultants/"
            target="_blank"
          >
            <img
              src={linkedIn}
              alt="linkedIn"
              className="header-icons"
              style={{
                height: "26px",
                width: "26px",
                // backgroundColor: "grey",
                // border: "1px solid white",
              }}
            />
          </a>
          {/* <a href="" target="_blank">
            <img
              src="https://www.logologo.com/freelogos/Pinterest-P-white-rounded-square-grey.png"
              alt="pin"
              className="header-icons"
              style={{ border: "1px solid white" }}
            />
          </a> */}
          <a
            href="https://www.instagram.com/merakitrainingsolutions/"
            target="_blank"
          >
            <img
              src={insta}
              alt="instagram"
              className="header-icons"
              style={{ height: "26px", width: "26px" }}
            />
          </a>
          {/* <a href="" target="_blank">
            <img
              src="https://w7.pngwing.com/pngs/748/989/png-transparent-new-york-city-youtube-computer-icons-computer-software-grey-angle-text-logo-thumbnail.png"
              alt="facebookLogo"
              className="header-icons"
              style={{ border: "1px solid white" }}
            />
          </a> */}
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
              src="https://i.pinimg.com/originals/a7/a4/48/a7a448a629d022765af4a7cf6abc1d9f.jpg"
              style={{
                height: "20px",
                width: "25px",
                borderRadius: "2px",
                backgroundColor: "#1a237e",
              }}
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
            id="navbar-items"
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
            <Link
              className={`${location.pathname === "/" ? "active" : "inactive"}`}
              to="/"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Typography
                className="headings"
                sx={{
                  fontWeight: "600",
                  fontSize: { xs: "12px", sm: "17px", md: "20px" },
                  cursor: "pointer",
                  "&:hover": {
                    borderBottom:
                      location.pathname === "/" ? "none" : "4px solid #1a237e",
                  },
                }}
              >
                Home
              </Typography>
            </Link>
            <Link
              className={`${
                location.pathname === "/about" ? "active" : "inactive"
              }`}
              to="/about"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Box
                onMouseEnter={() => setStyle2({ display: "block" })}
                onMouseLeave={() => setStyle2({ display: "none" })}
                sx={{ position: "relative" }}
              >
                <Typography
                  className="headings"
                  sx={{
                    fontWeight: "600",
                    fontSize: { xs: "12px", sm: "17px", md: "20px" },
                    cursor: "pointer",
                    "&:hover": {
                      borderBottom:
                        location.pathname === "/about"
                          ? "none"
                          : "4px solid #1a237e",
                    },
                  }}
                >
                  About Us
                </Typography>
                <Box
                  style={style2}
                  sx={{
                    position: "absolute",
                  }}
                  id="child"
                >
                  <AboutUsHover />
                </Box>
              </Box>
            </Link>
            <Link
              className={`${
                location.pathname === "/why-choose-us" ? "active" : "inactive"
              }`}
              to="/why-choose-us"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Box
                onMouseEnter={() => setStyle3({ display: "block" })}
                onMouseLeave={() => setStyle3({ display: "none" })}
                sx={{}}
              >
                <Typography
                  className="headings"
                  sx={{
                    fontWeight: "600",
                    fontSize: { xs: "12px", sm: "17px", md: "20px" },
                    cursor: "pointer",
                    "&:hover": {
                      borderBottom:
                        location.pathname === "/why-choose-us"
                          ? "none"
                          : "4px solid #1a237e",
                    },
                  }}
                >
                  Why Choose Us
                </Typography>
                <Box
                  style={style3}
                  sx={{
                    position: "absolute",
                    left: { xs: "30%", sm: "none" },
                  }}
                  id="child"
                >
                  <WhyChooseUsHover />
                </Box>
              </Box>
            </Link>
            <Link
              className={`${
                location.pathname === "/clients" ? "active" : "inactive"
              }`}
              to="/clients"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Box
                onMouseEnter={() => setStyle4({ display: "block" })}
                onMouseLeave={() => setStyle4({ display: "none" })}
                sx={{}}
              >
                <Typography
                  className="headings"
                  sx={{
                    fontWeight: "600",
                    fontSize: { xs: "12px", sm: "17px", md: "20px" },
                    cursor: "pointer",
                    "&:hover": {
                      borderBottom:
                        location.pathname === "/clients"
                          ? "none"
                          : "4px solid #1a237e",
                    },
                  }}
                >
                  Clients
                </Typography>
                <Box
                  style={style4}
                  sx={{
                    position: "absolute",
                    left: { xs: "50%", sm: "none" },
                  }}
                >
                  <ClientsHover />
                </Box>
              </Box>
            </Link>

            <Link
              className={`${
                location.pathname === "/services/it-training"
                  ? "active"
                  : "inactive" && location.pathname === "/services/power-skills"
                  ? "active"
                  : "inactive" && location.pathname === "/services/soft-skills"
                  ? "active"
                  : "inactive" &&
                    location.pathname === "/services/college-partnerships"
                  ? "active"
                  : "inactive" &&
                    location.pathname === "/services/staffing-services"
                  ? "active"
                  : "inactive"
              }`}
              to="/services/it-training"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Box
                onMouseEnter={() => setStyle({ display: "block" })}
                onMouseLeave={() => setStyle({ display: "none" })}
                sx={{}}
                id="parent"
              >
                <Typography
                  className="headings"
                  sx={{
                    fontWeight: "600",
                    fontSize: { xs: "12px", sm: "17px", md: "20px" },
                    cursor: "pointer",
                    "&:hover": {
                      borderBottom:
                        location.pathname === "/services/it-training"
                          ? "none"
                          : "4px solid #1a237e",
                    },
                  }}
                >
                  Our services
                </Typography>
                <Box
                  style={style}
                  sx={{
                    position: "absolute",
                    left: { xs: "15%", sm: "40%", md: "50%" },
                  }}
                  id="child"
                >
                  <OurServices />
                </Box>
              </Box>
            </Link>
            <Link
              className={`${
                location.pathname === "/careers" ? "active" : "inactive"
              }`}
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
                    borderBottom:
                      location.pathname === "/careers"
                        ? "none"
                        : "4px solid #1a237e",
                  },
                }}
              >
                Careers
              </Typography>
            </Link>
            <Link
              className={`${
                location.pathname === "/contact-us" ? "active" : "inactive"
              }`}
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
                    borderBottom:
                      location.pathname === "/contact-us"
                        ? "none"
                        : "4px solid #1a237e",
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

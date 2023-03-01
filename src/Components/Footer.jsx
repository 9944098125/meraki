import { Box, Typography } from "@mui/material";
import React, { Fragment } from "react";
import { HashLink } from "react-router-hash-link";
import MLogo from "../Assets/Images/alternateLogo.jpg";
import insta from "../Assets/Images/instagram-logo.png";
import linkedIn from "../Assets/Images/linkedIn-logo.png";

function Footer() {
  const scrollToTop = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -100;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };
  return (
    <Fragment>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          backgroundColor: "#f5f5f5",
          boxShadow: "0px -5px 0px 0px #1a237e",
          width: "100%",
          height: "100%",
          pb: 0,
        }}
      >
        <Box
          sx={{
            p: { xs: 2, sm: 3, md: 4 },
            height: "100%",
            width: { xs: "100%", sm: "60%", md: "70%" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flexWrap: "wrap",
              height: { xs: "100%", sm: "100%", md: "80vh" },
              gap: 1,
            }}
          >
            <Box sx={{}}>
              <HashLink
                scroll={scrollToTop}
                to="/about#header"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  marginBottom: "15px",
                }}
              >
                <Typography
                  sx={{
                    color: "#1a237e",
                    fontWeight: "700",
                    fontSize: { xs: "22px", sm: "25px", md: "28px" },
                    borderBottom: "3px solid #1a237e",
                    display: "inline",
                  }}
                >
                  About Us
                </Typography>
              </HashLink>
              <HashLink
                scroll={scrollToTop}
                to="/about#vm"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Typography
                  sx={{
                    color: "#1a237e",
                    fontSize: { xs: "15px", sm: "18px", md: "20px" },
                  }}
                >
                  Vision & Mission
                </Typography>
              </HashLink>

              <HashLink
                scroll={scrollToTop}
                to="/about#values"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Typography
                  sx={{
                    color: "#1a237e",
                    fontSize: { xs: "15px", sm: "18px", md: "20px" },
                  }}
                >
                  Values
                </Typography>
              </HashLink>
            </Box>

            <Box sx={{}}>
              <HashLink
                scroll={scrollToTop}
                to="/services/it-training#header"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  marginBottom: "15px",
                }}
              >
                <Typography
                  sx={{
                    color: "#1a237e",
                    fontWeight: "700",
                    fontSize: { xs: "22px", sm: "25px", md: "28px" },
                    borderBottom: "3px solid #1a237e",
                    display: "inline",
                  }}
                >
                  Our Services
                </Typography>
              </HashLink>
              <HashLink
                scroll={scrollToTop}
                to="/services/it-training#header"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Typography
                  sx={{
                    color: "#1a237e",
                    fontSize: { xs: "15px", sm: "18px", md: "20px" },
                  }}
                >
                  Technical/IT Training
                </Typography>
              </HashLink>

              <HashLink
                scroll={scrollToTop}
                to="/services/power-skills#header"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Typography
                  sx={{
                    color: "#1a237e",
                    fontSize: { xs: "15px", sm: "18px", md: "20px" },
                    width: "50%",
                  }}
                >
                  Power Skills For Leadership & Management
                </Typography>
              </HashLink>

              <HashLink
                scroll={scrollToTop}
                to="/services/soft-skills#header"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Typography
                  sx={{
                    color: "#1a237e",
                    fontSize: { xs: "15px", sm: "18px", md: "20px" },
                  }}
                >
                  Soft Skills
                </Typography>
              </HashLink>
              <HashLink
                scroll={scrollToTop}
                to="/services/college-partnerships#header"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Typography
                  sx={{
                    color: "#1a237e",
                    fontSize: { xs: "15px", sm: "18px", md: "20px" },
                  }}
                >
                  College Partnerships
                </Typography>
              </HashLink>
              <HashLink
                scroll={scrollToTop}
                to="/services/staffing-services#header"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Typography
                  sx={{
                    color: "#1a237e",
                    fontSize: { xs: "15px", sm: "18px", md: "20px" },
                  }}
                >
                  Staffing Services
                </Typography>
              </HashLink>
              {/* <HashLink
              scroll={scrollToTop}
                to="/services/it-solutions#header"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Typography
                  sx={{
                    color: "#1a237e",
                    fontSize: { xs: "15px", sm: "18px", md: "20px" },
                  }}
                >
                  IT Solutions
                </Typography>
              </HashLink> */}
            </Box>

            <Box sx={{}}>
              <HashLink
                scroll={scrollToTop}
                to="/contact-us#header"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  marginBottom: "15px",
                }}
              >
                <Typography
                  sx={{
                    color: "#1a237e",
                    fontWeight: "700",
                    fontSize: { xs: "22px", sm: "25px", md: "28px" },
                    borderBottom: "3px solid #1a237e",
                    display: "inline",
                  }}
                >
                  Contact Us
                </Typography>
              </HashLink>
            </Box>

            <Box sx={{}}>
              <HashLink
                scroll={scrollToTop}
                to="/why-choose-us#header"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  marginBottom: "15px",
                }}
              >
                <Typography
                  sx={{
                    color: "#1a237e",
                    fontWeight: "700",
                    fontSize: { xs: "22px", sm: "25px", md: "28px" },
                    borderBottom: "3px solid #1a237e",
                    display: "inline",
                  }}
                >
                  Why Choose Us
                </Typography>
              </HashLink>
              <HashLink
                scroll={scrollToTop}
                to="/why-choose-us#irtcots"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Typography
                  sx={{
                    color: "#1a237e",
                    fontSize: { xs: "15px", sm: "18px", md: "20px" },
                    width: "50%",
                  }}
                >
                  Irresistible Reasons to choose our Training Services
                </Typography>
              </HashLink>

              <HashLink
                scroll={scrollToTop}
                to="/why-choose-us#training-methodology"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Typography
                  sx={{
                    color: "#1a237e",
                    fontSize: { xs: "15px", sm: "18px", md: "20px" },
                  }}
                >
                  Our Training Methodology
                </Typography>
              </HashLink>

              <HashLink
                scroll={scrollToTop}
                to="/why-choose-us#irtcoss"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Typography
                  sx={{
                    color: "#1a237e",
                    fontSize: { xs: "15px", sm: "18px", md: "20px" },
                    width: "50%",
                  }}
                >
                  Irresistible Reasons to choose our Staffing Services
                </Typography>
              </HashLink>
              <HashLink
                scroll={scrollToTop}
                to="/why-choose-us#achievements"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Typography
                  sx={{
                    color: "#1a237e",
                    fontSize: { xs: "15px", sm: "18px", md: "20px" },
                    width: "60%",
                  }}
                >
                  A Sneak Peak Into Our Achievements
                </Typography>
              </HashLink>
            </Box>

            <Box sx={{}}>
              <HashLink
                scroll={scrollToTop}
                to="/clients#clients"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  marginBottom: "15px",
                }}
              >
                <Typography
                  sx={{
                    color: "#1a237e",
                    fontWeight: "700",
                    fontSize: { xs: "22px", sm: "25px", md: "28px" },
                    borderBottom: "3px solid #1a237e",
                    display: "inline",
                  }}
                >
                  Our Clients
                </Typography>
              </HashLink>
              <HashLink
                scroll={scrollToTop}
                to="/clients#clients"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Typography
                  sx={{
                    color: "#1a237e",
                    fontSize: { xs: "15px", sm: "18px", md: "20px" },
                  }}
                >
                  Clients List
                </Typography>
              </HashLink>

              <HashLink
                scroll={scrollToTop}
                to="/clients#wocs"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Typography
                  sx={{
                    color: "#1a237e",
                    fontSize: { xs: "15px", sm: "18px", md: "20px" },
                  }}
                >
                  What Our Clients Say
                </Typography>
              </HashLink>
            </Box>

            <Box sx={{}}>
              <HashLink
                scroll={scrollToTop}
                to="/careers#header"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  marginBottom: "15px",
                }}
              >
                <Typography
                  sx={{
                    color: "#1a237e",
                    fontWeight: "700",
                    fontSize: { xs: "22px", sm: "25px", md: "28px" },
                    borderBottom: "3px solid #1a237e",
                    display: "inline",
                  }}
                >
                  Careers
                </Typography>
              </HashLink>
            </Box>
          </Box>
        </Box>
        {/* the other half */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: { xs: "46vh", sm: "30vh", md: "40vh" },
            width: { xs: "100%", sm: "40%", md: "30%" },
            pt: { xs: 2, sm: 10, md: 15 },
            mb: { xs: 0, sm: -10, md: -3 },
          }}
        >
          <img
            src={MLogo}
            alt=""
            className="logo-in-footer"
            style={{
              height: "100%",
              width: "80%",
              right: "0",
              objectFit: "scale-down",
            }}
          />
          <Box
            sx={{
              mb: 1.5,
              p: 2,
              pb: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: "10px",
                  sm: "12px",
                  md: "14px",
                  textAlign: "center",
                },
              }}
            >
              {/* address */}
              #743, 15th cross Rd, KPC Layout, Bengaluru, Karnataka, 560035.
            </Typography>
          </Box>
          <Box sx={{ mb: 1.5 }}>
            <Typography
              sx={{ fontSize: { xs: "10px", sm: "12px", md: "14px" } }}
            >
              Mail Id: hr@merakitrainings.in
            </Typography>
          </Box>
          <Box sx={{ mb: 1.5 }}>
            <Typography
              sx={{ fontSize: { xs: "10px", sm: "12px", md: "14px" } }}
            >
              Contact Number: +91 74119 78909
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, pb: 2 }}>
            <a
              href="https://www.facebook.com/MerakiTrainingSolutionsBangalore"
              target="_blank"
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRBZFd_YkK7PH1wTqqpFXbuhAcaTqnszsh9Q&usqp=CAU"
                alt="facebookLogo"
                className="header-icons"
                style={{ height: "26px", width: "26px", marginBottom: "3px" }}
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
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
}

export default Footer;

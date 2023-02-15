import { Box, Typography } from "@mui/material";
import React, { Fragment } from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import facebookLogo from "../Assets/Images/fb-logo.png";
import twitterLogo from "../Assets/Images/twitter-logo.png";
import linkedInLogo from "../Assets/Images/linkedIn-logo.png";
import pintrestLogo from "../Assets/Images/pintrest-logo.png";
import instagramLogo from "../Assets/Images/instagram-logo.png";
import youtubeLogo from "../Assets/Images/youtube-logo.png";
import { HashLink } from "react-router-hash-link";
import email from "../Assets/Images/email.png";

function Footer() {
  return (
    <Fragment>
      <Box
        sx={{
          backgroundColor: "#1a237e",
          p: { xs: 2, sm: 3, md: 4 },
          height: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: { xs: 2, sm: 3, md: 6 },
          }}
        >
          <Box sx={{}}>
            <HashLink
              to="/services#header"
              style={{
                textDecoration: "none",
                color: "inherit",
                marginBottom: "15px",
              }}
            >
              <Typography
                sx={{
                  color: "white",
                  fontWeight: "700",
                  fontSize: { xs: "22px", sm: "25px", md: "28px" },
                  borderBottom: "3px solid white",
                  display: "inline",
                }}
              >
                Our Services
              </Typography>
            </HashLink>
            <HashLink
              to="/services/it-training#header"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Typography
                sx={{
                  color: "white",
                  fontSize: { xs: "15px", sm: "18px", md: "20px" },
                }}
              >
                Technical/IT Training
              </Typography>
            </HashLink>

            <HashLink
              to="/services/power-skills#header"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Typography
                sx={{
                  color: "white",
                  fontSize: { xs: "15px", sm: "18px", md: "20px" },
                }}
              >
                Power Skills For Leadership & Management
              </Typography>
            </HashLink>

            <HashLink
              to="/services/soft-skills#header"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Typography
                sx={{
                  color: "white",
                  fontSize: { xs: "15px", sm: "18px", md: "20px" },
                }}
              >
                Soft Skills
              </Typography>
            </HashLink>
            <HashLink
              to="/services/college-partnerships#header"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Typography
                sx={{
                  color: "white",
                  fontSize: { xs: "15px", sm: "18px", md: "20px" },
                }}
              >
                College Partnerships
              </Typography>
            </HashLink>
            <HashLink
              to="/services/staffing-services#header"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Typography
                sx={{
                  color: "white",
                  fontSize: { xs: "15px", sm: "18px", md: "20px" },
                }}
              >
                Staffing Services
              </Typography>
            </HashLink>
            <HashLink
              to="/services/it-solutions#header"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Typography
                sx={{
                  color: "white",
                  fontSize: { xs: "15px", sm: "18px", md: "20px" },
                }}
              >
                IT Solutions
              </Typography>
            </HashLink>
          </Box>

          <Box sx={{}}>
            <HashLink
              to="/about#header"
              style={{
                textDecoration: "none",
                color: "inherit",
                marginBottom: "15px",
              }}
            >
              <Typography
                sx={{
                  color: "white",
                  fontWeight: "700",
                  fontSize: { xs: "22px", sm: "25px", md: "28px" },
                  borderBottom: "3px solid white",
                  display: "inline",
                }}
              >
                Why Choose Us
              </Typography>
            </HashLink>
            <HashLink
              to="/why-choose-us#ircots"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Typography
                sx={{
                  color: "white",
                  fontSize: { xs: "15px", sm: "18px", md: "20px" },
                }}
              >
                Irresistible Reasons to choose our Training Services
              </Typography>
            </HashLink>

            <HashLink
              to="/why-choose-us#training-methodology"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Typography
                sx={{
                  color: "white",
                  fontSize: { xs: "15px", sm: "18px", md: "20px" },
                }}
              >
                Our Training Methodology
              </Typography>
            </HashLink>

            <HashLink
              to="/why-choose-us#irtcohr"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Typography
                sx={{
                  color: "white",
                  fontSize: { xs: "15px", sm: "18px", md: "20px" },
                }}
              >
                Irresistible Reasons to choose our HR Services
              </Typography>
            </HashLink>
            <HashLink
              to="/why-choose-us#achievements"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Typography
                sx={{
                  color: "white",
                  fontSize: { xs: "15px", sm: "18px", md: "20px" },
                }}
              >
                A Sneak Peak Into Our Achievements
              </Typography>
            </HashLink>
          </Box>

          <Box sx={{}}>
            <HashLink
              to="/about#header"
              style={{
                textDecoration: "none",
                color: "inherit",
                marginBottom: "15px",
              }}
            >
              <Typography
                sx={{
                  color: "white",
                  fontWeight: "700",
                  fontSize: { xs: "22px", sm: "25px", md: "28px" },
                  borderBottom: "3px solid white",
                  display: "inline",
                }}
              >
                About Us
              </Typography>
            </HashLink>
            <HashLink
              to="/about#vm"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Typography
                sx={{
                  color: "white",
                  fontSize: { xs: "15px", sm: "18px", md: "20px" },
                }}
              >
                Vision & Mission
              </Typography>
            </HashLink>

            <HashLink
              to="/about#values"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Typography
                sx={{
                  color: "white",
                  fontSize: { xs: "15px", sm: "18px", md: "20px" },
                }}
              >
                Values
              </Typography>
            </HashLink>
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
    </Fragment>
  );
}

export default Footer;

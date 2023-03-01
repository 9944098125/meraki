import React, { Fragment } from "react";
import { Box, Typography } from "@mui/material";
import { HashLink } from "react-router-hash-link";
import LinkIcon from "@mui/icons-material/Link";

function CollegePartnerships() {
  const [style, setStyle] = React.useState({ display: "none" });

  const scrollToTop = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -100;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  return (
    <Fragment>
      <Box
        onMouseEnter={() => setStyle({ display: "block" })}
        onMouseLeave={() => setStyle({ display: "none" })}
        sx={{ position: "relative", mb: 3 }}
      >
        <HashLink
          scroll={scrollToTop}
          style={{ textDecoration: "none", color: "inherit" }}
          to="/services/college-partnerships#header"
        >
          <Typography
            sx={{
              color: "primary.dark",
              fontSize: { xs: "16px", sm: "18px", md: "20px" },
              fontWeight: "800",
            }}
          >
            College Partnerships
          </Typography>
        </HashLink>
        <Box
          style={style}
          sx={{
            position: "absolute",
            backgroundColor: "white",
            boxShadow: "2px 2px 2px 2px grey",
            p: 2,
            borderRadius: "9px",
            zIndex: "3",
            width: { xs: "200px", sm: "2500px", md: "300px" },
            ml: { xs: 0, md: 10 },
          }}
        >
          <HashLink
            scroll={scrollToTop}
            style={{ textDecoration: "none", color: "inherit" }}
            to="/services/college-partnerships#about-our-college-partnership-programs"
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <LinkIcon
                sx={{ fontSize: { xs: "10px", sm: "11px", md: "12px" } }}
              />
              <Typography
                sx={{
                  color: "grey",
                  fontSize: { xs: "8px", sm: "10px", md: "12px" },
                  "&:hover": { color: "primary.dark" },
                }}
              >
                About Our College Partnership Programs
              </Typography>
            </Box>
          </HashLink>
          <HashLink
            scroll={scrollToTop}
            style={{ textDecoration: "none", color: "inherit" }}
            to="/services/college-partnerships#comprehensive-learning"
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <LinkIcon
                sx={{ fontSize: { xs: "10px", sm: "11px", md: "12px" } }}
              />
              <Typography
                sx={{
                  color: "grey",
                  fontSize: { xs: "8px", sm: "10px", md: "12px" },
                  "&:hover": { color: "primary.dark" },
                }}
              >
                Comprehensive Learning Path
              </Typography>
            </Box>
          </HashLink>
          <HashLink
            scroll={scrollToTop}
            style={{ textDecoration: "none", color: "inherit" }}
            to="/services/college-partnerships#industry-awareness"
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <LinkIcon
                sx={{ fontSize: { xs: "10px", sm: "11px", md: "12px" } }}
              />
              <Typography
                sx={{
                  color: "grey",
                  fontSize: { xs: "8px", sm: "10px", md: "12px" },
                  "&:hover": { color: "primary.dark" },
                }}
              >
                Industry Awareness and Career Path Programs
              </Typography>
            </Box>
          </HashLink>
          <HashLink
            scroll={scrollToTop}
            style={{ textDecoration: "none", color: "inherit" }}
            to="/services/college-partnerships#technical-training"
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <LinkIcon
                sx={{ fontSize: { xs: "10px", sm: "11px", md: "12px" } }}
              />
              <Typography
                sx={{
                  color: "grey",
                  fontSize: { xs: "8px", sm: "10px", md: "12px" },
                  "&:hover": { color: "primary.dark" },
                }}
              >
                Technical Training Programs
              </Typography>
            </Box>
          </HashLink>
          <HashLink
            scroll={scrollToTop}
            style={{ textDecoration: "none", color: "inherit" }}
            to="/services/college-partnerships#power-skills"
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <LinkIcon
                sx={{ fontSize: { xs: "10px", sm: "11px", md: "12px" } }}
              />
              <Typography
                sx={{
                  color: "grey",
                  fontSize: { xs: "8px", sm: "10px", md: "12px" },
                  "&:hover": { color: "primary.dark" },
                }}
              >
                Power Skills and Interview Preparations
              </Typography>
            </Box>
          </HashLink>
          <HashLink
            scroll={scrollToTop}
            style={{ textDecoration: "none", color: "inherit" }}
            to="/services/college-partnerships#internship"
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <LinkIcon
                sx={{ fontSize: { xs: "10px", sm: "11px", md: "12px" } }}
              />
              <Typography
                sx={{
                  color: "grey",
                  fontSize: { xs: "8px", sm: "10px", md: "12px" },
                  "&:hover": { color: "primary.dark" },
                }}
              >
                Internship Programs
              </Typography>
            </Box>
          </HashLink>
        </Box>
      </Box>
    </Fragment>
  );
}

export default CollegePartnerships;

import React, { Fragment } from "react";
import { Box, Typography } from "@mui/material";
import { HashLink } from "react-router-hash-link";
import LinkIcon from "@mui/icons-material/Link";

function SoftSkills() {
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
          to="/services/soft-skills#header"
        >
          <Typography
            sx={{
              color: "primary.dark",
              fontSize: { xs: "16px", sm: "18px", md: "20px" },
              fontWeight: "800",
            }}
          >
            Soft Skills & Business Communication
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
            to="/services/soft-skills#corporate-training"
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
                Campus to Corporate training
              </Typography>
            </Box>
          </HashLink>
          <HashLink
            scroll={scrollToTop}
            style={{ textDecoration: "none", color: "inherit" }}
            to="/services/soft-skills#business-english-skills"
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
                Business English skills
              </Typography>
            </Box>
          </HashLink>
          <HashLink
            scroll={scrollToTop}
            style={{ textDecoration: "none", color: "inherit" }}
            to="/services/soft-skills#voice"
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
                Voice & Accent Training
              </Typography>
            </Box>
          </HashLink>
          <HashLink
            scroll={scrollToTop}
            style={{ textDecoration: "none", color: "inherit" }}
            to="/services/soft-skills#email-etiquette"
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
                Email & Telephone Etiquette
              </Typography>
            </Box>
          </HashLink>
          <HashLink
            scroll={scrollToTop}
            style={{ textDecoration: "none", color: "inherit" }}
            to="/services/soft-skills#cross-cultural"
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
                Cross Cultural Sensitivity
              </Typography>
            </Box>
          </HashLink>
          <HashLink
            scroll={scrollToTop}
            style={{ textDecoration: "none", color: "inherit" }}
            to="/services/soft-skills#corporate-etiquette"
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
                Corporate Etiquette
              </Typography>
            </Box>
          </HashLink>
          <HashLink
            scroll={scrollToTop}
            style={{ textDecoration: "none", color: "inherit" }}
            to="/services/soft-skills#hr-training"
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
                HR Training
              </Typography>
            </Box>
          </HashLink>
          <HashLink
            scroll={scrollToTop}
            style={{ textDecoration: "none", color: "inherit" }}
            to="/services/soft-skills#bfsi-training"
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
                BFSI Training
              </Typography>
            </Box>
          </HashLink>
          <HashLink
            scroll={scrollToTop}
            style={{ textDecoration: "none", color: "inherit" }}
            to="/services/soft-skills#logistics"
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
                Logistics & Aviation
              </Typography>
            </Box>
          </HashLink>
          <HashLink
            scroll={scrollToTop}
            style={{ textDecoration: "none", color: "inherit" }}
            to="/services/soft-skills#digital-marketing"
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
                Digital Marketing
              </Typography>
            </Box>
          </HashLink>
        </Box>
      </Box>
    </Fragment>
  );
}

export default SoftSkills;

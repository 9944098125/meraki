import React, { Fragment } from "react";
import { Box, Typography } from "@mui/material";
import { HashLink } from "react-router-hash-link";
import LinkIcon from "@mui/icons-material/Link";

function StaffingServices() {
  const [style, setStyle] = React.useState({ display: "none" });
  return (
    <Fragment>
      <Box
        onMouseEnter={() => setStyle({ display: "block" })}
        onMouseLeave={() => setStyle({ display: "none" })}
        sx={{ position: "relative", mb: 3 }}
      >
        <HashLink
          style={{ textDecoration: "none", color: "inherit" }}
          to="/services/staffing-services#header"
        >
          <Typography
            sx={{
              color: "primary.dark",
              fontSize: { xs: "16px", sm: "18px", md: "20px" },
              fontWeight: "800",
            }}
          >
            Staffing services
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
            style={{ textDecoration: "none", color: "inherit" }}
            to="/services/staffing-services#talent-acquisition"
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
                Talent Acquisition
              </Typography>
            </Box>
          </HashLink>
          <HashLink
            style={{ textDecoration: "none", color: "inherit" }}
            to="/services/staffing-services#rpo"
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
                Recruitment Process Outsourcing (RPO)
              </Typography>
            </Box>
          </HashLink>
          <HashLink
            style={{ textDecoration: "none", color: "inherit" }}
            to="/services/staffing-services#contingency-recruitment"
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
                Contingency Recruitment
              </Typography>
            </Box>
          </HashLink>
          <HashLink
            style={{ textDecoration: "none", color: "inherit" }}
            to="/services/staffing-services#hire-train-deploy"
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
                Hire - Train - Deploy Service
              </Typography>
            </Box>
          </HashLink>
        </Box>
      </Box>
    </Fragment>
  );
}

export default StaffingServices;

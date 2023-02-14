import { Box, Typography } from "@mui/material";
import React, { Fragment } from "react";
import { HashLink } from "react-router-hash-link";
import LinkIcon from "@mui/icons-material/Link";

function ItSolutions() {
  const [style, setStyle] = React.useState({ display: "none" });

  return (
    <Fragment>
      <Box
        onMouseEnter={() => setStyle({ display: "block" })}
        onMouseLeave={() => setStyle({ display: "none" })}
        sx={{}}
      >
        <HashLink
          style={{ textDecoration: "none", color: "inherit" }}
          to="/services/it-solutions#header"
        >
          <Typography
            sx={{
              color: "primary.dark",
              fontSize: { xs: "16px", sm: "18px", md: "20px" },
              fontWeight: "800",
            }}
          >
            IT Solutions
          </Typography>
        </HashLink>
        <Box style={style} sx={{}}>
          <HashLink
            style={{ textDecoration: "none", color: "inherit" }}
            to="/services/it-solutions#application-development"
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
                Application Development
              </Typography>
            </Box>
          </HashLink>
          <HashLink
            style={{ textDecoration: "none", color: "inherit" }}
            to="/services/it-solutions#website-development"
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
                Website Development
              </Typography>
            </Box>
          </HashLink>
        </Box>
      </Box>
    </Fragment>
  );
}

export default ItSolutions;

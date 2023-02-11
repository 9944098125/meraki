import React, { Fragment } from "react";
import { Box, Typography } from "@mui/material";
import { HashLink } from "react-router-hash-link";
import LinkIcon from "@mui/icons-material/Link";

function CollegePartnerships() {
  return (
    <Fragment>
      <Box sx={{}}>
        <Typography
          sx={{
            color: "primary.dark",
            fontSize: { xs: "16px", sm: "18px", md: "20px" },
            fontWeight: "800",
          }}
        >
          College Partnerships
        </Typography>
        <Box sx={{}}>
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
        </Box>
      </Box>
    </Fragment>
  );
}

export default CollegePartnerships;

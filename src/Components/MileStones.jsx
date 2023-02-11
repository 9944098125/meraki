import { Box, Typography } from "@mui/material";
import React, { Fragment } from "react";
import clients from "../Assets/Images/clients.webp";
import hours from "../Assets/Images/hours.webp";
import courses from "../Assets/Images/courses.avif";
import trainees from "../Assets/Images/trainees.jfif";

function MileStones({ title }) {
  return (
    <Fragment>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          p: 1,
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "30px", sm: "45px", md: "50px" },
            fontWeight: "700",
            color: "primary.dark",
          }}
        >
          {title}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: { xs: 1, sm: 3, md: 5 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: { xs: "45%", sm: "20%" },
              p: { xs: 1, sm: 2, md: 3 },
              boxShadow: "0px 5px 5px 0px grey",
              borderRadius: "12px",
              height: { xs: "200px", sm: "250px", md: "300px" },
              backgroundColor: "white",
            }}
          >
            <img src={trainees} className="milestonesImage" alt="" />
            <Typography
              sx={{
                color: "primary.dark",
                fontSize: { xs: "14px", sm: "16px", md: "19px" },
                fontWeight: "600",
              }}
            >
              5000+
            </Typography>
            <Typography
              sx={{
                color: "grey",
                fontSize: { xs: "16px", sm: "18px", md: "21px" },
                fontWeight: "700",
                textAlign: "center",
              }}
            >
              Trainees Lives Changed
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: { xs: "45%", sm: "20%" },
              p: { xs: 1, sm: 2, md: 3 },
              boxShadow: "0px 5px 5px 0px grey",
              borderRadius: "12px",
              height: { xs: "200px", sm: "250px", md: "300px" },
              backgroundColor: "white",
            }}
          >
            <img src={hours} className="milestonesImage" alt="" />
            <Typography
              sx={{
                color: "primary.dark",
                fontSize: { xs: "14px", sm: "16px", md: "19px" },
                fontWeight: "600",
              }}
            >
              10,000+
            </Typography>
            <Typography
              sx={{
                color: "grey",
                fontSize: { xs: "16px", sm: "18px", md: "21px" },
                fontWeight: "700",
                textAlign: "center",
              }}
            >
              Training Hours
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: { xs: "45%", sm: "20%" },
              p: { xs: 1, sm: 2, md: 3 },
              boxShadow: "0px 5px 5px 0px grey",
              borderRadius: "12px",
              height: { xs: "200px", sm: "250px", md: "300px" },
              backgroundColor: "white",
            }}
          >
            <img src={clients} className="milestonesImage" alt="" />
            <Typography
              sx={{
                color: "primary.dark",
                fontSize: { xs: "14px", sm: "16px", md: "19px" },
                fontWeight: "600",
              }}
            >
              97.3%
            </Typography>
            <Typography
              sx={{
                color: "grey",
                fontSize: { xs: "16px", sm: "18px", md: "21px" },
                fontWeight: "700",
                textAlign: "center",
              }}
            >
              Client Satisfaction
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: { xs: "45%", sm: "20%" },
              p: { xs: 1, sm: 2, md: 3 },
              boxShadow: "0px 5px 5px 0px grey",
              borderRadius: "12px",
              height: { xs: "200px", sm: "250px", md: "300px" },
              backgroundColor: "white",
            }}
          >
            <img src={courses} className="milestonesImage" alt="" />
            <Typography
              sx={{
                color: "primary.dark",
                fontSize: { xs: "14px", sm: "16px", md: "19px" },
                fontWeight: "600",
              }}
            >
              7000+
            </Typography>
            <Typography
              sx={{
                color: "grey",
                fontSize: { xs: "16px", sm: "18px", md: "21px" },
                fontWeight: "700",
                textAlign: "center",
              }}
            >
              Courses to Choose From
            </Typography>
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
}

export default MileStones;

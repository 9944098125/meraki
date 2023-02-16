import { Box, Typography } from "@mui/material";
import React, { Fragment } from "react";
import clients from "../Assets/Images/clients.jpg";
import hours from "../Assets/Images/hours.jpg";
import courses from "../Assets/Images/courses.jpg";
import trainees from "../Assets/Images/trainees.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import AnimatedNumbers from "react-animated-numbers";

function MileStones({ title }) {
  const [num] = React.useState(5000);
  const [num2] = React.useState(10000);
  const [num3] = React.useState(97.3);
  const [num4] = React.useState(7000);
  React.useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

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
            fontSize: { xs: "20px", sm: "35px", md: "40px" },
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
            data-aos="fade-up"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: { xs: "45%", sm: "20%" },
              pb: { xs: 1, sm: 2, md: 3 },
              boxShadow: "0px 5px 5px 0px grey",
              borderRadius: "12px",
              height: { xs: "200px", sm: "250px", md: "300px" },
              backgroundColor: "white",
              cursor: "pointer",
            }}
          >
            <img
              src={trainees}
              className="milestonesImage"
              alt=""
              style={{
                borderTopRightRadius: "8px",
                borderTopLeftRadius: "8px",
              }}
            />
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <AnimatedNumbers
                includeComma
                animateToNumber={num}
                fontStyle={{ fontSize: 25 }}
                configs={[
                  { mass: 1, tension: 220, friction: 100 },
                  { mass: 1, tension: 180, friction: 130 },
                  { mass: 1, tension: 280, friction: 90 },
                  { mass: 1, tension: 180, friction: 135 },
                  { mass: 1, tension: 260, friction: 100 },
                  { mass: 1, tension: 210, friction: 180 },
                ]}
              ></AnimatedNumbers>
              <Typography
                sx={{
                  fontSize: { xs: "14px", sm: "16px", md: "19px" },
                  fontWeight: "600",
                }}
              >
                +
              </Typography>
            </Box>
            <Typography
              sx={{
                color: "grey",
                fontSize: { xs: "14px", sm: "18px", md: "21px" },
                fontWeight: "700",
                textAlign: "center",
              }}
            >
              Trainees Lives Changed
            </Typography>
          </Box>
          <Box
            data-aos="fade-down"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: { xs: "45%", sm: "20%" },
              pb: { xs: 1, sm: 2, md: 3 },
              boxShadow: "0px 5px 5px 0px grey",
              borderRadius: "12px",
              height: { xs: "200px", sm: "250px", md: "300px" },
              backgroundColor: "white",
              cursor: "pointer",
            }}
          >
            <img
              src={hours}
              className="milestonesImage"
              alt=""
              style={{
                borderTopRightRadius: "8px",
                borderTopLeftRadius: "8px",
              }}
            />
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <AnimatedNumbers
                includeComma
                animateToNumber={num2}
                fontStyle={{ fontSize: 25 }}
                configs={[
                  { mass: 1, tension: 220, friction: 100 },
                  { mass: 1, tension: 180, friction: 130 },
                  { mass: 1, tension: 280, friction: 90 },
                  { mass: 1, tension: 180, friction: 135 },
                  { mass: 1, tension: 260, friction: 100 },
                  { mass: 1, tension: 210, friction: 180 },
                ]}
              ></AnimatedNumbers>
              <Typography
                sx={{
                  fontSize: { xs: "14px", sm: "16px", md: "19px" },
                  fontWeight: "600",
                }}
              >
                +
              </Typography>
            </Box>
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
            data-aos="fade-up"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: { xs: "45%", sm: "20%" },
              pb: { xs: 1, sm: 2, md: 3 },
              boxShadow: "0px 5px 5px 0px grey",
              borderRadius: "12px",
              height: { xs: "200px", sm: "250px", md: "300px" },
              backgroundColor: "white",
              cursor: "pointer",
            }}
          >
            <img
              src={clients}
              className="milestonesImage"
              alt=""
              style={{
                borderTopRightRadius: "8px",
                borderTopLeftRadius: "8px",
              }}
            />
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <AnimatedNumbers
                includeComma
                animateToNumber={num3}
                fontStyle={{ fontSize: 25 }}
                configs={[
                  { mass: 1, tension: 220, friction: 100 },
                  { mass: 1, tension: 180, friction: 130 },
                  { mass: 1, tension: 280, friction: 90 },
                  { mass: 1, tension: 180, friction: 135 },
                  { mass: 1, tension: 260, friction: 100 },
                  { mass: 1, tension: 210, friction: 180 },
                ]}
              ></AnimatedNumbers>
              <Typography
                sx={{
                  fontSize: { xs: "14px", sm: "16px", md: "19px" },
                  fontWeight: "600",
                }}
              >
                %
              </Typography>
            </Box>
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
            data-aos="fade-down"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: { xs: "45%", sm: "20%" },
              pb: { xs: 1, sm: 2, md: 3 },
              boxShadow: "0px 5px 5px 0px grey",
              borderRadius: "12px",
              height: { xs: "200px", sm: "250px", md: "300px" },
              backgroundColor: "white",
              cursor: "pointer",
            }}
          >
            <img
              src={courses}
              className="milestonesImage"
              alt=""
              style={{
                borderTopRightRadius: "8px",
                borderTopLeftRadius: "8px",
              }}
            />
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <AnimatedNumbers
                includeComma
                animateToNumber={num4}
                fontStyle={{ fontSize: 25 }}
                configs={[
                  { mass: 1, tension: 220, friction: 100 },
                  { mass: 1, tension: 180, friction: 130 },
                  { mass: 1, tension: 280, friction: 90 },
                  { mass: 1, tension: 180, friction: 135 },
                  { mass: 1, tension: 260, friction: 100 },
                  { mass: 1, tension: 210, friction: 180 },
                ]}
              ></AnimatedNumbers>
              <Typography
                sx={{
                  fontSize: { xs: "14px", sm: "16px", md: "19px" },
                  fontWeight: "600",
                }}
              >
                +
              </Typography>
            </Box>
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

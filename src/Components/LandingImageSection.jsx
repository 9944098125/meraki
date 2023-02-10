import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { Fragment } from "react";
import landingImage from "../Assets/Images/landingImage.jpg";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

function LandingImageSection() {
  const handleType = (count) => {
    // access word count number
    console.log(count);
  };

  const handleDone = () => {
    console.log(`Done after 5 loops!`);
  };

  return (
    <Fragment>
      <Box
        sx={{
          width: "100%",
          height: { xs: "100vh", sm: "80vh", md: "70vh" },
          backgroundImage: `url(${landingImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: {
              xs: "80%",
              sm: "70%",
              md: "30%",
            },
            borderBottom: "3px solid cyan",
            mb: 4,
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "17px", sm: "19px", md: "22px" },
              fontWeight: "700",
              color: "white",
            }}
          >
            The Ultimate Destination For Your Staffing And Training Needs
          </Typography>
        </Box>
        <Typography
          sx={{
            fontSize: { xs: "19px", sm: "23px", md: "30px" },
            color: "white",
            mb: 3,
          }}
        >
          <span style={{ color: "white", fontWeight: "bold" }}>
            {/* Style will be inherited from the parent element */}
            <Typewriter
              words={[
                "97.3% Client Satisfaction",
                "70+ Courses to Choose from",
                "5000+ Trainees Lives changed",
                "10,000+ Training Hours",
              ]}
              loop={5}
              cursor
              cursorStyle="|"
              typeSpeed={120}
              deleteSpeed={100}
              delaySpeed={1000}
              onLoopDone={handleDone}
              onType={handleType}
            />
          </span>
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            justifyContent: "space-evenly",
            gap: 10,
          }}
        >
          <Link
            to="/staffing-services"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Typography
              className="headings"
              sx={{
                color: "white",
                fontSize: "25px",
                p: 1,
                border: "2px solid white",
                borderRadius: "15px",
                "&:hover": {
                  backgroundColor: "white",
                  color: "primary.dark",
                  fontWeight: "800",
                },
              }}
            >
              Staffing Services
            </Typography>
          </Link>
          <Link
            to="/training-services"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Typography
              className="headings"
              sx={{
                color: "white",
                fontSize: "25px",
                p: 1,
                border: "2px solid white",
                borderRadius: "15px",
                "&:hover": {
                  backgroundColor: "white",
                  color: "primary.dark",
                  fontWeight: "800",
                },
              }}
            >
              Training Services
            </Typography>
          </Link>
        </Box>
      </Box>
    </Fragment>
  );
}

export default LandingImageSection;

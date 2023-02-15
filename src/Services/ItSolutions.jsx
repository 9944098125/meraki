import React, { Fragment } from "react";
import { Box, Typography } from "@mui/material";
import itSolutionsHeader from "../Assets/ServicesImages/itSolutionsHeader.avif";
import mobileAppDevelopment from "../Assets/ServicesImages/mobileAppDevelopment.jpg";
import webDevelopment from "../Assets/ServicesImages/webDevelopment.jpg";

function ItSolutions() {
  return (
    <Fragment>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 4,
        }}
      >
        <Box
          id="header"
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: { xs: "none", sm: "space-around" },
            alignItems: "center",
            px: { xs: 2, sm: 3 },
            width: "100%",
            height: { xs: "30vh", sm: "40vh", md: "50vh" },
            mt: { xs: 3, sm: 5 },
            mb: { xs: 5, sm: 2, md: 0 },
          }}
        >
          <img src={itSolutionsHeader} alt="" className="header-image" />
          <Typography
            sx={{
              color: "primary.dark",
              fontSize: { xs: "30px", sm: "40px", md: "50px" },
              fontWeight: "800",
            }}
          >
            IT SOLUTIONS
          </Typography>
        </Box>
        <Box
          id="application-development"
          sx={{
            minHeight: "100vh",
            width: "95vw",
            backgroundColor: "white",
            borderRadius: "15px",
            boxShadow: "5px 5px 5px 5px grey",
            mb: { xs: 3, sm: 5, md: 7 },
            mt: { xs: 2, sm: 3, md: 5 },
            py: { xs: 1, sm: 2, md: 3 },
          }}
        >
          <Box
            sx={{
              height: { xs: "15%", sm: "20%", md: "30%" },
              width: "100%",
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "center",
              justifyContent: { xs: "none", sm: "space-evenly" },
              px: { xs: 1, sm: 2, md: 3 },
              py: { xs: 1.5, sm: 2, md: 3 },
            }}
          >
            <img src={mobileAppDevelopment} alt="" className="services-img" />
            <Typography
              sx={{
                color: "primary.main",
                fontSize: { xs: "25px", sm: "30px", md: "35px" },
                fontWeight: "800",
              }}
            >
              Application Development
            </Typography>
          </Box>
          {/* objectives */}
          <Box sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
            <Typography
              sx={{
                fontSize: { xs: "19px", sm: "23px", md: "28px" },
                fontWeight: "700",
                color: "primary.dark",
                borderBottom: "2px solid #1a237e",
                display: "inline",
              }}
            >
              Objective
            </Typography>
            <Typography
              sx={{ fontSize: { xs: "14px", sm: "16px", md: "18px" } }}
            >
              To develop a functional and user-friendly mobile application that
              addresses a specific need or provides a useful service.
            </Typography>
          </Box>
          {/* pre-requisite */}
          <Box sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
            <Typography
              sx={{
                fontSize: { xs: "19px", sm: "23px", md: "28px" },
                fontWeight: "700",
                color: "primary.dark",
                borderBottom: "2px solid #1a237e",
                display: "inline",
              }}
            >
              Pre-requisite
            </Typography>
            <Typography
              sx={{ fontSize: { xs: "14px", sm: "16px", md: "18px" } }}
            >
              Understanding of programming languages such as Java, Swift, or
              Kotlin, Familiarity with mobile development tools and frameworks
              like Android Studio or Xcode.
            </Typography>
            <Typography
              sx={{ fontSize: { xs: "14px", sm: "16px", md: "18px" } }}
            >
              Knowledge of user interface (UI) and user experience (UX) design
              principles.
            </Typography>
            <Typography
              sx={{ fontSize: { xs: "14px", sm: "16px", md: "18px" } }}
            >
              Knowledge of software development lifecycle (SDLC) and project
              management methodologies.
            </Typography>
            <Typography
              sx={{ fontSize: { xs: "14px", sm: "16px", md: "18px" } }}
            >
              Access to a development environment, including hardware and
              software tools.
            </Typography>
          </Box>
          {/* content-outline */}
          <Box sx={{ p: { xs: 2, sm: 3, md: 4 }, pb: 0 }}>
            <Typography
              sx={{
                fontSize: { xs: "19px", sm: "23px", md: "28px" },
                fontWeight: "700",
                color: "primary.dark",
                borderBottom: "2px solid #1a237e",
                display: "inline",
              }}
            >
              Content Outline
            </Typography>
            <Box
              sx={{
                pl: { xs: 1, sm: 2, md: 3 },
              }}
            >
              <Typography
                sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
              >
                1. Identifying the problem or need the app will address and
                Conducting market research to understand user needs, competitor
                landscape and target audience.
              </Typography>
              <Typography
                sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
              >
                2. Creating a functional requirement document, which outlines
                the app's features and specifications.
              </Typography>
              <Typography
                sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
              >
                5. Creating wireframes and mockups to visualize the app's
                interface and design and Developing the app's front-end and
                back-end components.
              </Typography>
              <Typography
                sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
              >
                6. Testing the app to ensure it is functional and user-friendly.
              </Typography>
              <Typography
                sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
              >
                7. Deploying the app to the app stores or other distribution
                channels.
              </Typography>
              <Typography
                sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
              >
                8. Maintaining the app by fixing bugs, updating features, and
                providing customer support.
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          id="website-development"
          sx={{
            minHeight: "100vh",
            width: "95vw",
            backgroundColor: "white",
            borderRadius: "15px",
            boxShadow: "5px 5px 5px 5px grey",
            mb: { xs: 3, sm: 5, md: 7 },
            mt: { xs: 2, sm: 3, md: 5 },
            py: { xs: 1, sm: 2, md: 3 },
          }}
        >
          <Box
            sx={{
              height: { xs: "15%", sm: "20%", md: "30%" },
              width: "100%",
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "center",
              justifyContent: { xs: "none", sm: "space-evenly" },
              px: { xs: 1, sm: 2, md: 3 },
              py: { xs: 1.5, sm: 2, md: 3 },
            }}
          >
            <img src={webDevelopment} alt="" className="services-img" />
            <Typography
              sx={{
                color: "primary.main",
                fontSize: { xs: "25px", sm: "30px", md: "35px" },
                fontWeight: "800",
              }}
            >
              Website Development
            </Typography>
          </Box>
          {/* objectives */}
          <Box sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
            <Typography
              sx={{
                fontSize: { xs: "19px", sm: "23px", md: "28px" },
                fontWeight: "700",
                color: "primary.dark",
                borderBottom: "2px solid #1a237e",
                display: "inline",
              }}
            >
              Objective
            </Typography>
            <Typography
              sx={{ fontSize: { xs: "14px", sm: "16px", md: "18px" } }}
            >
              To develop a functional and user-friendly website that provides
              information, services, or products to its intended audience.
            </Typography>
          </Box>
          {/* pre-requisite */}
          <Box sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
            <Typography
              sx={{
                fontSize: { xs: "19px", sm: "23px", md: "28px" },
                fontWeight: "700",
                color: "primary.dark",
                borderBottom: "2px solid #1a237e",
                display: "inline",
              }}
            >
              Pre-requisite
            </Typography>
            <Typography
              sx={{ fontSize: { xs: "14px", sm: "16px", md: "18px" } }}
            >
              Familiarity with web development languages such as HTML, CSS, and
              JavaScript.
            </Typography>
            <Typography
              sx={{ fontSize: { xs: "14px", sm: "16px", md: "18px" } }}
            >
              Knowledge of server-side scripting languages such as PHP, Python,
              or Ruby on Rails and Understanding of web development frameworks
              such as React, Angular, or Vue.
            </Typography>
            <Typography
              sx={{ fontSize: { xs: "14px", sm: "16px", md: "18px" } }}
            >
              Knowledge of web design principles, including UI/UX design, color
              theory, and typography.
            </Typography>
            <Typography
              sx={{ fontSize: { xs: "14px", sm: "16px", md: "18px" } }}
            >
              Understanding of website hosting and domain management.
            </Typography>
            <Typography
              sx={{ fontSize: { xs: "14px", sm: "16px", md: "18px" } }}
            >
              Access to a development environment, including hardware and
              software tools.
            </Typography>
          </Box>
          {/* content-outline */}
          <Box sx={{ p: { xs: 2, sm: 3, md: 4 }, pb: 0 }}>
            <Typography
              sx={{
                fontSize: { xs: "19px", sm: "23px", md: "28px" },
                fontWeight: "700",
                color: "primary.dark",
                borderBottom: "2px solid #1a237e",
                display: "inline",
              }}
            >
              Content Outline
            </Typography>
            <Box
              sx={{
                pl: { xs: 1, sm: 2, md: 3 },
              }}
            >
              <Typography
                sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
              >
                1. Defining the website's purpose, target audience, and content
                requirements and Conducting market research and competitor
                analysis to understand the industry trends and user needs.
              </Typography>
              <Typography
                sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
              >
                2. Designing the website's visual elements, such as logo, color
                scheme, and typography.
              </Typography>
              <Typography
                sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
              >
                3. Developing the website's front-end and back-end components,
                including database design and server-side scripting.
              </Typography>
              <Typography
                sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
              >
                4. Testing the website to ensure it is functional and
                user-friendly across different devices and browsers.
              </Typography>
              <Typography
                sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
              >
                5. Launching the website by publishing it on a web server and
                registering a domain name & Maintaining the website by updating
                the content, fixing bugs, and improving performance based on
                user feedback.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
}

export default ItSolutions;

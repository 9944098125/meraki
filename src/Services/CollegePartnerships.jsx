import { Box, Typography } from "@mui/material";
import React, { Fragment } from "react";
import industryAwareness from "../Assets/ServicesImages/industryAwareness.jpg";
import interviewPreparations from "../Assets/ServicesImages/interviewPreparations.jpg";
import technicalTraining from "../Assets/Images/technicalTraining.jpg";
import careerPath from "../Assets/Images/careerPath.jpg";
import collaborativeResearch from "../Assets/ServicesImages/collaborativeResearch.jpg";
import internshipPrograms from "../Assets/ServicesImages/internshipPrograms.jpg";
import collegePartnershipsHeader from "../Assets/ServicesImages/collegePartnershipsHeader.avif";
import Aos from "aos";
import "aos/dist/aos.css";

function CollegePartnerships() {
  const text1 = "60";
  const progress1 = `<svg viewBox="0 0 36 36" class="circular-progress1">
  <path class="progress-bg1" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"></path>
  <path class="progress1" stroke-dasharray="${text1}, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"></path>
  <text x="18" y="20.35" class="percentage1">${text1}%</text>
</svg>`;

  const text2 = "10";
  const progress2 = `<svg viewBox="0 0 36 36" class="circular-progress2">
<path class="progress-bg2" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"></path>
<path class="progress2" stroke-dasharray="${text2}, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"></path>
<text x="18" y="20.35" class="percentage2">${text2}%</text>
</svg>`;

  const text3 = "65";
  const progress3 = `<svg viewBox="0 0 36 36" class="circular-progress3">
<path class="progress-bg3" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"></path>
<path class="progress3" stroke-dasharray="${text3}, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"></path>
<text x="18" y="20.35" class="percentage3">${text3}%</text>
</svg>`;

  const text4 = "30";
  const progress4 = `<svg viewBox="0 0 36 36" class="circular-progress4">
<path class="progress-bg4" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"></path>
<path class="progress4" stroke-dasharray="${text4}, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"></path>
<text x="18" y="20.35" class="percentage4">${text4}%</text>
</svg>`;

  React.useEffect(() => {
    setTimeout(() => {
      Aos.init({ duration: 2000 });
    }, 3000);
  }, []);

  const technologyLogos = [
    "https://venturebeat.com/wp-content/uploads/2017/12/microsoft-azure-new-logo-2017-e1572843284943.png?w=1200&strip=all",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/800px-Amazon_Web_Services_Logo.svg.png",
    "https://logos-world.net/wp-content/uploads/2021/02/Google-Cloud-Emblem.png",
    "https://static.vecteezy.com/system/resources/previews/005/152/131/original/cyber-security-logo-design-template-free-vector.jpg",
    "data:image/jpeg;base64,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",
    "https://cdn.dribbble.com/users/2302913/screenshots/14269824/artificial_intelligence_logo-01_4x.jpg",
    "https://img.freepik.com/premium-vector/gear-robot-logo_148584-6.jpg?w=2000",
    "https://thumbs.dreamstime.com/b/machine-learning-icon-artificial-intelligence-smart-logo-template-vector-illustration-isolated-white-204354460.jpg",
  ];

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
          <img
            src={collegePartnershipsHeader}
            alt=""
            className="header-image"
          />
          <Typography
            sx={{
              color: "primary.dark",
              fontSize: { xs: "30px", sm: "40px", md: "50px" },
              fontWeight: "800",
            }}
          >
            COLLEGE PARTNERSHIP
          </Typography>
        </Box>
        <Box
          data-aos="fade-up"
          id="about-our-college-partnership-programs"
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
              gap: 2,
              alignItems: "center",
              justifyContent: { xs: "none", sm: "space-evenly" },
              px: { xs: 1, sm: 2, md: 3 },
              py: { xs: 1.5, sm: 2, md: 3 },
            }}
          >
            <img src={industryAwareness} alt="" className="services-img" />
            <Typography
              sx={{
                color: "primary.main",
                fontSize: { xs: "25px", sm: "30px", md: "35px" },
                fontWeight: "800",
              }}
            >
              About Our College Partnership Programs
            </Typography>
          </Box>
          <Box sx={{ p: { xs: 2, sm: 4, md: 5 } }}>
            <Typography
              sx={{ fontSize: { xs: "14px", sm: "16px", md: "18px" } }}
            >
              With more than a decade of industry Experience, Meraki Training
              Solutions has Carved a niche for itself in the college training
              partnerships through pragmatic training solutions. We specialize
              in bridging the skills gap of Students and their employment
              capability by providing resolute competency based - learning
              programs and interventions that help the students enrich their
              career path and personal growth. With our headquarters in
              Bangalore, we aim to be a globally preferred training partner by
              providing pragmatic learning solutions and through our innovative
              and strategy driven approach.
            </Typography>
          </Box>
        </Box>
        <Box
          data-aos="fade-up"
          id="comprehensive-learning"
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
            <img src={interviewPreparations} alt="" className="services-img" />
            <Typography
              sx={{
                color: "primary.main",
                fontSize: { xs: "25px", sm: "30px", md: "35px" },
                fontWeight: "800",
              }}
            >
              Comprehensive Learning Path
            </Typography>
          </Box>
          <Box
            sx={{
              p: { xs: 2, sm: 3, md: 5 },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            {/* each item */}
            <Box
              data-aos="fade-up"
              sx={{
                boxShadow: "5px 5px 5px 5px #1a237e",
                borderRadius: "9px",
                minHeight: { xs: "150px", sm: "200px", md: "213px" },
                width: { xs: "100%", sm: "40%", md: "30%" },
                m: { xs: 1, sm: 1.5, md: 2 },
              }}
            >
              <Box
                sx={{
                  borderTopRightRadius: "9px",
                  borderTopLeftRadius: "9px",
                  backgroundColor: "primary.dark",
                  color: "white",
                  px: 3,
                  py: 1,
                  display: "flex",
                  alignItems: "center",
                  gap: { xs: 2, sm: 3, md: 5 },
                  maxHeight: { xs: "40px", sm: "50px", md: "60px" },
                  width: "100%",
                }}
              >
                <img
                  src="https://www.pngarts.com/files/7/Training-Transparent-Images.png"
                  alt=""
                  style={{
                    width: "35%",
                    height: "200%",
                    transform: "skewX(20deg) skewY(-20deg)",
                  }}
                />
                <Typography
                  sx={{
                    fontSize: { xs: "14px", sm: "16px", md: "18px" },
                    color: "white",
                    fontWeight: "800",
                  }}
                >
                  Analysis
                </Typography>
              </Box>
              <Box sx={{ p: { xs: 2, sm: 3, md: 5 } }}>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                >
                  Conduct In-depth Training Need Analysis
                </Typography>
              </Box>
            </Box>
            {/* item two */}
            <Box
              data-aos="fade-down"
              sx={{
                boxShadow: "5px 5px 5px 5px #1a237e",
                borderRadius: "9px",
                minHeight: { xs: "150px", sm: "200px", md: "200px" },
                width: { xs: "100%", sm: "40%", md: "30%" },
                m: { xs: 1, sm: 1.5, md: 2 },
              }}
            >
              <Box
                sx={{
                  borderTopRightRadius: "9px",
                  borderTopLeftRadius: "9px",
                  backgroundColor: "primary.dark",
                  color: "white",
                  px: 3,
                  py: 1,
                  display: "flex",
                  alignItems: "center",
                  gap: { xs: 2, sm: 3, md: 5 },
                  maxHeight: { xs: "40px", sm: "50px", md: "60px" },
                  width: "100%",
                }}
              >
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/008/506/967/small/isometric-3d-icon-city-buildings-for-infographic-concept-set-which-includes-house-offices-homes-shop-stores-supermarkets-and-industrial-elements-png.png"
                  alt=""
                  style={{
                    width: "25%",
                    height: "150%",
                    transform: "skewX(20deg) skewY(-20deg)",
                  }}
                />
                <Typography
                  sx={{
                    fontSize: { xs: "14px", sm: "16px", md: "18px" },
                    color: "white",
                    fontWeight: "800",
                  }}
                >
                  Industry Awareness
                </Typography>
              </Box>
              <Box sx={{ p: { xs: 2, sm: 3, md: 5 } }}>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                >
                  Industry Awareness Programs and Career Path Guidance workshops
                </Typography>
              </Box>
            </Box>

            {/* item three */}
            <Box
              data-aos="fade-up"
              sx={{
                boxShadow: "5px 5px 5px 5px #1a237e",
                borderRadius: "9px",
                minHeight: { xs: "150px", sm: "200px", md: "200px" },
                width: { xs: "100%", sm: "40%", md: "30%" },
                m: { xs: 1, sm: 1.5, md: 2 },
              }}
            >
              <Box
                sx={{
                  borderTopRightRadius: "9px",
                  borderTopLeftRadius: "9px",
                  backgroundColor: "primary.dark",
                  color: "white",
                  px: 3,
                  py: 1,
                  display: "flex",
                  alignItems: "center",
                  gap: { xs: 2, sm: 3, md: 5 },
                  maxHeight: { xs: "40px", sm: "50px", md: "60px" },
                  width: "100%",
                }}
              >
                <img
                  src="https://www.pngkey.com/png/full/858-8585677_ibm-clipart-technology-training-epale-tree.png"
                  alt=""
                  style={{
                    width: "25%",
                    height: "150%",
                    transform: "skewX(20deg) skewY(-20deg)",
                  }}
                />
                <Typography
                  sx={{
                    fontSize: { xs: "14px", sm: "16px", md: "18px" },
                    color: "white",
                    fontWeight: "800",
                  }}
                >
                  Technical Training
                </Typography>
              </Box>
              <Box sx={{ p: { xs: 2, sm: 3, md: 5 } }}>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                >
                  Technical Training Programs with Practical Sessions By
                  Industry Experts
                </Typography>
              </Box>
            </Box>

            {/* item four */}
            <Box
              data-aos="fade-down"
              sx={{
                boxShadow: "5px 5px 5px 5px #1a237e",
                borderRadius: "9px",
                minHeight: { xs: "150px", sm: "200px", md: "200px" },
                width: { xs: "100%", sm: "40%", md: "30%" },
                m: { xs: 1, sm: 1.5, md: 2 },
              }}
            >
              <Box
                sx={{
                  borderTopRightRadius: "9px",
                  borderTopLeftRadius: "9px",
                  backgroundColor: "primary.dark",
                  color: "white",
                  px: 3,
                  py: 1,
                  display: "flex",
                  alignItems: "center",
                  gap: { xs: 2, sm: 3, md: 5 },
                  maxHeight: { xs: "40px", sm: "50px", md: "60px" },
                  width: "100%",
                }}
              >
                <img
                  src="https://cdni.iconscout.com/illustration/premium/thumb/people-follow-business-etiquette-4388161-3816736.png"
                  alt=""
                  style={{
                    width: "25%",
                    height: "150%",
                    transform: "skewX(20deg) skewY(-20deg)",
                  }}
                />
                <Typography
                  sx={{
                    fontSize: { xs: "14px", sm: "16px", md: "18px" },
                    color: "white",
                    fontWeight: "800",
                  }}
                >
                  Business Etiquette
                </Typography>
              </Box>
              <Box sx={{ p: { xs: 2, sm: 3, md: 5 } }}>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                >
                  Campus to Corporate Training Programs - Communication skills &
                  Business Etiquette
                </Typography>
              </Box>
            </Box>

            {/* item five */}
            <Box
              data-aos="fade-up"
              sx={{
                boxShadow: "5px 5px 5px 5px #1a237e",
                borderRadius: "9px",
                minHeight: { xs: "150px", sm: "200px", md: "200px" },
                width: { xs: "100%", sm: "40%", md: "30%" },
                m: { xs: 1, sm: 1.5, md: 2 },
              }}
            >
              <Box
                sx={{
                  borderTopRightRadius: "9px",
                  borderTopLeftRadius: "9px",
                  backgroundColor: "primary.dark",
                  color: "white",
                  px: 3,
                  py: 1,
                  display: "flex",
                  alignItems: "center",
                  gap: { xs: 2, sm: 3, md: 5 },
                  maxHeight: { xs: "40px", sm: "50px", md: "60px" },
                  width: "100%",
                }}
              >
                <img
                  src="https://static.vecteezy.com/system/resources/previews/012/806/393/non_2x/3d-illustration-of-business-risk-concept-businessman-turning-risk-meter-arrow-back-with-rope-effective-risk-management-measurement-monitoring-assessment-and-control-3d-rendering-png.png"
                  alt=""
                  style={{
                    width: "30%",
                    height: "250%",
                    transform: "skewX(20deg) skewY(-20deg)",
                  }}
                />
                <Typography
                  sx={{
                    fontSize: { xs: "14px", sm: "16px", md: "18px" },
                    color: "white",
                    fontWeight: "800",
                  }}
                >
                  Assessments
                </Typography>
              </Box>
              <Box sx={{ p: { xs: 2, sm: 3, md: 5 } }}>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                >
                  4 Level Assessments and Students Score & Feedback tracking
                </Typography>
              </Box>
            </Box>

            {/* item six */}
            <Box
              data-aos="fade-down"
              sx={{
                boxShadow: "5px 5px 5px 5px #1a237e",
                borderRadius: "9px",
                minHeight: { xs: "150px", sm: "200px", md: "215px" },
                width: { xs: "100%", sm: "40%", md: "30%" },
                m: { xs: 1, sm: 1.5, md: 2 },
              }}
            >
              <Box
                sx={{
                  borderTopRightRadius: "9px",
                  borderTopLeftRadius: "9px",
                  backgroundColor: "primary.dark",
                  color: "white",
                  px: 3,
                  py: 1,
                  display: "flex",
                  alignItems: "center",
                  gap: { xs: 2, sm: 3, md: 5 },
                  maxHeight: { xs: "40px", sm: "50px", md: "60px" },
                  width: "100%",
                }}
              >
                <img
                  src="https://cdni.iconscout.com/illustration/premium/thumb/teacher-solving-doubts-of-students-5757739-4817214.png"
                  alt=""
                  style={{
                    width: "25%",
                    height: "150%",
                    transform: "skewX(20deg) skewY(-20deg)",
                  }}
                />
                <Typography
                  sx={{
                    fontSize: { xs: "14px", sm: "16px", md: "18px" },
                    color: "white",
                    fontWeight: "800",
                  }}
                >
                  Doubt Clearance
                </Typography>
              </Box>
              <Box sx={{ p: { xs: 2, sm: 3, md: 5 } }}>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                >
                  Doubt Clearance sessions & Post Training Support
                </Typography>
              </Box>
            </Box>

            {/* item seven */}
            <Box
              data-aos="fade-up"
              sx={{
                boxShadow: "5px 5px 5px 5px #1a237e",
                borderRadius: "9px",
                minHeight: { xs: "150px", sm: "200px", md: "215px" },
                width: { xs: "100%", sm: "40%", md: "30%" },
                m: { xs: 1, sm: 1.5, md: 2 },
              }}
            >
              <Box
                sx={{
                  borderTopRightRadius: "9px",
                  borderTopLeftRadius: "9px",
                  backgroundColor: "primary.dark",
                  color: "white",
                  px: 3,
                  py: 1,
                  display: "flex",
                  alignItems: "center",
                  gap: { xs: 2, sm: 3, md: 5 },
                  maxHeight: { xs: "40px", sm: "50px", md: "60px" },
                  width: "100%",
                }}
              >
                <img
                  src="https://cdn-dkeek.nitrocdn.com/JJJmSmfNOVFIMRLxeOafUbjMfnGEpNvR/assets/static/optimized/rev-ccc93af/wp-content/uploads/2021/01/remote-team-2.png"
                  alt=""
                  style={{
                    width: "25%",
                    height: "150%",
                    transform: "skewX(20deg) skewY(-20deg)",
                  }}
                />
                <Typography
                  sx={{
                    fontSize: { xs: "14px", sm: "16px", md: "18px" },
                    color: "white",
                    fontWeight: "800",
                  }}
                >
                  Mock Interviews
                </Typography>
              </Box>
              <Box sx={{ p: { xs: 2, sm: 3, md: 5 } }}>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                >
                  Mock Interviews & Feedback
                </Typography>
              </Box>
            </Box>

            {/* item eight */}
            <Box
              data-aos="fade-down"
              sx={{
                boxShadow: "5px 5px 5px 5px #1a237e",
                borderRadius: "9px",
                minHeight: { xs: "150px", sm: "200px", md: "200px" },
                width: { xs: "100%", sm: "40%", md: "30%" },
                m: { xs: 1, sm: 1.5, md: 2 },
              }}
            >
              <Box
                sx={{
                  borderTopRightRadius: "9px",
                  borderTopLeftRadius: "9px",
                  backgroundColor: "primary.dark",
                  color: "white",
                  px: 3,
                  py: 1,
                  display: "flex",
                  alignItems: "center",
                  gap: { xs: 1, sm: 0.2, md: 2 },
                  maxHeight: { xs: "40px", sm: "50px", md: "60px" },
                  width: "100%",
                }}
              >
                <img
                  src="https://www.pngall.com/wp-content/uploads/2016/04/Resume-Free-PNG-Image.png"
                  alt=""
                  style={{
                    width: "25%",
                    height: "150%",
                    transform: "skewX(20deg) skewY(-20deg)",
                  }}
                />
                <Typography
                  sx={{
                    fontSize: { xs: "14px", sm: "16px", md: "18px" },
                    color: "white",
                    fontWeight: "800",
                  }}
                >
                  Resume Preparations
                </Typography>
              </Box>
              <Box sx={{ p: { xs: 2, sm: 3, md: 5 } }}>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                >
                  Resume Preparation, Internship & Placement Assistance till
                  your Students get the right Job
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          data-aos="fade-up"
          id="industry-awareness"
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
            <Typography
              sx={{
                color: "primary.main",
                fontSize: { xs: "25px", sm: "30px", md: "35px" },
                fontWeight: "800",
              }}
            >
              Industry Awareness and Career Path Programs
            </Typography>
            <img src={technicalTraining} alt="" className="services-img" />
          </Box>

          <Box sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
            {/* content from finishing school with info graphic design */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "wrap",
                width: "95%",
              }}
            >
              <Box
                data-aos="fade-up"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: -5,
                  p: 1,
                  mx: 1.5,
                  my: 4,
                  width: { xs: "70%", sm: "30%", md: "20%" },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: { xs: "150px", sm: "200px", md: "230px" },
                    width: "100%",
                  }}
                >
                  {/* progress bar */}
                  <div dangerouslySetInnerHTML={{ __html: progress1 }} />
                </Box>
                <Box
                  sx={{
                    backgroundColor: "pink",
                    width: "100%",
                    height: "100%",
                    p: { xs: 1, sm: 3, md: 4 },
                    boxShadow: "5px 5px 5px 5px #1a237e",
                    borderRadius: "9px",
                  }}
                >
                  <Typography
                    sx={{ fontSize: { xs: "10px", sm: "14px", md: "18px" } }}
                  >
                    60% students are not sure of what technologies to learn and
                    courses to enroll to enhance their career.
                  </Typography>
                </Box>
              </Box>

              <Box
                data-aos="fade-down"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: -5,
                  p: 1,
                  mx: 1.5,
                  my: 4,
                  width: { xs: "70%", sm: "30%", md: "20%" },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: { xs: "150px", sm: "200px", md: "230px" },
                    width: "100%",
                  }}
                >
                  {/* progress bar */}
                  <div dangerouslySetInnerHTML={{ __html: progress2 }} />
                </Box>
                <Box
                  sx={{
                    backgroundColor: "purple",
                    width: "100%",
                    height: "100%",
                    p: { xs: 1, sm: 3, md: 4 },
                    boxShadow: "5px 5px 5px 5px #1a237e",
                    borderRadius: "9px",
                  }}
                >
                  <Typography
                    sx={{ fontSize: { xs: "10px", sm: "14px", md: "18px" } }}
                  >
                    Only 10% of the students have a pre-defined career map to
                    reach their desired career goals
                  </Typography>
                </Box>
              </Box>

              <Box
                data-aos="fade-up"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: -5,
                  p: 1,
                  mx: 1.5,
                  my: 4,
                  width: { xs: "70%", sm: "30%", md: "20%" },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: { xs: "150px", sm: "200px", md: "230px" },
                    width: "100%",
                  }}
                >
                  {/* progress bar */}
                  <div dangerouslySetInnerHTML={{ __html: progress3 }} />
                </Box>
                <Box
                  sx={{
                    backgroundColor: "grey",
                    width: "100%",
                    height: "100%",
                    p: { xs: 1, sm: 3, md: 4 },
                    boxShadow: "5px 5px 5px 5px #1a237e",
                    borderRadius: "9px",
                  }}
                >
                  <Typography
                    sx={{ fontSize: { xs: "10px", sm: "14px", md: "18px" } }}
                  >
                    More than 65% of the students are confused about what job
                    roles exist and which one to pursue to build a career of
                    choice.
                  </Typography>
                </Box>
              </Box>

              <Box
                data-aos="fade-down"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: -5,
                  p: 1,
                  mx: 1.5,
                  my: 4,
                  width: { xs: "70%", sm: "30%", md: "20%" },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: { xs: "150px", sm: "200px", md: "230px" },
                    width: "100%",
                  }}
                >
                  {/* progress bar */}
                  <div dangerouslySetInnerHTML={{ __html: progress4 }} />
                </Box>
                <Box
                  sx={{
                    backgroundColor: "orange",
                    width: "100%",
                    height: "100%",
                    p: { xs: 1, sm: 3, md: 4 },
                    boxShadow: "5px 5px 5px 5px #1a237e",
                    borderRadius: "9px",
                  }}
                >
                  <Typography
                    sx={{ fontSize: { xs: "10px", sm: "14px", md: "18px" } }}
                  >
                    30% of the students are unsatisfied with the jobs they got
                    in the placements
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>

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
              {/* new content outline points */}
              <Typography
                sx={{
                  fontSize: { xs: "15px", sm: "18px", md: "21px" },
                  color: "primary.dark",
                  fontWeight: "800",
                }}
              >
                Introduction
              </Typography>
              <Box sx={{ p: 2 }}>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                >
                  {"=>"} Definition of Industry Awareness and Career Path
                  Guidance
                </Typography>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                >
                  {"=>"} Importance of Industry Awareness and Career Path
                  Guidance
                </Typography>
              </Box>

              <Typography
                sx={{
                  fontSize: { xs: "15px", sm: "18px", md: "21px" },
                  color: "primary.dark",
                  fontWeight: "800",
                }}
              >
                Industry Awareness
              </Typography>
              <span style={{ fontSize: "12px" }}>
                Understanding Industry Differences
              </span>
              <Box sx={{ p: 2 }}>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                >
                  {"=>"} Overview of Major Industries Guidance
                </Typography>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                >
                  {"=>"} Emerging Industries
                </Typography>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                >
                  {"=>"} Key Trends in Industries
                </Typography>
              </Box>

              <Typography
                sx={{
                  fontSize: { xs: "15px", sm: "18px", md: "21px" },
                  color: "primary.dark",
                  fontWeight: "800",
                }}
              >
                Career Path Guidance
              </Typography>
              <span style={{ fontSize: "12px" }}>
                Identifying career interests and goals
              </span>
              <Box sx={{ p: 2 }}>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                >
                  {"=>"} Self-Assessment
                </Typography>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                >
                  {"=>"} Understanding Career Options
                </Typography>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                >
                  {"=>"} Aligning Career Goals with Personal Values
                </Typography>
              </Box>

              <Typography
                sx={{
                  fontSize: { xs: "15px", sm: "18px", md: "21px" },
                  color: "primary.dark",
                  fontWeight: "800",
                }}
              >
                Industry Awareness & Career Path Guidance for specific fields
              </Typography>
              <Box sx={{ p: 2 }}>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                >
                  {"=>"} Overview of Technology Industry, Career Opportunities
                  in Technology Industry and Skills and Knowledge Required for
                  Technology Industry
                </Typography>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                >
                  {"=>"} Overview of Healthcare Industry, Career Opportunities
                  in Healthcare Industry and Skills and Knowledge Required for
                  Healthcare Industry
                </Typography>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                >
                  {"=>"} Summary of Key Points, Final Thoughts on Industry
                  Awareness and Career Path Guidance and Call to Action for
                  Continued Learning and Growth.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          data-aos="fade-up"
          id="technical-training"
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
              gap: 2,
            }}
          >
            <img src={careerPath} alt="" className="services-img" />
            <Typography
              sx={{
                color: "primary.main",
                fontSize: { xs: "25px", sm: "30px", md: "35px" },
                fontWeight: "800",
              }}
            >
              Technical Training Programs
            </Typography>
          </Box>
          <Box sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
            {/* logos */}
            <Typography
              sx={{
                fontSize: { xs: "21px", sm: "26px", md: "31px" },
                color: "primary.dark",
                fontWeight: "800",
              }}
            >
              We Train Many Technologies like
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
                gap: 2,
              }}
            >
              {technologyLogos.map((img, idx) => (
                <Box
                  data-aos={idx % 2 ? "fade-up" : "fade-down"}
                  sx={{
                    p: 0.7,
                    boxShadow: "5px 5px 5px 5px #1a237e",
                    height: { xs: "70px", sm: "120px", md: "150px" },
                    width: { xs: "100px", sm: "170px", md: "200px" },
                    // width: { xs: "45%", sm: "24%", md: "18%" },
                    borderRadius: "9px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={img}
                    alt=""
                    style={{
                      height: "80%",
                      width: "80%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              ))}
            </Box>
          </Box>
          <Box sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
            {/* cloud technologies learning path from finishing school */}
            <Typography
              sx={{
                fontSize: { xs: "21px", sm: "26px", md: "31px" },
                color: "primary.dark",
                fontWeight: "800",
              }}
            >
              Cloud Technologies Learning Path
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: { xs: 2, sm: 3, md: 4 },
              }}
            >
              <Box
                data-aos="fade-up"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: { xs: 2, sm: 3 },
                  width: { xs: "40%", sm: "27%", md: "30%" },
                  height: "100%",
                  borderTop: "10px solid purple",
                  borderBottom: "10px solid purple",
                  borderRight: "10px solid purple",
                  borderTopRightRadius: "40%",
                  borderBottomRightRadius: "40%",
                  py: 0,
                }}
              >
                <Box
                  sx={{
                    width: "80px",
                    shapeOutside: "circle(50%)",
                    float: "left",
                    backgroundColor: "purple",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "5px", sm: "7px", md: "9px" },
                      color: "white",
                    }}
                  >
                    SEM
                  </Typography>
                  <Typography
                    sx={{
                      display: "inline-block",
                      fontSize: { xs: "40px", sm: "50px", md: "60px" },
                      color: "white",
                      textAlign: "center",
                    }}
                  >
                    1
                  </Typography>
                </Box>
                <Box sx={{}}>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "16px", md: "22px" } }}
                  >
                    Cloud Fundamentals
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "13px", sm: "17px", md: "20px" },
                      color: "purple",
                      fontWeight: "900",
                    }}
                  >
                    25 Hours
                  </Typography>
                </Box>
              </Box>

              <Box
                data-aos="fade-down"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: { xs: 2, sm: 3 },
                  width: { xs: "40%", sm: "27%", md: "30%" },
                  height: "100%",
                  borderTop: "10px solid violet",
                  borderBottom: "10px solid violet",
                  borderRight: "10px solid violet",
                  borderTopRightRadius: "40%",
                  borderBottomRightRadius: "40%",
                  py: 0,
                }}
              >
                <Box
                  sx={{
                    width: "80px",
                    shapeOutside: "circle(50%)",
                    float: "left",
                    backgroundColor: "violet",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "5px", sm: "7px", md: "9px" },
                      color: "white",
                    }}
                  >
                    SEM
                  </Typography>
                  <Typography
                    sx={{
                      display: "inline-block",
                      fontSize: { xs: "40px", sm: "50px", md: "60px" },
                      color: "white",
                      textAlign: "center",
                    }}
                  >
                    2
                  </Typography>
                </Box>
                <Box sx={{}}>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "16px", md: "22px" } }}
                  >
                    AWS Essentials
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "13px", sm: "17px", md: "20px" },
                      color: "violet",
                      fontWeight: "900",
                    }}
                  >
                    25 Hours
                  </Typography>
                </Box>
              </Box>

              <Box
                data-aos="fade-up"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: { xs: 2, sm: 3 },
                  width: { xs: "40%", sm: "27%", md: "30%" },
                  height: "100%",
                  borderTop: "10px solid blue",
                  borderBottom: "10px solid blue",
                  borderRight: "10px solid blue",
                  borderTopRightRadius: "40%",
                  borderBottomRightRadius: "40%",
                  py: 0,
                }}
              >
                <Box
                  sx={{
                    width: "80px",
                    shapeOutside: "circle(50%)",
                    float: "left",
                    backgroundColor: "blue",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "5px", sm: "7px", md: "9px" },
                      color: "white",
                    }}
                  >
                    SEM
                  </Typography>
                  <Typography
                    sx={{
                      display: "inline-block",
                      fontSize: { xs: "40px", sm: "50px", md: "60px" },
                      color: "white",
                      textAlign: "center",
                    }}
                  >
                    3
                  </Typography>
                </Box>
                <Box sx={{}}>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "16px", md: "22px" } }}
                  >
                    Azure Essentials
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "13px", sm: "17px", md: "20px" },
                      color: "blue",
                      fontWeight: "900",
                    }}
                  >
                    25 Hours
                  </Typography>
                </Box>
              </Box>

              <Box
                data-aos="fade-down"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: { xs: 2, sm: 3 },
                  width: { xs: "40%", sm: "27%", md: "30%" },
                  height: "100%",
                  borderTop: "10px solid green",
                  borderBottom: "10px solid green",
                  borderRight: "10px solid green",
                  borderTopRightRadius: "40%",
                  borderBottomRightRadius: "40%",
                  py: 0,
                }}
              >
                <Box
                  sx={{
                    width: "80px",
                    shapeOutside: "circle(50%)",
                    float: "left",
                    backgroundColor: "green",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "5px", sm: "7px", md: "9px" },
                      color: "white",
                    }}
                  >
                    SEM
                  </Typography>
                  <Typography
                    sx={{
                      display: "inline-block",
                      fontSize: { xs: "40px", sm: "50px", md: "60px" },
                      color: "white",
                      textAlign: "center",
                    }}
                  >
                    4
                  </Typography>
                </Box>
                <Box sx={{}}>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "16px", md: "22px" } }}
                  >
                    Google Cloud Platform
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "13px", sm: "17px", md: "20px" },
                      color: "green",
                      fontWeight: "900",
                    }}
                  >
                    25 Hours
                  </Typography>
                </Box>
              </Box>

              <Box
                data-aos="fade-up"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: { xs: 2, sm: 3 },
                  width: { xs: "40%", sm: "27%", md: "30%" },
                  height: "100%",
                  borderTop: "10px solid red",
                  borderBottom: "10px solid red",
                  borderRight: "10px solid red",
                  borderTopRightRadius: "40%",
                  borderBottomRightRadius: "40%",
                  py: 0,
                }}
              >
                <Box
                  sx={{
                    width: "80px",
                    shapeOutside: "circle(50%)",
                    float: "left",
                    backgroundColor: "red",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "5px", sm: "7px", md: "9px" },
                      color: "white",
                    }}
                  >
                    SEM
                  </Typography>
                  <Typography
                    sx={{
                      display: "inline-block",
                      fontSize: { xs: "40px", sm: "50px", md: "60px" },
                      color: "white",
                      textAlign: "center",
                    }}
                  >
                    5
                  </Typography>
                </Box>
                <Box sx={{}}>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "16px", md: "22px" } }}
                  >
                    Real Time Project
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "13px", sm: "17px", md: "20px" },
                      color: "red",
                      fontWeight: "900",
                    }}
                  >
                    25 Hours
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
            {/* cyber security and ethical hacking from finishing school */}
            <Typography
              sx={{
                fontSize: { xs: "21px", sm: "26px", md: "31px" },
                color: "primary.dark",
                fontWeight: "800",
              }}
            >
              Cyber Security & Ethical Hacking Learning Path
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                gap: { xs: 1.5, sm: 2.5, md: 4 },
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* each sem/step */}
              <Box
                data-aos="fade-up"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: { xs: "75%", sm: "25%", md: "15%" },
                  height: "100%",
                  boxShadow: "5px 5px 5px 5px deeppink",
                  borderRadius: "9px",
                }}
              >
                <Box
                  sx={{
                    height: { xs: "80px", sm: "100px", md: "120px" },
                    width: { xs: "80px", sm: "100px", md: "120px" },
                    borderRadius: "50%",
                    border: "15px solid deeppink",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "15px", sm: "20px", md: "25px" },
                      color: "deeppink",
                      fontWeight: "900",
                    }}
                  >
                    SEM 1
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "12px", sm: "17px", md: "20px" },
                      color: "deeppink",
                      textAlign: "center",
                    }}
                  >
                    Linux Fundamentals
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "8px", sm: "10px", md: "12px" } }}
                  >
                    25 Hours
                  </Typography>
                </Box>
              </Box>

              {/* each sem/step */}
              <Box
                data-aos="fade-down"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: { xs: "75%", sm: "25%", md: "15%" },
                  height: "100%",
                  boxShadow: "5px 5px 5px 5px violet",
                  borderRadius: "9px",
                }}
              >
                <Box
                  sx={{
                    height: { xs: "80px", sm: "100px", md: "120px" },
                    width: { xs: "80px", sm: "100px", md: "120px" },
                    borderRadius: "50%",
                    border: "15px solid violet",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "15px", sm: "20px", md: "25px" },
                      color: "violet",
                      fontWeight: "900",
                    }}
                  >
                    SEM 2
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "12px", sm: "17px", md: "20px" },
                      color: "violet",
                      textAlign: "center",
                    }}
                  >
                    Fundamentals of Cryptography, Cloud & Network Security
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "8px", sm: "10px", md: "12px" } }}
                  >
                    25 Hours
                  </Typography>
                </Box>
              </Box>

              {/* each sem/step */}
              <Box
                data-aos="fade-up"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: { xs: "75%", sm: "25%", md: "15%" },
                  height: "100%",
                  boxShadow: "5px 5px 5px 5px darkblue",
                  borderRadius: "9px",
                }}
              >
                <Box
                  sx={{
                    height: { xs: "80px", sm: "100px", md: "120px" },
                    width: { xs: "80px", sm: "100px", md: "120px" },
                    borderRadius: "50%",
                    border: "15px solid darkblue",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "15px", sm: "20px", md: "25px" },
                      color: "darkblue",
                      fontWeight: "900",
                    }}
                  >
                    SEM 3
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "12px", sm: "17px", md: "20px" },
                      color: "darkblue",
                      textAlign: "center",
                    }}
                  >
                    Cyber Security Essentials
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "8px", sm: "10px", md: "12px" } }}
                  >
                    25 Hours
                  </Typography>
                </Box>
              </Box>

              {/* each sem/step */}
              <Box
                data-aos="fade-down"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: { xs: "75%", sm: "25%", md: "15%" },
                  height: "100%",
                  boxShadow: "5px 5px 5px 5px orange",
                  borderRadius: "9px",
                }}
              >
                <Box
                  sx={{
                    height: { xs: "80px", sm: "100px", md: "120px" },
                    width: { xs: "80px", sm: "100px", md: "120px" },
                    borderRadius: "50%",
                    border: "15px solid orange",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "15px", sm: "20px", md: "25px" },
                      color: "orange",
                      fontWeight: "900",
                    }}
                  >
                    SEM 4
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "12px", sm: "17px", md: "20px" },
                      color: "orange",
                      textAlign: "center",
                    }}
                  >
                    Ethical Hacking
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "8px", sm: "10px", md: "12px" } }}
                  >
                    25 Hours
                  </Typography>
                </Box>
              </Box>

              {/* each sem/step */}
              <Box
                data-aos="fade-up"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: { xs: "75%", sm: "25%", md: "15%" },
                  height: "100%",
                  boxShadow: "5px 5px 5px 5px darkgray",
                  borderRadius: "9px",
                }}
              >
                <Box
                  sx={{
                    height: { xs: "80px", sm: "100px", md: "120px" },
                    width: { xs: "80px", sm: "100px", md: "120px" },
                    borderRadius: "50%",
                    border: "15px solid darkgray",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "15px", sm: "20px", md: "25px" },
                      color: "darkgray",
                      fontWeight: "900",
                    }}
                  >
                    SEM 5
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "12px", sm: "17px", md: "20px" },
                      color: "darkgray",
                      textAlign: "center",
                    }}
                  >
                    Real Time Projects
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "8px", sm: "10px", md: "12px" } }}
                  >
                    25 Hours
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
            {/* ai/robotics learning path from finishing school */}
            <Typography
              sx={{
                fontSize: { xs: "21px", sm: "26px", md: "31px" },
                color: "primary.dark",
                fontWeight: "800",
              }}
            >
              AI / ML & Robotics Learning Path
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
                gap: 2,
              }}
            >
              {/* first part */}
              <Box
                data-aos="fade-up"
                sx={{ display: "flex", alignItems: "center", width: "100%" }}
              >
                <Box
                  sx={{
                    p: { xs: 0.4, sm: 1.5, md: 2 },
                    boxShadow: "5px 5px 5px 5px pink",
                    border: {
                      xs: "5px solid deeppink",
                      sm: "15px solid deeppink",
                    },
                    width: "20%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "9px",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "8px", sm: "24px", md: "28px" },
                      fontWeight: "900",
                    }}
                  >
                    SEM 1
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: "45%",
                    borderTop: "5px solid deeppink",
                    borderBottom: "5px solid deeppink",
                    boxShadow: "5px 5px pink",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    py: 0.3,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "10px", sm: "12px", md: "14px" },
                      fontWeight: "700",
                    }}
                  >
                    25 Hours
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    p: { xs: 3, sm: 5, md: 7 },
                    border: "10px solid deeppink",
                    boxShadow: "5px 5px 5px 5px pink",
                    borderRadius: "9px",
                  }}
                >
                  <Typography
                    sx={{ fontSize: { xs: "20px", sm: "25px", md: "30px" } }}
                  >
                    Python For AI / ML
                  </Typography>
                </Box>
              </Box>

              {/* second part */}
              <Box
                data-aos="fade-down"
                sx={{ display: "flex", alignItems: "center", width: "100%" }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    p: { xs: 3, sm: 5, md: 7 },
                    border: "10px solid violet",
                    boxShadow: "5px 5px 5px 5px purple",
                    borderRadius: "9px",
                  }}
                >
                  <Typography
                    sx={{ fontSize: { xs: "20px", sm: "25px", md: "30px" } }}
                  >
                    Fundamentals of AI
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: "45%",
                    borderTop: "5px solid violet",
                    borderBottom: "5px solid violet",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    py: 0.3,
                    boxShadow: "5px 5px purple",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "10px", sm: "12px", md: "14px" },
                      fontWeight: "700",
                    }}
                  >
                    25 Hours
                  </Typography>
                </Box>
                <Box
                  sx={{
                    p: { xs: 0.4, sm: 1.5, md: 2 },
                    border: {
                      xs: "5px solid violet",
                      sm: "15px solid violet",
                    },
                    width: "20%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "9px",
                    boxShadow: "5px 5px 5px 5px purple",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "8px", sm: "24px", md: "28px" },
                      fontWeight: "900",
                    }}
                  >
                    SEM 2
                  </Typography>
                </Box>
              </Box>

              {/* third part */}
              <Box
                data-aos="fade-up"
                sx={{ display: "flex", alignItems: "center", width: "100%" }}
              >
                <Box
                  sx={{
                    p: { xs: 0.4, sm: 1.5, md: 2 },
                    border: {
                      xs: "5px solid darkblue",
                      sm: "15px solid darkblue",
                    },
                    width: "20%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "9px",
                    boxShadow: "5px 5px 5px 5px skyblue",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "8px", sm: "24px", md: "28px" },
                      fontWeight: "900",
                    }}
                  >
                    SEM 3
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: "45%",
                    borderTop: "5px solid darkblue",
                    borderBottom: "5px solid darkblue",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    py: 0.3,
                    boxShadow: "5px 5px skyblue",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "10px", sm: "12px", md: "14px" },
                      fontWeight: "700",
                    }}
                  >
                    25 Hours
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    p: { xs: 3, sm: 5, md: 7 },
                    border: "10px solid darkblue",
                    borderRadius: "9px",
                    boxShadow: "5px 5px 5px 5px skyblue",
                  }}
                >
                  <Typography
                    sx={{ fontSize: { xs: "20px", sm: "25px", md: "30px" } }}
                  >
                    Machine Learning Essentials
                  </Typography>
                </Box>
              </Box>

              {/* forth part */}
              <Box
                data-aos="fade-down"
                sx={{ display: "flex", alignItems: "center", width: "100%" }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    p: { xs: 3, sm: 5, md: 7 },
                    border: "10px solid orange",
                    borderRadius: "9px",
                    boxShadow: "5px 5px 5px 5px yellow",
                  }}
                >
                  <Typography
                    sx={{ fontSize: { xs: "20px", sm: "25px", md: "30px" } }}
                  >
                    RPA & Robotics
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: "45%",
                    borderTop: "5px solid orange",
                    borderBottom: "5px solid orange",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    boxShadow: "5px 5px yellow",
                    py: 0.3,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "10px", sm: "12px", md: "14px" },
                      fontWeight: "700",
                    }}
                  >
                    25 Hours
                  </Typography>
                </Box>
                <Box
                  sx={{
                    p: { xs: 0.4, sm: 1.5, md: 2 },
                    border: {
                      xs: "5px solid orange",
                      sm: "15px solid orange",
                    },
                    width: "20%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "9px",
                    boxShadow: "5px 5px 5px 5px yellow",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "8px", sm: "24px", md: "28px" },
                      fontWeight: "900",
                    }}
                  >
                    SEM 4
                  </Typography>
                </Box>
              </Box>

              {/* fifth part */}
              <Box
                data-aos="fade-up"
                sx={{ display: "flex", alignItems: "center", width: "100%" }}
              >
                <Box
                  sx={{
                    p: { xs: 0.4, sm: 1.5, md: 2 },
                    border: {
                      xs: "5px solid darkgray",
                      sm: "15px solid darkgray",
                    },
                    width: "20%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "9px",
                    boxShadow: "5px 5px 5px 5px lightgray",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "8px", sm: "24px", md: "28px" },
                      fontWeight: "900",
                    }}
                  >
                    SEM 5
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: "45%",
                    borderTop: "5px solid darkgray",
                    borderBottom: "5px solid darkgray",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    py: 0.3,
                    boxShadow: "5px 5px lightgray",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "10px", sm: "12px", md: "14px" },
                      fontWeight: "700",
                    }}
                  >
                    25 Hours
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    p: { xs: 3, sm: 5, md: 7 },
                    border: "10px solid darkgray",
                    borderRadius: "9px",
                    boxShadow: "5px 5px 5px 5px lightgray",
                  }}
                >
                  <Typography
                    sx={{ fontSize: { xs: "20px", sm: "25px", md: "30px" } }}
                  >
                    Real Time Projects
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
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
              The objective of a technical training program is to provide
              individuals with the necessary skills and knowledge to perform
              specific technical tasks or operate technical equipment. The goal
              of the training is to equip individuals with the competencies
              required to carry out their work effectively and efficiently.
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
              The prerequisites for a technical training program will depend on
              the specific technical skills being taught. Some programs may
              require prior experience or knowledge in a related field, while
              others may be designed for individuals with no prior experience.
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
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  width: { xs: "100%", sm: "50%" },
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "16px", sm: "18px", md: "20px" },
                    color: "primary.dark",
                  }}
                >
                  Introduction to Technical Training
                </Typography>
                <Box sx={{ p: { xs: 0.3, sm: 0.5, md: 1 } }}>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Overview of the technical field
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} History and evolution of the field
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Current trends and future outlook
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  width: { xs: "100%", sm: "50%" },
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "16px", sm: "18px", md: "20px" },
                    color: "primary.dark",
                  }}
                >
                  Technical Concepts & Principles
                </Typography>
                <Box sx={{ p: { xs: 0.3, sm: 0.5, md: 1 } }}>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Fundamentals of the field
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Key concepts and principles
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Theoretical and mathematical foundations
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  width: { xs: "100%", sm: "50%" },
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "16px", sm: "18px", md: "20px" },
                    color: "primary.dark",
                  }}
                >
                  Career Opportunities
                </Typography>
                <Box sx={{ p: { xs: 0.3, sm: 0.5, md: 1 } }}>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Overview of career paths and opportunities in the
                    technical field
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Skills and qualifications required for different
                    positions
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Industry outlook and trends
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  width: { xs: "100%", sm: "50%" },
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "16px", sm: "18px", md: "20px" },
                    color: "primary.dark",
                  }}
                >
                  Industry Updates & Trends
                </Typography>
                <Box sx={{ p: { xs: 0.3, sm: 0.5, md: 1 } }}>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Latest advancements and emerging technologies in the
                    field
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Industry news and updates
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Discussion of the impact of technological changes on
                    the field
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  width: { xs: "100%", sm: "50%" },
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "16px", sm: "18px", md: "20px" },
                    color: "primary.dark",
                  }}
                >
                  Final Assessment
                </Typography>
                <Box sx={{ p: { xs: 0.3, sm: 0.5, md: 1 } }}>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Written or practical exams to evaluate competencies
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Evaluation of hands-on skills and understanding of
                    theoretical concepts
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  width: { xs: "100%", sm: "50%" },
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "16px", sm: "18px", md: "20px" },
                    color: "primary.dark",
                  }}
                >
                  Conclusion
                </Typography>
                <Box sx={{ p: { xs: 0.3, sm: 0.5, md: 1 } }}>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Summary of the key takeaways from the technical
                    training program
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Importance of continued learning and professional
                    development
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Discussion of next steps and opportunities for
                    further learning.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          data-aos="fade-up"
          id="power-skills"
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
              gap: 2,
              justifyContent: { xs: "none", sm: "space-evenly" },
              px: { xs: 1, sm: 2, md: 3 },
              py: { xs: 1.5, sm: 2, md: 3 },
            }}
          >
            <img src={collaborativeResearch} alt="" className="services-img" />
            <Typography
              sx={{
                color: "primary.main",
                fontSize: { xs: "25px", sm: "30px", md: "35px" },
                fontWeight: "800",
              }}
            >
              Power Skills and Interview Preparations
            </Typography>
          </Box>
          <Box
            sx={{
              p: 2,
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "19px", sm: "23px", md: "28px" },
                fontWeight: "700",
                color: "primary.dark",
                borderBottom: "2px solid #1a237e",
                display: "inline",
              }}
            >
              Power Skills Introduction
            </Typography>
            <Box
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                gap: { xs: 2, sm: 3, md: 4 },
              }}
            >
              <Typography
                sx={{ fontSize: { xs: "14px", sm: "16px", md: "18px" } }}
              >
                As businesses continue to navigate the challenges in the VUCA
                environment, a set of skills other than just your technical
                knowledge is a necessity to grow through the challenging
                corporate environment.
              </Typography>
              <Typography
                sx={{ fontSize: { xs: "14px", sm: "16px", md: "18px" } }}
              >
                These are not just skills 'goog to have' but skills 'essential
                for career growth and sustainability.'
              </Typography>
              <Typography
                sx={{ fontSize: { xs: "14px", sm: "16px", md: "18px" } }}
              >
                The name can no more be "soft skills". In this dynamicc business
                world, it's no secret that the demands of the workplace are
                changing, and our skill sets to survive needs power - Power to
                team up, power to communicate effecitvely and power to lead the
                way!!!
              </Typography>
              <Typography
                sx={{ fontSize: { xs: "14px", sm: "16px", md: "18px" } }}
              >
                It has a very real impact on the students and their ability to
                excel in their careers.
              </Typography>
            </Box>
            <Typography
              sx={{
                fontSize: { xs: "19px", sm: "23px", md: "28px" },
                fontWeight: "700",
                color: "primary.dark",
                borderBottom: "2px solid #1a237e",
                display: "inline",
              }}
            >
              Power Skills Learning Path
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                flexWrap: "wrap",
              }}
            >
              <Box
                data-aos="fade-up"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  borderRadius: "25%",
                  borderRight: "10px solid darkblue",
                  borderTop: "10px solid darkblue",
                  borderBottom: "10px solid darkblue",
                  px: 2,
                  my: 2,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50%",
                    border: "10px solid deeppink",
                    p: { xs: 2, sm: 2, md: 4 },
                  }}
                >
                  <Typography
                    sx={{
                      color: "deeppink",
                      fontWeight: "800",
                      fontSize: { xs: "12px", sm: "14px", md: "16px" },
                    }}
                  >
                    SEM
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    color: "deeppink",
                    fontWeight: "800",
                    fontSize: { xs: "80px", sm: "90px", md: "110px" },
                  }}
                >
                  1
                </Typography>
                <Box sx={{}}>
                  <Typography
                    sx={{
                      color: "darkblue",
                      fontWeight: "700",
                      fontSize: { xs: "22px", sm: "32px", md: "46px" },
                    }}
                  >
                    Life Skills
                  </Typography>
                  <Typography
                    sx={{
                      color: "darkblue",
                      fontSize: { xs: "12px", sm: "14px", md: "16px" },
                      fontWeight: "700",
                    }}
                  >
                    25 Hours
                  </Typography>
                </Box>
              </Box>

              <Box
                data-aos="fade-down"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  borderRadius: "25%",
                  borderRight: "10px solid red",
                  borderTop: "10px solid red",
                  borderBottom: "10px solid red",
                  px: 2,
                  my: 2,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50%",
                    border: "10px solid yellow",
                    p: { xs: 2, sm: 2, md: 4 },
                  }}
                >
                  <Typography
                    sx={{
                      color: "yellow",
                      fontWeight: "800",
                      fontSize: { xs: "12px", sm: "14px", md: "16px" },
                    }}
                  >
                    SEM
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    color: "yellow",
                    fontWeight: "800",
                    fontSize: { xs: "80px", sm: "90px", md: "110px" },
                  }}
                >
                  2
                </Typography>
                <Box sx={{}}>
                  <Typography
                    sx={{
                      color: "red",
                      fontWeight: "700",
                      fontSize: { xs: "22px", sm: "32px", md: "46px" },
                    }}
                  >
                    Soft Skills Essentials
                  </Typography>
                  <Typography
                    sx={{
                      color: "red",
                      fontSize: { xs: "12px", sm: "14px", md: "16px" },
                      fontWeight: "700",
                    }}
                  >
                    25 Hours
                  </Typography>
                </Box>
              </Box>

              <Box
                data-aos="fade-up"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  borderRadius: "25%",
                  borderRight: "10px solid skyblue",
                  borderTop: "10px solid skyblue",
                  borderBottom: "10px solid skyblue",
                  px: 2,
                  my: 2,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50%",
                    border: "10px solid darkgray",
                    p: { xs: 2, sm: 2, md: 4 },
                  }}
                >
                  <Typography
                    sx={{
                      color: "darkgray",
                      fontWeight: "800",
                      fontSize: { xs: "12px", sm: "14px", md: "16px" },
                    }}
                  >
                    SEM
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    color: "darkgray",
                    fontWeight: "800",
                    fontSize: { xs: "80px", sm: "90px", md: "110px" },
                  }}
                >
                  3
                </Typography>
                <Box sx={{}}>
                  <Typography
                    sx={{
                      color: "skyblue",
                      fontWeight: "700",
                      fontSize: { xs: "22px", sm: "32px", md: "46px" },
                    }}
                  >
                    Personal Development Program
                  </Typography>
                  <Typography
                    sx={{
                      color: "skyblue",
                      fontSize: { xs: "12px", sm: "14px", md: "16px" },
                      fontWeight: "700",
                    }}
                  >
                    25 Hours
                  </Typography>
                </Box>
              </Box>

              <Box
                data-aos="fade-down"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  borderRadius: "25%",
                  borderRight: "10px solid orange",
                  borderTop: "10px solid orange",
                  borderBottom: "10px solid orange",
                  px: 2,
                  my: 2,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50%",
                    border: "10px solid black",
                    p: { xs: 2, sm: 2, md: 4 },
                  }}
                >
                  <Typography
                    sx={{
                      color: "black",
                      fontWeight: "800",
                      fontSize: { xs: "12px", sm: "14px", md: "16px" },
                    }}
                  >
                    SEM
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    color: "black",
                    fontWeight: "800",
                    fontSize: { xs: "80px", sm: "90px", md: "110px" },
                  }}
                >
                  4
                </Typography>
                <Box sx={{}}>
                  <Typography
                    sx={{
                      color: "orange",
                      fontWeight: "700",
                      fontSize: { xs: "22px", sm: "32px", md: "46px" },
                    }}
                  >
                    Corporate Etiquette
                  </Typography>
                  <Typography
                    sx={{
                      color: "orange",
                      fontSize: { xs: "12px", sm: "14px", md: "16px" },
                      fontWeight: "700",
                    }}
                  >
                    25 Hours
                  </Typography>
                </Box>
              </Box>

              <Box
                data-aos="fade-up"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  borderRadius: "25%",
                  borderRight: "10px solid darkgray",
                  borderTop: "10px solid darkgray",
                  borderBottom: "10px solid darkgray",
                  px: 2,
                  my: 2,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50%",
                    border: "10px solid darkgreen",
                    p: { xs: 2, sm: 2, md: 4 },
                  }}
                >
                  <Typography
                    sx={{
                      color: "darkgreen",
                      fontWeight: "800",
                      fontSize: { xs: "12px", sm: "14px", md: "16px" },
                    }}
                  >
                    SEM
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    color: "darkgreen",
                    fontWeight: "800",
                    fontSize: { xs: "80px", sm: "90px", md: "110px" },
                  }}
                >
                  5
                </Typography>
                <Box sx={{}}>
                  <Typography
                    sx={{
                      color: "darkgray",
                      fontWeight: "700",
                      fontSize: { xs: "22px", sm: "32px", md: "46px" },
                    }}
                  >
                    Interview Skills
                  </Typography>
                  <Typography
                    sx={{
                      color: "darkgray",
                      fontSize: { xs: "12px", sm: "14px", md: "16px" },
                      fontWeight: "700",
                    }}
                  >
                    25 Hours
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          data-aos="fade-up"
          id="internship"
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
            <Typography
              sx={{
                color: "primary.main",
                fontSize: { xs: "25px", sm: "30px", md: "35px" },
                fontWeight: "800",
              }}
            >
              Internship Programs
            </Typography>
            <img src={internshipPrograms} alt="" className="services-img" />
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
              The objective of an internship program is to provide students,
              recent graduates, or individuals seeking career change with
              hands-on experience and exposure to a specific industry or field.
              Internship programs offer opportunities for personal and
              professional growth and can help individuals make informed
              decisions about their future careers.
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
              Education: Many internships require that individuals have
              completed a certain level of education or are currently enrolled
              in a related program.
            </Typography>
            <Typography
              sx={{ fontSize: { xs: "14px", sm: "16px", md: "18px" } }}
            >
              Skills: Internships often require individuals to have specific
              skills or competencies, such as computer proficiency or
              communication skills.
            </Typography>
            <Typography
              sx={{ fontSize: { xs: "14px", sm: "16px", md: "18px" } }}
            >
              Relevant experience: Some internships may require individuals to
              have prior experience in a related field or industry.
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
                p: { xs: 1, sm: 2, md: 3 },
              }}
            >
              <Typography
                sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
              >
                1.Introduction: Overview of the internship program, Explanation
                of the objectives and goals of the program and Introduction of
                the facilitators and participants
              </Typography>
              <Typography
                sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
              >
                2. Industry Overview: Overview of the industry or field in which
                the internship is focused, Discussion of trends, challenges, and
                opportunities in the industry and Participants gain an
                understanding of the industry and their role within it
              </Typography>
              <Typography
                sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
              >
                3. Job Duties & Responsibilities: Overview of the specific job
                duties and responsibilities of the internship position,
                Participants learn about the tasks they will be responsible for
                during the internship and Discussion of how the job duties and
                responsibilities fit into the larger context of the industry
              </Typography>
              <Typography
                sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
              >
                5. Skills Development: Overview of the skills and competencies
                that will be developed during the internship, Participants learn
                about the opportunities for skill development during the
                internship, Discussion of the importance of continuing to
                develop skills and competencies throughout their careers
              </Typography>
              <Typography
                sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
              >
                6. Workplace Culture: Overview of the workplace culture and
                expectations, Participants learn about the norms, values, and
                expectations of the workplace and Discussion of the importance
                of adapting to different workplace cultures and expectations
              </Typography>
              <Typography
                sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
              >
                7. Mentorship & Feedback: Overview of the mentorship and
                feedback opportunities available during the internship,
                Participants learn about the support and guidance that will be
                provided during the internship and Discussion of the importance
                of seeking feedback and guidance to continue personal and
                professional growth
              </Typography>
              <Typography
                sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
              >
                8. Wrap-Up: Summary of the key takeaways from the internship
                program, Discussion of next steps and opportunities for further
                professional development and Final thoughts and closing comments
                from the facilitators.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
}

export default CollegePartnerships;

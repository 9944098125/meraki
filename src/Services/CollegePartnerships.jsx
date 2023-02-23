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
    Aos.init({ duration: 2000 });
  }, []);

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
          <Box sx={{}}>{/* logos */}</Box>
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
              Ai / ML & Robotics Learning Path
            </Typography>
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
          {/* objectives */}
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

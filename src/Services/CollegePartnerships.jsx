import { Box, Typography } from "@mui/material";
import React, { Fragment } from "react";
import industryAwareness from "../Assets/ServicesImages/industryAwareness.jpg";
import interviewPreparations from "../Assets/ServicesImages/interviewPreparations.jpg";
import technicalTraining from "../Assets/Images/technicalTraining.jpg";
import careerPath from "../Assets/ServicesImages/careerPath.jpg";
import internshipPrograms from "../Assets/ServicesImages/internshipPrograms.jpg";
import collegePartnershipsHeader from "../Assets/Images/collegePartnershipsHeader.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import "./card.css";
import NightlifeIcon from "@mui/icons-material/Nightlife";
import AppShortcutIcon from "@mui/icons-material/AppShortcut";
import SettingsAccessibilityIcon from "@mui/icons-material/SettingsAccessibility";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import InterpreterModeIcon from "@mui/icons-material/InterpreterMode";

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
    }, 1000);
  }, []);

  const technologyLogos = [
    "https://c.s-microsoft.com/de-de/CMSImages/400x250_microsoft-azure.jpg?version=fbbda702-ac57-bc8f-0cd8-4019ad5f7ef8",
    "https://www.zencos.com/wp-content/uploads/2021/11/aws-logo.png",
    "https://logos-world.net/wp-content/uploads/2021/02/Google-Cloud-Emblem.png",
    "https://static.vecteezy.com/system/resources/previews/005/152/131/original/cyber-security-logo-design-template-free-vector.jpg",
    "https://3.bp.blogspot.com/-zbeFRQXYTpA/VrdObCZ0n9I/AAAAAAAABNA/qESR8lbGpng/s400/Ethical-Hacking-Logo.jpg",
    "https://cdn.wisekey.com/uploads/images/ai1.png",
    "https://img.freepik.com/premium-vector/gear-robot-logo_148584-6.jpg?w=2000",
    "https://th.bing.com/th/id/OIP.YG4RnNcDYJnp9oUdleSCfwHaGD?pid=ImgDet&rs=1",
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
            COLLEGE PARTNERSHIPS
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
          <Box
            sx={{
              p: { xs: 2, sm: 4, md: 5 },
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Typography
              sx={{ fontSize: { xs: "14px", sm: "16px", md: "18px" } }}
            >
              With more than a decade of industry Experience, Meraki Training
              Solutions has Carved a niche for itself in the college training
              partnerships through pragmatic training solutions.
            </Typography>

            <Typography
              sx={{ fontSize: { xs: "14px", sm: "16px", md: "18px" } }}
            >
              We specialize in bridging the skills gap of Students and their
              employment capability by providing resolute competency based -
              learning programs and interventions that help the students enrich
              their career path and personal growth.
            </Typography>

            <Typography
              sx={{ fontSize: { xs: "14px", sm: "16px", md: "18px" } }}
            >
              With our headquarters in Bangalore, we aim to be a globally
              preferred training partner by providing pragmatic learning
              solutions and through our innovative and strategy driven approach.
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
                position: "relative",
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
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  p: 1,
                  position: "absolute",
                  right: "20px",
                  top: { xs: "60%", sm: "70%", md: "75%" },
                  backgroundColor: "primary.dark",
                  borderRadius: "50%",
                  height: "50px",
                  width: "50px",
                }}
              >
                <Typography
                  sx={{
                    color: "white",
                    fontSize: "18px",
                    fontWeight: "900",
                  }}
                >
                  1
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
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  p: 1,
                  position: "absolute",
                  right: "20px",
                  top: { xs: "60%", sm: "70%", md: "75%" },
                  backgroundColor: "primary.dark",
                  borderRadius: "50%",
                  height: "50px",
                  width: "50px",
                }}
              >
                <Typography
                  sx={{
                    color: "white",
                    fontSize: "18px",
                    fontWeight: "900",
                  }}
                >
                  2
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
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  p: 1,
                  position: "absolute",
                  right: "20px",
                  top: { xs: "60%", sm: "70%", md: "75%" },
                  backgroundColor: "primary.dark",
                  borderRadius: "50%",
                  height: "50px",
                  width: "50px",
                }}
              >
                <Typography
                  sx={{
                    color: "white",
                    fontSize: "18px",
                    fontWeight: "900",
                  }}
                >
                  3
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
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  p: 1,
                  position: "absolute",
                  right: "20px",
                  top: { xs: "60%", sm: "70%", md: "75%" },
                  backgroundColor: "primary.dark",
                  borderRadius: "50%",
                  height: "50px",
                  width: "50px",
                }}
              >
                <Typography
                  sx={{
                    color: "white",
                    fontSize: "18px",
                    fontWeight: "900",
                  }}
                >
                  4
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
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  p: 1,
                  position: "absolute",
                  right: "20px",
                  top: { xs: "60%", sm: "70%", md: "75%" },
                  backgroundColor: "primary.dark",
                  borderRadius: "50%",
                  height: "50px",
                  width: "50px",
                }}
              >
                <Typography
                  sx={{
                    color: "white",
                    fontSize: "18px",
                    fontWeight: "900",
                  }}
                >
                  5
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
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  p: 1,
                  position: "absolute",
                  right: "20px",
                  top: { xs: "60%", sm: "70%", md: "75%" },
                  backgroundColor: "primary.dark",
                  borderRadius: "50%",
                  height: "50px",
                  width: "50px",
                }}
              >
                <Typography
                  sx={{
                    color: "white",
                    fontSize: "18px",
                    fontWeight: "900",
                  }}
                >
                  6
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
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  p: 1,
                  position: "absolute",
                  right: "20px",
                  top: { xs: "60%", sm: "70%", md: "75%" },
                  backgroundColor: "primary.dark",
                  borderRadius: "50%",
                  height: "50px",
                  width: "50px",
                }}
              >
                <Typography
                  sx={{
                    color: "white",
                    fontSize: "18px",
                    fontWeight: "900",
                  }}
                >
                  7
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
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  p: 1,
                  position: "absolute",
                  right: "20px",
                  top: { xs: "60%", sm: "70%", md: "75%" },
                  backgroundColor: "primary.dark",
                  borderRadius: "50%",
                  height: "50px",
                  width: "50px",
                }}
              >
                <Typography
                  sx={{
                    color: "white",
                    fontSize: "18px",
                    fontWeight: "900",
                  }}
                >
                  8
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
              height: { xs: "15%", sm: "20%", md: "380px" },
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
                    backgroundColor: "#20E162",
                    width: "100%",
                    height: "100%",
                    p: { xs: 1, sm: 3, md: 4 },
                    boxShadow: "5px 5px 5px 5px #1a237e",
                    borderRadius: "9px",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "10px",
                        sm: "14px",
                        md: "18px",
                        color: "white",
                      },
                    }}
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
                    backgroundColor: "#00B9F4",
                    width: "100%",
                    height: "100%",
                    p: { xs: 1, sm: 3, md: 4 },
                    boxShadow: "5px 5px 5px 5px #1a237e",
                    borderRadius: "9px",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "10px",
                        sm: "14px",
                        md: "18px",
                        color: "white",
                      },
                    }}
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
                    backgroundColor: "darkgray",
                    width: "100%",
                    height: "100%",
                    p: { xs: 1, sm: 3, md: 4 },
                    boxShadow: "5px 5px 5px 5px #1a237e",
                    borderRadius: "9px",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "10px",
                        sm: "14px",
                        md: "18px",
                        color: "white",
                      },
                    }}
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
                    backgroundColor: "#004AAD",
                    width: "100%",
                    height: "100%",
                    p: { xs: 1, sm: 3, md: 4 },
                    boxShadow: "5px 5px 5px 5px #1a237e",
                    borderRadius: "9px",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "10px",
                        sm: "14px",
                        md: "18px",
                        color: "white",
                      },
                    }}
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
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                alignItems: "flex-start",
                justifyContent: "space-betweeb",
              }}
            >
              <Box
                sx={{
                  pl: { xs: 1, sm: 2, md: 3 },
                  display: "flex",
                  flexDirection: "column",
                  width: { xs: "100%", sm: "50%" },
                }}
              >
                <Box sx={{}}>
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
                  <Box sx={{}}>
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
                </Box>

                <Box sx={{}}>
                  <Typography
                    sx={{
                      fontSize: { xs: "15px", sm: "18px", md: "21px" },
                      color: "primary.dark",
                      fontWeight: "800",
                    }}
                  >
                    Industry Awareness
                  </Typography>
                  <Box sx={{}}>
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
                </Box>

                <Box sx={{}}>
                  <Typography
                    sx={{
                      fontSize: { xs: "15px", sm: "18px", md: "21px" },
                      color: "primary.dark",
                      fontWeight: "800",
                    }}
                  >
                    Career Path Guidance
                  </Typography>
                  <Box sx={{}}>
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
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: { xs: "100%", sm: "50%" },
                }}
              >
                <Box sx={{}}>
                  <Typography
                    sx={{
                      fontSize: { xs: "15px", sm: "18px", md: "21px" },
                      color: "primary.dark",
                      fontWeight: "800",
                    }}
                  >
                    Industry Awareness & Career Path Guidance for specific
                    fields
                  </Typography>
                  <Box sx={{}}>
                    <Typography
                      sx={{
                        fontSize: { xs: "12px", sm: "14px", md: "16px" },
                      }}
                    >
                      {"=>"} Overview of Technology Industry, Career
                      Opportunities in Technology Industry and Skills and
                      Knowledge Required for Technology Industry
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: "12px", sm: "14px", md: "16px" },
                      }}
                    >
                      {"=>"} Overview of Healthcare Industry, Career
                      Opportunities in Healthcare Industry and Skills and
                      Knowledge Required for Healthcare Industry
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: "12px", sm: "14px", md: "16px" },
                      }}
                    >
                      {"=>"} Summary of Key Points, Final Thoughts on Industry
                      Awareness and Career Path Guidance and Call to Action for
                      Continued Learning and Growth.
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              p: { xs: 2, sm: 3, md: 4 },
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
          >
            <Typography
              sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
            >
              {"=>"} Lack of knowledge and incomplete bridges between the
              industry trends and the students lead to most of the millennials
              choosing a wrong career path.
            </Typography>
            <Typography
              sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
            >
              {"=>"} Our Industry Awareness & Career Path Program will personate
              as the guiding light to choose the right career path based on
              their skill set and personality.
            </Typography>
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
                    p: 0.2,
                    boxShadow: "5px 5px 5px 5px #1a237e",
                    height: { xs: "80px", sm: "130px", md: "160px" },
                    width: { xs: "120px", sm: "170px", md: "230px" },
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
                      height: "100%",
                      width: "100%",
                      objectFit: "cover",
                      borderRadius: "9px",
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
            {/* infographic */}
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
                  justifyContent: "center",
                  alignItems: "center",
                  width: { xs: "75%", sm: "25%", md: "15%" },
                  height: { xs: "100%", md: "270px" },
                  boxShadow: "5px 5px 5px 5px #20E162",
                  borderRadius: "9px",
                }}
              >
                <Box
                  sx={{
                    height: { xs: "80px", sm: "100px", md: "120px" },
                    width: { xs: "80px", sm: "100px", md: "120px" },
                    borderRadius: "50%",
                    border: "15px solid #20E162",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "15px", sm: "20px", md: "25px" },
                      color: "#20E162",
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
                      color: "#20E162",
                      textAlign: "center",
                    }}
                  >
                    Cloud Fundamentals
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
                  justifyContent: "center",
                  alignItems: "center",
                  width: { xs: "75%", sm: "25%", md: "15%" },
                  height: { xs: "100%", md: "270px" },
                  boxShadow: "5px 5px 5px 5px #00B9F4",
                  borderRadius: "9px",
                }}
              >
                <Box
                  sx={{
                    height: { xs: "80px", sm: "100px", md: "120px" },
                    width: { xs: "80px", sm: "100px", md: "120px" },
                    borderRadius: "50%",
                    border: "15px solid #00B9F4",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "15px", sm: "20px", md: "25px" },
                      color: "#00B9F4",
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
                      color: "#00B9F4",
                      textAlign: "center",
                    }}
                  >
                    AWS Essentials
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
                  justifyContent: "center",
                  alignItems: "center",
                  width: { xs: "75%", sm: "25%", md: "15%" },
                  height: { xs: "100%", md: "270px" },
                  boxShadow: "5px 5px 5px 5px #D1DEE1",
                  borderRadius: "9px",
                }}
              >
                <Box
                  sx={{
                    height: { xs: "80px", sm: "100px", md: "120px" },
                    width: { xs: "80px", sm: "100px", md: "120px" },
                    borderRadius: "50%",
                    border: "15px solid #D1DEE1",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "15px", sm: "20px", md: "25px" },
                      color: "#D1DEE1",
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
                      color: "#D1DEE1",
                      textAlign: "center",
                    }}
                  >
                    Azure Essentials
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
                  justifyContent: "center",
                  alignItems: "center",
                  width: { xs: "75%", sm: "25%", md: "15%" },
                  height: { xs: "100%", md: "270px" },
                  boxShadow: "5px 5px 5px 5px #004AAD",
                  borderRadius: "9px",
                }}
              >
                <Box
                  sx={{
                    height: { xs: "80px", sm: "100px", md: "120px" },
                    width: { xs: "80px", sm: "100px", md: "120px" },
                    borderRadius: "50%",
                    border: "15px solid #004AAD",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "15px", sm: "20px", md: "25px" },
                      color: "#004AAD",
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
                      color: "#004AAD",
                      textAlign: "center",
                    }}
                  >
                    Google Cloud Platform
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
                  justifyContent: "center",
                  alignItems: "center",
                  width: { xs: "75%", sm: "25%", md: "15%" },
                  height: { xs: "100%", md: "270px" },
                  boxShadow: "5px 5px 5px 5px #CFCEDB",
                  borderRadius: "9px",
                }}
              >
                <Box
                  sx={{
                    height: { xs: "80px", sm: "100px", md: "120px" },
                    width: { xs: "80px", sm: "100px", md: "120px" },
                    borderRadius: "50%",
                    border: "15px solid #CFCEDB",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "15px", sm: "20px", md: "25px" },
                      color: "#CFCEDB",
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
                      color: "#CFCEDB",
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
                  justifyContent: "center",
                  alignItems: "center",
                  width: { xs: "75%", sm: "25%", md: "15%" },
                  height: { xs: "100%", md: "270px" },
                  boxShadow: "5px 5px 5px 5px #20E162",
                  borderRadius: "9px",
                }}
              >
                <Box
                  sx={{
                    height: { xs: "80px", sm: "100px", md: "120px" },
                    width: { xs: "80px", sm: "100px", md: "120px" },
                    borderRadius: "50%",
                    border: "15px solid #20E162",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "15px", sm: "20px", md: "25px" },
                      color: "#20E162",
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
                      color: "#20E162",
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
                  justifyContent: "center",
                  alignItems: "center",
                  width: { xs: "75%", sm: "25%", md: "15%" },
                  height: { xs: "100%", md: "270px" },
                  boxShadow: "5px 5px 5px 5px #00B9F4",
                  borderRadius: "9px",
                }}
              >
                <Box
                  sx={{
                    height: { xs: "80px", sm: "100px", md: "120px" },
                    width: { xs: "80px", sm: "100px", md: "120px" },
                    borderRadius: "50%",
                    border: "15px solid #00B9F4",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "15px", sm: "20px", md: "25px" },
                      color: "#00B9F4",
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
                      color: "#00B9F4",
                      textAlign: "center",
                    }}
                  >
                    Cryptography & Network Security Fundamentals
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
                  justifyContent: "center",
                  alignItems: "center",
                  width: { xs: "75%", sm: "25%", md: "15%" },
                  height: { xs: "100%", md: "270px" },
                  boxShadow: "5px 5px 5px 5px #D1DEE1",
                  borderRadius: "9px",
                }}
              >
                <Box
                  sx={{
                    height: { xs: "80px", sm: "100px", md: "120px" },
                    width: { xs: "80px", sm: "100px", md: "120px" },
                    borderRadius: "50%",
                    border: "15px solid #D1DEE1",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "15px", sm: "20px", md: "25px" },
                      color: "#D1DEE1",
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
                      color: "#D1DEE1",
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
                  justifyContent: "center",
                  alignItems: "center",
                  width: { xs: "75%", sm: "25%", md: "15%" },
                  height: { xs: "100%", md: "270px" },
                  boxShadow: "5px 5px 5px 5px #004AAD",
                  borderRadius: "9px",
                }}
              >
                <Box
                  sx={{
                    height: { xs: "80px", sm: "100px", md: "120px" },
                    width: { xs: "80px", sm: "100px", md: "120px" },
                    borderRadius: "50%",
                    border: "15px solid #004AAD",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "15px", sm: "20px", md: "25px" },
                      color: "#004AAD",
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
                      color: "#004AAD",
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
                  justifyContent: "center",
                  alignItems: "center",
                  width: { xs: "75%", sm: "25%", md: "15%" },
                  height: { xs: "100%", md: "270px" },
                  boxShadow: "5px 5px 5px 5px #CFCEDB",
                  borderRadius: "9px",
                }}
              >
                <Box
                  sx={{
                    height: { xs: "80px", sm: "100px", md: "120px" },
                    width: { xs: "80px", sm: "100px", md: "120px" },
                    borderRadius: "50%",
                    border: "15px solid #CFCEDB",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "15px", sm: "20px", md: "25px" },
                      color: "#CFCEDB",
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
                      color: "#CFCEDB",
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
                  justifyContent: "center",
                  alignItems: "center",
                  width: { xs: "75%", sm: "25%", md: "15%" },
                  height: { xs: "100%", md: "270px" },
                  boxShadow: "5px 5px 5px 5px #20E162",
                  borderRadius: "9px",
                }}
              >
                <Box
                  sx={{
                    height: { xs: "80px", sm: "100px", md: "120px" },
                    width: { xs: "80px", sm: "100px", md: "120px" },
                    borderRadius: "50%",
                    border: "15px solid #20E162",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "15px", sm: "20px", md: "25px" },
                      color: "#20E162",
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
                      color: "#20E162",
                      textAlign: "center",
                    }}
                  >
                    Python For AI / ML
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
                  justifyContent: "center",
                  alignItems: "center",
                  width: { xs: "75%", sm: "25%", md: "15%" },
                  height: { xs: "100%", md: "270px" },
                  boxShadow: "5px 5px 5px 5px #00B9F4",
                  borderRadius: "9px",
                }}
              >
                <Box
                  sx={{
                    height: { xs: "80px", sm: "100px", md: "120px" },
                    width: { xs: "80px", sm: "100px", md: "120px" },
                    borderRadius: "50%",
                    border: "15px solid #00B9F4",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "15px", sm: "20px", md: "25px" },
                      color: "#00B9F4",
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
                      color: "#00B9F4",
                      textAlign: "center",
                    }}
                  >
                    Fundamentals of AI
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
                  justifyContent: "center",
                  alignItems: "center",
                  width: { xs: "75%", sm: "25%", md: "15%" },
                  height: { xs: "100%", md: "270px" },
                  boxShadow: "5px 5px 5px 5px #D1DEE1",
                  borderRadius: "9px",
                }}
              >
                <Box
                  sx={{
                    height: { xs: "80px", sm: "100px", md: "120px" },
                    width: { xs: "80px", sm: "100px", md: "120px" },
                    borderRadius: "50%",
                    border: "15px solid #D1DEE1",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "15px", sm: "20px", md: "25px" },
                      color: "#D1DEE1",
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
                      color: "#D1DEE1",
                      textAlign: "center",
                    }}
                  >
                    Machine Learning Essentials
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
                  justifyContent: "center",
                  alignItems: "center",
                  width: { xs: "75%", sm: "25%", md: "15%" },
                  height: { xs: "100%", md: "270px" },
                  boxShadow: "5px 5px 5px 5px #004AAD",
                  borderRadius: "9px",
                }}
              >
                <Box
                  sx={{
                    height: { xs: "80px", sm: "100px", md: "120px" },
                    width: { xs: "80px", sm: "100px", md: "120px" },
                    borderRadius: "50%",
                    border: "15px solid #004AAD",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "15px", sm: "20px", md: "25px" },
                      color: "#004AAD",
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
                      color: "#004AAD",
                      textAlign: "center",
                    }}
                  >
                    RPA & Robotics
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
                  justifyContent: "center",
                  alignItems: "center",
                  width: { xs: "75%", sm: "25%", md: "15%" },
                  height: { xs: "100%", md: "270px" },
                  boxShadow: "5px 5px 5px 5px #CFCEDB",
                  borderRadius: "9px",
                }}
              >
                <Box
                  sx={{
                    height: { xs: "80px", sm: "100px", md: "120px" },
                    width: { xs: "80px", sm: "100px", md: "120px" },
                    borderRadius: "50%",
                    border: "15px solid #CFCEDB",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "15px", sm: "20px", md: "25px" },
                      color: "#CFCEDB",
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
                      color: "#CFCEDB",
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
            <img
              src="https://www.cameron-brooks.com/wp-content/uploads/2019/06/Interview-Handshake.jpg"
              alt=""
              className="services-img"
            />
            <Typography
              sx={{
                color: "primary.main",
                fontSize: { xs: "25px", sm: "30px", md: "35px" },
                fontWeight: "800",
              }}
            >
              Power Skills and Interview Preparation
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
                mt: 4,
              }}
            >
              <div className="counter parent">
                <div className="counter-icon">
                  <NightlifeIcon
                    className="child"
                    sx={{
                      height: "40px",
                      width: "50px",
                      color: "white",
                    }}
                  />
                </div>
                <div className="counter-content">
                  <h3>SEM 1</h3>
                  <span className="counter-value">Life Skills</span>
                  <h3>25 Hours</h3>
                </div>
              </div>

              <div className="counterP parent">
                <div className="counterP-icon">
                  <AppShortcutIcon
                    className="child"
                    sx={{
                      height: "40px",
                      width: "50px",
                      color: "white",
                    }}
                  />
                </div>
                <div className="counterP-content">
                  <h3>SEM 2</h3>
                  <span className="counterP-value">Soft Skills Essentials</span>
                  <h3>25 Hours</h3>
                </div>
              </div>

              <div className="counterPink parent">
                <div className="counterPink-icon">
                  <SettingsAccessibilityIcon
                    className="child"
                    sx={{
                      height: "40px",
                      width: "50px",
                      color: "white",
                    }}
                  />
                </div>
                <div className="counterPink-content">
                  <h3>SEM 3</h3>
                  <span className="counterPink-value">
                    Personal Development Program
                  </span>
                  <h3>25 Hours</h3>
                </div>
              </div>

              <div className="counterAmber parent">
                <div className="counterAmber-icon">
                  <CorporateFareIcon
                    className="child"
                    sx={{
                      height: "40px",
                      width: "50px",
                      color: "white",
                    }}
                  />
                </div>
                <div className="counterAmber-content">
                  <h3>SEM 4</h3>
                  <span className="counterAmber-value">
                    Corporate Etiquette
                  </span>
                  <h3>25 Hours</h3>
                </div>
              </div>

              <div className="counterTeal parent">
                <div className="counterTeal-icon">
                  <InterpreterModeIcon
                    className="child"
                    sx={{
                      height: "40px",
                      width: "50px",
                      color: "white",
                    }}
                  />
                </div>
                <div className="counterTeal-content">
                  <h3>SEM 5</h3>
                  <span className="counterTeal-value">Interview Skills</span>
                  <h3>25 Hours</h3>
                </div>
              </div>
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

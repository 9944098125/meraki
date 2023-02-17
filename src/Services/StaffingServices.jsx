import React, { Fragment } from "react";
import { Box, Typography } from "@mui/material";
import talentAcquisition from "../Assets/ServicesImages/talentAcquisition.jpg";
import rpo from "../Assets/ServicesImages/rpo.jpg";
import contingency from "../Assets/ServicesImages/contingency.jpg";
import htd from "../Assets/ServicesImages/htd.jpg";
import staffingServicesHeader from "../Assets/ServicesImages/staffingServicesHeader.avif";
import Aos from "aos";
import "aos/dist/aos.css";

function StaffingServices() {
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
          <img src={staffingServicesHeader} alt="" className="header-image" />
          <Typography
            sx={{
              color: "primary.dark",
              fontSize: { xs: "30px", sm: "40px", md: "50px" },
              fontWeight: "800",
            }}
          >
            STAFFING SERVICES
          </Typography>
        </Box>
        <Box
          data-aos="fade-up"
          id="talent-acquisition"
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
            <img src={talentAcquisition} alt="" className="services-img" />
            <Typography
              sx={{
                color: "primary.main",
                fontSize: { xs: "25px", sm: "30px", md: "35px" },
                fontWeight: "800",
              }}
            >
              Talent Acquisition
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
              The objective of talent acquisition is to attract, identify,
              assess, and hire the best candidates for an organization in order
              to meet the current and future workforce needs. Talent acquisition
              is a critical function within human resources (HR) and plays a
              vital role in ensuring the success of the organization.
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
              The prerequisites for talent acquisition vary depending on the
              level and scope of the role, but a general understanding of HR
              practices and employment laws, as well as strong communication and
              interpersonal skills, is essential. Familiarity with recruitment
              technology, such as applicant tracking systems (ATS), and
              experience with recruitment processes, such as sourcing and
              interviewing, can also be beneficial.
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
                1. Introduction to talent acquisition and HR practices
              </Typography>
              <Typography
                sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
              >
                2. Workforce planning and analysis
              </Typography>
              <Typography
                sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
              >
                3. Job analysis and job descriptions, Sourcing and recruitment
                marketing and Screening and selection processes
              </Typography>
              <Typography
                sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
              >
                4. Interviewing and candidate assessment, Background checks and
                reference checks and Offer management and onboarding
              </Typography>
              <Typography
                sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
              >
                5. Compliance with employment laws and regulations, Diversity
                and inclusion in talent acquisition and Emerging trends and
                technologies in talent acquisition
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          data-aos="fade-up"
          id="rpo"
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
            <img src={rpo} alt="" className="services-img" />
            <Typography
              sx={{
                color: "primary.main",
                fontSize: { xs: "25px", sm: "30px", md: "35px" },
                fontWeight: "800",
              }}
            >
              Recruitment Process Outsourcing
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
              The objective of recruitment process outsourcing (RPO) is to
              delegate some or all aspects of the recruitment process to an
              external service provider, with the aim of improving the
              efficiency and effectiveness of the recruitment process while
              reducing costs and time-to-hire.
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
              The prerequisites for recruitment process outsourcing can vary
              depending on the level of involvement and the scope of the RPO
              services being provided, but a general understanding of HR
              practices, recruitment processes, and employment laws is
              essential. Familiarity with recruitment technology, such as
              applicant tracking systems (ATS), and experience with sourcing,
              screening, and interviewing candidates can also be beneficial.
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
                1. Introduction to recruitment process outsourcing (RPO) and
                Benefits and challenges of RPO
              </Typography>
              <Typography
                sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
              >
                2. Understanding the recruitment process and HR practices,
                Assessment of current recruitment processes and identification
                of areas for improvement and RPO models and vendor selection
              </Typography>
              <Typography
                sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
              >
                3. Contract negotiation and vendor management, Project planning
                and implementation of RPO and Sourcing and recruitment marketing
              </Typography>
              <Typography
                sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
              >
                4. Screening and selection processes, Interviewing and candidate
                assessment and Offer management and onboarding
              </Typography>
              <Typography
                sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
              >
                5. Compliance with employment laws and regulations, Metrics and
                measurement of RPO success and Emerging trends and technologies
                in RPO
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          data-aos="fade-up"
          id="contingency-recruitment"
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
              Contingency Recruitment
            </Typography>
            <img src={contingency} alt="" className="services-img" />
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
              The objective of contingency recruitment is to provide an
              organization with a flexible and cost-effective solution for
              filling immediate or short-term staffing needs. In contingency
              recruitment, the organization partners with a recruitment agency,
              which assumes responsibility for sourcing and placing candidates
              in open positions, usually on a fee-for-service basis.
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
              The prerequisites for contingency recruitment vary depending on
              the level and scope of the role, but a general understanding of HR
              practices, recruitment processes, and employment laws is
              essential. Familiarity with sourcing techniques, such as job
              boards and social media, and experience with candidate assessment,
              such as interviewing and reference checking, can also be
              beneficial.
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
                1. Introduction to contingency recruitment: A brief overview of
                what contingency recruitment is and how it differs from other
                types of recruitment methods.
              </Typography>
              <Typography
                sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
              >
                2. Understanding the recruitment process and HR practices: A
                review of the recruitment process, including job analysis,
                sourcing, selection, and onboarding, as well as an overview of
                key HR practices and concepts, such as diversity and inclusion,
                compliance with employment laws, and workforce planning.
              </Typography>
              <Typography
                sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
              >
                3. Benefits and challenges of contingency recruitment: An
                examination of the advantages and disadvantages of using
                contingency recruitment, including cost savings, speed and
                flexibility, and potential drawbacks such as lower quality
                candidates and less control over the recruitment process.
              </Typography>
              <Typography
                sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
              >
                4. Sourcing and recruitment marketing: An overview of the
                techniques and strategies used to source candidates for
                contingency recruitment, including job boards, social media, and
                employee referrals.
              </Typography>
              <Typography
                sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
              >
                5. Offer management and onboarding: An examination of the
                process of extending offers to candidates and onboarding them
                into the organization, including best practices for
                communicating with candidates and providing them with the
                resources they need to succeed in their new role.
              </Typography>
              <Typography
                sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
              >
                6. Metrics and measurement of contingency recruitment success:
                An examination of the key metrics used to measure the success of
                contingency recruitment efforts, including time-to-hire,
                cost-per-hire, and candidate satisfaction.
              </Typography>
              <Typography
                sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
              >
                7. Working effectively with recruitment agencies: A review of
                best practices for working effectively with recruitment
                agencies, including selecting the right agency, communicating
                requirements and expectations, and managing the agency
                relationship over time.
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          data-aos="fade-up"
          id="hire-train-deploy"
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
            <img src={htd} alt="" className="services-img" />
            <Typography
              sx={{
                color: "primary.main",
                fontSize: { xs: "25px", sm: "30px", md: "35px" },
                fontWeight: "800",
              }}
            >
              Hire - Train - Deploy Service
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
              The objective of hire-train-deploy services is to provide
              organizations with a comprehensive solution for filling open
              positions, which includes sourcing, training, and deploying
              employees. In this model, the service provider assumes
              responsibility for sourcing and training candidates, and then
              deploying them to the organization for a specified period of time,
              usually with the option to hire the employees on a permanent
              basis.
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
              The prerequisites for hire-train-deploy services vary depending on
              the level and scope of the role, but a general understanding of HR
              practices, recruitment processes, and employment laws is
              essential. Familiarity with sourcing techniques, such as job
              boards and social media, and experience with candidate assessment,
              such as interviewing and reference checking, can also be
              beneficial.
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
                1. Introduction to hire-train-deploy services, Understanding the
                recruitment process and HR practices and Benefits and challenges
                of hire-train-deploy services
              </Typography>
              <Typography
                sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
              >
                2. Sourcing and recruitment marketing, Screening and selection
                processes and Interviewing and candidate assessment
              </Typography>
              <Typography
                sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
              >
                3. Training and development programs and Offer management and
                onboarding
              </Typography>
              <Typography
                sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
              >
                4. Compliance with employment laws and regulations, Metrics and
                measurement of hire-train-deploy success
              </Typography>
              <Typography
                sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
              >
                5. Emerging trends and technologies in hire-train-deploy
                services and Working effectively with hire-train-deploy service
                providers
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
}

export default StaffingServices;

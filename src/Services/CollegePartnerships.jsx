import { Box, Typography } from "@mui/material";
import React, { Fragment } from "react";
import industryAwareness from "../Assets/ServicesImages/industryAwareness.avif";
import interviewPreparations from "../Assets/ServicesImages/interviewPreparations.avif";
import technicalTraining from "../Assets/ServicesImages/technicalTraining.avif";
import careerPath from "../Assets/ServicesImages/careerPath.avif";
import collaborativeResearch from "../Assets/ServicesImages/collaborativeResearch.avif";
import internshipPrograms from "../Assets/ServicesImages/internshipPrograms.avif";
import collegePartnershipsHeader from "../Assets/ServicesImages/collegePartnershipsHeader.avif";

function CollegePartnerships() {
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
            <img src={industryAwareness} alt="" className="services-img" />
            <Typography
              sx={{
                color: "primary.main",
                fontSize: { xs: "25px", sm: "30px", md: "35px" },
                fontWeight: "800",
              }}
            >
              Industry Awareness
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
              The objective of an industry awareness program is to provide
              individuals with an understanding of the various industries, their
              characteristics, current trends, and future outlook. This can help
              individuals make informed decisions about their career paths,
              investments, or business ventures.
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
              There are no specific prerequisites for an industry awareness
              program. However, having a general understanding of economics and
              business principles can be beneficial.
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
                1. Introduction to Industries: A brief overview of the different
                types of industries, such as manufacturing, service, and primary
                industries. Industry Characteristics: An in-depth analysis of
                the key characteristics of each industry, including size,
                structure, competition, and regulatory environment.
              </Typography>
              <Typography
                sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
              >
                2. Industry Trends: An examination of current trends and changes
                in the industries, including technological advancements,
                globalization, and shifting consumer behavior.
              </Typography>
              <Typography
                sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
              >
                3. Industry Analysis: A comprehensive analysis of specific
                industries, including the automotive, healthcare, technology,
                and retail sectors.
              </Typography>
              <Typography
                sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
              >
                4. Future Outlook: A discussion of the future prospects and
                growth potential of various industries, and the impact of
                emerging trends such as artificial intelligence, the Internet of
                Things, and sustainable practices.
              </Typography>
              <Typography
                sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
              >
                5. Conclusion: A summary of the key takeaways from the industry
                awareness program and the importance of staying informed about
                the industries for personal and professional growth.
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          id="interview-preparations"
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
              Interview Preparations
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
              The objective of an interview preparation program is to help
              individuals effectively prepare for job interviews and increase
              their chances of getting hired.
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
              There are no specific prerequisites for an interview preparation
              program. However, individuals should have some basic knowledge
              about the job they are applying for, the company they are
              interviewing with, and the skills and qualifications required for
              the position.
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
                1. Introduction to Interviews: An overview of the interview
                process and its importance in the job search process.
              </Typography>
              <Typography
                sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
              >
                2. Understanding the Job: A discussion of the job
                responsibilities, requirements, and expectations for the
                position being applied for.
              </Typography>
              <Typography
                sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
              >
                3. Researching the Company: An examination of the company
                culture, history, mission, and values, as well as its products,
                services, and competitors.
              </Typography>
              <Typography
                sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
              >
                4. Preparing for Common Interview Questions: A review of
                commonly asked interview questions, including behavioral and
                technical questions, and tips on how to answer them effectively.
              </Typography>
              <Typography
                sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
              >
                5. Handling Nervousness and Stress: A discussion of ways to
                manage nervousness, anxiety, and stress during the interview,
                including deep breathing exercises and visualization techniques.
              </Typography>
              <Typography
                sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
              >
                6. Preparing for the Follow-Up: A discussion of the importance
                of following up after the interview, including sending a
                thank-you note and preparing for a potential second interview.
              </Typography>
              <Typography
                sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
              >
                7Conclusion: A summary of the key takeaways from the interview
                preparation program and the importance of being well-prepared
                for job interviews to increase your chances of getting hired..
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
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
            }}
          >
            <Typography
              sx={{
                color: "primary.main",
                fontSize: { xs: "25px", sm: "30px", md: "35px" },
                fontWeight: "800",
              }}
            >
              Technical Training
            </Typography>
            <img src={technicalTraining} alt="" className="services-img" />
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
          id="career-path-guidance"
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
              Career Path Guidance
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
              The objective of career path guidance is to help individuals make
              informed decisions about their career development and to provide
              them with the tools and resources they need to achieve their
              career goals. This can include assisting individuals in
              identifying their strengths and interests, exploring different
              career options, and developing a plan for achieving their career
              goals.
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
              Self-awareness: A basic understanding of one's strengths,
              weaknesses, values, and interests, as well as an understanding of
              what is important to them in a career.
            </Typography>
            <Typography
              sx={{ fontSize: { xs: "14px", sm: "16px", md: "18px" } }}
            >
              Career exploration: A willingness to explore different career
              options and to consider a variety of factors, such as job
              satisfaction, salary, and work-life balance.
            </Typography>
            <Typography
              sx={{ fontSize: { xs: "14px", sm: "16px", md: "18px" } }}
            >
              Open-mindedness: An open and flexible mindset, with a willingness
              to consider new ideas and career paths that may not have been
              previously considered.
            </Typography>
            <Typography
              sx={{ fontSize: { xs: "14px", sm: "16px", md: "18px" } }}
            >
              Goal-oriented approach: A commitment to making a change and a
              desire to actively work towards achieving one's career goals.
            </Typography>
            <Typography
              sx={{ fontSize: { xs: "14px", sm: "16px", md: "18px" } }}
            >
              Access to resources: Access to resources and tools, such as career
              assessments, job market information, and networking opportunities,
              can also be useful in the career path guidance process.
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
                  Introduction
                </Typography>
                <Box sx={{ p: { xs: 0.3, sm: 0.5, md: 1 } }}>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Overview of the career path guidance program
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Explanation of the objectives and goals of the
                    program
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Introduction of the facilitators and participants
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
                  Self Assessment
                </Typography>
                <Box sx={{ p: { xs: 0.3, sm: 0.5, md: 1 } }}>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Introduction to self-assessment tools, such as
                    personality and interest assessments
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Participants complete self-assessments to gain
                    insight into their strengths, values, and career interests
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Group discussion and reflection on the results of
                    self-assessments
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
                  Career Exploration
                </Typography>
                <Box sx={{ p: { xs: 0.3, sm: 0.5, md: 1 } }}>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Overview of the job market and various career fields
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Participants learn about different career options,
                    including salary, job duties, and required skills and
                    education
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Participants create a list of potential career paths
                    to explore further
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
                  Goal Setting
                </Typography>
                <Box sx={{ p: { xs: 0.3, sm: 0.5, md: 1 } }}>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Participants set career goals and develop a plan for
                    achieving those goals
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Discussion of the importance of creating a timeline
                    and actionable steps for achieving goals
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Group discussion and reflection on goal setting
                    strategies
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
                  Continuing Professional Development
                </Typography>
                <Box sx={{ p: { xs: 0.3, sm: 0.5, md: 1 } }}>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Overview of the importance of continuing professional
                    development
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Participants learn about the different ways they can
                    continue to develop their skills and advance their careers
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Participants create a plan for continuing
                    professional development
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
                  Wrap-Up
                </Typography>
                <Box sx={{ p: { xs: 0.3, sm: 0.5, md: 1 } }}>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Summary of the key takeaways from the career path
                    guidance program
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Discussion of next steps and resources for continuing
                    career development
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Final thoughts and closing comments from the
                    facilitators.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          id="collaborative-research"
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
            <img src={collaborativeResearch} alt="" className="services-img" />
            <Typography
              sx={{
                color: "primary.main",
                fontSize: { xs: "25px", sm: "30px", md: "35px" },
                fontWeight: "800",
              }}
            >
              Collaborative Research
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
              The objective of collaborative research is to bring together a
              team of individuals from different backgrounds and expertise to
              work towards a common goal. Collaborative research can result in
              the development of new knowledge, improved solutions to existing
              problems, and a deeper understanding of a specific field.
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
              A shared research interest: Collaborative research requires
              individuals to have a shared research interest and a common goal.
            </Typography>
            <Typography
              sx={{ fontSize: { xs: "14px", sm: "16px", md: "18px" } }}
            >
              Open communication: Effective communication and collaboration
              skills are critical for success in collaborative research.
            </Typography>
            <Typography
              sx={{ fontSize: { xs: "14px", sm: "16px", md: "18px" } }}
            >
              Different expertise: Collaborative research often requires
              individuals with different areas of expertise, such as subject
              matter experts, data analysts, and communicators.
            </Typography>
            <Typography
              sx={{ fontSize: { xs: "14px", sm: "16px", md: "18px" } }}
            >
              Access to resources: Access to resources, such as funding,
              equipment, and data, can be critical for success in collaborative
              research.
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
                  Introduction
                </Typography>
                <Box sx={{ p: { xs: 0.3, sm: 0.5, md: 1 } }}>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Overview of the collaborative research program
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Explanation of the objectives and goals of the
                    program
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Introduction of the facilitators and participants
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
                  Research Problem & Questions
                </Typography>
                <Box sx={{ p: { xs: 0.3, sm: 0.5, md: 1 } }}>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Identification and definition of the research problem
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Formulation of research questions and hypotheses
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Group discussion and refinement of research questions
                    and hypotheses
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
                  Research Design & Methodology
                </Typography>
                <Box sx={{ p: { xs: 0.3, sm: 0.5, md: 1 } }}>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Development of the research design and methodology
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Selection of appropriate data collection and analysis
                    methods
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Group discussion and refinement of the research
                    design and methodology
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
                  Data Collection & Analysis
                </Typography>
                <Box sx={{ p: { xs: 0.3, sm: 0.5, md: 1 } }}>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Collection and organization of data
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Analysis of data using appropriate methods
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Group discussion and refinement of the data analysis
                    results
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
                  Conclusions & Recommendations
                </Typography>
                <Box sx={{ p: { xs: 0.3, sm: 0.5, md: 1 } }}>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Development of conclusions and recommendations based
                    on the research results
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Discussion of the implications and potential
                    applications of the research findings
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Group discussion and refinement of the conclusions
                    and recommendations
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
                  Wrap-Up
                </Typography>
                <Box sx={{ p: { xs: 0.3, sm: 0.5, md: 1 } }}>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Summary of the key takeaways from the collaborative
                    research program
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Discussion of next steps and opportunities for
                    further research
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Final thoughts and closing comments from the
                    facilitators.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
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

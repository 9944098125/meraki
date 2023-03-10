import React, { Fragment } from "react";
import { Box, Typography } from "@mui/material";
import leadershipSkills from "../Assets/ServicesImages/leadershipSkills.jpg";
import businessCommunication from "../Assets/ServicesImages/businessCommunication.jpg";
import decisionMaking from "../Assets/ServicesImages/decisionMaking.jpg";
import experientialLearning from "../Assets/ServicesImages/experientialLearning.jpg";
import interpersonalSkills from "../Assets/ServicesImages/interpersonalSkills.jpg";
import lateralThinking from "../Assets/ServicesImages/lateralThinking.jpg";
import negotiation from "../Assets/ServicesImages/negotiation.jpg";
import proPresentation from "../Assets/ServicesImages/proPresentation.jpg";
import salesTechniques from "../Assets/ServicesImages/salesTechniques.jpg";
import teamBuilding from "../Assets/ServicesImages/teamBuilding.jpg";
import timeManagement from "../Assets/ServicesImages/timeManagement.jpg";
import powerSkillsHeader from "../Assets/ServicesImages/powerSkillsHeader.avif";
import Aos from "aos";
import "aos/dist/aos.css";

function PowerSkills() {
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
            mb: { xs: 15, sm: 2, md: 0 },
          }}
        >
          <img src={powerSkillsHeader} alt="" className="header-image" />
          <Typography
            sx={{
              color: "primary.dark",
              fontSize: { xs: "30px", sm: "40px", md: "50px" },
              fontWeight: "800",
            }}
          >
            POWER SKILLS - LEADERSHIP & MANAGEMENT
          </Typography>
        </Box>
        <Box
          data-aos="fade-up"
          id="leadership-skills"
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
            <img src={leadershipSkills} alt="" className="services-img" />
            <Typography
              sx={{
                color: "primary.main",
                fontSize: { xs: "25px", sm: "30px", md: "35px" },
                fontWeight: "800",
              }}
            >
              Leadership Skills
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
              The objective of a leadership skills training program is to equip
              individuals with the necessary skills and knowledge to effectively
              lead and manage teams, delegate tasks, communicate effectively,
              resolve conflicts, and make decisions.
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
              A basic understanding of management principles
            </Typography>
            <Typography
              sx={{ fontSize: { xs: "14px", sm: "16px", md: "18px" } }}
            >
              An open mindset and willingness to learn
            </Typography>
            <Typography
              sx={{ fontSize: { xs: "14px", sm: "16px", md: "18px" } }}
            >
              A desire to improve leadership skills and lead teams more
              effectively
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
                  Introduction to Leadership
                </Typography>
                <Box sx={{ p: { xs: 0.3, sm: 0.5, md: 1 } }}>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Definition of leadership
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"}The importance of leadership
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} The qualities of a good leader
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Leadership styles, The role of a leader in an
                    organization
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
                  Communication Skills
                </Typography>
                <Box sx={{ p: { xs: 0.3, sm: 0.5, md: 1 } }}>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Effective communication techniques
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Barriers to effective communication and Verbal and
                    non-verbal communication
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Listening skills, Presentation skills and Negotiation
                    skills
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
                  Team Management & Motivation
                </Typography>
                <Box sx={{ p: { xs: 0.3, sm: 0.5, md: 1 } }}>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Understanding team dynamics
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Building and leading effective teams
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Team decision making
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Conflict resolution
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Employee motivation theories
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Recognizing and rewarding employee performance
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
                  Problem Solving & Decision Making
                </Typography>
                <Box sx={{ p: { xs: 0.3, sm: 0.5, md: 1 } }}>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Problem identification and analysis
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Creative problem-solving techniques and Making
                    effective decisions
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Overcoming decision-making barriers and Group
                    decision making
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
                  Adaptability and Continuous Improvement
                </Typography>
                <Box sx={{ p: { xs: 0.3, sm: 0.5, md: 1 } }}>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Adapting to change
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Overcoming resistance to change
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Continuously improving leadership skills
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
                    {"=>"} Recap of key learning points
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Reflection on personal leadership strengths and areas
                    for improvement
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Action plan for ongoing development and improvement.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          data-aos="fade-up"
          id="sales-techniques"
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
              Sales Techniques
            </Typography>
            <img src={salesTechniques} alt="" className="services-img" />
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
              The objective of a course on sales techniques is to equip
              participants with the knowledge, skills, and attitudes necessary
              to effectively sell products and services. The course should
              enable participants to understand the key principles of sales,
              identify customer needs and preferences, and develop effective
              strategies to close sales and achieve their sales targets.
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
              There are no strict pre-requisites for a course on sales
              techniques, however, participants with prior experience in sales,
              marketing, or customer service may find the course more relevant
              and beneficial. Participants should have basic computer and
              communication skills and a strong interest in sales and customer
              service.
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
                  Introduction to Sales Techniques
                </Typography>
                <Box sx={{ p: { xs: 0.3, sm: 0.5, md: 1 } }}>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Overview of the sales process
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Key principles of sales
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Understanding customer needs and preferences
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
                  Building Relationship With Customers
                </Typography>
                <Box sx={{ p: { xs: 0.3, sm: 0.5, md: 1 } }}>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} The importance of building trust and rapport
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Techniques for establishing and maintaining strong
                    relationships with customers
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Understanding customer motivations and buying habits
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
                  Identifying & Qualifying Prospects
                </Typography>
                <Box sx={{ p: { xs: 0.3, sm: 0.5, md: 1 } }}>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} How to identify potential customers
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Qualifying prospects and determining their buying
                    potential
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Building a customer database and maintaining customer
                    records
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
                  Closing The Sale
                </Typography>
                <Box sx={{ p: { xs: 0.3, sm: 0.5, md: 1 } }}>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Understanding the key elements of closing a sale
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Techniques for overcoming objections and closing the
                    sale
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Strategies for following up with customers and
                    maintaining long-term relationships
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
                  Ethics In Sales
                </Typography>
                <Box sx={{ p: { xs: 0.3, sm: 0.5, md: 1 } }}>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} The importance of ethical behavior in sales
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Understanding and applying ethical principles in
                    sales
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} The impact of unethical behavior on sales success and
                    customer relationships
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          data-aos="fade-up"
          id="pro-presentation"
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
            <img src={proPresentation} alt="" className="services-img" />
            <Typography
              sx={{
                color: "primary.main",
                fontSize: { xs: "25px", sm: "30px", md: "35px" },
                fontWeight: "800",
              }}
            >
              Pro Presentation
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
              The objective of a course on professional presentations is to
              equip participants with the knowledge, skills, and attitudes
              necessary to effectively plan, design, and deliver presentations
              that engage, inform, and inspire audiences. The course should
              enable participants to develop effective presentations that
              communicate their message clearly, utilize multimedia effectively,
              and overcome common challenges in public speaking.
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
              There are no strict pre-requisites for a course on professional
              presentations, however, participants with prior experience in
              public speaking, marketing, or communication may find the course
              more relevant and beneficial. Participants should have basic
              computer skills, including proficiency in a presentation software
              such as PowerPoint, and a strong interest in developing their
              presentation skills.
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
                  Introduction to Professional Presentation
                </Typography>
                <Box sx={{ p: { xs: 0.3, sm: 0.5, md: 1 } }}>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Purpose of the presentation
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Overview of main topics
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Brief introduction of presenter
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
                  Background Information
                </Typography>
                <Box sx={{ p: { xs: 0.3, sm: 0.5, md: 1 } }}>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Explanation of industry or subject matter
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Historical context relationships with customers
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Current state of industry or subject matter
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
                  Proposed Solutions
                </Typography>
                <Box sx={{ p: { xs: 0.3, sm: 0.5, md: 1 } }}>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Overview of solution
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Explanation of how it addresses problem or
                    opportunity
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Comparison with other solutions
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
                    {"=>"} Recap of main points
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Final thoughts and recommendations
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Call to action or next steps
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
                  Q & A
                </Typography>
                <Box sx={{ p: { xs: 0.3, sm: 0.5, md: 1 } }}>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Opportunity for audience questions
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Professional responses to questions.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          data-aos="fade-up"
          id="team-building"
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
              Team Building
            </Typography>
            <img src={teamBuilding} alt="" className="services-img" />
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
              Objectives
            </Typography>
            <Typography
              sx={{ fontSize: { xs: "14px", sm: "16px", md: "18px" } }}
            >
              Explanation of the purpose of the presentation
            </Typography>
            <Typography
              sx={{ fontSize: { xs: "14px", sm: "16px", md: "18px" } }}
            >
              Relevance of team building in today's work environment
            </Typography>
            <Typography
              sx={{ fontSize: { xs: "14px", sm: "16px", md: "18px" } }}
            >
              Outcome expected from the presentation
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
              Understanding of the importance of effective team dynamics,
              Awareness of team building concepts and techniques, Knowledge of
              the challenges faced by teams in the workplace
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
                  Introduction to Team Building
                </Typography>
                <Box sx={{ p: { xs: 0.3, sm: 0.5, md: 1 } }}>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Definition of team building
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Importance of team building
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
                  The Purpose of team building
                </Typography>
                <Box sx={{ p: { xs: 0.3, sm: 0.5, md: 1 } }}>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Improving communication
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Increasing morale and motivation
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Developing leadership skills
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Improving problem-solving abilities
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Fostering collaboration and teamwork
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
                  Typese of Team Building Activities
                </Typography>
                <Box sx={{ p: { xs: 0.3, sm: 0.5, md: 1 } }}>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Outdoor activities and adventures
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Indoor games and challenges
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Charitable events, volunteering and Training & skill
                    development workshops
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
                    {"=>"} Recap of the importance of team building
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Final thoughts on the role of team building in team
                    success.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          data-aos="fade-up"
          id="business-communication"
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
            <img src={businessCommunication} alt="" className="services-img" />
            <Typography
              sx={{
                color: "primary.main",
                fontSize: { xs: "25px", sm: "30px", md: "35px" },
                fontWeight: "800",
              }}
            >
              Business Communication
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
              Business communication is used to convey information and ideas
              from one person or group to another. The main objective is to make
              sure that the message is received and understood by the recipient.
              Good communication skills can help build and maintain positive
              relationships with employees, customers, suppliers, and other
              stakeholders.
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
              There are no specific prerequisites for a business communication
              course, but prior coursework in writing, public speaking, or a
              related field can be helpful. Basic computer skills, including
              proficiency in word processing and presentation software, are also
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
              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                >
                  {"=>"}
                </Typography>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                >
                  Introduction to Business Communication: An overview of the
                  purpose and importance of effective communication in the
                  business world.
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                >
                  {"=>"}
                </Typography>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                >
                  Writing for Business: Techniques for writing clear, concise,
                  and professional business documents, including emails, memos,
                  reports, and proposals.
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                >
                  {"=>"}
                </Typography>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                >
                  Oral Communication: Techniques for effective public speaking,
                  including preparation, delivery, and the use of visual aids.
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                >
                  {"=>"}
                </Typography>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                >
                  Interpersonal Communication: Strategies for building strong
                  relationships and effective communication in a business
                  setting, including active listening, nonverbal communication,
                  and conflict resolution.
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                >
                  {"=>"}
                </Typography>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                >
                  Business Etiquette: An introduction to appropriate behavior
                  and protocol in various business situations, including
                  networking events, meetings, and presentations.
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                >
                  {"=>"}
                </Typography>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                >
                  Technology and Social Media: An exploration of the role of
                  technology and social media in modern business communication,
                  including the use of email, video conferencing, and social
                  media platforms for professional purposes.
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                >
                  {"=>"}
                </Typography>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                >
                  Cross-Cultural Communication: An examination of cultural
                  differences and their impact on business communication,
                  including strategies for communicating effectively across
                  cultural boundaries.
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                >
                  {"=>"}
                </Typography>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                >
                  Ethics in Business Communication: An exploration of ethical
                  considerations in business communication, including the
                  importance of maintaining confidentiality and avoiding
                  plagiarism.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          data-aos="fade-up"
          id="negotiation"
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
              Negotiation & Conflict Management
            </Typography>
            <img src={negotiation} alt="" className="services-img" />
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
              The objective of a negotiation and conflict management course is
              to equip students with the skills and knowledge necessary to
              effectively negotiate and resolve conflicts in a professional
              setting. This includes understanding the negotiation process,
              identifying and overcoming common negotiation barriers, and
              developing effective strategies for conflict resolution.
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
              There are no specific prerequisites for a negotiation and conflict
              management course, but prior coursework in business, management,
              or a related field can be helpful. Basic knowledge of negotiation
              theory and conflict resolution strategies is also beneficial.
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
              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                >
                  {"=>"}
                </Typography>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                >
                  Introduction to Negotiation and Conflict Management: An
                  overview of the importance of effective negotiation and
                  conflict resolution in the business world.
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                >
                  {"=>"}
                </Typography>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                >
                  Negotiation Theory and Process: A comprehensive overview of
                  negotiation theory and the negotiation process, including
                  preparation, communication, and decision-making strategies.
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                >
                  {"=>"}
                </Typography>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                >
                  Identifying and Overcoming Negotiation Barriers: Strategies
                  for overcoming common barriers to successful negotiation,
                  including cultural differences, communication breakdowns, and
                  emotional reactions.
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                >
                  {"=>"}
                </Typography>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                >
                  Conflict Management: An examination of conflict theory and the
                  conflict management process, including strategies for
                  identifying and resolving conflicts in a professional setting.
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                >
                  {"=>"}
                </Typography>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                >
                  Interpersonal Communication in Negotiation and Conflict
                  Management: An exploration of the role of effective
                  interpersonal communication in negotiation and conflict
                  resolution, including active listening, nonverbal
                  communication, and empathy.
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                >
                  {"=>"}
                </Typography>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                >
                  Collaborative Problem-Solving: Strategies for effectively
                  working with others to find mutually beneficial solutions to
                  conflicts and negotiations.
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                >
                  {"=>"}
                </Typography>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                >
                  Ethics in Negotiation and Conflict Management: An exploration
                  of ethical considerations in negotiation and conflict
                  resolution, including the importance of fairness, honesty, and
                  respect.
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                >
                  {"=>"}
                </Typography>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                >
                  Real-World Applications: An opportunity for students to apply
                  their learning to real-world negotiations and conflict
                  resolution scenarios, through role-plays, case studies, and
                  group projects.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          data-aos="fade-up"
          id="time-management"
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
            <img src={timeManagement} alt="" className="services-img" />
            <Typography
              sx={{
                color: "primary.main",
                fontSize: { xs: "25px", sm: "30px", md: "35px" },
                fontWeight: "800",
              }}
            >
              Time Management
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
              The objective of a time management course is to equip individuals
              with the skills and knowledge necessary to effectively manage
              their time and achieve their goals. This includes identifying and
              overcoming common time-wasters, setting priorities, and developing
              a system for staying organized and on track.
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
              There are no specific prerequisites for a time management course,
              but prior coursework in productivity, organization, or a related
              field can be helpful. Basic computer skills, including proficiency
              in scheduling and task management software, are also beneficial.
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
              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                >
                  {"=>"}
                </Typography>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                >
                  Introduction to Time Management: An overview of the importance
                  of effective time management in achieving personal and
                  professional goals.
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                >
                  {"=>"}
                </Typography>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                >
                  Identifying Time-Wasters: Strategies for identifying and
                  overcoming common time-wasters, including procrastination,
                  multitasking, and interruptions.
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                >
                  {"=>"}
                </Typography>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                >
                  Setting Priorities: Techniques for setting effective
                  priorities and determining which tasks are most important and
                  require immediate attention.
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                >
                  {"=>"}
                </Typography>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                >
                  Developing a Time Management System: An introduction to
                  various time management systems and tools, including
                  scheduling software, calendars, and task lists.
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                >
                  {"=>"}
                </Typography>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                >
                  Staying Organized: Strategies for staying organized and on
                  track, including filing systems, email management, and using
                  technology to streamline tasks.
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                >
                  {"=>"}
                </Typography>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                >
                  Delegation and Team Management: An exploration of the role of
                  delegation in effective time management, including how to
                  delegate tasks effectively and manage team members.
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                >
                  {"=>"}
                </Typography>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                >
                  Stress Management and Self-Care: An examination of the impact
                  of stress on time management and strategies for reducing
                  stress and taking care of oneself, including mindfulness,
                  exercise, and self-reflection.
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                >
                  {"=>"}
                </Typography>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                >
                  Real-World Applications: An opportunity for individuals to
                  apply their learning to real-world time management scenarios,
                  through practical exercises and case studies.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          data-aos="fade-up"
          id="decision-making"
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
              Decision Making
            </Typography>
            <img src={decisionMaking} alt="" className="services-img" />
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
              The objective of a decision-making course is to equip individuals
              with the skills and knowledge necessary to make effective
              decisions in both personal and professional contexts. This
              includes understanding the decision-making process, identifying
              and overcoming common decision-making biases, and developing
              strategies for making well-informed choices.
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
              There are no specific prerequisites for a decision-making course,
              but prior coursework in psychology, management, or a related field
              can be helpful. Basic knowledge of statistics and probability is
              also beneficial.
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
              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                >
                  {"=>"}
                </Typography>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                >
                  Introduction to Decision Making: An overview of the importance
                  of effective decision making in achieving personal and
                  professional goals.
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                >
                  {"=>"}
                </Typography>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                >
                  Understanding the Decision-Making Process: A comprehensive
                  overview of the decision-making process, including problem
                  identification, data gathering, and alternative evaluation.
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                >
                  {"=>"}
                </Typography>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                >
                  Overcoming Decision-Making Biases: An examination of common
                  decision-making biases, such as confirmation bias and
                  overconfidence, and strategies for overcoming them.
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                >
                  {"=>"}
                </Typography>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                >
                  Gathering and Analyzing Data: Techniques for gathering and
                  analyzing data to inform decision making, including data
                  collection, statistical analysis, and visual representation.
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                >
                  {"=>"}
                </Typography>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                >
                  Risk Assessment and Management: An introduction to risk
                  assessment and management, including probability theory,
                  expected value, and decision trees.
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                >
                  {"=>"}
                </Typography>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                >
                  Group Decision Making: An exploration of group decision
                  making, including the advantages and disadvantages of group
                  decision making and strategies for effectively working with
                  others to make informed choices.
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                >
                  {"=>"}
                </Typography>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                >
                  Ethical Decision Making: An examination of ethical
                  considerations in decision making, including the importance of
                  fairness, transparency, and accountability.
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                >
                  {"=>"}
                </Typography>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                >
                  Real-World Applications: An opportunity for individuals to
                  apply their learning to real-world decision-making scenarios,
                  through practical exercises and case studies.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          data-aos="fade-up"
          id="interpersonal-skills"
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
            <img src={interpersonalSkills} alt="" className="services-img" />
            <Typography
              sx={{
                color: "primary.main",
                fontSize: { xs: "25px", sm: "30px", md: "35px" },
                fontWeight: "800",
              }}
            >
              Interpersonal Skills
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
              The objective of an interpersonal skills course is to equip
              individuals with the skills and knowledge necessary to effectively
              interact and communicate with others in both personal and
              professional contexts. This includes building strong
              relationships, managing conflicts, and understanding nonverbal
              communication.
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
              There are no specific prerequisites for an interpersonal skills
              course, but prior coursework in communication, psychology, or a
              related field can be helpful. Basic knowledge of active listening,
              empathy, and nonverbal communication is also beneficial.
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
              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                >
                  {"=>"}
                </Typography>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                >
                  Introduction to Interpersonal Skills: An overview of the
                  importance of effective interpersonal skills in achieving
                  personal and professional goals.
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                >
                  {"=>"}
                </Typography>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                >
                  Building Strong Relationships: Techniques for building strong,
                  positive relationships with others, including active
                  listening, empathy, and communication.
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                >
                  {"=>"}
                </Typography>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                >
                  Conflict Management: An examination of common conflicts in
                  personal and professional contexts and strategies for
                  effectively managing and resolving conflicts.
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                >
                  {"=>"}
                </Typography>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                >
                  Nonverbal Communication: An exploration of nonverbal
                  communication, including body language, tone of voice, and
                  facial expressions, and the role it plays in effective
                  interpersonal interaction.
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                >
                  {"=>"}
                </Typography>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                >
                  Communication Styles: An exploration of different
                  communication styles and how to adapt one's communication
                  style to effectively interact with others.
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                >
                  {"=>"}
                </Typography>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                >
                  Assertiveness and Self-Confidence: An examination of the
                  importance of assertiveness and self-confidence in
                  interpersonal interaction and strategies for developing and
                  maintaining these qualities.
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                >
                  {"=>"}
                </Typography>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                >
                  Cultural Awareness: An exploration of cultural differences and
                  how they impact interpersonal interaction, including
                  strategies for effectively communicating across cultural
                  boundaries.
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                >
                  {"=>"}
                </Typography>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                >
                  Real-World Applications: An opportunity for individuals to
                  apply their learning to real-world interpersonal scenarios,
                  through practical exercises and case studies.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          data-aos="fade-up"
          id="critical-thinking"
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
              Critical / Analytical & Lateral Thinking
            </Typography>
            <img src={lateralThinking} alt="" className="services-img" />
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
              The objective of a critical thinking and lateral thinking course
              is to equip individuals with the skills and knowledge necessary to
              think critically and creatively in both personal and professional
              contexts. This includes developing problem-solving skills,
              recognizing and overcoming common biases, and evaluating arguments
              and information.
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
              There are no specific prerequisites for a critical thinking and
              lateral thinking course, but prior coursework in philosophy,
              logic, or a related field can be helpful. Basic knowledge of
              reasoning, argumentation, and logic is also beneficial.
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
              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                >
                  {"=>"}
                </Typography>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                >
                  Introduction to Critical Thinking: An overview of the
                  importance of critical thinking in daily life, as well as in
                  professional and academic settings.
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                >
                  {"=>"}
                </Typography>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                >
                  Evaluating Arguments: An exploration of the components of
                  arguments, including premises, conclusions, and inference, and
                  strategies for evaluating the validity of arguments.
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                >
                  {"=>"}
                </Typography>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                >
                  Problem Solving: An examination of the problem-solving
                  process, including problem identification, data gathering, and
                  alternative evaluatio{"=>"} This section may also include a
                  discussion of common obstacles to effective problem solving,
                  such as premature closure and mental set.
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                >
                  {"=>"}
                </Typography>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                >
                  Decision Making: An examination of the relationship between
                  critical thinking and decision making and strategies for using
                  critical thinking to inform decision makin{"=>"} This section
                  may also include a discussion of different decision-making
                  models, such as rational choice and bounded rationality.
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                >
                  {"=>"}
                </Typography>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                >
                  Challenging Assumptions: An exploration of the importance of
                  challenging assumptions in lateral thinking and strategies for
                  doing so.
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                >
                  {"=>"}
                </Typography>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                >
                  Generating Alternatives: Techniques for generating a large
                  number of alternatives, including brainstorming, reverse
                  thinking, and random stimulation.
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                >
                  {"=>"}
                </Typography>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                >
                  Breaking Out of Mental Set: An examination of the concept of
                  mental set, and strategies for breaking out of established
                  patterns of thought to generate new and innovative solutions.
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                >
                  {"=>"}
                </Typography>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                >
                  Challenging Assumptions: An exploration of the importance of
                  challenging assumptions in lateral thinking and strategies for
                  doing so.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          data-aos="fade-up"
          id="experiential-learning"
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
              Experiential Learning
            </Typography>
            <img src={experientialLearning} alt="" className="services-img" />
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
              The objective of experiential learning at the corporate level is
              to provide employees with hands-on, real-world experiences that
              will help them develop new skills, improve their performance, and
              become more effective and engaged in their work.
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
              The prerequisites for experiential learning in a corporate setting
              include a supportive organizational culture, resources to support
              the learning activities, and a commitment from both management and
              employees to invest time and effort into the learning process.
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
                    {"=>"} A brief overview of the learning program, its goals
                    and objectives, and how it will be structured.
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
                  Assessment of Learning needs
                </Typography>
                <Box sx={{ p: { xs: 0.3, sm: 0.5, md: 1 } }}>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} An evaluation of the skills and knowledge that
                    employees need to improve in order to be more effective and
                    engaged in their work.
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
                  Design of learning activities
                </Typography>
                <Box sx={{ p: { xs: 0.3, sm: 0.5, md: 1 } }}>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} A plan for the hands-on, interactive learning
                    experiences that will be offered, such as on-the-job
                    training, team-building activities, cross-functional
                    projects, workshops, and mentorship programs.
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
                  Evaluation & Follow Up
                </Typography>
                <Box sx={{ p: { xs: 0.3, sm: 0.5, md: 1 } }}>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Assessment of the impact of the learning program on
                    employee performance and engagement, and identification of
                    areas for improvement and follow-up.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
}

export default PowerSkills;

import React, { Fragment } from "react";
import { Box, Typography } from "@mui/material";
import digitalMarketing from "../Assets/ServicesImages/digitalMarketing.jpg";
import aviation from "../Assets/ServicesImages/aviation.jpg";
import bfsi from "../Assets/ServicesImages/bfsi.jpg";
import hrTraining from "../Assets/ServicesImages/hrTraining.jpg";
import corporateEtiquette from "../Assets/ServicesImages/corporateEtiquette.jpg";
import crossCulture from "../Assets/ServicesImages/crossCulture.jpg";
import emailEtiquette from "../Assets/ServicesImages/emailAndTelephone.jpg";
import vaTraining from "../Assets/ServicesImages/vaTraining.jpg";
import businessEnglish from "../Assets/ServicesImages/businessEnglish.jpg";
import corporateTraining from "../Assets/ServicesImages/campusToCorporateTraining.jpg";
import softSkillsHeader from "../Assets/ServicesImages/softSkillsHeader.avif";

function SoftSkills() {
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
          <img src={softSkillsHeader} alt="" className="header-image" />
          <Typography
            sx={{
              color: "primary.dark",
              fontSize: { xs: "30px", sm: "40px", md: "50px" },
              fontWeight: "800",
            }}
          >
            SOFT SKILLS & BUSINESS COMMUNICATION
          </Typography>
        </Box>
        <Box
          id="corporate-training"
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
            <img src={corporateTraining} alt="" className="services-img" />
            <Typography
              sx={{
                color: "primary.main",
                fontSize: { xs: "25px", sm: "30px", md: "35px" },
                fontWeight: "800",
              }}
            >
              Campus To Corporate Training
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
              The objective of campus to corporate training is to prepare recent
              graduates and early-career professionals for the transition from a
              academic environment to a corporate work environment. This type of
              training is designed to help individuals develop the skills,
              knowledge, and behaviors required to succeed in a professional
              setting.
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
              The prerequisites for campus to corporate training are typically a
              bachelor's degree or equivalent and no prior work experience.
              However, the specific requirements can vary depending on the
              organization and the level of the training. The training may be
              especially beneficial for recent graduates who are just starting
              their careers and seeking to build a solid foundation of skills
              and knowledge.
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
                1. Introduction to the Corporate World: An overview of the key
                characteristics and challenges of working in a corporate
                environment, including organizational structure, culture, and
                business practices.
              </Typography>
              <Typography
                sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
              >
                2. Career Development: Strategies for developing a successful
                career, including goal setting, resume writing, and networking.
              </Typography>
              <Typography
                sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
              >
                3. Problem Solving and Critical Thinking: Techniques for solving
                problems and making decisions in a professional setting,
                including brainstorming, root cause analysis, and
                decision-making frameworks.
              </Typography>
              <Typography
                sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
              >
                4. Business Etiquette: An overview of the norms and customs of
                business communication, including email etiquette, telephone
                etiquette, and cross-cultural communication.
              </Typography>
              <Typography
                sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
              >
                5. Time Management and Organization: An understanding of the
                importance of time management and organization, including
                prioritization, goal setting, and productivity strategies.
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          id="business-english-skills"
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
            <img src={businessEnglish} alt="" className="services-img" />
            <Typography
              sx={{
                color: "primary.main",
                fontSize: { xs: "25px", sm: "30px", md: "35px" },
                fontWeight: "800",
              }}
            >
              Business English Skills
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
              The objective of business English skills training is to help
              individuals develop their language proficiency in a professional
              setting. This type of training is designed to help employees
              communicate more effectively, enhance their professional presence,
              and increase their confidence when conducting business in English.
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
              The prerequisites for business English skills training are
              typically a basic understanding of English grammar and vocabulary,
              but the specific requirements can vary depending on the
              organization and the level of the training. The training may be
              especially beneficial for employees who regularly communicate with
              English-speaking customers, clients, or colleagues, or for those
              who are required to write or present in English as part of their
              job.
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
                1. Grammar and Vocabulary: A review of English grammar and
                vocabulary, including commonly used phrases, expressions, and
                idioms in a business context.
              </Typography>
              <Typography
                sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
              >
                2. Business Writing: Techniques for effective business writing,
                including writing emails, reports, and other professional
                documents.
              </Typography>
              <Typography
                sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
              >
                3. Presentation Skills: Strategies for delivering effective
                presentations in English, including the use of visual aids,
                storytelling, and engaging the audience.
              </Typography>
              <Typography
                sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
              >
                4. Interpersonal Communication: An understanding of the role of
                language in interpersonal communication, including active
                listening, assertiveness, and conflict resolution. Business
                Etiquette: An overview of the norms and customs of business
                communication, including email etiquette, telephone etiquette,
                and cross-cultural communication.
              </Typography>
              <Typography
                sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
              >
                5. Listening and Speaking Skills: Techniques for improving
                listening and speaking skills, including paying attention to
                nonverbal cues and avoiding distractions.
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          id="voice"
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
              Voice & Accent Training
            </Typography>
            <img src={vaTraining} alt="" className="services-img" />
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
              The objective of voice and accent training is to help individuals
              improve their speech patterns, pronunciation, and overall speaking
              skills in a professional setting. This type of training is
              designed to help individuals communicate more effectively, enhance
              their professional presence, and increase their confidence when
              speaking in front of others.
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
              The prerequisites for voice and accent training are typically not
              strict, and it can be beneficial for employees at all levels,
              regardless of their experience or background. However, it may be
              especially beneficial for employees who regularly communicate with
              customers, clients, or colleagues, or for those who give
              presentations or speeches as part of their job.
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
                1. Speech Mechanics: An overview of the mechanics of speech,
                including pronunciation, intonation, stress, and rhythm.
              </Typography>
              <Typography
                sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
              >
                2. Voice Projection: Techniques for improving voice projection,
                including breathing exercises, vocal warm-ups, and strategies
                for avoiding common voice problems.
              </Typography>
              <Typography
                sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
              >
                3. Accent Reduction: Strategies for reducing a heavy accent,
                including pronunciation exercises, practicing commonly used
                words and phrases, and speaking slowly and clearly.
              </Typography>
              <Typography
                sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
              >
                4. Public Speaking Skills: An exploration of the elements of
                effective public speaking, including preparation, body language,
                and audience engagement.
              </Typography>
              <Typography
                sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
              >
                5. Presentation Skills: Techniques for delivering effective
                presentations, including the use of visual aids, storytelling,
                and engaging the audience.
              </Typography>
              <Typography
                sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
              >
                6. Cultural Sensitivity: Strategies for understanding and
                respecting the speech patterns and cultural norms of different
                populations, including avoiding cultural misunderstandings.
              </Typography>
              <Typography
                sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
              >
                7. Listening Skills: Techniques for improving listening skills,
                including paying attention to nonverbal cues and avoiding
                distractions.
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          id="email-etiquette"
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
            <img src={emailEtiquette} alt="" className="services-img" />
            <Typography
              sx={{
                color: "primary.main",
                fontSize: { xs: "25px", sm: "30px", md: "35px" },
                fontWeight: "800",
              }}
            >
              Email & Telephone Etiquette
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
              The objective of email and telephone etiquette training is to help
              individuals understand and demonstrate appropriate professional
              behavior when communicating through email and over the phone. This
              type of training is designed to help employees communicate
              effectively, avoid misunderstandings, and maintain professionalism
              in their business interactions.
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
              The prerequisites for email and telephone etiquette training are
              typically not strict, and it can be beneficial for employees at
              all levels, regardless of their experience or background. However,
              it may be especially beneficial for employees who regularly
              communicate with customers, clients, or colleagues by email or
              phone.
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
                1. Email Etiquette: Strategies for effective email
                communication, including best practices for writing clear and
                concise messages, avoiding common email mistakes, and responding
                to emails in a timely manner.
              </Typography>
              <Typography
                sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
              >
                2. Telephone Etiquette: Techniques for effective telephone
                communication, including proper phone manner, effective
                listening skills, and handling difficult callers.
              </Typography>
              <Typography
                sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
              >
                3. Professionalism in Email and Telephone Communication: An
                exploration of the importance of professionalism in electronic
                communication and strategies for maintaining a professional
                demeanor.
              </Typography>
              <Typography
                sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
              >
                4.Time Management: Techniques for managing time effectively when
                communicating through email and over the phone, including
                prioritizing tasks and avoiding distractions.
              </Typography>
              <Typography
                sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
              >
                5. Business Writing: An overview of the elements of effective
                business writing and strategies for improving writing skills.
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          id="cross-cultural"
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
            <img src={crossCulture} alt="" className="services-img" />
            <Typography
              sx={{
                color: "primary.main",
                fontSize: { xs: "25px", sm: "30px", md: "35px" },
                fontWeight: "800",
              }}
            >
              Cross Cultural Sensitivity
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
              The objective of cross-cultural sensitivity training is to help
              individuals understand and respect the beliefs, values, and
              customs of people from different cultural backgrounds. This type
              of training is designed to promote diversity, inclusiveness, and
              respect in the workplace and in other professional settings.
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
              The prerequisites for cross-cultural sensitivity training are
              typically not strict, and it can be beneficial for employees at
              all levels, regardless of their experience or background. However,
              it may be especially beneficial for employees who work with
              diverse populations or for those who regularly interact with
              people from different cultural backgrounds.
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
                1. Understanding Culture: An overview of the concept of culture
                and its impact on communication and behavior.
              </Typography>
              <Typography
                sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
              >
                2. Cultural Dimensions: An exploration of the different
                dimensions of culture, including values, beliefs, attitudes, and
                communication styles.
              </Typography>
              <Typography
                sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
              >
                3. Stereotyping and Prejudice: An examination of the negative
                effects of stereotyping and prejudice, and strategies for
                overcoming them.
              </Typography>
              <Typography
                sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
              >
                4. Cultural Awareness: Techniques for increasing awareness of
                one's own cultural background and the cultural backgrounds of
                others.
              </Typography>
              <Typography
                sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
              >
                5. Cross-Cultural Communication: Strategies for effective
                communication in a cross-cultural setting, including active
                listening, nonverbal communication, and avoiding cultural
                misunderstandings.
              </Typography>
              <Typography
                sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
              >
                6. Diversity and Inclusion: An exploration of the benefits of
                diversity and inclusiveness in the workplace and strategies for
                promoting it. Cultural Adjustment: Strategies for managing the
                challenges of cultural adjustment, including dealing with
                culture shock and building relationships across cultures.
              </Typography>
              <Typography
                sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
              >
                7. Cultural Competence: An exploration of the concept of
                cultural competence and techniques for developing it, including
                self-reflection, continuous learning, and empathy.
              </Typography>
              <Typography
                sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
              >
                8. Global Mindset: An understanding of the importance of having
                a global mindset and the skills necessary to succeed in a
                globalized world, including adaptability, intercultural
                understanding, and cultural intelligence.
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          id="corporate-etiquette"
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
              Corporate Etiquette
            </Typography>
            <img src={corporateEtiquette} alt="" className="services-img" />
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
              The objective of corporate etiquette training is to help
              individuals understand and demonstrate appropriate professional
              behavior in the workplace. This type of training is designed to
              help employees understand the norms and expectations of business
              communication, networking, and other business interactions.
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
              The prerequisites for corporate etiquette training are typically
              not strict, and it can be beneficial for employees at all levels,
              regardless of their experience or background. However, it may be
              most beneficial for employees who are new to the workplace or
              those who have limited exposure to professional business
              interactions.
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
                1.Professional Communication: Strategies for effective
                communication in the workplace, including email etiquette,
                telephone etiquette, and in-person communication.
              </Typography>
              <Typography
                sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
              >
                2.Networking: Techniques for building professional
                relationships, including making introductions, small talk, and
                follow-up.
              </Typography>
              <Typography
                sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
              >
                3. Business Dining Etiquette: Understanding of appropriate
                behavior at business meals and events, including table manners,
                conversation topics, and gift-giving.
              </Typography>
              <Typography
                sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
              >
                4. Business Dress Code: Guidelines for appropriate attire in the
                workplace, including what to wear to business meetings and
                events, and how to dress for different levels of formality.
              </Typography>
              <Typography
                sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
              >
                5. Business Meeting Etiquette: Best practices for conducting
                business meetings, including punctuality, agenda setting, and
                active listening.
              </Typography>
              <Typography
                sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
              >
                6. Intercultural Etiquette: Understanding of cultural
                differences and the impact they may have on business
                interactions, including gestures, customs, and communication
                styles.
              </Typography>
              <Typography
                sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
              >
                7. Professionalism: Strategies for maintaining a professional
                demeanor in the workplace, including maintaining
                confidentiality, managing stress, and avoiding unethical
                behavior.
              </Typography>
              <Typography
                sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
              >
                8. Social Media Etiquette: Guidelines for using social media in
                a professional setting, including what to post, how to interact
                with others online, and how to maintain privacy. Office
                Politics: Understanding of the role of politics in the workplace
                and how to navigate political situations, including managing
                power dynamics and building alliances.
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          id="hr-training"
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
            <img src={hrTraining} alt="" className="services-img" />
            <Typography
              sx={{
                color: "primary.main",
                fontSize: { xs: "25px", sm: "30px", md: "35px" },
                fontWeight: "800",
              }}
            >
              HR Training
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
              The objective of HR training can vary depending on the target
              audience, the organization's goals, and the HR function's
              priorities. In general, the objective of HR training is to equip
              HR professionals and managers with the knowledge and skills needed
              to effectively carry out HR-related tasks, such as recruiting,
              hiring, onboarding, performance management, employee relations,
              and compliance with employment laws.
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
              Prerequisites for HR training can vary, but generally,
              participants should have a basic understanding of HR concepts and
              practices, as well as experience working in a HR role or managing
              people. In some cases, organizations may also require participants
              to have a specific degree or certification in HR, such as the
              Society for Human Resource Management (SHRM) certification.
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
                1.Introduction to HR: An overview of the role of HR in
                organizations and the HR function's responsibilities and tasks.
              </Typography>
              <Typography
                sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
              >
                2. Onboarding: The process of welcoming new employees and
                integrating them into the organization, including orientation,
                training, and acculturation.
              </Typography>
              <Typography
                sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
              >
                3. Recruitment and Selection: Techniques and best practices for
                attracting and selecting the best candidates for open positions,
                including job analysis, advertising, and interviewing.
              </Typography>
              <Typography
                sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
              >
                4. Performance Management: Strategies for setting performance
                expectations, providing feedback, and evaluating employee
                performance, including performance appraisals and coaching.
              </Typography>
              <Typography
                sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
              >
                5. Talent Management: Best practices for developing and
                retaining employees, including career development, training, and
                succession planning.
              </Typography>
              <Typography
                sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
              >
                6. Compliance: Understanding of relevant employment laws and
                regulations, including equal opportunity laws, labor laws, and
                health and safety regulations.
              </Typography>
              <Typography
                sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
              >
                7. Employee Engagement: Strategies for fostering a positive work
                environment and promoting employee engagement, including
                recognition and rewards programs, work-life balance initiatives,
                and employee surveys.
              </Typography>
              <Typography
                sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
              >
                8. Employee Benefits and Compensation: Understanding of employee
                benefits, including health insurance, retirement plans, and paid
                time off, as well as techniques for developing and administering
                compensation programs.
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          id="bfsi-training"
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
              BFSI Training (Banking, Financial, Services and Insurance)
            </Typography>
            <img src={bfsi} alt="" className="services-img" />
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
              The objective of a BFSI training program is to provide individuals
              with a comprehensive understanding of the banking, financial
              services, and insurance (BFSI) sector, including the various
              financial products and services offered by banks, insurance
              companies, and other financial institutions. The course covers the
              principles of finance, economics, and regulation, as well as the
              various operational and managerial aspects of the BFSI sector.
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
              Strong analytical, problem-solving, and decision-making skills
            </Typography>
            <Typography
              sx={{ fontSize: { xs: "14px", sm: "16px", md: "18px" } }}
            >
              Familiarity with financial markets and instruments
            </Typography>
            <Typography
              sx={{ fontSize: { xs: "14px", sm: "16px", md: "18px" } }}
            >
              Knowledge of financial and investment products and services
            </Typography>
            <Typography
              sx={{ fontSize: { xs: "14px", sm: "16px", md: "18px" } }}
            >
              Understanding of banking and insurance operations
            </Typography>

            <Typography
              sx={{ fontSize: { xs: "14px", sm: "16px", md: "18px" } }}
            >
              Basic understanding of economics and finance
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
                  Introduction to BFSI
                </Typography>
                <Box sx={{ p: { xs: 0.3, sm: 0.5, md: 1 } }}>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Overview of BFSI
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Types of financial institutions in the BFSI sector
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Role of BFSI in the global economy
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
                  Banking Operations
                </Typography>
                <Box sx={{ p: { xs: 0.3, sm: 0.5, md: 1 } }}>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Overview of Banking Operations
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Retail Banking and Corporate Banking
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Credit and Loan Operations
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Payment and Settlement Systems
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
                  Financial Services
                </Typography>
                <Box sx={{ p: { xs: 0.3, sm: 0.5, md: 1 } }}>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Overview of Financial Services
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Investment Banking and Capital Markets
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Wealth Management and Portfolio Management
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Insurance and Risk Management
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
                  Insurance Operations
                </Typography>
                <Box sx={{ p: { xs: 0.3, sm: 0.5, md: 1 } }}>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Overview of Insurance Operations
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Life Insurance and Non-Life Insurance and
                    Underwriting and Claims Management
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Reinsurance and Risk Management
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
                  BFSI Regulation & Compliance
                </Typography>
                <Box sx={{ p: { xs: 0.3, sm: 0.5, md: 1 } }}>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Overview of BFSI Regulation and Compliance
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} b. Financial Markets Regulation
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Banking and Insurance Supervision and Regulation
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"}
                    Anti-Money Laundering and Anti-Terrorism Financing
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
                  BFSI Technology & Business Transformation
                </Typography>
                <Box sx={{ p: { xs: 0.3, sm: 0.5, md: 1 } }}>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Overview of BFSI Technology and Digital
                    Transformation
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Digital Banking and Insurance
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Fintech and Innovation in BFSI
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Big Data and Analytics in BFSI.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          id="logistics"
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
            <img src={aviation} alt="" className="services-img" />
            <Typography
              sx={{
                color: "primary.main",
                fontSize: { xs: "25px", sm: "30px", md: "35px" },
                fontWeight: "800",
              }}
            >
              Logistics & Aviation
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
              The objective of a course in logistics and aviation is to provide
              students with a comprehensive understanding of the processes,
              systems, and technologies involved in the movement of goods and
              people. The course covers the principles of transportation, supply
              chain management, and aviation operations, as well as the various
              operational and managerial aspects of logistics and aviation
              businesses.
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
              Basic understanding of business administration and management
            </Typography>
            <Typography
              sx={{ fontSize: { xs: "14px", sm: "16px", md: "18px" } }}
            >
              Familiarity with transportation and supply chain management
              principles
            </Typography>
            <Typography
              sx={{ fontSize: { xs: "14px", sm: "16px", md: "18px" } }}
            >
              Knowledge of transportation and logistics systems, including road,
              rail, sea, and air transportation
            </Typography>
            <Typography
              sx={{ fontSize: { xs: "14px", sm: "16px", md: "18px" } }}
            >
              Understanding of economics and business operations
            </Typography>
            <Typography
              sx={{ fontSize: { xs: "14px", sm: "16px", md: "18px" } }}
            >
              Strong analytical, problem-solving, and decision-making skills
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
                1. Overview of Logistics and Transportation: Definition of
                logistics, importance of transportation in the global economy,
                and types of transportation systems (road, rail, sea, air).
              </Typography>
              <Typography
                sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
              >
                2. Supply Chain Management: Overview of supply chain management,
                procurement and sourcing, inventory management, and distribution
                and logistics planning.
              </Typography>
              <Typography
                sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
              >
                3. Transportation Planning and Operations: Freight and vehicle
                management, transport economics and operations, network design
                and optimization.
              </Typography>
              <Typography
                sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
              >
                4. Air Transportation Operations: Overview of air transportation
                operations, airline operations and management, air cargo and
                logistics, air traffic management and control.
              </Typography>
              <Typography
                sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
              >
                5. Aviation Business and Regulation: Overview of aviation
                business and regulation, airline business models, aviation law
                and regulation, and airline economics and financial management.
              </Typography>
              <Typography
                sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
              >
                6. Logistics and Transportation Technology: Overview of
                logistics and transportation technology, transportation
                information systems and technology, GPS and GIS applications in
                transportation, transportation management systems and supply
                chain integration.
              </Typography>
              <Typography
                sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
              >
                7. Global Logistics and Trade: Overview of global logistics and
                trade, international trade and logistics operations, customs and
                border regulations, and global transportation network design and
                optimization.
              </Typography>
              <Typography
                sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
              >
                8. Sustainable Logistics and Transportation: Overview of
                sustainable logistics and transportation, sustainability in
                supply chain management, reducing the environmental impact of
                transportation, and promoting sustainable transportation
                practices.
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box
          id="digital-marketing"
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
              Digital Marketing
            </Typography>
            <img src={digitalMarketing} alt="" className="services-img" />
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
              The objective of digital marketing is to promote a brand, product
              or service through digital channels, with the aim of reaching a
              target audience and achieving marketing goals such as increased
              sales, brand awareness, and customer engagement.
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
              A basic understanding of marketing principles and strategies,
              Knowledge of digital channels and technologies, such as social
              media, search engines, email marketing, and online advertising,
              Familiarity with web design and development, HTML, and CSS,
              Knowledge of analytics and metrics, and the ability to measure and
              track the success of marketing campaigns and Strong communication,
              interpersonal, and organizational skills.
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
                  Introduction of Digital Marketing
                </Typography>
                <Box sx={{ p: { xs: 0.3, sm: 0.5, md: 1 } }}>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Overview of Digital Marketing
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} The importance of Digital Marketing
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} The evolution of Digital Marketing
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
                  Website Development & Optimization
                </Typography>
                <Box sx={{ p: { xs: 0.3, sm: 0.5, md: 1 } }}>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Overview of website development
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Website design and layout
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Search Engine Optimization (SEO)
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Website analytics and metrics
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
                  Search Engine Marketing (SEM)
                </Typography>
                <Box sx={{ p: { xs: 0.3, sm: 0.5, md: 1 } }}>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Overview of Search Engine Marketing
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Keyword research and targeting
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Pay-Per-Click (PPC) advertising
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Bid management and budget optimization
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
                  Email Marketing
                </Typography>
                <Box sx={{ p: { xs: 0.3, sm: 0.5, md: 1 } }}>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Overview of Email Marketing
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Email list building and management
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Email design and copywriting and Email marketing
                    metrics and analysis
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
                  Mobile Marketing
                </Typography>
                <Box sx={{ p: { xs: 0.3, sm: 0.5, md: 1 } }}>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Overview of Mobile Marketing
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Mobile website design and optimization
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Mobile app development and marketing
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"}
                    SMS and MMS marketing
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
                  Digital Marketing Analytics & Metrics
                </Typography>
                <Box sx={{ p: { xs: 0.3, sm: 0.5, md: 1 } }}>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Overview of Analytics and Metrics
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Tracking and measuring the success of digital
                    marketing campaigns
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Google Analytics and other digital marketing tools
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                  >
                    {"=>"} Data analysis and reporting.
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

export default SoftSkills;

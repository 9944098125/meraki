import { Box, Typography } from "@mui/material";
import React, { Fragment } from "react";
import domainExperts from "../Assets/Images/domainExpert.jfif";
import customizedTraining from "../Assets/Images/customizedTraining.avif";
import expertTrainers from "../Assets/Images/experts.webp";
import wiifm from "../Assets/Images/wiifm.png";
import roi from "../Assets/Images/roi.jpg";
import doubts from "../Assets/Images/doubts.jpg";
import biteSizeLearning from "../Assets/Images/biteSizeLearning.jpg";

function IRTCOTS() {
  return (
    <Fragment>
      <Box
        id="ircots"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          p: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Typography
          sx={{
            color: "primary.dark",
            fontWeight: "800",
            fontSize: { xs: "30px", sm: "45px", md: "50px" },
            width: "70%",
            textAlign: "center",
          }}
        >
          Irresistible Reasons To Choose Our Training Services
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            border: "2px solid black",
            minHeight: { xs: "80vh", sm: "50vh", md: "40vh" },
            width: "100%",
            gap: 3,
            p: 2,
            borderRadius: "9px",
            mb: { xs: 3, sm: 4, md: 5 },
          }}
        >
          <img src={domainExperts} alt="" className="whyUsImage" />
          <Box sx={{}}>
            <Typography
              sx={{
                color: "primary.dark",
                fontWeight: "600",
                fontSize: { xs: "15px", sm: "18px", md: "23px" },
                borderBottom: "2px solid #234e8e",
                display: "inline",
              }}
            >
              Domain expert Consultants
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "12px", sm: "15px", md: "19px" },
                mt: { xs: 2, sm: 3 },
              }}
            >
              We provide domain-specific consulting for application services.
              This is done by combining business and technology expertise to
              deliver comprehensive services for the application engagement
              lifecycle. Our domain experts help clients with strategy
              definition, value realization, implementation, and operations.
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            border: "2px solid black",
            minHeight: { xs: "80vh", sm: "50vh", md: "40vh" },
            width: "100%",
            gap: 3,
            p: 2,
            borderRadius: "9px",
            mb: { xs: 3, sm: 4, md: 5 },
          }}
        >
          <Box sx={{}}>
            <Typography
              sx={{
                color: "primary.dark",
                fontWeight: "600",
                fontSize: { xs: "15px", sm: "18px", md: "23px" },
                borderBottom: "2px solid #234e8e",
                display: "inline",
              }}
            >
              Customized Training Programs
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "12px", sm: "15px", md: "19px" },
                mt: { xs: 2, sm: 3 },
              }}
            >
              We meet the specific business needs of an organization with
              one-of-a-kind training content. An effective custom training
              program has targeted learning objectives and a clear plan for how
              the program will be structured and delivered to meet learning
              goals.
            </Typography>
          </Box>
          <img src={customizedTraining} alt="" className="whyUsImage" />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            border: "2px solid black",
            minHeight: { xs: "80vh", sm: "50vh", md: "40vh" },
            width: "100%",
            gap: 3,
            p: 2,
            borderRadius: "9px",
            mb: { xs: 3, sm: 4, md: 5 },
          }}
        >
          <img src={expertTrainers} alt="" className="whyUsImage" />
          <Box sx={{}}>
            <Typography
              sx={{
                color: "primary.dark",
                fontWeight: "600",
                fontSize: { xs: "15px", sm: "18px", md: "23px" },
                borderBottom: "2px solid #234e8e",
                display: "inline",
              }}
            >
              Pool of 1700+ expert trainers in various technical and leadership
              domains
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "12px", sm: "15px", md: "19px" },
                mt: { xs: 2, sm: 3 },
              }}
            >
              Trainers can be regarded as simply “entertrainers,” so to speak.
              “Entertrainers” are subject matter experts who conduct classes and
              tackle with enough interest and enthusiasm so that the learners
              don't get lulled to sleep. We Provide expert trainers.
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            border: "2px solid black",
            minHeight: { xs: "80vh", sm: "50vh", md: "40vh" },
            width: "100%",
            gap: 3,
            p: 2,
            borderRadius: "9px",
            mb: { xs: 3, sm: 4, md: 5 },
          }}
        >
          <Box sx={{}}>
            <Typography
              sx={{
                color: "primary.dark",
                fontWeight: "600",
                fontSize: { xs: "15px", sm: "18px", md: "23px" },
                borderBottom: "2px solid #234e8e",
                display: "inline",
              }}
            >
              Established learning paths with WIIFM
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "12px", sm: "15px", md: "19px" },
                mt: { xs: 2, sm: 3 },
              }}
            >
              WIIFM stands for “What's in it for me?” The WIIFM may be one of
              the best tools in your communication's arsenal. While it may be an
              accident that the acronym contains the elements of your group's
              name, WFM, it may also be prophetic.
            </Typography>
          </Box>
          <img src={wiifm} alt="" className="whyUsImage" />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            border: "2px solid black",
            minHeight: { xs: "80vh", sm: "50vh", md: "40vh" },
            width: "100%",
            gap: 3,
            p: 2,
            borderRadius: "9px",
            mb: { xs: 3, sm: 4, md: 5 },
          }}
        >
          <img src={roi} alt="" className="whyUsImage" />
          <Box sx={{}}>
            <Typography
              sx={{
                color: "primary.dark",
                fontWeight: "600",
                fontSize: { xs: "15px", sm: "18px", md: "23px" },
                borderBottom: "2px solid #234e8e",
                display: "inline",
              }}
            >
              Post training assessments and reports to calculate the ROI
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "12px", sm: "15px", md: "19px" },
                mt: { xs: 2, sm: 3 },
              }}
            >
              Post-training evaluation is a critical part of any training
              program. Not only does it give you an idea of what the learners
              thought of the course, but more importantly, it tells you what's
              working and what's not. We give the learners clarification what in
              it for them ?
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            border: "2px solid black",
            minHeight: { xs: "80vh", sm: "50vh", md: "40vh" },
            width: "100%",
            gap: 3,
            p: 2,
            borderRadius: "9px",
            mb: { xs: 3, sm: 4, md: 5 },
          }}
        >
          <Box sx={{}}>
            <Typography
              sx={{
                color: "primary.dark",
                fontWeight: "600",
                fontSize: { xs: "15px", sm: "18px", md: "23px" },
                borderBottom: "2px solid #234e8e",
                display: "inline",
              }}
            >
              Doubt clearance sessions and post training support
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "12px", sm: "15px", md: "19px" },
                mt: { xs: 2, sm: 3 },
              }}
            >
              Our doubt clearing sessions are interactive, which means the
              communication is a two-way one. Asking doubts helps the tutor
              assess your level of understanding of a concept while it clarifies
              the concept for you. We in Post training support is essential in
              all training situations as it provides participants with further
              support and skills development.
            </Typography>
          </Box>
          <img src={doubts} alt="" className="whyUsImage" />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            border: "2px solid black",
            minHeight: { xs: "80vh", sm: "50vh", md: "40vh" },
            width: "100%",
            gap: 3,
            p: 2,
            borderRadius: "9px",
            mb: { xs: 3, sm: 4, md: 5 },
          }}
        >
          <img src={biteSizeLearning} alt="" className="whyUsImage" />
          <Box sx={{}}>
            <Typography
              sx={{
                color: "primary.dark",
                fontWeight: "600",
                fontSize: { xs: "15px", sm: "18px", md: "23px" },
                borderBottom: "2px solid #234e8e",
                display: "inline",
              }}
            >
              Blended learning model supporting bite-sized learning
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "12px", sm: "15px", md: "19px" },
                mt: { xs: 2, sm: 3 },
              }}
            >
              Bitesize learning is a way of teaching and learning where
              information is broken down into small, manageable chunks. This
              method makes it easier for students to understand and retain the
              information. It's called "bitesize" because the information is
              presented in bite-sized pieces, like a small snack.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
}

export default IRTCOTS;

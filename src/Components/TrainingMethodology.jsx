import { Box, Typography } from "@mui/material";
import React, { Fragment } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function TrainingMethodology() {
  React.useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <Fragment>
      <Box
        sx={{
          p: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          id="training-methodology"
          sx={{
            color: "primary.dark",
            fontWeight: "800",
            fontSize: { xs: "20px", sm: "35px", md: "40px" },
            mb: { xs: 2, md: 4 },
          }}
        >
          Our Training Methodology
        </Typography>
        <Box
          data-aos="fade-down"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 1,
            mt: 3,
            // mr: { xs: -2, sm: -3, md: -25 },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "12px", sm: "20px", md: "30px" },
              fontWeight: "700",
              color: "primary.dark",
            }}
          >
            1
          </Typography>
          <Box
            sx={{
              height: { xs: "100px", sm: "120px", md: "140px" },
              width: { xs: "100px", sm: "120px", md: "140px" },
              border: "4px solid #20E162",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "12px", sm: "15px", md: "18px" },
                fontWeight: "700",
                color: "primary.dark",
                textAlign: "center",
              }}
            >
              Training Need Analysis
            </Typography>
          </Box>
          <Box sx={{ width: "30%" }}>
            <Typography
              sx={{
                fontSize: { xs: "8px", sm: "10px", md: "13px" },
                fontWeight: "600",
                color: "primary.dark",
              }}
            >
              We understanding your employees challenges and skill needs by
              doing a deep dive training need analysis
            </Typography>
          </Box>
        </Box>

        <Box
          data-aos="fade-up"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 1,
            // ml: { xs: -2, sm: -3, md: -25 },
            mt: { xs: -2, sm: -4, md: -5 },
          }}
        >
          <Box sx={{ width: "30%" }}>
            <Typography
              sx={{
                fontSize: { xs: "8px", sm: "10px", md: "13px" },
                fontWeight: "600",
                color: "primary.dark",
              }}
            >
              Creating Tailor made content customized to fill the skill gap and
              enhance real time knowledge
            </Typography>
          </Box>
          <Box
            sx={{
              height: { xs: "120px", sm: "150px", md: "170px" },
              width: { xs: "120px", sm: "150px", md: "170px" },
              border: "4px solid #00B9F4",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "12px", sm: "15px", md: "18px" },
                fontWeight: "700",
                color: "primary.dark",
                textAlign: "center",
              }}
            >
              Tailored Learning Paths
            </Typography>
          </Box>
          <Typography
            sx={{
              fontSize: { xs: "12px", sm: "20px", md: "30px" },
              fontWeight: "700",
              color: "primary.dark",
            }}
          >
            2
          </Typography>
        </Box>

        <Box
          data-aos="fade-down"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 1,
            // mr: { xs: -2, sm: -3, md: -25 },
            mt: { xs: -2, sm: -4, md: -7 },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "12px", sm: "20px", md: "30px" },
              fontWeight: "700",
              color: "primary.dark",
            }}
          >
            3
          </Typography>
          <Box
            sx={{
              height: { xs: "130px", sm: "150px", md: "210px" },
              width: { xs: "130px", sm: "150px", md: "210px" },
              border: "4px solid #D1DEE1",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "12px", sm: "15px", md: "18px" },
                fontWeight: "700",
                color: "primary.dark",
                textAlign: "center",
              }}
            >
              Expert-Led Training Sessions
            </Typography>
          </Box>
          <Box sx={{ width: "30%" }}>
            <Typography
              sx={{
                fontSize: { xs: "8px", sm: "10px", md: "13px" },
                fontWeight: "600",
                color: "primary.dark",
              }}
            >
              Our Training Experts train and guide the learner throughout the
              program using case studies and simulation projects
            </Typography>
          </Box>
        </Box>

        <Box
          data-aos="fade-up"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 1,
            // ml: { xs: -2, sm: -3, md: -25 },
            mt: { xs: -2, sm: -4, md: -7 },
          }}
        >
          <Box sx={{ width: "30%" }}>
            <Typography
              sx={{
                fontSize: { xs: "8px", sm: "10px", md: "13px" },
                fontWeight: "600",
                color: "primary.dark",
              }}
            >
              The Learning outcome is assessed via 4 level evaluation
              techniques. They are Pre-Assessments, Mid-Assessments,
              Post-Assessments and Capstone Projects
            </Typography>
          </Box>

          <Box
            sx={{
              height: { xs: "150px", sm: "180px", md: "240px" },
              width: { xs: "150px", sm: "180px", md: "240px" },
              border: "4px solid #004AAD",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "12px", sm: "15px", md: "18px" },
                fontWeight: "700",
                color: "primary.dark",
                textAlign: "center",
              }}
            >
              4 - Check Point Evaluation
            </Typography>
          </Box>
          <Typography
            sx={{
              fontSize: { xs: "12px", sm: "20px", md: "30px" },
              fontWeight: "700",
              color: "primary.dark",
            }}
          >
            4
          </Typography>
        </Box>

        <Box
          data-aos="fade-down"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 1,
            // mr: { xs: -2, sm: -3, md: -25 },
            mt: { xs: -2, sm: -4, md: -7 },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "12px", sm: "20px", md: "30px" },
              fontWeight: "700",
              color: "primary.dark",
            }}
          >
            5
          </Typography>
          <Box
            sx={{
              height: { xs: "190px", sm: "210px", md: "270px" },
              width: { xs: "190px", sm: "210px", md: "270px" },
              border: "4px solid #CFCEDB",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "12px", sm: "15px", md: "18px" },
                fontWeight: "700",
                color: "primary.dark",
                textAlign: "center",
              }}
            >
              360 degree Feedback
            </Typography>
          </Box>
          <Box sx={{ width: "30%" }}>
            <Typography
              sx={{
                fontSize: { xs: "8px", sm: "10px", md: "13px" },
                fontWeight: "600",
                color: "primary.dark",
              }}
            >
              A 360 degree qualitative and quantitative feedback is exchanged in
              the training programs
            </Typography>
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
}

export default TrainingMethodology;

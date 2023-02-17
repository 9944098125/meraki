import { Typography, Box } from "@mui/material";
import React, { Fragment } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function IRTCOSS() {
  React.useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <Fragment>
      <Box
        id="irtcoss"
        sx={{
          p: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            color: "primary.dark",
            fontWeight: "800",
            fontSize: { xs: "20px", sm: "35px", md: "40px" },
            width: "70%",
            textAlign: "center",
            mb: { xs: 2, md: 3 },
          }}
        >
          Irresistible Reasons To Choose Our Staffing Services
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: { xs: "95%", sm: "95%", md: "95%" },
          }}
        >
          <Box
            data-aos="fade-up"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              px: 2,
              py: 0,
              width: "100%",
              mb: 3,
            }}
          >
            <Box
              sx={{
                width: "45%",
                p: 1,
                py: 0,
                display: "flex",
                justifyContent: "center",
              }}
            >
              {/* content */}
              <Typography
                sx={{
                  fontSize: {
                    xs: "8px",
                    sm: "10px",
                    md: "12px",
                    textAlign: "center",
                  },
                }}
              >
                Streamlined Hiring Process backed by Industry Hiring Experts
              </Typography>
            </Box>
            <Box
              sx={{
                width: "10%",
                p: 2,
                py: 0,
                display: "flex",
                justifyContent: "center",
                backgroundColor: "orange",
              }}
            >
              {/* number */}
              <Typography
                sx={{
                  fontSize: { xs: "25px", sm: "30px", md: "40px" },
                  fontWeight: "900",
                  color: "white",
                }}
              >
                1.
              </Typography>
            </Box>
            <Box
              sx={{
                width: "45%",
                p: 2,
                py: 0,
                display: "flex",
                justifyContent: "center",
              }}
            >
              {/* image */}
              <img
                src="https://thumbs.dreamstime.com/b/job-search-human-resources-recruitment-career-business-internet-technology-concept-job-search-human-resources-recruitment-career-101330689.jpg"
                alt=""
                className="irtcoss-images"
              />
            </Box>
          </Box>

          <Box
            data-aos="fade-down"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              px: 2,
              py: 0,
              width: "100%",
              mb: 3,
            }}
          >
            <Box
              sx={{
                width: "45%",
                p: 2,
                py: 0,
                display: "flex",
                justifyContent: "center",
              }}
            >
              {/* image */}
              <img
                src="https://thumbs.dreamstime.com/b/job-search-human-resources-recruitment-career-business-internet-technology-concept-job-search-human-resources-recruitment-career-101330689.jpg"
                alt=""
                className="irtcoss-images"
              />
            </Box>
            <Box
              sx={{
                width: "10%",
                p: 2,
                py: 0,
                display: "flex",
                justifyContent: "center",
                backgroundColor: "orange",
              }}
            >
              {/* number */}
              <Typography
                sx={{
                  fontSize: { xs: "25px", sm: "30px", md: "40px" },
                  fontWeight: "900",
                  color: "white",
                }}
              >
                2.
              </Typography>
            </Box>
            <Box
              sx={{
                width: "45%",
                p: 1,
                py: 0,
                display: "flex",
                justifyContent: "center",
              }}
            >
              {/* content */}
              <Typography
                sx={{
                  fontSize: {
                    xs: "8px",
                    sm: "10px",
                    md: "12px",
                    textAlign: "center",
                  },
                }}
              >
                Multi Industry Delivery Expertise
              </Typography>
            </Box>
          </Box>

          <Box
            data-aos="fade-up"
            sx={{
              py: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              px: 2,
              width: "100%",
              mb: 3,
            }}
          >
            <Box
              sx={{
                width: "45%",
                p: 1,
                py: 0,
                display: "flex",
                justifyContent: "center",
              }}
            >
              {/* content */}
              <Typography
                sx={{
                  py: 0,
                  fontSize: {
                    xs: "8px",
                    sm: "10px",
                    md: "12px",
                    textAlign: "center",
                  },
                }}
              >
                Customized HIRE-TRAIN-DEPLOY Models
              </Typography>
            </Box>
            <Box
              sx={{
                width: "10%",
                p: 2,
                py: 0,
                display: "flex",
                justifyContent: "center",
                backgroundColor: "orange",
              }}
            >
              {/* number */}
              <Typography
                sx={{
                  fontSize: { xs: "25px", sm: "30px", md: "40px" },
                  fontWeight: "900",
                  color: "white",
                }}
              >
                3.
              </Typography>
            </Box>
            <Box
              sx={{
                width: "45%",
                p: 2,
                py: 0,
                display: "flex",
                justifyContent: "center",
              }}
            >
              {/* image */}
              <img
                src="https://thumbs.dreamstime.com/b/job-search-human-resources-recruitment-career-business-internet-technology-concept-job-search-human-resources-recruitment-career-101330689.jpg"
                alt=""
                className="irtcoss-images"
              />
            </Box>
          </Box>

          <Box
            data-aos="fade-down"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              px: 2,
              py: 1,
              width: "100%",
              mb: 3,
            }}
          >
            <Box
              sx={{
                width: "45%",
                p: 2,
                py: 0,
                display: "flex",
                justifyContent: "center",
              }}
            >
              {/* image */}
              <img
                src="https://thumbs.dreamstime.com/b/job-search-human-resources-recruitment-career-business-internet-technology-concept-job-search-human-resources-recruitment-career-101330689.jpg"
                alt=""
                className="irtcoss-images"
              />
            </Box>
            <Box
              sx={{
                width: "10%",
                p: 2,
                py: 0,
                display: "flex",
                justifyContent: "center",
                backgroundColor: "orange",
              }}
            >
              {/* number */}
              <Typography
                sx={{
                  fontSize: { xs: "25px", sm: "30px", md: "40px" },
                  fontWeight: "900",
                  color: "white",
                }}
              >
                4.
              </Typography>
            </Box>
            <Box
              sx={{
                width: "45%",
                p: 1,
                py: 0,
                display: "flex",
                justifyContent: "center",
              }}
            >
              {/* content */}
              <Typography
                sx={{
                  fontSize: {
                    xs: "8px",
                    sm: "10px",
                    md: "12px",
                    textAlign: "center",
                  },
                }}
              >
                360°solutions with end to end services - sourcing to on boarding
              </Typography>
            </Box>
          </Box>

          <Box
            data-aos="fade-up"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              px: 2,
              py: 1,
              width: "100%",
              mb: 3,
            }}
          >
            <Box
              sx={{
                width: "45%",
                p: 1,
                py: 0,
                display: "flex",
                justifyContent: "center",
              }}
            >
              {/* content */}
              <Typography
                sx={{
                  fontSize: {
                    xs: "8px",
                    sm: "10px",
                    md: "12px",
                    textAlign: "center",
                  },
                }}
              >
                Delivery excellence satisfy organization's technical and
                cultural fitness
              </Typography>
            </Box>
            <Box
              sx={{
                width: "10%",
                p: 2,
                py: 0,
                display: "flex",
                justifyContent: "center",
                backgroundColor: "orange",
              }}
            >
              {/* number */}
              <Typography
                sx={{
                  fontSize: { xs: "25px", sm: "30px", md: "40px" },
                  fontWeight: "900",
                  color: "white",
                }}
              >
                5.
              </Typography>
            </Box>
            <Box
              sx={{
                width: "45%",
                p: 2,
                py: 0,
                display: "flex",
                justifyContent: "center",
              }}
            >
              {/* image */}
              <img
                src="https://thumbs.dreamstime.com/b/job-search-human-resources-recruitment-career-business-internet-technology-concept-job-search-human-resources-recruitment-career-101330689.jpg"
                alt=""
                className="irtcoss-images"
              />
            </Box>
          </Box>

          <Box
            data-aos="fade-up"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              px: 2,
              py: 1,
              width: "100%",
              mb: 3,
            }}
          >
            <Box
              sx={{
                width: "45%",
                p: 2,
                py: 0,
                display: "flex",
                justifyContent: "center",
              }}
            >
              {/* image */}
              <img
                src="https://thumbs.dreamstime.com/b/job-search-human-resources-recruitment-career-business-internet-technology-concept-job-search-human-resources-recruitment-career-101330689.jpg"
                alt=""
                className="irtcoss-images"
              />
            </Box>
            <Box
              sx={{
                width: "10%",
                p: 2,
                py: 0,
                display: "flex",
                justifyContent: "center",
                backgroundColor: "orange",
              }}
            >
              {/* number */}
              <Typography
                sx={{
                  fontSize: { xs: "25px", sm: "30px", md: "40px" },
                  fontWeight: "900",
                  color: "white",
                }}
              >
                6.
              </Typography>
            </Box>
            <Box
              sx={{
                width: "45%",
                p: 1,
                py: 0,
                display: "flex",
                justifyContent: "center",
              }}
            >
              {/* content */}
              <Typography
                sx={{
                  fontSize: {
                    xs: "8px",
                    sm: "10px",
                    md: "12px",
                    textAlign: "center",
                  },
                }}
              >
                Guaranteed TAT (turn-around-time) for service delivery
              </Typography>
            </Box>
          </Box>

          <Box
            data-aos="fade-down"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              px: 2,
              py: 1,
              width: "100%",
              mb: 3,
            }}
          >
            <Box
              sx={{
                width: "45%",
                p: 1,
                py: 0,
                display: "flex",
                justifyContent: "center",
              }}
            >
              {/* content */}
              <Typography
                sx={{
                  fontSize: {
                    xs: "8px",
                    sm: "10px",
                    md: "12px",
                    textAlign: "center",
                  },
                }}
              >
                Turnkey solutions deciphering to a significant saving in time
                and expenses
              </Typography>
            </Box>
            <Box
              sx={{
                width: "10%",
                p: 2,
                py: 0,
                display: "flex",
                justifyContent: "center",
                backgroundColor: "orange",
              }}
            >
              {/* number */}
              <Typography
                sx={{
                  fontSize: { xs: "25px", sm: "30px", md: "40px" },
                  fontWeight: "900",
                  color: "white",
                }}
              >
                7.
              </Typography>
            </Box>
            <Box
              sx={{
                width: "45%",
                p: 2,
                py: 0,
                display: "flex",
                justifyContent: "center",
              }}
            >
              {/* image */}
              <img
                src="https://thumbs.dreamstime.com/b/job-search-human-resources-recruitment-career-business-internet-technology-concept-job-search-human-resources-recruitment-career-101330689.jpg"
                alt=""
                className="irtcoss-images"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
}

export default IRTCOSS;

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
                  width: "50%",
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
                backgroundColor: "#9F2B68",
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
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf4Y9bmpEamBLuJN0JYhRExJHCQY-2cqhZDQ&usqp=CAU"
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
                backgroundColor: "#DAF7A6",
              }}
            >
              {/* number */}
              <Typography
                sx={{
                  fontSize: { xs: "25px", sm: "30px", md: "40px" },
                  fontWeight: "900",
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
                  width: "50%",
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
                backgroundColor: "#E0B0FF",
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
                src="https://digitovate.com/wp-content/uploads/2021/05/HTD.jpg"
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
                src="https://cdn-icons-png.flaticon.com/512/4560/4560194.png"
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
                backgroundColor: "#CCCCFF",
              }}
            >
              {/* number */}
              <Typography
                sx={{
                  fontSize: { xs: "25px", sm: "30px", md: "40px" },
                  fontWeight: "900",
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
                  width: "50%",
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
                  width: "50%",
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
                backgroundColor: "#7F00FF",
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
                src="data:image/jpeg;base64,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"
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
                src="data:image/png;base64,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"
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
                backgroundColor: "#BDB5D5",
              }}
            >
              {/* number */}
              <Typography
                sx={{
                  fontSize: { xs: "25px", sm: "30px", md: "40px" },
                  fontWeight: "900",
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
                  width: "50%",
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
                  width: "50%",
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
                src="data:image/png;base64,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"
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

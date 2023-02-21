import { Typography, Box } from "@mui/material";
import React, { Fragment } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import degrees from "../Assets/Images/360.jpg";
import deliveryExcellence from "../Assets/Images/deliveryExcellence.jpg";
import htd from "../Assets/Images/solution.jpg";
import industryDelivery from "../Assets/Images/industryDelivery.jpg";
import industryHiring from "../Assets/Images/industryHiringExperts.jpg";

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
                py: 1,
                display: "flex",
                justifyContent: "center",
                borderLeft: "4px solid #87fd9a",
                borderTop: "4px solid #87fd9a",
                borderBottom: "4px solid #87fd9a",
                borderRadius: "9px",
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
                backgroundColor: "#87fd9a",
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
                py: 2,
                display: "flex",
                justifyContent: "center",
                borderRight: "4px solid #87fd9a",
                borderTop: "4px solid #87fd9a",
                borderBottom: "4px solid #87fd9a",
                borderRadius: "9px",
              }}
            >
              {/* image */}
              <img src={industryHiring} alt="" className="irtcoss-images" />
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
                py: 2,
                display: "flex",
                justifyContent: "center",
                borderLeft: "4px solid #8798fd",
                borderTop: "4px solid #8798fd",
                borderBottom: "4px solid #8798fd",
                borderRadius: "9px",
              }}
            >
              {/* image */}
              <img src={industryDelivery} alt="" className="irtcoss-images" />
            </Box>
            <Box
              sx={{
                width: "10%",
                p: 2,
                py: 0,
                display: "flex",
                justifyContent: "center",
                backgroundColor: "#8798fd",
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
                py: 2.1,
                display: "flex",
                justifyContent: "center",
                borderRight: "4px solid #8798fd",
                borderTop: "4px solid #8798fd",
                borderBottom: "4px solid #8798fd",
                borderRadius: "9px",
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
                py: 2.1,
                display: "flex",
                justifyContent: "center",
                borderLeft: "4px solid #a17efd",
                borderTop: "4px solid #a17efd",
                borderBottom: "4px solid #a17efd",
                borderRadius: "9px",
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
                backgroundColor: "#a17efd",
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
                py: 2,
                display: "flex",
                justifyContent: "center",
                borderRight: "4px solid #a17efd",
                borderTop: "4px solid #a17efd",
                borderBottom: "4px solid #a17efd",
                borderRadius: "9px",
              }}
            >
              {/* image */}
              <img src={htd} alt="" className="irtcoss-images" />
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
                py: 2,
                display: "flex",
                justifyContent: "center",
                borderLeft: "4px solid #7efd8d",
                borderTop: "4px solid #7efd8d",
                borderBottom: "4px solid #7efd8d",
                borderRadius: "9px",
              }}
            >
              {/* image */}
              <img src={degrees} alt="" className="irtcoss-images" />
            </Box>
            <Box
              sx={{
                width: "10%",
                p: 2,
                py: 0,
                display: "flex",
                justifyContent: "center",
                backgroundColor: "#7efd8d",
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
                py: 1,
                display: "flex",
                justifyContent: "center",
                borderRight: "4px solid #7efd8d",
                borderTop: "4px solid #7efd8d",
                borderBottom: "4px solid #7efd8d",
                borderRadius: "9px",
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
                360° solutions with end to end services - sourcing to on
                boarding
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
                py: 1,
                display: "flex",
                justifyContent: "center",
                borderLeft: "4px solid #82a1e2",
                borderTop: "4px solid #82a1e2",
                borderBottom: "4px solid #82a1e2",
                borderRadius: "9px",
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
                backgroundColor: "#82a1e2",
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
                py: 2,
                display: "flex",
                justifyContent: "center",
                borderRight: "4px solid #82a1e2",
                borderTop: "4px solid #82a1e2",
                borderBottom: "4px solid #82a1e2",
                borderRadius: "9px",
              }}
            >
              {/* image */}
              <img src={industryDelivery} alt="" className="irtcoss-images" />
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
                py: 2,
                display: "flex",
                justifyContent: "center",
                borderLeft: "4px solid #a580cc",
                borderTop: "4px solid #a580cc",
                borderBottom: "4px solid #a580cc",
                borderRadius: "9px",
              }}
            >
              {/* image */}
              <img src={deliveryExcellence} alt="" className="irtcoss-images" />
            </Box>
            <Box
              sx={{
                width: "10%",
                p: 2,
                py: 0,
                display: "flex",
                justifyContent: "center",
                backgroundColor: "#a580cc",
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
                py: 1,
                display: "flex",
                justifyContent: "center",
                borderRight: "4px solid #a580cc",
                borderTop: "4px solid #a580cc",
                borderBottom: "4px solid #a580cc",
                borderRadius: "9px",
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
                py: 1,
                display: "flex",
                justifyContent: "center",
                borderLeft: "4px solid orange",
                borderTop: "4px solid orange",
                borderBottom: "4px solid orange",
                borderRadius: "9px",
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
                py: 2,
                display: "flex",
                justifyContent: "center",
                borderRight: "4px solid orange",
                borderTop: "4px solid orange",
                borderBottom: "4px solid orange",
                borderRadius: "9px",
              }}
            >
              {/* image */}
              <img src={htd} alt="" className="irtcoss-images" />
            </Box>
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
}

export default IRTCOSS;

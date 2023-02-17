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
            width: { xs: "95%", sm: "95%", md: "95%" },
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              borderRadius: "50%",
              border: "10px dashed purple",
              p: 2,
              width: { xs: "190px", sm: "240px", md: "350px" },
              height: { xs: "190px", sm: "240px", md: "350px" },
              m: 2,
              backgroundColor: "grey",
            }}
          >
            <Box
              data-aos="fade-up"
              sx={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                p: { xs: 2, sm: 1 },
                gap: 2,
                backgroundColor: "white",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              {/* content with number */}
              <Typography
                sx={{
                  fontSize: { xs: "9px", sm: "12px", md: "15px" },
                  fontWeight: "700",
                  width: "70%",
                  textAlign: "center",
                }}
              >
                Streamlined Hiring Process backed by Industry Hiring Experts
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: -1,
                }}
              >
                <Typography
                  sx={{
                    color: "purple",
                    fontWeight: "900",
                    fontSize: { xs: "30px", sm: "45px", md: "65px" },
                  }}
                >
                  1.
                </Typography>
                <img
                  src="https://hireology.com/wp-content/uploads/2020/04/Blog-Covers-96-scaled-1.jpg"
                  alt=""
                  className="irtcoss-images"
                />
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              borderRadius: "50%",
              border: "10px dashed red",
              p: 2,
              width: { xs: "190px", sm: "240px", md: "350px" },
              height: { xs: "190px", sm: "240px", md: "350px" },
              m: 2,
              backgroundColor: "grey",
            }}
          >
            <Box
              data-aos="fade-down"
              sx={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                p: { xs: 2, sm: 1 },
                gap: 2,
                backgroundColor: "white",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              {/* content with number */}
              <Typography
                sx={{
                  fontSize: { xs: "9px", sm: "12px", md: "15px" },
                  fontWeight: "700",
                  width: "80%",
                  textAlign: "center",
                }}
              >
                Multi Industry Delivery Expertise
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: -1,
                }}
              >
                <Typography
                  sx={{
                    color: "red",
                    fontWeight: "900",
                    fontSize: { xs: "30px", sm: "45px", md: "65px" },
                  }}
                >
                  2.
                </Typography>
                <img
                  src="https://s3.amazonaws.com/lowres.cartoonstock.com/business-commerce-logistic-trucker-truck_driver-trucker-lorry-mmln349_low.jpg"
                  alt=""
                  className="irtcoss-images"
                />
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              borderRadius: "50%",
              border: "10px dashed yellow",
              p: 2,
              width: { xs: "190px", sm: "240px", md: "350px" },
              height: { xs: "190px", sm: "240px", md: "350px" },
              m: 2,
              backgroundColor: "grey",
            }}
          >
            <Box
              data-aos="fade-up"
              sx={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                p: { xs: 2, sm: 1 },
                gap: 2,
                backgroundColor: "white",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              {/* content with number */}
              <Typography
                sx={{
                  fontSize: { xs: "9px", sm: "12px", md: "15px" },
                  fontWeight: "700",
                  width: "80%",
                  textAlign: "center",
                }}
              >
                Customized HIRE-TRAIN-DEPLOY Models
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: -1,
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "900",
                    fontSize: { xs: "30px", sm: "45px", md: "65px" },
                    color: "yellow",
                  }}
                >
                  3.
                </Typography>
                <img
                  src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/hire-train-deploy-model-itforce-itforce.jpg"
                  alt=""
                  className="irtcoss-images"
                />
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              borderRadius: "50%",
              border: "10px dashed orange",
              p: 2,
              width: { xs: "190px", sm: "240px", md: "350px" },
              height: { xs: "190px", sm: "240px", md: "350px" },
              m: 2,
              backgroundColor: "grey",
            }}
          >
            <Box
              data-aos="fade-down"
              sx={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                p: { xs: 2, sm: 1 },
                gap: 2,
                backgroundColor: "white",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              {/* content with number */}
              <Typography
                sx={{
                  fontSize: { xs: "9px", sm: "12px", md: "15px" },
                  fontWeight: "700",
                  width: "90%",
                  textAlign: "center",
                }}
              >
                360°solutions with end to end services - sourcing to on boarding
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: -1,
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "900",
                    fontSize: { xs: "30px", sm: "45px", md: "65px" },
                    color: "orange",
                  }}
                >
                  4.
                </Typography>
                <img
                  src="https://img.freepik.com/premium-vector/vector-cartoon-360-degrees-view-icon_574806-254.jpg?w=2000"
                  alt=""
                  className="irtcoss-images"
                />
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              borderRadius: "50%",
              border: "10px dashed green",
              p: 2,
              width: { xs: "190px", sm: "240px", md: "350px" },
              height: { xs: "190px", sm: "240px", md: "350px" },
              m: 2,
              backgroundColor: "grey",
            }}
          >
            <Box
              data-aos="fade-up"
              sx={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                p: { xs: 2, sm: 1 },
                gap: 2,
                backgroundColor: "white",
                display: "flex",
                flexDirection: "column",
                justifyContent: { xs: "none", sm: "space-around" },
                alignItems: "center",
              }}
            >
              {/* content with number */}
              <Typography
                sx={{
                  fontSize: { xs: "7px", sm: "10px", md: "15px" },
                  fontWeight: "700",
                  width: "90%",
                  textAlign: "center",
                }}
              >
                Delivery excellence satisfy organization's technical and
                cultural fitness
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: -1,
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "900",
                    fontSize: { xs: "25px", sm: "35px", md: "60px" },
                    color: "green",
                  }}
                >
                  5.
                </Typography>
                <img
                  src="https://marketingweek.imgix.net/content/uploads/2022/07/01165727/Free-culture-.jpg?auto=compress,enhance,format,redeye&crop=faces,entropy,edges&fit=crop&w=736&h=429"
                  alt=""
                  className="irtcoss-images"
                />
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              borderRadius: "50%",
              border: "10px dashed pink",
              p: 2,
              width: { xs: "190px", sm: "240px", md: "350px" },
              height: { xs: "190px", sm: "240px", md: "350px" },
              m: 2,
              backgroundColor: "grey",
            }}
          >
            <Box
              data-aos="fade-down"
              sx={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                p: { xs: 2, sm: 1 },
                gap: 2,
                backgroundColor: "white",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              {/* content with number */}
              <Typography
                sx={{
                  fontSize: { xs: "9px", sm: "12px", md: "15px" },
                  fontWeight: "700",
                  width: "90%",
                  textAlign: "center",
                }}
              >
                Guaranteed TAT (turn-around-time) for service delivery
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: -1,
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "900",
                    fontSize: { xs: "30px", sm: "45px", md: "65px" },
                    color: "pink",
                  }}
                >
                  6.
                </Typography>
                <img
                  src="https://media.istockphoto.com/id/1143474452/vector/time-management-icon-with-deadline-hurry-punctual-symbolism.jpg?s=612x612&w=0&k=20&c=E_JqiCh6UcvwBkAZbyHGuTPf3V9O_fBinfbtMlqLPYk="
                  alt=""
                  className="irtcoss-images"
                />
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              borderRadius: "50%",
              border: "10px dashed blue",
              p: 2,
              width: { xs: "190px", sm: "240px", md: "350px" },
              height: { xs: "190px", sm: "240px", md: "350px" },
              m: 2,
              backgroundColor: "grey",
            }}
          >
            <Box
              data-aos="fade-up"
              sx={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                p: { xs: 2, sm: 1 },
                gap: 2,
                backgroundColor: "white",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              {/* content with number */}
              <Typography
                sx={{
                  fontSize: { xs: "9px", sm: "12px", md: "15px" },
                  fontWeight: "700",
                  width: "70%",
                  textAlign: "center",
                }}
              >
                Turnkey solutions deciphering to a significant saving in time
                and expenses
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: -1,
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "900",
                    fontSize: { xs: "30px", sm: "45px", md: "65px" },
                    color: "blue",
                  }}
                >
                  7.
                </Typography>
                <img
                  src="https://img.freepik.com/premium-vector/illustration-vector-graphic-cartoon-character-time-management-scene-schedule-planning_516790-1235.jpg"
                  alt=""
                  className="irtcoss-images"
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
}

export default IRTCOSS;

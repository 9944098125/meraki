import React, { Fragment } from "react";
import Clients from "../Components/Clients";
import { Carousel } from "react-bootstrap";
import { Typography, Box } from "@mui/material";

function OurClients() {
  const [index, setIndex] = React.useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <Fragment>
      <Box sx={{ p: { xs: 1, sm: 2, md: 3 }, mb: 4 }}>
        <Clients />
        <Box sx={{ mb: { xs: 2, sm: 3, md: 5 } }}>
          <Typography
            sx={{
              fontSize: { xs: "20px", sm: "35px", md: "40px" },
              color: "primary.dark",
              fontWeight: "900",
            }}
          >
            What Our Clients Say
          </Typography>
        </Box>
        <Box
          id="wocs"
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
            // height: { xs: "100%", md: "52vh" },
            height: "100%",
          }}
        >
          <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            className="carousel"
            variant="dark"
          >
            <Carousel.Item className="carousel-item">
              <Box
                sx={{
                  pt: 2,
                  mb: { xs: 2, sm: 3, md: 4 },
                  px: { xs: 3, sm: 5, md: 10 },
                }}
              >
                <Typography
                  sx={{
                    fontSize: {
                      xs: "14px",
                      sm: "16px",
                      md: "18px",
                      textAlign: "center",
                    },
                  }}
                >
                  During training, the trainer was able to clarify us regarding
                  the trends followed in the industry and provide real life
                  examples. Thanks to the training team at Meraki.
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "15px", sm: "17px", md: "20px" },
                    fontWeight: "900",
                    color: "primary.dark",
                    fontStyle: "italic",
                    textAlign: "center",
                  }}
                >
                  - Rajeshwara Rao, Associate Director (HR)
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "15px", sm: "17px", md: "20px" },
                    fontWeight: "900",
                    color: "primary.dark",
                    fontStyle: "italic",
                  }}
                >
                  ALS Global
                </Typography>
              </Box>
            </Carousel.Item>
            <Carousel.Item className="carousel-item">
              <Box
                sx={{
                  pt: 2,
                  mb: { xs: 2, sm: 3, md: 4 },
                  px: { xs: 3, sm: 5, md: 10 },
                }}
              >
                <Typography
                  sx={{
                    fontSize: {
                      xs: "14px",
                      sm: "16px",
                      md: "18px",
                      textAlign: "center",
                    },
                  }}
                >
                  We are happy with the overall experience dealing with Meraki
                  for our training needs. They were able to understand our exact
                  expectations and help us identify the right Training plan.
                  They were very prompt in their response and service. We look
                  forward to their support going forward
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "15px", sm: "17px", md: "20px" },
                    fontWeight: "900",
                    color: "primary.dark",
                    fontStyle: "italic",
                  }}
                >
                  - Arasu M T, CEO
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "15px", sm: "17px", md: "20px" },
                    fontWeight: "900",
                    color: "primary.dark",
                    fontStyle: "italic",
                  }}
                >
                  Clicks Campus.
                </Typography>
              </Box>
            </Carousel.Item>
            <Carousel.Item className="carousel-item">
              <Box
                sx={{
                  pt: 2,
                  mb: { xs: 2, sm: 3, md: 4 },
                  px: { xs: 3, sm: 5, md: 10 },
                }}
              >
                <Typography
                  sx={{
                    fontSize: {
                      xs: "14px",
                      sm: "16px",
                      md: "18px",
                      textAlign: "center",
                    },
                  }}
                >
                  We are extremely pleased with the services Meraki has
                  provided. All of the trainers were exceptional, extremely
                  professional and knowledgeable and created positive learning
                  environments. They are professional, personable, resourceful,
                  and always willing to help meet our training needs.
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "15px", sm: "17px", md: "20px" },
                    fontWeight: "900",
                    color: "primary.dark",
                    fontStyle: "italic",
                  }}
                >
                  - Ashok C P, Symbiosis (Pune)
                </Typography>
              </Box>
            </Carousel.Item>
            <Carousel.Item className="carousel-item">
              <Box
                sx={{
                  pt: 2,
                  mb: { xs: 2, sm: 3, md: 4 },
                  px: { xs: 3, sm: 5, md: 10 },
                }}
              >
                <Typography
                  sx={{
                    fontSize: {
                      xs: "14px",
                      sm: "16px",
                      md: "18px",
                      textAlign: "center",
                    },
                  }}
                >
                  You all are definitely rocking. Thanks for providing and
                  delivering well structured courses through competent mentoring
                  and active teaching methods. The training provided is
                  completely based on real time applications and practical way
                  of finding solutions. The classes are very interactive and
                  expand our knowledge. Provisions provided for practicing real
                  time projects are very helpful
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "15px", sm: "17px", md: "20px" },
                    fontWeight: "900",
                    color: "primary.dark",
                    fontStyle: "italic",
                    textAlign: "center",
                  }}
                >
                  - Capt Vibha Sharma, General Manager (HR).
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "15px", sm: "17px", md: "20px" },
                    fontWeight: "900",
                    color: "primary.dark",
                    fontStyle: "italic",
                  }}
                >
                  CNP Pvt. Ltd.
                </Typography>
              </Box>
            </Carousel.Item>
            <Carousel.Item className="carousel-item">
              <Box
                sx={{
                  pt: 2,
                  mb: { xs: 2, sm: 3, md: 4 },
                  px: { xs: 3, sm: 5, md: 10 },
                }}
              >
                <Typography
                  sx={{
                    fontSize: {
                      xs: "14px",
                      sm: "16px",
                      md: "18px",
                      textAlign: "center",
                    },
                  }}
                >
                  All of the trainers were excellent, extremely professional and
                  knowledgeable and created positive learning environments. As
                  the Director of Training, I received nothing but positive
                  feedback about all of the instructors who came to us via
                  meraki.
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "15px", sm: "17px", md: "20px" },
                    fontWeight: "900",
                    color: "primary.dark",
                    fontStyle: "italic",
                  }}
                >
                  - Swaroopa, Talent Acquisition
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "15px", sm: "17px", md: "20px" },
                    fontWeight: "900",
                    color: "primary.dark",
                    fontStyle: "italic",
                  }}
                >
                  Iamneo.ai
                </Typography>
              </Box>
            </Carousel.Item>
            <Carousel.Item className="carousel-item">
              <Box
                sx={{
                  pt: 2,
                  mb: { xs: 2, sm: 3, md: 4 },
                  px: { xs: 3, sm: 5, md: 10 },
                }}
              >
                <Typography
                  sx={{
                    fontSize: {
                      xs: "14px",
                      sm: "16px",
                      md: "18px",
                      textAlign: "center",
                    },
                  }}
                >
                  Indira is an enterprising person full of rigour and enthusiasm
                  who loves to make things happen for her client. We are working
                  with Indira and her company Meraki forTrainer sourcing and we
                  have had a very good success in our Trainer intakes. It is
                  always a pleasure to work with people like Indira who is a
                  quick learner and is always on top of things and who is eager
                  to grow and serve.. or in her own words, she is a Meraki's
                  person. One who loves to put every thing in to her work!
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "15px", sm: "17px", md: "20px" },
                    fontWeight: "900",
                    color: "primary.dark",
                    fontStyle: "italic",
                  }}
                >
                  - Raghesh G Menon, CEO
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "15px", sm: "17px", md: "20px" },
                    fontWeight: "900",
                    color: "primary.dark",
                    fontStyle: "italic",
                  }}
                >
                  Scooppin
                </Typography>
              </Box>
            </Carousel.Item>
          </Carousel>
          {/* <Box
            sx={{
              display: { xs: "none", sm: "block" },
              width: "50%",
              height: "100%",
            }}
          >
            <img
              src="https://peopledecode.com/wp-content/uploads/2022/02/Call_to_Actions1.png"
              alt="carousel"
              style={{ height: "100%", width: "100%" }}
              className="carouselImage"
            />
          </Box> */}
        </Box>
      </Box>
    </Fragment>
  );
}

export default OurClients;

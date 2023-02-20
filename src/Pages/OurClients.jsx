import React, { Fragment } from "react";
import Clients from "../Components/Clients";
import { Carousel } from "react-bootstrap";
import { Typography, Box } from "@mui/material";

function OurClients() {
  return (
    <Fragment>
      <Box sx={{ p: { xs: 1, sm: 2, md: 3 }, mb: 4 }}>
        <Clients />
        <Typography
          sx={{
            fontSize: { xs: "20px", sm: "35px", md: "40px" },
            color: "primary.dark",
            fontWeight: "900",
            mb: { xs: 2, sm: 3, md: 5 },
          }}
        >
          What Our Clients Say
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
            height: { xs: "100%", md: "52vh" },
          }}
        >
          <Carousel className="carousel">
            <Carousel.Item>
              <Box sx={{}}>
                <Typography
                  sx={{
                    fontSize: { xs: "12px", sm: "14px", md: "16px" },
                    fontWeight: "800",
                    color: "primary.dark",
                    fontStyle: "italic",
                  }}
                >
                  Rajeshwara Rao, Associate Director[HR], ALS Global.
                </Typography>
                <Box sx={{ pt: 2, pl: 2 }}>
                  <Typography
                    sx={{ fontSize: { xs: "14px", sm: "16px", md: "18px" } }}
                  >
                    During training, the trainer was able to clarify us
                    regarding the trends followedintheindustry and provide real
                    life examples. Thanks to the training teamat Meraki.
                  </Typography>
                </Box>
              </Box>
            </Carousel.Item>
            <Carousel.Item>
              <Box sx={{}}>
                <Typography
                  sx={{
                    fontSize: { xs: "12px", sm: "14px", md: "16px" },
                    fontWeight: "800",
                    color: "primary.dark",
                    fontStyle: "italic",
                  }}
                >
                  - Arasu MT , CEO, Clicks Campus
                </Typography>
                <Box sx={{ pt: 2, pl: 2 }}>
                  <Typography
                    sx={{ fontSize: { xs: "14px", sm: "16px", md: "18px" } }}
                  >
                    We are happy with the overall experience dealing with Meraki
                    for our trainingneeds. They were able to understand our
                    exact expectations and help us identify the right Training
                    plan. They were very prompt in their response and service.
                    We look forwardto their support going forward
                  </Typography>
                </Box>
              </Box>
            </Carousel.Item>
            <Carousel.Item>
              <Box sx={{}}>
                <Typography
                  sx={{
                    fontSize: { xs: "12px", sm: "14px", md: "16px" },
                    fontWeight: "800",
                    color: "primary.dark",
                    fontStyle: "italic",
                  }}
                >
                  Ashok CP, Symbiosis (Pune)
                </Typography>
                <Box sx={{ pt: 2, pl: 2 }}>
                  <Typography
                    sx={{ fontSize: { xs: "14px", sm: "16px", md: "18px" } }}
                  >
                    We are extremely pleased with the services Meraki has
                    provided. All of the trainers were exceptional, extremely
                    professional and knowledgeable and created positivelearning
                    environments. They are professional, personable,
                    resourceful, and always willing to help meet our training
                    needs.
                  </Typography>
                </Box>
              </Box>
            </Carousel.Item>
            <Carousel.Item>
              <Box sx={{}}>
                <Typography
                  sx={{
                    fontSize: { xs: "12px", sm: "14px", md: "16px" },
                    fontWeight: "800",
                    color: "primary.dark",
                    fontStyle: "italic",
                  }}
                >
                  Capt Vibha Sharma, General Manager (HR), CNP Pvt. Ltd.
                </Typography>
                <Box sx={{ pt: 2, pl: 2 }}>
                  <Typography
                    sx={{ fontSize: { xs: "14px", sm: "16px", md: "18px" } }}
                  >
                    You all are definitely rocking. Thanks for providing and
                    delivering well structuredcourses through competent
                    mentoring and ef ective teaching methods. The
                    trainingprovided is completely based on real time
                    applications and practical way of findingsolutions. The
                    classes are very interactive and expand our knowledge.
                    Provisions provided for practicing real time projects are
                    very helpful
                  </Typography>
                </Box>
              </Box>
            </Carousel.Item>
            <Carousel.Item>
              <Box sx={{}}>
                <Typography
                  sx={{
                    fontSize: { xs: "12px", sm: "14px", md: "16px" },
                    fontWeight: "800",
                    color: "primary.dark",
                    fontStyle: "italic",
                  }}
                >
                  Swaroopa, Talent Acquisition, Iamneo.ai
                </Typography>
                <Box sx={{ pt: 2, pl: 2 }}>
                  <Typography
                    sx={{ fontSize: { xs: "14px", sm: "16px", md: "18px" } }}
                  >
                    All of the trainers were excellent, extremely professional
                    and knowledgeable andcreated positive learning environments.
                    As the Director of Training, I receivednothingbut positive
                    feedback about all of the instructors who came to us via
                    meraki.
                  </Typography>
                </Box>
              </Box>
            </Carousel.Item>
            <Carousel.Item>
              <Box sx={{}}>
                <Typography
                  sx={{
                    fontSize: { xs: "12px", sm: "14px", md: "16px" },
                    fontWeight: "800",
                    color: "primary.dark",
                    fontStyle: "italic",
                  }}
                >
                  - Raghesh GMenon, CEO, Scooppin
                </Typography>
                <Box sx={{ pt: 2, pl: 2 }}>
                  <Typography
                    sx={{ fontSize: { xs: "14px", sm: "16px", md: "18px" } }}
                  >
                    Indira is an enterprising person full of rigour and
                    enthusiasm who loves to make things happen for her client.
                    We are working with Indira and her company Meraki forTrainer
                    sourcing and we have had a very good success in our Trainer
                    intakes. It is always a pleasure to work with people like
                    Indira who is a quick learner and is alwayson top of things
                    and who is eager to grow and serve.. or in her own words,
                    she is a'Meraki' person. One who loves to put every thing in
                    to her work!
                  </Typography>
                </Box>
              </Box>
            </Carousel.Item>
          </Carousel>
          <Box
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
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
}

export default OurClients;

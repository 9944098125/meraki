import { Box, Typography } from "@mui/material";
import React, { Fragment } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function IRTCOTS() {
  React.useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

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
            fontSize: { xs: "20px", sm: "35px", md: "40px" },
            width: "70%",
            textAlign: "center",
          }}
        >
          Irresistible Reasons To Choose Our Training Services
        </Typography>

        {/* each row with image, heading and content */}
        <Box
          data-aos="fade-up"
          sx={{
            display: "flex",
            alignItems: "center",
            width: "80%",
            backgroundColor: "white",
            boxShadow: "5px 5px 5px 0px #1a237e",
            borderTopLeftRadius: "75px",
            borderBottomLeftRadius: "75px",
            p: 1,
            borderRight: {
              xs: "15px solid orange",
              sm: "20px solid orange",
              md: "30px solid orange",
            },
            mb: { xs: 2, sm: 3, md: 4 },
          }}
        >
          <Box sx={{ p: { xs: 1, sm: 2 } }}>
            <img
              src="https://thumbs.dreamstime.com/b/word-writing-text-sme-subject-matter-expert-business-photo-showcasing-authority-particular-area-topic-domain-concept-160486304.jpg"
              className="irtcots-images"
              alt=""
              style={{
                border: "10px solid orange",
              }}
            />
          </Box>
          <Box sx={{}}>
            <Typography
              sx={{
                color: "orange",
                fontWeight: "800",
                fontSize: { xs: "12px", sm: "15px", md: "18px" },
              }}
            >
              Domain Expert Consultants
            </Typography>
            <Typography
              sx={{
                color: "primary.dark",
                fontSize: { xs: "7px", sm: "10px", md: "12px" },
              }}
            >
              Domain expert consultants are professionals with specialized
              knowledge and experience in a particular industry or field. They
              offer expert advice and guidance to businesses, organizations, or
              individuals operating within that industry.
            </Typography>
          </Box>
        </Box>

        <Box
          data-aos="fade-up"
          sx={{
            display: "flex",
            alignItems: "center",
            width: "80%",
            backgroundColor: "white",
            boxShadow: "5px 5px 5px 0px #1a237e",
            borderTopRightRadius: "75px",
            borderBottomRightRadius: "75px",
            p: 1,
            borderLeft: {
              xs: "15px solid blue",
              sm: "20px solid blue",
              md: "30px solid blue",
            },
            mb: { xs: 2, sm: 3, md: 4 },
          }}
        >
          <Box sx={{}}>
            <Typography
              sx={{
                color: "blue",
                fontWeight: "800",
                fontSize: { xs: "12px", sm: "15px", md: "18px" },
              }}
            >
              Customized Training Programs
            </Typography>
            <Typography
              sx={{
                color: "primary.dark",
                fontSize: { xs: "7px", sm: "10px", md: "12px" },
              }}
            >
              Customized training programs are training plans that are tailored
              to the specific needs, goals, and circumstances of an individual
              or organization, offering a one-size-fits-all approach, it is
              designed to meet the unique requirements of each client.
            </Typography>
          </Box>
          <Box sx={{ p: { xs: 1, sm: 2 } }}>
            <img
              src="https://media.istockphoto.com/id/1353769234/photo/training-and-skill-development-concept-with-icons-of-online-course-conference-seminar-webinar.jpg?b=1&s=170667a&w=0&k=20&c=Xvgely4jk8x3zPHifnzlsDg4Ou26QtH424SYrMfIbNo="
              className="irtcots-images"
              alt=""
              style={{
                border: "10px solid blue",
              }}
            />
          </Box>
        </Box>

        <Box
          data-aos="fade-up"
          sx={{
            display: "flex",
            alignItems: "center",
            width: "80%",
            backgroundColor: "white",
            boxShadow: "5px 5px 5px 0px #1a237e",
            borderTopLeftRadius: "75px",
            borderBottomLeftRadius: "75px",
            p: 1,
            borderRight: {
              xs: "15px solid pink",
              sm: "20px solid pink",
              md: "30px solid pink",
            },
            mb: { xs: 2, sm: 3, md: 4 },
          }}
        >
          <Box sx={{ p: { xs: 1, sm: 2 } }}>
            <img
              src="https://pdtraining.com.au/assets/images/stories/trainingteam.jpg"
              className="irtcots-images"
              alt=""
              style={{
                border: "10px solid pink",
              }}
            />
          </Box>
          <Box sx={{}}>
            <Typography
              sx={{
                color: "pink",
                fontWeight: "800",
                fontSize: { xs: "12px", sm: "15px", md: "18px" },
              }}
            >
              Pool of 1700+ expert trainers in various domains
            </Typography>
            <Typography
              sx={{
                color: "primary.dark",
                fontSize: { xs: "7px", sm: "10px", md: "12px" },
              }}
            >
              Expert trainers are typically sought after by organizations that
              require specialized training in specific areas such as sales,
              marketing, leadership, technology, or other areas where advanced
              knowledge and skills are necessary.
            </Typography>
          </Box>
        </Box>

        <Box
          data-aos="fade-up"
          sx={{
            display: "flex",
            alignItems: "center",
            width: "80%",
            backgroundColor: "white",
            boxShadow: "5px 5px 5px 0px #1a237e",
            borderTopRightRadius: "75px",
            borderBottomRightRadius: "75px",
            p: 1,
            borderLeft: {
              xs: "15px solid red",
              sm: "20px solid red",
              md: "30px solid red",
            },
            mb: { xs: 2, sm: 3, md: 4 },
          }}
        >
          <Box sx={{}}>
            <Typography
              sx={{
                color: "orange",
                fontWeight: "800",
                fontSize: { xs: "12px", sm: "15px", md: "18px" },
              }}
            >
              Established Learning Paths with WIIFM
            </Typography>
            <Typography
              sx={{
                color: "primary.dark",
                fontSize: { xs: "7px", sm: "10px", md: "12px" },
              }}
            >
              In a learning path with "WIIFM," learners are able to set personal
              goals and choose the specific skills and knowledge they want to
              develop. The training program is then customized to meet these
              individual needs.
            </Typography>
          </Box>
          <Box sx={{ p: { xs: 1, sm: 2 } }}>
            <img
              src="https://www.focusdm.biz/wp-content/uploads/2020/06/WIIFM.jpg"
              className="irtcots-images"
              alt=""
              style={{
                border: "10px solid red",
              }}
            />
          </Box>
        </Box>

        <Box
          data-aos="fade-up"
          sx={{
            display: "flex",
            alignItems: "center",
            width: "80%",
            backgroundColor: "white",
            boxShadow: "5px 5px 5px 0px #1a237e",
            borderTopLeftRadius: "75px",
            borderBottomLeftRadius: "75px",
            p: 1,
            borderRight: {
              xs: "15px solid green",
              sm: "20px solid green",
              md: "30px solid green",
            },
            mb: { xs: 2, sm: 3, md: 4 },
          }}
        >
          <Box sx={{ p: { xs: 1, sm: 2 } }}>
            <img
              src="https://www.qad.com/blog/wp-content/uploads/2018/12/CEBOS_Migration_Images_ROI_for_QMS.png"
              className="irtcots-images"
              alt=""
              style={{
                border: "10px solid green",
              }}
            />
          </Box>
          <Box sx={{}}>
            <Typography
              sx={{
                color: "orange",
                fontWeight: "800",
                fontSize: { xs: "12px", sm: "15px", md: "18px" },
              }}
            >
              Post Training Assessments to calculate the ROI
            </Typography>
            <Typography
              sx={{
                color: "primary.dark",
                fontSize: { xs: "7px", sm: "10px", md: "12px" },
              }}
            >
              Post-training assessments and reports are an essential tool for
              measuring the return on investment (ROI) of a training program.
              These assessments and reports help to evaluate the effectiveness
              of the training, identify areas for improvement, and determine the
              overall impact of the training on the organization.
            </Typography>
          </Box>
        </Box>

        <Box
          data-aos="fade-up"
          sx={{
            display: "flex",
            alignItems: "center",
            width: "80%",
            backgroundColor: "white",
            boxShadow: "5px 5px 5px 0px #1a237e",
            borderTopRightRadius: "75px",
            borderBottomRightRadius: "75px",
            p: 1,
            borderLeft: {
              xs: "15px solid violet",
              sm: "20px solid violet",
              md: "30px solid violet",
            },
            mb: { xs: 2, sm: 3, md: 4 },
          }}
        >
          <Box sx={{}}>
            <Typography
              sx={{
                color: "orange",
                fontWeight: "800",
                fontSize: { xs: "12px", sm: "15px", md: "18px" },
              }}
            >
              Doubt Clearance Sessions and Post Training Support
            </Typography>
            <Typography
              sx={{
                color: "primary.dark",
                fontSize: { xs: "7px", sm: "10px", md: "12px" },
              }}
            >
              Doubt clearance sessions and post-training support are critical
              components of a comprehensive training program that ensures
              participants have access to ongoing support and resources to
              reinforce their learning and address any questions or challenges
              that may arise.
            </Typography>
          </Box>
          <Box sx={{ p: { xs: 1, sm: 2 } }}>
            <img
              src="https://infinitylearn.com/surge/wp-content/uploads/2021/12/Doubts-App2-e1642577338872.jpg?v=1642484085"
              className="irtcots-images"
              alt=""
              style={{
                border: "10px solid violet",
              }}
            />
          </Box>
        </Box>

        <Box
          data-aos="fade-up"
          sx={{
            display: "flex",
            alignItems: "center",
            width: "80%",
            backgroundColor: "white",
            boxShadow: "5px 5px 5px 0px #1a237e",
            borderTopLeftRadius: "75px",
            borderBottomLeftRadius: "75px",
            p: 1,
            borderRight: {
              xs: "15px solid purple",
              sm: "20px solid purple",
              md: "30px solid purple",
            },
            mb: { xs: 2, sm: 3, md: 4 },
          }}
        >
          <Box sx={{ p: { xs: 1, sm: 2 } }}>
            <img
              src="https://elearningindustry.com/wp-content/uploads/2020/12/the-benefits-of-bite-sized-learning-strategies.jpg"
              className="irtcots-images"
              alt=""
              style={{
                border: "10px solid purple",
              }}
            />
          </Box>
          <Box sx={{}}>
            <Typography
              sx={{
                color: "orange",
                fontWeight: "800",
                fontSize: { xs: "12px", sm: "15px", md: "18px" },
              }}
            >
              Blended Learning Model supporting Bite-Sized-Learning
            </Typography>
            <Typography
              sx={{
                color: "primary.dark",
                fontSize: { xs: "7px", sm: "10px", md: "12px" },
              }}
            >
              Bite-sized learning, which breaks down learning content into short
              and focused segments, has become increasingly popular due to its
              convenience, accessibility, and ability to fit into busy
              schedules.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
}

export default IRTCOTS;

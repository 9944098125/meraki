import { Modal } from "@mui/material";
import React, { Fragment } from "react";
import { Box, Typography } from "@mui/material";
import MlogoMobile from "../Assets/Images/Mlogo_mobile.svg";
import ReactWhatsapp from "react-whatsapp";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import whatsapp from "../Assets/Images/whatsappIcon.svg";

const style = {
  position: "absolute",
  bottom: "200px",
  right: "45px",
  width: { xs: "250px", sm: "300px", md: "400px" },
  height: { xs: "200px", sm: "300px", md: "200px" },
  backgroundColor: "white",
  borderRadius: "9px",
  border: "none",
};

function WhatsappModal({ showWhatsappModal, close }) {
  return (
    <Fragment>
      <Modal open={showWhatsappModal} onClose={close}>
        <Box sx={style}>
          <Box
            sx={{
              backgroundColor: "primary.dark",
              height: "30%",
              width: "100%",
              p: 2,
              display: "flex",
              alignItems: "center",
              gap: 2,
              borderTopRightRadius: "9px",
              borderTopLeftRadius: "9px",
            }}
          >
            <img src={MlogoMobile} alt="" className="logo-in-whatsappModal" />
            <Box sx={{}}>
              <Typography
                sx={{
                  color: "white",
                  fontWeight: "700",
                  fontSize: { xs: "13px", sm: "15px", md: "20px" },
                }}
              >
                Meraki Training Solutions
              </Typography>
              <Typography
                sx={{
                  color: "white",
                  fontSize: { xs: "8px", sm: "10px", md: "15px" },
                }}
              >
                We Reply Instantly
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              backgroundImage:
                "url(https://i.pinimg.com/736x/8c/98/99/8c98994518b575bfd8c949e91d20548b.jpg)",
              backgroundSize: "cover",
              height: "100%",
              width: "100%",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              pl: 1,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "flex-start",
              }}
            >
              {/* <ArrowLeftIcon
                sx={{
                  color: "white",
                  fontSize: "65px",
                  mt: -2.5,
                  mr: -3.5,
                  display: "inline",
                }}
              /> */}
              <Box
                sx={{
                  backgroundColor: "white",
                  p: 2,
                  boxShadow: "5px 5px 5px 5px grey",
                  borderTopRightRadius: "9px",
                  borderBottomLeftRadius: "9px",
                  borderBottomRightRadius: "9px",
                  width: "75%",
                  mb: 2,
                }}
              >
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
                >
                  Hi There !
                </Typography>
                <Typography
                  sx={{ fontSize: { xs: "10px", sm: "12px", md: "14px" } }}
                >
                  Do you want to know more about our training and staffing
                  services ?
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              backgroundColor: "white",
              p: 2,
              borderBottomLeftRadius: "9px",
              borderBottomRightRadius: "9px",
            }}
          >
            <ReactWhatsapp
              style={{
                width: "100%",
                height: "45px",
                backgroundColor: "#3cb371",
                color: "white",
                borderRadius: "9px",
                border: "none",
              }}
              number="+91 74119 78909"
              message=""
            >
              <img
                src={whatsapp}
                alt=""
                className="w-button-icon"
                style={{ marginRight: "15px", backgroundColor: "#3cb371" }}
              />
              Let's Chat
            </ReactWhatsapp>
          </Box>
        </Box>
      </Modal>
    </Fragment>
  );
}

export default WhatsappModal;

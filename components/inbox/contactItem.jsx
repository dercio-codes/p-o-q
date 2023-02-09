import * as React from "react";
import {
  Box,
  Avatar,
  Drawer,
  Grid,
  Stack,
  Typography,
  Paper,
  Badge,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import MessageRounded from "@mui/icons-material/MessageRounded";
import CloseIcon from "@mui/icons-material/Close";
import VideoCallRounded from "@mui/icons-material/VideoCallRounded";
import PhoneCallbackRounded from "@mui/icons-material/PhoneCallbackRounded";

const ContactItem = ({
  name,
  date,
  userImage,
  lastMessage,
  messagesNumber,
}) => {
  const [modalState, setModalState] = React.useState(false);

  const handleAvatarClick = () => {
    setModalState(!modalState);
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : "350px",
        display: "flex",
        background: "#111",
        minHeight: "100vh",
        flexDirection: "column",
        color: "#eee",
        alignItems: "center",
      }}
      role="presentation"
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          height: "64px",
        }}
      >
        <Button sx={{ flex: 3 }} onClick={toggleDrawer(anchor, false)}>
          <CloseIcon sx={{ fill: "#111" }} />
        </Button>
        <Typography sx={{ flex: 9, textAlign: "" }}>
          Contact Information
        </Typography>
      </Box>
      <Avatar
        src={userImage}
        sx={{ cursor: "pointer", minWidth: "250px", minHeight: "250px" }}
        onClick={toggleDrawer(anchor, true)}
      />
      <Typography
        sx={{
          fontWeight: "600",
          fontSize: "28px",
          textAlign: "center",
          margin: "12px 0px",
        }}
      >
        {name}
      </Typography>
      <Typography
        sx={{ fontWeight: "600", textAlign: "center", margin: "8px 0px" }}
      >
        {messagesNumber}
      </Typography>
      <Box
        sx={{
          // background: "yellow",
          height: "auto",
          width: "100%",
          display: "flex",
          margin: "8px 0px 0px 0px",
          justifyContent: "space-evenly",
        }}
      >
        <Stack>
          <MessageRounded sx={{ margin: "6px auto" }} />
          <Typography margin={"6px 0px"}>Message</Typography>
        </Stack>
        <Stack>
          <VideoCallRounded sx={{ margin: "6px auto" }} />
          <Typography margin={"6px 0px"}>Video</Typography>
        </Stack>
        <Stack>
          <PhoneCallbackRounded sx={{ margin: "6px auto" }} />
          <Typography margin={"6px 0px"}>Phone</Typography>
        </Stack>
      </Box>
      <Accordion
        sx={{
          background: "#111",
          // color: "#ee",
          boxShadow: "none",
          width: "100%",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ fill: "" }} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography fontWeight={"600"} fontSize={"12px"} color="#eee">
            Media,Links and Photos
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box
            sx={{
              height: "180px",
              // background: "green",
              display: "flex",
              // justifyContent:'space-evenly',
              overflowY: "hidden",
              overflowX: "auto",
            }}
          >
            {[1, 2, 3, 4].map((item, index) => {
              return (
                <Paper
                  key={index}
                  elevation={2}
                  sx={{ background: "transparent" }}
                >
                  <Box
                    sx={{
                      // background: "red",
                      cursor: "pointer",
                      minWidth: "180px",
                      height: "150px",
                      margin: "16px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={"https://picsum.photos/200?random=" + item}
                      style={{ width: "100%" }}
                      at=""
                    />
                  </Box>
                </Paper>
              );
            })}
          </Box>
        </AccordionDetails>
      </Accordion>
      <Box>
        <Grid container>
          <Grid item></Grid>
          <Grid item></Grid>
        </Grid>
      </Box>
    </Box>
  );

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  return (
    <Box
      //   onClick={handleAvatarClick}
      sx={{
        minHeight: "72px",
        justifyContent: "space-between",
        display: "flex",
        alignItems: "center",
        padding: "16px 8px",
        // margin: "21px 0",
        borderTop: "1px solid rgba(1,1,1 , 0.3)",
        "&:hover": {
          background: "rgba(20,20,20,1)",
        },
      }}
    >
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Avatar
            src={userImage}
            sx={{ cursor: "pointer", width: "72px", height: "72px" }}
            onClick={toggleDrawer(anchor, true)}
          />
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
      <Stack
        sx={{
          width: "85%",
          height: "100%",
          padding: "0px 4px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            // background:'yellow',
            alignItems: "center",
            padding: "0 12px",
          }}
        >
          <Typography sx={{ fontWeight: 700, fontSize: "18px" }}>
            {name}
          </Typography>
          <Typography sx={{ fontWeight: 300, fontSize: "12px" }}>
            {date}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            // justifyContent: "space-evenly",
            // background:'yellow',
            alignItems: "center",
            padding: "0 12px",
          }}
        >
          <Typography
            noWrap
            sx={{
              background: "transparent",
              width: "90%",
              marginRight: "14px",
            }}
          >
            {lastMessage}
          </Typography>
          <Badge badgeContent={messagesNumber} color="success" />
        </Box>
      </Stack>
    </Box>
  );
};

export default ContactItem;

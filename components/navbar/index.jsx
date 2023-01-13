import { useState, useEffect } from "react";
import {
  Box,
  Grid,
  TextField,
  Button,
  Divider,
  Typography,
  MenuItem,
  Paper,
  Drawer,
  Fade,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import RecommendIcon from "@mui/icons-material/Recommend";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import CloseIcon from "@mui/icons-material/Close";

import AddIcon from "@mui/icons-material/Add";

export const Navbar = (props) => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const page = window.location.href.split("/");
    setActive(page.pop());
  }, []);
  return (
    <Box
      sx={{
        // minHeight: "100vh",
        background: "#111",
        // padding: { xs: "0 1.2rem", lg: "0 5rem" },
        width: "100%",
        position: "fixed",
        bottom: 0,
        height: "80px",
        zIndex: 9999,
        display: "flex",
        // justifyContent: "space-evenly",
      }}
    >
      <Button
        sx={{
          background: active == "home" ? "#F56EB3" : "transparent",
          "&:hover": { background: "#F56EB3" },
          flex: 1,
          borderRadius: "0",
        }}
      >
        <HomeIcon sx={{ color: "rgba(255,255,255,.7)" }} />
      </Button>
      <Button
        sx={{
          background: active == "search" ? "#1589FF" : "transparent",
          flex: 1,
          borderRadius: "0",
        }}
      >
        <SearchIcon sx={{ color: "rgba(255,255,255,.7)" }} />
      </Button>
      <Button
        onClick={() => setOpen(!open)}
        sx={{
          "&:hover": { background: "#FF3131" },
          flex: 1,
          borderRadius: "0",
        }}
      >
        {open ? (
          <CloseIcon
            sx={{ transition: "500ms", color: "rgba(255,255,255,.7)" }}
          />
        ) : (
          <AddIcon
            sx={{ transition: "500ms", color: "rgba(255,255,255,.7)" }}
          />
        )}
      </Button>
      <Button
        sx={{
          // background: active == "recommend" ? "##16F529" : "transparent",
          "&:hover": { background: "#16F529" },

          flex: 1,
          borderRadius: "0",
        }}
      >
        <RecommendIcon sx={{ color: "rgba(255,255,255,.7)" }} />
      </Button>
      <Button
        sx={{
          // background: active == "home" ? "#FFFF33" : "transparent",
          "&:hover": { background: "#FFFF33" },
          flex: 1,
          borderRadius: "0",
        }}
      >
        <AccountCircleIcon sx={{ color: "rgba(255,255,255,.7)" }} />
      </Button>

      <Fade in={open}>
        <Box
          onBlur={() => setOpen(false)}
          sx={{
            position: "fixed",
            bottom: "80px",
            justifyContent: "center",
            display: open ? "flex" : "none",
            width: "100%",
            background: "rgba(1,1,1,.4)",
            transition: "800ms",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              // height: "35vh",
              justifyContent: "space-evenly",
              width: "fit-content",
              background: "#111",
            }}
          >
            <Button sx={{ background: "" }}>
              <BookOnlineIcon
                sx={{ margin: "21px 0", color: "rgba(255,255,255,.7)" }}
              />
            </Button>
            <Button sx={{ background: "" }}>
              <LiveTvIcon
                sx={{ margin: "21px 0", color: "rgba(255,255,255,.7)" }}
              />
            </Button>
            <Button sx={{ background: "" }}>
              <ExitToAppIcon
                sx={{ margin: "21px 0", color: "rgba(255,255,255,.7)" }}
              />
            </Button>
          </Box>
        </Box>
      </Fade>
    </Box>
  );
};

//  <Drawer
//   open={open}
//   anchor={"left"}
//   onClose={() => {
//     setOpen(!open);
//   }}
//   sx={{ transition: "800ms" }}
// >
//   <Paper
//     elevation={3}
//     sx={{
//       display: "flex",
//       flexDirection: "column",
//       background: "rgba(1,1,1,1)",
//       margin: "0",
//       position: "fixed",
//       transition: "800ms",
//       width: "250px",
//       left: "8px",
//       top: "1.5rem",
//       zIndex: "999",
//       height: "100vh",
//       //   borderRadius: "32px",
//       // justifyContent: "space-between",
//       padding: "0 0rem",
//       alignItems: "center",
//     }}
//   >
//     <Box
//       onClick={() => setOpen(!open)}
//       sx={{
//         scale: "0.8",
//         transition: "800ms",
//         display: "flex",
//         justifyContent: "space-between",
//         fontSize: "18px",
//         borderBottom: "2px solid transparent",
//         margin: "6px 0 0 0 ",
//         width: "100%",
//         color: "rgba(255,255,255,.7)",
//         "&:hover": {
//           borderRadius: "0",
//           scale: "0.9",
//         },
//         postion: "fixed",
//       }}
//     >
//       {" "}
//       <Typography
//         className={"paradise-font"}
//         sx={{
//           textAlign: "center",
//           color: "#111",
//           scale: "0.7",
//           margin: "auto auto",
//           letterSpacing: { xs: "12px", lg: "32px" },
//           fontSize: { xs: "32px", lg: "62px" },
//           fontWeight: 900,
//           color: "#F56EB3",
//         }}
//       >
//         {" "}
//         PARADISE <br /> FOR <br /> QUEENS{" "}
//       </Typography>
//     </Box>
//     <Button
//       onClick={(e) => {
//         e.preventDefault();
//         router.push("/home");
//       }}
//       sx={{
//         scale: "0.8",
//         transition: "800ms",
//         display: "flex",
//         justifyContent: "space-between",
//         fontSize: "18px",
//         borderBottom: "2px solid transparent",
//         margin: "6px 0 0 0 ",
//         width: "100%",
//         color: "rgba(255,255,255,.7)",
//         "&:hover": {
//           borderRadius: "0",
//           borderBottom: "2px solid rgba(255,255,255,.7)",
//           scale: "0.9",
//         },
//       }}
//     >
//       {" "}
//       <HomeIcon />
//       Home{" "}
//     </Button>
//     <Button
//       sx={{
//         scale: "0.8",
//         transition: "800ms",
//         display: "flex",
//         justifyContent: "space-between",
//         fontSize: "18px",
//         borderBottom: "2px solid transparent",
//         margin: "6px 0 0 0 ",
//         width: "100%",
//         color: "rgba(255,255,255,.7)",
//         "&:hover": {
//           borderRadius: "0",
//           borderBottom: "2px solid rgba(255,255,255,.7)",
//           scale: "0.9",
//         },
//       }}
//     >
//       {" "}
//       <SearchIcon />
//       Search{" "}
//     </Button>
//     <Button
//       sx={{
//         scale: "0.8",
//         transition: "800ms",
//         display: "flex",
//         justifyContent: "space-between",
//         fontSize: "18px",
//         borderBottom: "2px solid transparent",
//         margin: "6px 0 0 0 ",
//         width: "100%",
//         color: "rgba(255,255,255,.7)",
//         "&:hover": {
//           borderRadius: "0",
//           borderBottom: "2px solid rgba(255,255,255,.7)",
//           scale: "0.9",
//         },
//       }}
//     >
//       {" "}
//       <BookOnlineIcon />
//       Appointments{" "}
//     </Button>
//     <Button
//       sx={{
//         scale: "0.8",
//         transition: "800ms",
//         display: "flex",
//         justifyContent: "space-between",
//         fontSize: "18px",
//         borderBottom: "2px solid transparent",
//         margin: "6px 0 0 0 ",
//         width: "100%",
//         color: "rgba(255,255,255,.7)",
//         "&:hover": {
//           borderRadius: "0",
//           borderBottom: "2px solid rgba(255,255,255,.7)",
//           scale: "0.9",
//         },
//       }}
//     >
//       {" "}
//       <LiveTvIcon />
//       Live Stream{" "}
//     </Button>
//     <Button
//       sx={{
//         scale: "0.8",
//         transition: "800ms",
//         display: "flex",
//         justifyContent: "space-between",
//         fontSize: "18px",
//         borderBottom: "2px solid transparent",
//         margin: "6px 0 0 0 ",
//         width: "100%",
//         color: "rgba(255,255,255,.7)",
//         "&:hover": {
//           borderRadius: "0",
//           borderBottom: "2px solid rgba(255,255,255,.7)",
//           scale: "0.9",
//         },
//       }}
//     >
//       {" "}
//       <RecommendIcon />
//       Recommendations{" "}
//     </Button>
//     <Button
//       sx={{
//         scale: "0.8",
//         transition: "800ms",
//         display: "flex",
//         justifyContent: "space-between",
//         fontSize: "18px",
//         borderBottom: "2px solid transparent",
//         margin: "6px 0 0 0 ",
//         width: "100%",
//         color: "rgba(255,255,255,.7)",
//         "&:hover": {
//           borderRadius: "0",
//           borderBottom: "2px solid rgba(255,255,255,.7)",
//           scale: "0.9",
//         },
//       }}
//     >
//       {" "}
//       <AccountCircleIcon />
//       Profile{" "}
//     </Button>
//     <Button
//       sx={{
//         scale: "0.8",
//         transition: "800ms",
//         display: "flex",
//         justifyContent: "space-between",
//         fontSize: "18px",
//         borderBottom: "2px solid transparent",
//         margin: "6px 0 0 0 ",
//         width: "100%",
//         color: "rgba(255,255,255,.7)",
//         "&:hover": {
//           borderRadius: "0",
//           borderBottom: "2px solid rgba(255,255,255,.7)",
//           scale: "0.9",
//         },
//       }}
//     >
//       {" "}
//       <ExitToAppIcon />
//       Sign Out{" "}
//     </Button>
//   </Paper>
// </Drawer>

// <Paper
//   elevation={3}
//   onClick={() => setOpen(!open)}
//   sx={{
//     display: open ? "none" : "flex",
//     scale: "0.5",
//     background: "rgba(250,250,250,1)",
//     margin: "0",
//     position: "fixed",
//     transition: "2500ms",
//     width: "100px",
//     cursor: "pointer",
//     left: "0",
//     top: "1.5rem",
//     zIndex: "999",
//     height: "100px",
//     borderRadius: "32px",
//     justifyContent: "space-evenly",
//     alignItems: "center",
//   }}
// >
//   <MenuIcon sx={{ fontSize: "50px" }} />
// </Paper>

import { useState, useEffect, useContext } from "react";
import {
  Box,
  Grid,
  TextField,
  Button,
  IconButton,
  Divider,
  Typography,
  MenuItem,
  Rating,
  Avatar,
  Drawer,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import LaunchIcon from "@mui/icons-material/Launch";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonIcon from "@mui/icons-material/Person";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import LockIcon from "@mui/icons-material/Lock";

import {
  query,
  collection,
  addDoc,
  setDoc,
  deleteDoc,
  doc,
  getDocs,
  where,
  updateDoc,
} from "firebase/firestore";
import {
  storage,
  googleProvider,
  facebookProvider,
  auth,
  db,
} from "./../../config/firebaseConfig";
import { UserContext } from "../../pages/_app";
export const Models = () => {
  const [signUp, setSignUp] = useState(false);
  const [open, setOpen] = useState(false);
  const [models, setModels] = useState([]);
  const [openModel, setOpenMOdel] = useState({});
  const [selectedGender, setSelectedGender] = useState(
    "Select Preferred Gender"
  );
  const { user, setUser } = useContext(UserContext);
  useEffect(() => {
    const getData = async () => {
      let localModels = [];
      const querySnapshot = await getDocs(collection(db, "users"));
      querySnapshot.forEach((item, index) => {
        localModels.push(item.data());
      });
      setModels(localModels);
    };
    getData();
  }, []);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "#000",
        padding: { xs: "0 1.2rem", lg: "0 5rem" },
      }}
    >
      <Box sx={{ minHeight: "100vh", margin: "0" }}>
        <Typography
          component="h1"
          sx={{
            textAlign: "",
            margin: "0 0 12px 0",
            fontWeight: 100,
            color: "rgba(255,255,255,.5)",
            fontSize: "32px",
          }}
        >
          {" "}
          Escorts Available Now{" "}
        </Typography>
        <Divider
          sx={{
            width: "24px",
            margin: "0 0 12px 0",
            background: "rgba(255,255,255,.7)",
          }}
        />
        <Typography
          component="h6"
          sx={{
            color: "rgba(255,255,255,.7)",
            margin: "0",
            width: "80%",
            fontSize: "21px",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          {" "}
          Gender:{" "}
        </Typography>{" "}
        <TextField
          fullWidth
          placeholder={"Gender"}
          name="Gender"
          type="select"
          select
          value={selectedGender}
          sx={{
            margin: "12px 0 21px 0",
            "& .MuiOutlinedInput-root": {
              border: "2px solid rgba(255,255,255,.7)",
              color: "rgba(255,255,255,.7)",
            },
            "& .MuiOutlinedInput-root.Mui-focused": {
              "& > fieldset": {
                border: "1px solid rgba(255,255,255,.7)",
                color: "rgba(255,255,255,.7)",
              },
            },
            "& .MuiOutlinedInput-root.Mui-focused": {
              "& > fieldset": {
                border: "1px solid rgba(255,255,255,.7)",
                color: "rgba(255,255,255,.7)",
              },
            },
          }}
        >
          <MenuItem
            onClick={() => setSelectedGender("Select Preferred Gender")}
            value={"Select Preferred Gender"}
            // sx={{ color: "transparent" }}
          >
            Select Preferred Gender
          </MenuItem>
          <MenuItem onClick={() => setSelectedGender("Male")} value="Male">
            Male
          </MenuItem>
          <MenuItem onClick={() => setSelectedGender("Female")} value="Female">
            Female
          </MenuItem>
          <MenuItem
            onClick={() => setSelectedGender("Transgender Female")}
            value="Transgender Female"
          >
            Transgender Female
          </MenuItem>
          <MenuItem
            onClick={() => setSelectedGender("Transgender Male")}
            value="Transgender Male"
          >
            Transgender Male
          </MenuItem>
        </TextField>
        <Grid
          container
          spacing={6}
          sx={{
            display:
              selectedGender == "Select Preferred Gender" ? "none" : "flex",
          }}
        >
          {models.map((item, index) => {
            if (
              selectedGender == item.personal.gender &&
              item.personal.userType === "Escort" &&
              item.personal.uid !== user.personal.uid &&
              item.personal.uid !== user.personal.uid
            ) {
              return (
                <Grid key={index} item xs={12} md={6} lg={4}>
                  <Box
                    sx={{
                      height: "500px",
                      scale: "0.99",
                      "&:hover": { scale: "1" },
                      transition: "800ms",
                      // background: "rgba(255,255,255,.7)",
                      background: "#111",
                      width: "100%",
                      padding: "0",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      borderRadius: "21px",
                    }}
                  >
                    <Box
                      sx={{
                        height: "300px",
                        width: "100%",
                        backgroundImage: `url("${item.social.profilePicture}")`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        borderRadius: "21px 21px 0 0",
                        backgroundPostion: "center",
                      }}
                    >
                      <Box
                        sx={{
                          width: "100%",
                          height: "100%",
                          display: "flex",
                          // flexDirection: "column",
                          justifyContent: "space-between",
                          alignItems: "flex-end",
                          borderRadius: "21px 21px 0 0",
                          padding: "12px",
                          background:
                            "linear-gradient(180deg, rgba(0,0,0,0.23012955182072825) 0%, rgba(0,0,0,0.8847514005602241) 80%, rgba(0,0,0,0.10968137254901966) 1000%);",
                          // background: "rgba(1,1,1,.7)",
                        }}
                      >
                        <Typography
                          component="div"
                          variant="div"
                          sx={{
                            fontSize: "16px",
                            fontWeight: "600",
                            fontSize: "18px",
                            display: "flex",

                            alignItems: "center",
                            color: "rgba(200,200,200,1)",
                          }}
                        >
                          {" "}
                          <LocationOnIcon
                            sx={{ scale: "0.7", margin: "0 6px" }}
                          />
                          {item.personal.address.city.toUpperCase()}
                        </Typography>{" "}
                        <Rating readOnly value={index} />
                      </Box>
                    </Box>

                    <Box
                      sx={{
                        height: "210px",
                        background: "",
                        width: "100%",
                        padding: "0 21px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-evenly",
                      }}
                    >
                      <Typography
                        component="div"
                        sx={{
                          textAlign: "",
                          margin: "8px 0 0 0",
                          fontWeight: 600,
                          color: "rgba(200,200,200,.8)",
                          display: "flex",
                          alignItems: "center",
                          fontSize: "18px",
                        }}
                      >
                        {" "}
                        <Typography
                          component="div"
                          variant="div"
                          sx={{
                            fontSize: "16px",
                            fontWeight: "100",
                            color: "rgba(200,200,200,.6)",
                            margin: "0 12px 0 0",
                          }}
                        >
                          {" "}
                          Name :
                        </Typography>{" "}
                        {item.personal.username}{" "}
                      </Typography>
                      <Typography
                        component="div"
                        sx={{
                          textAlign: "",
                          margin: "8px 0 0 0",
                          fontWeight: 600,
                          color: "rgba(200,200,200,.8)",
                          display: "flex",
                          alignItems: "center",
                          fontSize: "18px",
                        }}
                      >
                        {" "}
                        <Typography
                          component="div"
                          variant="div"
                          sx={{
                            fontSize: "16px",
                            fontWeight: "100",
                            color: "rgba(200,200,200,.6)",
                            margin: "0 12px 0 0",
                          }}
                        >
                          {" "}
                          Tel :
                        </Typography>{" "}
                        {item.personal.tel}{" "}
                      </Typography>
                      <Typography
                        component="div"
                        sx={{
                          textAlign: "",
                          margin: "8px 0 0 0",
                          fontWeight: 600,
                          color: "rgba(200,200,200,.8)",
                          display: "flex",
                          alignItems: "center",
                          fontSize: "18px",
                        }}
                      >
                        {" "}
                        <Typography
                          component="div"
                          variant="div"
                          sx={{
                            fontSize: "16px",
                            fontWeight: "100",
                            color: "rgba(200,200,200,.6)",
                            margin: "0 12px 0 0",
                          }}
                        >
                          {" "}
                          Status :
                        </Typography>{" "}
                        {index % 2 == 0 ? "Available" : "Busy"}{" "}
                      </Typography>
                      <Box
                        sx={{
                          // height: "12px 0",
                          // background: "red",
                          width: "100%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-evenly",
                        }}
                      >
                        {/* #16F529
                      FiberManualRecordIcon */}
                        <IconButton>
                          <FiberManualRecordIcon sx={{ color: "#16F529" }} />
                        </IconButton>
                        <IconButton>
                          <FavoriteBorderIcon
                            sx={{
                              color: "#999",
                              "&:hover": { fill: "red", opacity: 0.7 },
                            }}
                          />
                        </IconButton>
                        <IconButton
                          onClick={() => {
                            setOpenMOdel({ ...item });
                            setOpen(true);
                          }}
                        >
                          <LaunchIcon sx={{ color: "#999" }} />
                        </IconButton>
                        <IconButton>
                          <ReportGmailerrorredIcon sx={{ color: "#999" }} />
                        </IconButton>
                      </Box>
                      {/* <Button
                      sx={{
                        background: "#460C68",
                        padding: "12px 0",
                        color: "#eee",
                        fontWeight: "600",
                        width: "100%",
                        margin: "8px 0",
                      }}
                    >
                      {" "}
                      View{" "}
                    </Button> */}
                    </Box>
                  </Box>
                </Grid>
              );
            }
          })}
        </Grid>
        <Grid
          container
          spacing={6}
          sx={{
            display:
              selectedGender == "Select Preferred Gender" ? "flex" : "none",
          }}
        >
          {models.map((item, index) => {
            if (
              item.personal.userType === "Escort" &&
              item.personal.uid !== user.personal.uid
            ) {
              return (
                <Grid key={index} item xs={12} md={6} lg={4}>
                  <Box
                    sx={{
                      height: "500px",
                      scale: "0.99",
                      "&:hover": { scale: "1" },
                      transition: "800ms",
                      // background: "rgba(255,255,255,.7)",
                      background: "#111",
                      width: "100%",
                      padding: "0",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      borderRadius: "21px",
                    }}
                  >
                    <Box
                      sx={{
                        height: "300px",
                        width: "100%",
                        backgroundImage: `url("${item.social.profilePicture}")`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        borderRadius: "21px 21px 0 0",
                        backgroundPostion: "center",
                      }}
                    >
                      <Box
                        sx={{
                          width: "100%",
                          height: "100%",
                          display: "flex",
                          // flexDirection: "column",
                          justifyContent: "space-between",
                          alignItems: "flex-end",
                          borderRadius: "21px 21px 0 0",
                          padding: "12px",
                          background:
                            "linear-gradient(180deg, rgba(0,0,0,0.23012955182072825) 0%, rgba(0,0,0,0.8847514005602241) 80%, rgba(0,0,0,0.10968137254901966) 1000%);",
                          // background: "rgba(1,1,1,.7)",
                        }}
                      >
                        <Typography
                          component="div"
                          variant="div"
                          sx={{
                            fontSize: "16px",
                            fontWeight: "600",
                            fontSize: "18px",
                            display: "flex",

                            alignItems: "center",
                            color: "rgba(200,200,200,1)",
                          }}
                        >
                          {" "}
                          <LocationOnIcon
                            sx={{ scale: "0.7", margin: "0 6px" }}
                          />
                          {item.personal.address.city.toUpperCase()}
                        </Typography>{" "}
                        <Rating readOnly value={index} />
                      </Box>
                    </Box>

                    <Box
                      sx={{
                        height: "210px",
                        background: "",
                        width: "100%",
                        padding: "0 21px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-evenly",
                      }}
                    >
                      <Typography
                        component="div"
                        sx={{
                          textAlign: "",
                          margin: "8px 0 0 0",
                          fontWeight: 600,
                          color: "rgba(200,200,200,.8)",
                          display: "flex",
                          alignItems: "center",
                          fontSize: "18px",
                        }}
                      >
                        {" "}
                        <Typography
                          component="div"
                          variant="div"
                          sx={{
                            fontSize: "16px",
                            fontWeight: "100",
                            color: "rgba(200,200,200,.6)",
                            margin: "0 12px 0 0",
                          }}
                        >
                          {" "}
                          Name :
                        </Typography>{" "}
                        {item.personal.username}{" "}
                      </Typography>
                      <Typography
                        component="div"
                        sx={{
                          textAlign: "",
                          margin: "8px 0 0 0",
                          fontWeight: 600,
                          color: "rgba(200,200,200,.8)",
                          display: "flex",
                          alignItems: "center",
                          fontSize: "18px",
                        }}
                      >
                        {" "}
                        <Typography
                          component="div"
                          variant="div"
                          sx={{
                            fontSize: "16px",
                            fontWeight: "100",
                            color: "rgba(200,200,200,.6)",
                            margin: "0 12px 0 0",
                          }}
                        >
                          {" "}
                          Tel :
                        </Typography>{" "}
                        {item.personal.tel}{" "}
                      </Typography>
                      <Typography
                        component="div"
                        sx={{
                          textAlign: "",
                          margin: "8px 0 0 0",
                          fontWeight: 600,
                          color: "rgba(200,200,200,.8)",
                          display: "flex",
                          alignItems: "center",
                          fontSize: "18px",
                        }}
                      >
                        {" "}
                        <Typography
                          component="div"
                          variant="div"
                          sx={{
                            fontSize: "16px",
                            fontWeight: "100",
                            color: "rgba(200,200,200,.6)",
                            margin: "0 12px 0 0",
                          }}
                        >
                          {" "}
                          Status :
                        </Typography>{" "}
                        {index % 2 == 0 ? "Available" : "Busy"}{" "}
                      </Typography>
                      <Box
                        sx={{
                          // height: "12px 0",
                          // background: "red",
                          width: "100%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-evenly",
                        }}
                      >
                        {/* #16F529
                      FiberManualRecordIcon */}
                        <IconButton>
                          <FiberManualRecordIcon sx={{ color: "#16F529" }} />
                        </IconButton>
                        <IconButton>
                          <FavoriteBorderIcon
                            sx={{
                              color: "#999",
                              "&:hover": { fill: "red", opacity: 0.7 },
                            }}
                          />
                        </IconButton>
                        <IconButton
                          onClick={() => {
                            setOpenMOdel({ ...item });
                            setOpen(true);
                          }}
                        >
                          <LaunchIcon sx={{ color: "#999" }} />
                        </IconButton>
                        <IconButton>
                          <ReportGmailerrorredIcon sx={{ color: "#999" }} />
                        </IconButton>
                      </Box>
                      {/* <Button
                      sx={{
                        background: "#460C68",
                        padding: "12px 0",
                        color: "#eee",
                        fontWeight: "600",
                        width: "100%",
                        margin: "8px 0",
                      }}
                    >
                      {" "}
                      View{" "}
                    </Button> */}
                    </Box>
                  </Box>
                </Grid>
              );
            }
          })}
        </Grid>
      </Box>

      <Drawer open={open} anchor={"bottom"} onClose={() => setOpen(false)}>
        <Box
          sx={{
            height: "95vh",
            width: "100vw",
            background: "#111",
            overflowY: "auto",
            padding: "32px 6px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "100%",
              // background: "green",
              display: "flex",
              padding: "0 32px",
              justifyContent: "flex-end",
            }}
          >
            <CloseIcon
              onClick={() => setOpen(false)}
              sx={{
                color: "#eee",
                cursor: "pointer",
              }}
            />
          </Box>
          <Avatar
            src={open ? openModel.social.profilePicture : ""}
            sx={{ height: "150px", width: "150px", border: "1px dashed red " }}
          />
          <Typography
            component="div"
            variant="div"
            sx={{
              margin: "32px 0 12px 0",
              fontSize: "21px",
              fontWeight: "100",
              display: "flex",
              alignItems: "center",
              color: "rgba(200,200,200,1)",
            }}
          >
            <PersonIcon sx={{ scale: "0.9", margin: "0 6px" }} />
            {open ? openModel.personal.username : ""}{" "}
          </Typography>
          <Typography
            component="div"
            variant="div"
            sx={{
              margin: "12px 0",
              fontSize: "21px",
              fontWeight: 100,
              display: "flex",
              alignItems: "center",
              color: "rgba(200,200,200,1)",
            }}
          >
            <LocalPhoneIcon sx={{ scale: "0.9", margin: "0 6px" }} />
            {open ? openModel.personal.tel : ""}{" "}
          </Typography>
          <Typography
            component="div"
            variant="div"
            sx={{
              fontSize: "16px",
              fontWeight: "600",
              fontSize: "18px",
              display: "flex",
              margin: "12px 0 32px 0",
              alignItems: "center",
              color: "rgba(200,200,200,1)",
            }}
          >
            {" "}
            <LocationOnIcon sx={{ scale: "0.9", margin: "0 6px" }} />
            {open ? openModel.personal.address.city.toUpperCase() : ""}
          </Typography>{" "}
          {openModel.fetishes &&
            openModel.fetishes.map((item, index) => {
              return (
                <Box
                  key={index}
                  sx={{
                    background: "#222",
                    borderRadius: "16px",
                    padding: "12px",
                    margin: "0 8px 8px 0",
                    minWidth: "100px",
                    height: "fit-content",
                    display: "flex",
                    alignItems: "center",
                    textAlign: "center",
                    color: "#eee",
                    justifyContent: "center",
                    fontWeight: "600",
                  }}
                >
                  {item}
                </Box>
              );
            })}
          {openModel.personal &&
            openModel.personal.userType === "Escort" &&
            (openModel.social.subscribedUsers &&
            openModel.social.subscribedUsers.includes(user.personal.uid) ? (
              <Grid container>
                {[
                  "https://images.pexels.com/photos/1548274/pexels-photo-1548274.jpeg?auto=compress&cs=tinysrgb&w=1600",
                  "https://images.pexels.com/photos/289262/pexels-photo-289262.jpeg?auto=compress&cs=tinysrgb&w=1600",
                  "https://images.pexels.com/photos/8956318/pexels-photo-8956318.jpeg?auto=compress&cs=tinysrgb&w=1600",
                  "https://images.pexels.com/photos/9039112/pexels-photo-9039112.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                  "https://images.pexels.com/photos/6423097/pexels-photo-6423097.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                ].map((item, index) => {
                  return (
                    <Grid
                      item
                      key={index}
                      xs={6}
                      sx={{
                        height: "150px",
                        backgroundImage: `url("${item}")`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        // borderRadius: "21px 21px 0 0",
                        backgroundPostion: "center",
                        border: "3px solid #111",
                      }}
                    ></Grid>
                  );
                })}
                <Grid
                  item
                  xs={6}
                  sx={{
                    height: "150px",
                    background: "rgba(200,200,200,.7)",
                    border: "3px solid #111",
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    justifyContent: "center",
                    scale: "0.90",
                    transition: "800ms",
                    "&:is(:hover)": { scale: "0.95" },
                  }}
                >
                  {" "}
                  View More <AddIcon />
                </Grid>
              </Grid>
            ) : (
              <Box
                sx={{
                  minHeight: "40vh",
                  // background: "red",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <LockIcon sx={{ fontSize: "100px" }} />
                <Typography
                  component="div"
                  sx={{
                    textAlign: "center",
                    color: "#111",
                    // margin: "auto auto",
                    // letterSpacing: { xs: "6px" },
                    fontSize: { xs: "14px" },
                    lineHeight: "2.5rem",
                    // fontWeight: 900,
                    color: "rgba(255,255,255,.7)",
                  }}
                >
                  {"Access Denied"}
                </Typography>
                <Typography
                  component="div"
                  sx={{
                    textAlign: "center",
                    color: "#111",
                    fontSize: { xs: "14px" },
                    lineHeight: "2.5rem",
                    // fontWeight: 900,
                    color: "rgba(255,255,255,.7)",
                  }}
                >
                  {`Subscribe To View ${openModel.personal.username}'s Exclusive Content`}
                </Typography>
                <Button
                  sx={{
                    background: "#460C68",
                    padding: "21px 0",
                    color: "#eee",
                    fontWeight: "600",
                    width: { xs: "80%", lg: "300px" },
                    margin: "21px 0",
                    "&:hover": { color: "#460C68" },
                  }}
                >
                  {" "}
                  Subscribe{" "}
                </Button>
              </Box>
            ))}
          <Box sx={{ height: "20vh", margin: "50px 0 " }} />
        </Box>
      </Drawer>
    </Box>
  );
};

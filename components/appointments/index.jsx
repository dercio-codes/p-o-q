import { useState, useContext, useEffect } from "react";
import {
  Box,
  Grid,
  TextField,
  Button,
  Divider,
  Typography,
  MenuItem,
  Paper,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LaunchIcon from "@mui/icons-material/Launch";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import DoneIcon from "@mui/icons-material/Done";
import ClearIcon from "@mui/icons-material/Clear";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PersonIcon from "@mui/icons-material/Person";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ScheduleIcon from "@mui/icons-material/Schedule";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LockIcon from "@mui/icons-material/Lock";
import { useRouter } from "next/navigation";

import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import "./styles.css";

// import required modules
import { EffectCards } from "swiper";
import { UserContext } from "../../pages/_app";
import {
  query,
  collection,
  addDoc,
  setDoc,
  deleteDoc,
  updateDoc,
  getDocs,
  where,
  doc,
} from "firebase/firestore";
import {
  storage,
  googleProvider,
  facebookProvider,
  auth,
  db,
} from "./../../config/firebaseConfig";
export const Appointments = () => {
  const router = useRouter();
  const [signUp, setSignUp] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedGender, setSelectedGender] = useState("");
  const { user, setUser, loading, setLoading } = useContext(UserContext);

  const getData = async () => {
    let localAppoinments = [];
    const querySnapshot = await getDocs(collection(db, "appointments"));
    querySnapshot.forEach((item, index) => {
      const itemData = item.data();
      if (
        itemData.escort === user.personal.email ||
        itemData.client === user.personal.email
      ) {
        localAppoinments.push(itemData);
      }
    });
    console.log(localAppoinments);
    console.log("got data back");
    setUser({
      ...user,
      appointments: localAppoinments,
    });
  };
  useEffect(() => {
    getData();
  }, []);

  const handleUpdateAppointment = async (theAppointment, status) => {
    setLoading(true);
    const myID = new Date().getTime();
    console.log(theAppointment.id);
    await setDoc(doc(db, "appointments", `${theAppointment.id}`), {
      ...theAppointment,
      status: status,
    });
    getData();
    setLoading(false);
  };

  return (
    <Box
      sx={{
        minHeight: "50vh",
        background: "#000",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: { xs: "0 0.5rem", lg: "0 5rem" },
      }}
    >
      <Box
        sx={{
          minHeight: "30vh",
          background: "",
          margin: "50px 0",
          padding: "12px",
        }}
      >
        <Typography
          sx={{
            textAlign: "",
            margin: "0 0 12px 0",
            fontWeight: 100,
            color: "rgba(255,255,255,.5)",
            fontSize: "32px",
          }}
        >
          {" "}
          Appointments{" "}
        </Typography>
        <Divider
          sx={{
            width: "24px",
            margin: "0 0 21px 0",
            background: "rgba(255,255,255,.7)",
          }}
        />

        {user.personal.uid === "" && user.personal.email === "" ? (
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
                // margin: "auto auto",
                // letterSpacing: { xs: "6px" },
                fontSize: { xs: "14px" },
                lineHeight: "2.5rem",
                // fontWeight: 900,
                color: "rgba(255,255,255,.7)",
              }}
            >
              {"Become An Escort To Access This Feature"}
            </Typography>
            <Button
              onClick={() => {
                router.push("/");
              }}
              sx={{
                background: "#460C68",
                padding: "21px 0",
                color: "#eee",
                fontWeight: "600",
                width: { xs: "80%", lg: "350px" },
                margin: "21px 0",
                "&:hover": { color: "#460C68" },
              }}
            >
              {" "}
              Become a Escort{" "}
            </Button>
          </Box>
        ) : (
          <Box>
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
                Select Status
              </MenuItem>
              <MenuItem
                onClick={() => setSelectedGender("Pending Response")}
                value="Pending Response"
              >
                Pending Response
              </MenuItem>
              <MenuItem
                onClick={() => setSelectedGender("Accepted Appointment")}
                value="Accepted Appointment"
              >
                Accepted Appointment
              </MenuItem>
              <MenuItem
                onClick={() => setSelectedGender("Declined Appointment")}
                value="Declined Appointment"
              >
                Declined Appointment
              </MenuItem>
              <MenuItem
                onClick={() => setSelectedGender("Report")}
                value="Report"
              >
                Report
              </MenuItem>
            </TextField>
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              className="appointments-swiper"
            >
              {user.appointments.length === 0 ? (
                <Box sx={{ height: "50vh" }}>NO RESULTS</Box>
              ) : (
                user.appointments.map((item, index) => {
                  if (
                    user.personal.userType.toLowerCase() === "escort" &&
                    item.status.toLowerCase() === selectedGender
                  ) {
                    return (
                      <SwiperSlide key={index}>
                        <Box
                          sx={{
                            minHeight: "50vh",
                            width: "100%",
                            background: "rgba(1,1,1,.85)",
                            // scale: "0.99",
                            borderRadius: "21px 21px 0 0",
                            padding: "0 0 12px 0",
                          }}
                        >
                          <Box
                            sx={{
                              height: "300px",
                              width: "100%",
                              backgroundImage: `url("${item.profile}")`,
                              backgroundSize: "cover",
                              backgroundRepeat: "no-repeat",
                              borderRadius: "12px 12px 0 0",
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
                            />
                          </Box>
                          <Typography
                            component="div"
                            sx={{
                              fontSize: "16px",
                              fontWeight: "600",
                              fontSize: "18px",
                              display: "flex",
                              margin: "21px 8px",
                              alignItems: "center",
                              color: "rgba(200,200,200,0.7)",
                            }}
                          >
                            {" "}
                            <PersonIcon
                              sx={{ scale: "0.9", margin: "0 6px" }}
                            />
                            {item.username}
                          </Typography>{" "}
                          <Typography
                            component="div"
                            sx={{
                              fontSize: "16px",
                              fontWeight: "600",
                              fontSize: "18px",
                              display: "flex",
                              margin: "21px 8px",
                              alignItems: "center",
                              color: "rgba(200,200,200,0.7)",
                            }}
                          >
                            {" "}
                            <LocalPhoneIcon
                              sx={{ scale: "0.9", margin: "0 6px" }}
                            />
                            {item.tel}
                          </Typography>{" "}
                          <Typography
                            component="div"
                            sx={{
                              fontSize: "16px",
                              fontWeight: "600",
                              fontSize: "18px",
                              display: "flex",
                              margin: "21px 8px",
                              alignItems: "center",
                              color: "rgba(200,200,200,0.7)",
                            }}
                          >
                            {" "}
                            <LocationOnIcon
                              sx={{ scale: "0.9", margin: "0 6px" }}
                            />
                            {item.location}
                          </Typography>{" "}
                          <Typography
                            component="div"
                            sx={{
                              fontSize: "16px",
                              fontWeight: "600",
                              fontSize: "18px",
                              display: "flex",
                              margin: "21px 8px",
                              alignItems: "center",
                              color: "rgba(200,200,200,0.7)",
                            }}
                          >
                            {" "}
                            <CalendarMonthIcon
                              sx={{ scale: "0.9", margin: "0 6px" }}
                            />
                            {" 17 Feb 2023 - 17:00"}
                          </Typography>{" "}
                          <Typography
                            component="div"
                            sx={{
                              fontSize: "16px",
                              fontWeight: "600",
                              fontSize: "18px",
                              display: "flex",
                              margin: "21px 8px",
                              alignItems: "center",
                              color: "rgba(200,200,200,0.7)",
                            }}
                          >
                            {" "}
                            <ScheduleIcon
                              sx={{ scale: "0.9", margin: "0 6px" }}
                            />
                            {item.length}
                          </Typography>{" "}
                          {user.personal.userType.toLowerCase() ===
                            "escort" && (
                            <Box
                              sx={{
                                width: "50%",
                                margin: "0 auto",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-evenly",
                              }}
                            >
                              <IconButton
                                onClick={() => {
                                  handleUpdateAppointment(
                                    item,
                                    "Accepted Appointment"
                                  );
                                }}
                              >
                                <DoneIcon sx={{ color: "#999" }} />
                              </IconButton>
                              <IconButton
                                onClick={() => {
                                  handleUpdateAppointment(
                                    item,
                                    "Declined Appointment"
                                  );
                                }}
                              >
                                <ClearIcon sx={{ color: "#999" }} />
                              </IconButton>
                              <IconButton
                                onClick={() => {
                                  handleUpdateAppointment(item, "Report");
                                }}
                              >
                                <ReportGmailerrorredIcon
                                  sx={{ color: "#999" }}
                                />
                              </IconButton>
                            </Box>
                          )}
                          {/* {user.personal.userType.toLowerCase() === "escort" && (
                          <Box
                            sx={{
                              width: "50%",
                              margin: "0 auto",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-evenly",
                            }}
                          >
                            <IconButton>
                              <DoneIcon sx={{ color: "#999" }} />
                            </IconButton>
                            <IconButton>
                              <ClearIcon sx={{ color: "#999" }} />
                            </IconButton>
                            <IconButton>
                              <ReportGmailerrorredIcon sx={{ color: "#999" }} />
                            </IconButton>
                          </Box>
                        )} */}
                        </Box>
                      </SwiperSlide>
                    );
                  } else if (
                    user.personal.userType.toLowerCase() === "client" &&
                    item.status.toLowerCase() === selectedGender
                  ) {
                    return (
                      <SwiperSlide key={index}>
                        <Box
                          sx={{
                            minHeight: "50vh",
                            width: "100%",
                            background: "rgba(1,1,1,.85)",
                            // scale: "0.99",
                            borderRadius: "21px 21px 0 0",
                            padding: "0 0 12px 0",
                          }}
                        >
                          <Box
                            sx={{
                              height: "300px",
                              width: "100%",
                              backgroundImage: `url("${item.escortImageProfile}")`,
                              backgroundSize: "cover",
                              backgroundRepeat: "no-repeat",
                              borderRadius: "12px 12px 0 0",
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
                            />
                          </Box>
                          <Typography
                            component="div"
                            sx={{
                              fontSize: "16px",
                              fontWeight: "600",
                              fontSize: "18px",
                              display: "flex",
                              margin: "21px 8px",
                              alignItems: "center",
                              color: "rgba(200,200,200,0.7)",
                            }}
                          >
                            {" "}
                            <PersonIcon
                              sx={{ scale: "0.9", margin: "0 6px" }}
                            />
                            {item.username}
                          </Typography>{" "}
                          <Typography
                            component="div"
                            sx={{
                              fontSize: "16px",
                              fontWeight: "600",
                              fontSize: "18px",
                              display: "flex",
                              margin: "21px 8px",
                              alignItems: "center",
                              color: "rgba(200,200,200,0.7)",
                            }}
                          >
                            {" "}
                            <LocalPhoneIcon
                              sx={{ scale: "0.9", margin: "0 6px" }}
                            />
                            {item.tel}
                          </Typography>{" "}
                          <Typography
                            component="div"
                            sx={{
                              fontSize: "16px",
                              fontWeight: "600",
                              fontSize: "18px",
                              display: "flex",
                              margin: "21px 8px",
                              alignItems: "center",
                              color: "rgba(200,200,200,0.7)",
                            }}
                          >
                            {" "}
                            <LocationOnIcon
                              sx={{ scale: "0.9", margin: "0 6px" }}
                            />
                            {item.location}
                          </Typography>{" "}
                          <Typography
                            component="div"
                            sx={{
                              fontSize: "16px",
                              fontWeight: "600",
                              fontSize: "18px",
                              display: "flex",
                              margin: "21px 8px",
                              alignItems: "center",
                              color: "rgba(200,200,200,0.7)",
                            }}
                          >
                            {" "}
                            <CalendarMonthIcon
                              sx={{ scale: "0.9", margin: "0 6px" }}
                            />
                            {" 17 Feb 2023 - 17:00"}
                          </Typography>{" "}
                          <Typography
                            component="div"
                            sx={{
                              fontSize: "16px",
                              fontWeight: "600",
                              fontSize: "18px",
                              display: "flex",
                              margin: "21px 8px",
                              alignItems: "center",
                              color: "rgba(200,200,200,0.7)",
                            }}
                          >
                            {" "}
                            <ScheduleIcon
                              sx={{ scale: "0.9", margin: "0 6px" }}
                            />
                            {item.length}
                          </Typography>{" "}
                          <Box
                            sx={{
                              width: "50%",
                              margin: "0 auto",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-evenly",
                            }}
                          >
                            <IconButton>
                              <DoneIcon sx={{ color: "#999" }} />
                            </IconButton>
                            <IconButton>
                              <ClearIcon sx={{ color: "#999" }} />
                            </IconButton>
                            <IconButton>
                              <ReportGmailerrorredIcon sx={{ color: "#999" }} />
                            </IconButton>
                          </Box>
                        </Box>
                      </SwiperSlide>
                    );
                  }
                })
              )}
            </Swiper>
          </Box>
        )}
      </Box>
    </Box>
  );
};

import {
  Box,
  Grid,
  TextField,
  Button,
  Divider,
  Avatar,
  Typography,
  MenuItem,
  Paper,
  IconButton,
  Dialog,
  List,
  ListItem,
  ListItemButton,
} from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import ClearIcon from "@mui/icons-material/Clear";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PersonIcon from "@mui/icons-material/Person";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { ProfileCards } from "./profile-cards";
import ScheduleIcon from "@mui/icons-material/Schedule";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import LockIcon from "@mui/icons-material/Lock";
import React, { useContext, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import "./styles.css";

// import required modules
import { EffectCards } from "swiper";
import { Stories } from "../stories";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { UserContext } from "../../pages/_app";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const DUMMY_USERS = [
  {
    address: {
      geolocation: { lat: "-37.3159", long: "81.1496" },
      city: "Durban",
      street: "new road",
      number: 7682,
      zipcode: "12926-3874",
    },
    id: 1,
    img: "https://images.pexels.com/photos/247204/pexels-photo-247204.jpeg?auto=compress&cs=tinysrgb&w=1600",
    email: "john@gmail.com",
    username: "Nate Twins",
    password: "m38rmF$",
    name: { firstname: "nathan", lastname: "levi" },
    phone: "067-123-456",
    gender: "Transgender Female",
    __v: 0,
  },
  {
    address: {
      geolocation: { lat: "-37.3159", long: "81.1496" },
      city: "Durban",
      street: "Lovers Ln",
      number: 7267,
      zipcode: "12926-3874",
    },
    id: 2,
    img: "https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=1600",
    email: "morrison@gmail.com",
    username: "Calvin",
    password: "83r5^_",
    name: { firstname: "Donovan", lastname: "Morrison" },
    phone: "072-456-234",
    gender: "Female",
    __v: 0,
  },
  {
    address: {
      geolocation: { lat: "40.3467", long: "-30.1310" },
      city: "Port ELizabeth",
      street: "Frances Ct",
      number: 86,
      zipcode: "29567-1452",
    },
    id: 3,
    img: "https://images.pexels.com/photos/2065203/pexels-photo-2065203.jpeg?auto=compress&cs=tinysrgb&w=1600",
    email: "kevin@gmail.com",
    username: "Rian",
    password: "kev02937@",
    name: { firstname: "kevin", lastname: "rian" },
    phone: "065-555-5005",
    gender: "Transgender Female",
    __v: 0,
  },
  {
    address: {
      geolocation: { lat: "50.3467", long: "-20.1310" },
      city: "Rosebank",
      street: "Hunters Creek Dr",
      number: 6454,
      zipcode: "98234-1734",
    },
    id: 4,
    img: "https://images.pexels.com/photos/1689731/pexels-photo-1689731.jpeg?auto=compress&cs=tinysrgb&w=1600",
    email: "don@gmail.com",
    username: "Troy",
    password: "ewedon",
    name: { firstname: "don", lastname: "romer" },
    phone: "067-555-6234",
    gender: "Female",
    __v: 0,
  },
  {
    address: {
      geolocation: { lat: "40.3467", long: "-40.1310" },
      city: "Soutgate",
      street: "adams St",
      number: 245,
      zipcode: "80796-1234",
    },
    id: 5,
    img: "https://images.pexels.com/photos/1162983/pexels-photo-1162983.jpeg?auto=compress&cs=tinysrgb&w=1600",
    email: "derek@gmail.com",
    username: "Ken",
    password: "jklg*_56",
    name: { firstname: "derek", lastname: "powell" },
    phone: "087-888-5432",
    gender: "Transgender Female",
    __v: 0,
  },
  {
    address: {
      geolocation: { lat: "20.1677", long: "-10.6789" },
      city: "Cape Town",
      street: "prospect st",
      number: 124,
      zipcode: "12346-0456",
    },
    id: 6,
    img: "https://images.pexels.com/photos/219575/pexels-photo-219575.jpeg?auto=compress&cs=tinysrgb&w=1600",
    email: "david_r@gmail.com",
    username: "Diesel",
    password: "3478*#54",
    name: { firstname: "david", lastname: "russell" },
    phone: "068-890-5552",
    gender: "Transgender Female",
    __v: 0,
  },
  {
    address: {
      geolocation: { lat: "10.3456", long: "20.6419" },
      city: "Bloemfontein",
      street: "saddle st",
      number: 1342,
      zipcode: "96378-0245",
    },
    id: 7,
    img: "https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600",
    email: "miriam@gmail.com",
    username: "Amber",
    password: "f238&@*$",
    name: { firstname: "amber", lastname: "snyder" },
    phone: "076-123-6789",
    gender: "Female",
    __v: 0,
  },
  {
    address: {
      geolocation: { lat: "50.3456", long: "10.6419" },
      city: "Sandton",
      street: "vally view ln",
      number: 1342,
      zipcode: "96378-0245",
    },
    id: 8,
    img: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1600",
    email: "william@gmail.com",
    username: "Sebastian",
    password: "William56$hj",
    name: { firstname: "william", lastname: "hopkins" },
    phone: "087-980-8850",
    gender: "Male",
    __v: 0,
  },
  {
    address: {
      geolocation: { lat: "40.12456", long: "20.5419" },
      city: "Tshwane",
      street: "avondale ave",
      number: 345,
      zipcode: "96378-0245",
    },
    id: 9,
    img: "https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg?auto=compress&cs=tinysrgb&w=1600",
    email: "kate@gmail.com",
    username: "Ashley",
    password: "kfejk@*_",
    name: { firstname: "kate", lastname: "hale" },
    phone: "076-920-8250",
    gender: "Transgender Male",
    __v: 0,
  },
  {
    address: {
      geolocation: { lat: "30.24788", long: "-20.545419" },
      city: "Hammanskraal",
      street: "oak lawn ave",
      number: 526,
      zipcode: "10256-4532",
    },
    id: 10,
    img: "https://images.pexels.com/photos/3470076/pexels-photo-3470076.jpeg?auto=compress&cs=tinysrgb&w=1600",
    email: "jimmie@gmail.com",
    username: "Jay",
    password: "klein*#%*",
    name: { firstname: "jimmie", lastname: "klein" },
    phone: "067-960-8660",
    gender: "Female",
    __v: 0,
  },
];

export const ProfileComponent = () => {
  const [signUp, setSignUp] = useState(false);
  const [openProfileModal, setOpenProfileModal] = useState(false);
  const [openStories, setOpenStories] = useState(false);
  const [value, setValue] = React.useState(0);
  const { user, setUser } = useContext(UserContext);
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  console.log(user);

  return (
    <Box sx={{ minHeight: "100vh", background: "", padding: "32px 0" }}>
      <Grid container>
        <Grid
          item
          xs={12}
          sx={{ height: "auto", background: "", padding: "21px 8px" }}
        >
          <Avatar
            onClick={() => setOpenProfileModal(true)}
            src={user.social.profilePicture}
            sx={{
              width: "250px",
              height: "250px",
              margin: "21px auto ",
              border: "8px solid rgb(15,255,80,.7)",
              cursor: "pointer",
              opacity: ".9",
              "&:hover": { opacity: ".95" },
            }}
          />

          <Box
            sx={{
              height: "100vh",
              width: "100%",
              background: "rgba(1,1,1,1)",
              position: "fixed",
              top: "0",
              left: "0",
              zIndex: "99999999",
              display: openStories ? "flex" : "none",
              // alignItems: "flex-end",
              justifyContent: "center",
              flexDirection: "column",
            }}
            onClick={() => setOpenProfileModal(false)}
          >
            <ArrowBackIcon
              sx={{ margin: "21px", cursor: "pointer" }}
              onClick={() => setOpenStories(false)}
            />
            <Stories />
          </Box>
          <Dialog
            onClose={() => setOpenProfileModal(false)}
            open={openProfileModal}
            sx={{
              width: "100%",
              // padding: "0 5rem",
              background: "rgba(1,1,1,.7)",
            }}
          >
            <List sx={{ width: "70vw", background: "#333" }}>
              <ListItem disableGutters sx={{ height: "80px" }}>
                <ListItemButton
                  sx={{
                    width: "100%",
                    height: "80px",
                    color: "#eee",
                    fontWeight: "600",
                    margin: "12px 0",
                  }}
                >
                  {" "}
                  Change Profile{" "}
                </ListItemButton>
              </ListItem>
              <ListItem disableGutters sx={{ height: "80px" }}>
                <ListItemButton
                  onClick={() => {
                    setOpenStories(true);
                    setOpenProfileModal(false);
                  }}
                  sx={{
                    width: "100%",
                    height: "80px",
                    color: "#eee",
                    fontWeight: "600",
                    margin: "12px 0",
                  }}
                >
                  {" "}
                  View Stories{" "}
                </ListItemButton>{" "}
              </ListItem>
            </List>
          </Dialog>

          <Box sx={{ width: "100%", margin: "32px 0 0 0" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                // onChange={handleChange}
                aria-label="basic tabs example"
                variant="scrollable"
                // scrollButtons="auto"
                scrollButtons
                allowScrollButtonsMobile
                // sx={{ background: "#333" }}
              >
                <Tab
                  onClick={() => {
                    setValue(0);
                  }}
                  sx={{
                    color: "#eee !important",
                    borderBottom:
                      value === 0 ? "5px solid #eee !important" : "",
                  }}
                  label="Personal"
                  {...a11yProps(0)}
                />
                <Tab
                  onClick={() => {
                    setValue(1);
                  }}
                  sx={{
                    color: "#eee !important",
                    borderBottom:
                      value === 1 ? "5px solid #eee !important" : "",
                  }}
                  label="Social"
                  {...a11yProps(1)}
                />
                <Tab
                  onClick={() => {
                    setValue(2);
                  }}
                  sx={{
                    color: "#eee !important",
                    borderBottom:
                      value === 2 ? "5px solid #eee !important" : "",
                  }}
                  label="Appointments"
                  {...a11yProps(2)}
                />
                <Tab
                  onClick={() => {
                    setValue(3);
                  }}
                  sx={{
                    color: "#eee !important",
                    borderBottom:
                      value === 3 ? "5px solid #eee !important" : "",
                  }}
                  label="Exclusive Content"
                  {...a11yProps(4)}
                />
                <Tab
                  onClick={() => {
                    setValue(4);
                  }}
                  sx={{
                    color: "#eee !important",
                    borderBottom:
                      value === 4 ? "5px solid #eee !important" : "",
                  }}
                  label="Subscribers"
                  {...a11yProps(4)}
                />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0} sx={{ background: "red" }}>
              <PersonalForm />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Social />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <NewAppointMents />
            </TabPanel>

            <TabPanel value={value} index={3}>
              <Typography
                component="div"
                sx={{
                  textAlign: "",
                  margin: "0 0 12px 0",
                  fontWeight: 100,
                  color: "rgba(255,255,255,.5)",
                  fontSize: "32px",
                }}
              >
                {" "}
                Exclusive Content{" "}
              </Typography>
              <Divider
                sx={{
                  width: "24px",
                  margin: "0 0 32px 0",
                  background: "rgba(255,255,255,.7)",
                }}
              />
              <ExclusiveContent />
            </TabPanel>

            <TabPanel value={value} index={4}>
              <Typography
                component="div"
                sx={{
                  textAlign: "",
                  margin: "0 0 12px 0",
                  fontWeight: 100,
                  color: "rgba(255,255,255,.5)",
                  fontSize: "32px",
                }}
              >
                {" "}
                Subscribers{" "}
              </Typography>
              <Divider
                sx={{
                  width: "24px",
                  margin: "0 0 32px 0",
                  background: "rgba(255,255,255,.7)",
                }}
              />
              <Subscribers />
            </TabPanel>
          </Box>
        </Grid>
        {/* <Grid
          item
          xs={12}
          sx={{ height: "auto", background: "green", padding: "21px" }}
        ></Grid> */}
      </Grid>
    </Box>
  );
};

const Social = () => {
  return (
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
  );
};

const NewAppointMents = () => {
  return (
    <Box>
      <Typography
        component="div"
        sx={{
          textAlign: "",
          margin: "0 0 12px 0",
          fontWeight: 100,
          color: "rgba(255,255,255,.5)",
          fontSize: "32px",
        }}
      >
        {" "}
        New Appointments{" "}
      </Typography>
      <Divider
        sx={{
          width: "24px",
          margin: "0 0 32px 0",
          background: "rgba(255,255,255,.7)",
        }}
      />
      {domLoaded && (
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="appointments-swiper"
        >
          {DUMMY_USERS.map((item, index) => {
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
                      backgroundImage: `url("${item.img}")`,
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
                    <PersonIcon sx={{ scale: "0.9", margin: "0 6px" }} />
                    {item.username.toUpperCase()}
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
                    <LocalPhoneIcon sx={{ scale: "0.9", margin: "0 6px" }} />
                    {item.phone.toUpperCase()}
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
                    <LocationOnIcon sx={{ scale: "0.9", margin: "0 6px" }} />
                    {item.address.city.toUpperCase()}
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
                    <CalendarMonthIcon sx={{ scale: "0.9", margin: "0 6px" }} />
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
                    <ScheduleIcon sx={{ scale: "0.9", margin: "0 6px" }} />
                    {" 1 Hour"}
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
          })}
        </Swiper>
      )}
    </Box>
  );
};

const PersonalForm = () => {
  return (
    <Box
      sx={{
        // background: "red",
        borderRadius: "0 32px 32px 0",
        transition: "800ms",
        // display: signUp ? "block" : "none",
        // position: "relative",
        width: "100%",
        margin: "0 0 50px 0",
        // padding: "2.5rem",
      }}
    >
      <Typography
        component="div"
        sx={{
          color: "rgba(200,200,200,.7)",
          margin: "0",
          width: "80%",
          fontSize: "21px",
          fontWeight: 600,
          cursor: "pointer",
        }}
      >
        {" "}
        Name:{" "}
      </Typography>
      <TextField
        fullWidth
        placeholder={"John Doe"}
        // name="name"
        type="text"
        label="Name"
        sx={{
          margin: "12px 0 21px 0",
          ...whiteForm,
        }}
      />
      <Typography
        component="div"
        sx={{
          color: "rgba(200,200,200,.7)",
          margin: "0",
          width: "80%",
          fontSize: "21px",
          fontWeight: 600,
          cursor: "pointer",
        }}
      >
        {" "}
        Surname:{" "}
      </Typography>
      <TextField
        fullWidth
        placeholder={"Surname"}
        name="surname"
        type="text"
        label="Surname"
        sx={{
          margin: "12px 0 21px 0",
          ...whiteForm,
        }}
      />
      <Typography
        component="div"
        sx={{
          color: "rgba(200,200,200,.7)",
          margin: "0",
          width: "80%",
          fontSize: "21px",
          fontWeight: 600,
          cursor: "pointer",
        }}
      >
        {" "}
        Username:{" "}
      </Typography>
      <TextField
        fullWidth
        placeholder={"Username"}
        name="username"
        type="text"
        label="Username"
        sx={{
          margin: "12px 0 21px 0",
          ...whiteForm,
        }}
      />
      <Typography
        component="div"
        sx={{
          color: "rgba(200,200,200,.7)",
          margin: "0",
          width: "80%",
          fontSize: "21px",
          fontWeight: 600,
          cursor: "pointer",
        }}
      >
        {" "}
        Email:{" "}
      </Typography>
      <TextField
        fullWidth
        placeholder={"Email"}
        name="email"
        type="email"
        label="Email"
        sx={{
          margin: "12px 0 21px 0",
          ...whiteForm,
        }}
      />
      <Typography
        component="div"
        sx={{
          color: "rgba(200,200,200,.7)",
          margin: "0",
          width: "80%",
          fontSize: "21px",
          fontWeight: 600,
          cursor: "pointer",
        }}
      >
        {" "}
        Age:{" "}
      </Typography>
      <TextField
        fullWidth
        placeholder={"Age"}
        name="age"
        type="number"
        label="Age"
        sx={{
          margin: "12px 0 21px 0",
          ...whiteForm,
        }}
      />
      <Typography
        component="div"
        sx={{
          color: "rgba(200,200,200,.7)",
          margin: "0",
          width: "80%",
          fontSize: "21px",
          fontWeight: 600,
          cursor: "pointer",
        }}
      >
        {" "}
        Date of Birth:{" "}
      </Typography>
      <TextField
        fullWidth
        placeholder={"DOB"}
        name="dob"
        type="date"
        label=""
        sx={{
          margin: "12px 0 21px 0",
          ...whiteForm,
        }}
      />
      <Typography
        component="div"
        sx={{
          color: "rgba(200,200,200,.7)",
          margin: "0",
          width: "80%",
          fontSize: "21px",
          fontWeight: 600,
          cursor: "pointer",
        }}
      >
        {" "}
        Gender:{" "}
      </Typography>
      <TextField
        fullWidth
        placeholder={"Gender"}
        name="gender"
        type="select"
        select
        label="Gender"
        value={""}
        sx={{
          margin: "12px 0 21px 0",
          ...whiteForm,
        }}
      >
        <MenuItem value="" sx={{ color: "transparent" }}>
          Client
        </MenuItem>
        <MenuItem value="Male">Male</MenuItem>
        <MenuItem value="Female">Female</MenuItem>
      </TextField>
      <Typography
        component="div"
        sx={{
          color: "rgba(200,200,200,.7)",
          margin: "0",
          width: "80%",
          fontSize: "21px",
          fontWeight: 600,
          cursor: "pointer",
        }}
      >
        {" "}
        User Type:{" "}
      </Typography>{" "}
      <TextField
        fullWidth
        placeholder={"User Type"}
        name="userType"
        type="select"
        select
        value={""}
        label="User Type"
        sx={{
          margin: "12px 0 21px 0",
          ...whiteForm,
        }}
      >
        <MenuItem value="" sx={{ color: "transparent" }}>
          Client
        </MenuItem>
        <MenuItem value="Client">Client</MenuItem>
        <MenuItem value="Escort">Escort</MenuItem>
      </TextField>
      <Typography
        component="div"
        sx={{
          textAlign: "",
          margin: "21px 0 0 0",
          fontWeight: 100,
          color: "rgba(200,200,200,.5)",
          fontSize: "32px",
        }}
      >
        {" "}
        Location{" "}
      </Typography>
      <Divider
        sx={{
          width: "24px",
          margin: "0 0 32px 0",
          background: "rgba(255,255,255,.7)",
        }}
      />
      <Typography
        component="div"
        sx={{
          color: "rgba(200,200,200,.7)",
          margin: "0",
          width: "80%",
          fontSize: "21px",
          fontWeight: 600,
          cursor: "pointer",
        }}
      >
        {" "}
        House Number:{" "}
      </Typography>
      <TextField
        fullWidth
        placeholder={"Number"}
        name=""
        type=""
        label="Number"
        sx={{
          margin: "12px 0 21px 0",
          ...whiteForm,
        }}
      />
      <Typography
        component="div"
        sx={{
          color: "rgba(200,200,200,.7)",
          margin: "0",
          width: "80%",
          fontSize: "21px",
          fontWeight: 600,
          cursor: "pointer",
        }}
      >
        {" "}
        Street Name:{" "}
      </Typography>
      <TextField
        fullWidth
        placeholder={"StreetName"}
        name="name"
        type="text"
        label="Street Name"
        sx={{
          margin: "12px 0 21px 0",
          ...whiteForm,
        }}
      />
      <Typography
        component="div"
        sx={{
          color: "rgba(200,200,200,.7)",
          margin: "0",
          width: "80%",
          fontSize: "21px",
          fontWeight: 600,
          cursor: "pointer",
        }}
      >
        {" "}
        Town:{" "}
      </Typography>
      <TextField
        fullWidth
        placeholder={"Town"}
        name=""
        type=""
        label="Town"
        sx={{
          margin: "12px 0 21px 0",
          ...whiteForm,
        }}
      />
      <Typography
        component="div"
        sx={{
          color: "rgba(200,200,200,.7)",
          margin: "0",
          width: "80%",
          fontSize: "21px",
          fontWeight: 600,
          cursor: "pointer",
        }}
      >
        {" "}
        City:{" "}
      </Typography>
      <TextField
        fullWidth
        placeholder={"City"}
        name="name"
        type="text"
        label="City"
        sx={{
          margin: "12px 0 21px 0",
          ...whiteForm,
        }}
      />
      <Typography
        component="div"
        sx={{
          color: "rgba(200,200,200,.7)",
          margin: "0",
          width: "80%",
          fontSize: "21px",
          fontWeight: 600,
          cursor: "pointer",
        }}
      >
        {" "}
        Province:{" "}
      </Typography>
      <TextField
        fullWidth
        placeholder={"Province"}
        name=""
        type=""
        label="Province"
        sx={{
          margin: "12px 0 21px 0",
          ...whiteForm,
        }}
      />
      <Typography
        component="div"
        sx={{
          color: "rgba(200,200,200,.7)",
          margin: "0",
          width: "80%",
          fontSize: "21px",
          fontWeight: 600,
          cursor: "pointer",
        }}
      >
        {" "}
        Postal:{" "}
      </Typography>
      <TextField
        fullWidth
        placeholder={"Postal"}
        name="name"
        type="text"
        label="Postal"
        sx={{
          margin: "12px 0 21px 0",
          ...whiteForm,
        }}
      />
      <Typography
        component="div"
        sx={{
          color: "rgba(200,200,200,.7)",
          margin: "0",
          width: "80%",
          fontSize: "21px",
          fontWeight: 600,
          cursor: "pointer",
        }}
      >
        {" "}
        Country:{" "}
      </Typography>
      <TextField
        fullWidth
        placeholder={"Country"}
        name=""
        type=""
        label="Country"
        sx={{
          margin: "12px 0 21px 0",
          ...whiteForm,
        }}
      />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          margin: "21px 0",
        }}
      >
        <Button
          sx={{
            "&:hover": { background: "#FF3131", color: "#111" },
            minWidth: "45%",
            background: "#FF3131",
            color: "#111",
            fontWeight: "600",
          }}
        >
          {" "}
          Cancel{" "}
        </Button>
        <Button
          sx={{
            "&:hover": { background: "#0FFF50", color: "#111" },
            minWidth: "45%",
            background: "#0FFF50",
            color: "#111",
            fontWeight: "600",
          }}
        >
          {" "}
          Save Changes{" "}
        </Button>
      </Box>
    </Box>
  );
};

const ExclusiveContent = () => {
  return (
    <Box sx={{ margin: "0 0 50px 0" }}>
      <video loop autoPlay style={{ width: "100%" }}>
        <source src="/erotic-video.mp4" type="video/mp4" />
      </video>
      <Grid container>
        {[
          "https://images.pexels.com/photos/1548274/pexels-photo-1548274.jpeg?auto=compress&cs=tinysrgb&w=1600",
          "https://images.pexels.com/photos/289262/pexels-photo-289262.jpeg?auto=compress&cs=tinysrgb&w=1600",
          "https://images.pexels.com/photos/8956318/pexels-photo-8956318.jpeg?auto=compress&cs=tinysrgb&w=1600",
          "https://images.pexels.com/photos/9039112/pexels-photo-9039112.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
          "https://images.pexels.com/photos/6423097/pexels-photo-6423097.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
          "https://images.pexels.com/photos/8712712/pexels-photo-8712712.jpeg?auto=compress&cs=tinysrgb&w=1600",
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
                cursor: "pointer",
                backgroundPostion: "center",
                border: "3px solid #111",
              }}
            ></Grid>
          );
        })}
      </Grid>
      <video loop autoPlay style={{ width: "100%", marginTop: "3px" }}>
        <source
          src="https://player.vimeo.com/external/404110330.sd.mp4?s=63a52dd7dc5f19b66ec7716e88d5523c946530f8&profile_id=164&oauth2_token_id=57447761"
          type="video/mp4"
        />
      </video>
    </Box>
  );
};

const Subscribers = () => {
  return (
    <Box sx={{ height: "auto", margin: "0 0 50px 0" }}>
      {DUMMY_USERS.map((item, index) => {
        return (
          <Box
            key={index}
            sx={{
              minHeight: "80px",
              width: "100%",
              background: "#111",
              margin: "12px 0",
              padding: "8px 12px",
              display: "flex",
              alignItems: "center",
            }}
          >
            {" "}
            <Avatar src={item.img} sx={{ height: "80px", width: "80px" }} />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "90%",
                // background: "red",
                margin: "0 0 0 12px",
              }}
            >
              <Typography sx={{ fontSize: "18px", fontWeight: 500 }}>
                {item.username} <br /> Status :{" "}
                {index % 2 === 0 ? "Subscribed" : "Invalid"}
                {/* <FiberManualRecordIcon sx={{ color: "#16F529" }} /> */}
              </Typography>
              <FiberManualRecordIcon
                sx={{ color: index % 2 === 0 ? "#16F529" : "#FF3131" }}
              />
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

const whiteForm = {
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
};

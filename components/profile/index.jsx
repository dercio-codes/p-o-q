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
import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import "./styles.css";

// import required modules
import { EffectCards } from "swiper";

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
  const [user, setUser] = useState({
    personal: {
      uid: "",
      name: "",
      surname: "",
      username: "",
      email: "2",
      age: "",
      dob: "",
      gender: "",
      userType: "",
      address: {
        number: "",
        street: "",
        town: "",
        city: "",
        province: "",
        country: "",
        postal: "",
        coordinates: {
          latitude: "",
          longitude: "",
        },
      },
    },
    social: {
      // users profile picture
      profilePicture: "",

      // featured images are images or videos put up
      stories: [],

      // if unique id is subscribed we add them to subscribed users if not we hide the content and prompt user to purchase content
      subscribedUsers: [],
      content: [],
    },
    hotelReccomendations: [],
    appointments: [],
  });

  return (
    <Box sx={{ minHeight: "100vh", background: "", padding: "0" }}>
      <Grid container>
        <Grid
          item
          xs={12}
          sx={{ height: "auto", background: "", padding: "21px" }}
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
            New Appointments{" "}
          </Typography>
          <Divider
            sx={{
              width: "24px",
              margin: "0 0 32px 0",
              background: "rgba(255,255,255,.7)",
            }}
          />

          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
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
                    />
                    <Typography
                      variant="span"
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
                      variant="span"
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
                      variant="span"
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
                      variant="span"
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
                      variant="span"
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
        </Grid>
        <Grid
          item
          xs={12}
          sx={{ height: "auto", background: "green", padding: "21px" }}
        ></Grid>
      </Grid>
    </Box>
  );
};

import { useState } from "react";
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

export const Models = () => {
  const [signUp, setSignUp] = useState(false);
  const [open, setOpen] = useState(false);
  const [openModel, setOpenMOdel] = useState({});
  const [selectedGender, setSelectedGender] = useState(
    "Select Preferred Gender"
  );
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
    <Box
      sx={{
        minHeight: "100vh",
        background: "#000",
        padding: { xs: "0 1.2rem", lg: "0 5rem" },
      }}
    >
      <Box sx={{ minHeight: "100vh", margin: "0" }}>
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
              selectedGender == "Select Preferred Gender" ? "none" : "block",
          }}
        >
          {DUMMY_USERS.map((item, index) => {
            if (selectedGender == item.gender) {
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
                        backgroundImage: `url("${item.img}")`,
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
                          variant="span"
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
                          {item.address.city.toUpperCase()}
                        </Typography>{" "}
                        <Rating readOnly value={item.id} />
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
                        sx={{
                          textAlign: "",
                          margin: "8px 0 0 0",
                          fontWeight: 600,
                          color: "rgba(200,200,200,.8)",
                          fontSize: "18px",
                        }}
                      >
                        {" "}
                        <Typography
                          variant="span"
                          sx={{
                            fontSize: "16px",
                            fontWeight: "100",
                            color: "rgba(200,200,200,.6)",
                          }}
                        >
                          {" "}
                          Name :
                        </Typography>{" "}
                        {item.username}{" "}
                      </Typography>
                      <Typography
                        sx={{
                          textAlign: "",
                          margin: "8px 0 0 0",
                          fontWeight: 600,
                          color: "rgba(200,200,200,.8)",
                          fontSize: "18px",
                        }}
                      >
                        {" "}
                        <Typography
                          variant="span"
                          sx={{
                            fontSize: "16px",
                            fontWeight: "100",
                            color: "rgba(200,200,200,.6)",
                          }}
                        >
                          {" "}
                          Tel :
                        </Typography>{" "}
                        {item.phone}{" "}
                      </Typography>
                      <Typography
                        sx={{
                          textAlign: "",
                          margin: "8px 0 0 0",
                          fontWeight: 600,
                          color: "rgba(200,200,200,.8)",
                          fontSize: "18px",
                        }}
                      >
                        {" "}
                        <Typography
                          variant="span"
                          sx={{
                            fontSize: "16px",
                            fontWeight: "100",
                            color: "rgba(200,200,200,.6)",
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
              selectedGender == "Select Preferred Gender" ? "block" : "none",
          }}
        >
          {DUMMY_USERS.map((item, index) => {
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
                      backgroundImage: `url("${item.img}")`,
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
                        variant="span"
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
                        {item.address.city.toUpperCase()}
                      </Typography>{" "}
                      <Rating readOnly value={item.id} />
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
                      sx={{
                        textAlign: "",
                        margin: "8px 0 0 0",
                        fontWeight: 600,
                        color: "rgba(200,200,200,.8)",
                        fontSize: "18px",
                      }}
                    >
                      {" "}
                      <Typography
                        variant="span"
                        sx={{
                          fontSize: "16px",
                          fontWeight: "100",
                          color: "rgba(200,200,200,.6)",
                        }}
                      >
                        {" "}
                        Name :
                      </Typography>{" "}
                      {item.username}{" "}
                    </Typography>
                    <Typography
                      sx={{
                        textAlign: "",
                        margin: "8px 0 0 0",
                        fontWeight: 600,
                        color: "rgba(200,200,200,.8)",
                        fontSize: "18px",
                      }}
                    >
                      {" "}
                      <Typography
                        variant="span"
                        sx={{
                          fontSize: "16px",
                          fontWeight: "100",
                          color: "rgba(200,200,200,.6)",
                        }}
                      >
                        {" "}
                        Tel :
                      </Typography>{" "}
                      {item.phone}{" "}
                    </Typography>
                    <Typography
                      sx={{
                        textAlign: "",
                        margin: "8px 0 0 0",
                        fontWeight: 600,
                        color: "rgba(200,200,200,.8)",
                        fontSize: "18px",
                      }}
                    >
                      {" "}
                      <Typography
                        variant="span"
                        sx={{
                          fontSize: "16px",
                          fontWeight: "100",
                          color: "rgba(200,200,200,.6)",
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
            src={openModel.img}
            sx={{ height: "150px", width: "150px", border: "1px dashed red " }}
          />
          <Typography
            variant="span"
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
            {openModel.username}{" "}
          </Typography>
          <Typography
            variant="span"
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
            {openModel.phone}{" "}
          </Typography>
          <Typography
            variant="span"
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
            {open ? openModel.address.city.toUpperCase() : ""}
          </Typography>{" "}
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
          <Box sx={{ height: "20vh", margin: "50px 0 " }} />
        </Box>
      </Drawer>
    </Box>
  );
};

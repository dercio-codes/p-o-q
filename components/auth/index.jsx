import { useState } from "react";
import {
  Box,
  Grid,
  TextField,
  Button,
  Divider,
  Typography,
  MenuItem,
  Paper,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MenuIcon from "@mui/icons-material/Menu";
import DoneIcon from "@mui/icons-material/Done";
import ClearIcon from "@mui/icons-material/Clear";
import LaunchIcon from "@mui/icons-material/Launch";

const DUMMY_USERS = [
  {
    address: {
      geolocation: { lat: "-37.3159", long: "81.1496" },
      city: "kilcoole",
      street: "new road",
      number: 7682,
      zipcode: "12926-3874",
    },
    id: 1,
    img: "https://images.pexels.com/photos/247204/pexels-photo-247204.jpeg?auto=compress&cs=tinysrgb&w=1600",
    email: "john@gmail.com",
    username: "johnd",
    password: "m38rmF$",
    name: { firstname: "john", lastname: "doe" },
    phone: "1-570-236-7033",
    __v: 0,
  },
  {
    address: {
      geolocation: { lat: "-37.3159", long: "81.1496" },
      city: "kilcoole",
      street: "Lovers Ln",
      number: 7267,
      zipcode: "12926-3874",
    },
    id: 2,
    img: "https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=1600",
    email: "morrison@gmail.com",
    username: "mor_2314",
    password: "83r5^_",
    name: { firstname: "david", lastname: "morrison" },
    phone: "1-570-236-7033",
    __v: 0,
  },
  {
    address: {
      geolocation: { lat: "40.3467", long: "-30.1310" },
      city: "Cullman",
      street: "Frances Ct",
      number: 86,
      zipcode: "29567-1452",
    },
    id: 3,
    img: "https://images.pexels.com/photos/2065203/pexels-photo-2065203.jpeg?auto=compress&cs=tinysrgb&w=1600",
    email: "kevin@gmail.com",
    username: "kevinryan",
    password: "kev02937@",
    name: { firstname: "kevin", lastname: "ryan" },
    phone: "1-567-094-1345",
    __v: 0,
  },
  {
    address: {
      geolocation: { lat: "50.3467", long: "-20.1310" },
      city: "San Antonio",
      street: "Hunters Creek Dr",
      number: 6454,
      zipcode: "98234-1734",
    },
    id: 4,
    img: "https://images.pexels.com/photos/1689731/pexels-photo-1689731.jpeg?auto=compress&cs=tinysrgb&w=1600",
    email: "don@gmail.com",
    username: "donero",
    password: "ewedon",
    name: { firstname: "don", lastname: "romer" },
    phone: "1-765-789-6734",
    __v: 0,
  },
  {
    address: {
      geolocation: { lat: "40.3467", long: "-40.1310" },
      city: "san Antonio",
      street: "adams St",
      number: 245,
      zipcode: "80796-1234",
    },
    id: 5,
    img: "https://images.pexels.com/photos/1162983/pexels-photo-1162983.jpeg?auto=compress&cs=tinysrgb&w=1600",
    email: "derek@gmail.com",
    username: "derek",
    password: "jklg*_56",
    name: { firstname: "derek", lastname: "powell" },
    phone: "1-956-001-1945",
    __v: 0,
  },
  {
    address: {
      geolocation: { lat: "20.1677", long: "-10.6789" },
      city: "el paso",
      street: "prospect st",
      number: 124,
      zipcode: "12346-0456",
    },
    id: 6,
    email: "david_r@gmail.com",
    username: "david_r",
    password: "3478*#54",
    name: { firstname: "david", lastname: "russell" },
    phone: "1-678-345-9856",
    __v: 0,
  },
  {
    address: {
      geolocation: { lat: "10.3456", long: "20.6419" },
      city: "fresno",
      street: "saddle st",
      number: 1342,
      zipcode: "96378-0245",
    },
    id: 7,
    img: "https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600",
    email: "miriam@gmail.com",
    username: "snyder",
    password: "f238&@*$",
    name: { firstname: "miriam", lastname: "snyder" },
    phone: "1-123-943-0563",
    __v: 0,
  },
  {
    address: {
      geolocation: { lat: "50.3456", long: "10.6419" },
      city: "mesa",
      street: "vally view ln",
      number: 1342,
      zipcode: "96378-0245",
    },
    id: 8,
    img: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1600",
    email: "william@gmail.com",
    username: "hopkins",
    password: "William56$hj",
    name: { firstname: "william", lastname: "hopkins" },
    phone: "1-478-001-0890",
    __v: 0,
  },
  {
    address: {
      geolocation: { lat: "40.12456", long: "20.5419" },
      city: "miami",
      street: "avondale ave",
      number: 345,
      zipcode: "96378-0245",
    },
    id: 9,
    img: "https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg?auto=compress&cs=tinysrgb&w=1600",
    email: "kate@gmail.com",
    username: "kate_h",
    password: "kfejk@*_",
    name: { firstname: "kate", lastname: "hale" },
    phone: "1-678-456-1934",
    __v: 0,
  },
  {
    address: {
      geolocation: { lat: "30.24788", long: "-20.545419" },
      city: "fort wayne",
      street: "oak lawn ave",
      number: 526,
      zipcode: "10256-4532",
    },
    id: 10,
    email: "jimmie@gmail.com",
    username: "jimmie_k",
    password: "klein*#%*",
    name: { firstname: "jimmie", lastname: "klein" },
    phone: "1-104-001-4567",
    __v: 0,
  },
];

export const Auth = () => {
  const [signUp, setSignUp] = useState(false);
  const [open, setOpen] = useState(false);
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
      <Paper
        elevation={3}
        sx={{
          display: open ? "flex" : "none",
          background: "rgba(250,250,250,1)",
          margin: "0",
          position: "fixed",
          transition: "2500ms",
          width: "99%",
          left: "8px",
          top: "1.5rem",
          zIndex: "999",
          height: "100px",
          borderRadius: "32px",
          justifyContent: "space-between",
          padding: "0 2.5rem 0 1.5rem",
          alignItems: "center",
        }}
      >
        <Button
          onClick={() => setOpen(!open)}
          sx={{
            scale: "0.8",
            transition: "800ms",
            fontSize: "18px",
            color: "#111",
            "&:hover": {
              borderRadius: "0",
              borderBottom: "2px solid #111",
              scale: "0.9",
            },
            postion: "fixed",
          }}
        >
          {" "}
          <MenuOpenIcon />{" "}
        </Button>
        <Button
          sx={{
            scale: "0.8",
            transition: "800ms",
            fontSize: "18px",
            color: "#111",
            "&:hover": {
              borderRadius: "0",
              borderBottom: "2px solid #111",
              scale: "0.9",
            },
          }}
        >
          {" "}
          Home{" "}
        </Button>
        <Button
          sx={{
            scale: "0.8",
            transition: "800ms",
            fontSize: "18px",
            color: "#111",
            "&:hover": {
              borderRadius: "0",
              borderBottom: "2px solid #111",
              scale: "0.9",
            },
          }}
        >
          {" "}
          Search{" "}
        </Button>
        <Button
          sx={{
            scale: "0.8",
            transition: "800ms",
            fontSize: "18px",
            color: "#111",
            "&:hover": {
              borderRadius: "0",
              borderBottom: "2px solid #111",
              scale: "0.9",
            },
          }}
        >
          {" "}
          Appointments{" "}
        </Button>
        <Button
          sx={{
            scale: "0.8",
            transition: "800ms",
            fontSize: "18px",
            color: "#111",
            "&:hover": {
              borderRadius: "0",
              borderBottom: "2px solid #111",
              scale: "0.9",
            },
          }}
        >
          {" "}
          Live Stream{" "}
        </Button>
        <Button
          sx={{
            scale: "0.8",
            transition: "800ms",
            fontSize: "18px",
            color: "#111",
            "&:hover": {
              borderRadius: "0",
              borderBottom: "2px solid #111",
              scale: "0.9",
            },
          }}
        >
          {" "}
          Recommendations{" "}
        </Button>
        <Button
          sx={{
            scale: "0.8",
            transition: "800ms",
            fontSize: "18px",
            color: "#111",
            "&:hover": {
              borderRadius: "0",
              borderBottom: "2px solid #111",
              scale: "0.9",
            },
          }}
        >
          {" "}
          Profile{" "}
        </Button>
        <Button
          sx={{
            scale: "0.8",
            transition: "800ms",
            fontSize: "18px",
            color: "#111",
            "&:hover": {
              borderRadius: "0",
              borderBottom: "2px solid #111",
              scale: "0.9",
            },
          }}
        >
          {" "}
          Sign Out{" "}
        </Button>
      </Paper>
      <Paper
        elevation={3}
        onClick={() => setOpen(!open)}
        sx={{
          display: open ? "none" : "flex",
          scale: "0.5",
          background: "rgba(250,250,250,1)",
          margin: "0",
          position: "fixed",
          transition: "2500ms",
          width: "100px",
          cursor: "pointer",
          left: "0",
          top: "1.5rem",
          zIndex: "999",
          height: "100px",
          borderRadius: "32px",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <MenuIcon sx={{ fontSize: "50px" }} />
      </Paper>

      <Grid container sx={{ margin: "150px 0" }}>
        <Grid
          item
          xs={12}
          lg={6}
          sx={{
            "&:hover": { scale: "1" },
            display: signUp ? "none" : "block",
            boxShadow: "12px 21px 21px 21px rgba(1,1,1,.3)",
            opacity: signUp ? "0.3" : "1",
            transition: "800ms",
            scale: "0.9",
            minHeight: "95vh",
            borderRadius: { xs: "32px 32px 0 0", lg: "32px 0 0 32px" },
            background: "#eee",
            padding: "2.5rem",
          }}
        >
          <Box
            sx={{
              height: "150px",
              background: "",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                textAlign: "center",
                color: "#111",
                margin: "auto auto",
                letterSpacing: "32px",
                fontSize: "62px",
                fontWeight: 600,
                color: "#F56EB3",
              }}
            >
              {" "}
              PARADISE
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <TextField
              fullWidth
              placeHolder={"Username"}
              name="name"
              type="text"
              label="Name"
              sx={{
                margin: "21px auto",
                width: "60%",
                "& .MuiOutlinedInput-root": {
                  border: "2px solid #111",
                  color: "#111",
                },
                "& .MuiOutlinedInput-root.Mui-focused": {
                  "& > fieldset": { border: "3px solid #111", color: "#111" },
                },
                "& .MuiOutlinedInput-root.Mui-focused": {
                  "& > fieldset": { border: "3px solid #111", color: "#111" },
                },
              }}
            />{" "}
            <br />
            <TextField
              fullWidth
              placeHolder={"Password"}
              name="password"
              type="password"
              label="Password"
              sx={{
                margin: "21px auto",
                width: "60%",
                "& .MuiOutlinedInput-root": {
                  border: "2px solid #111",
                  color: "#111",
                },
                "& .MuiOutlinedInput-root.Mui-focused": {
                  "& > fieldset": { border: "3px solid #111", color: "#111" },
                },
                "& .MuiOutlinedInput-root.Mui-focused": {
                  "& > fieldset": { border: "3px solid #111", color: "#111" },
                },
              }}
            />{" "}
            <br />
            <Button
              sx={{
                background: "#460C68",
                padding: "21px 0",
                color: "#eee",
                fontWeight: "600",
                width: "350px",
                margin: "21px 0",
              }}
            >
              {" "}
              Login{" "}
            </Button>
          </Box>
          <Typography
            sx={{ textAlign: "center", color: "#111", margin: "21px 0" }}
          >
            {" "}
            Terms & Conditions{" "}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                textAlign: "center",
                color: "#111",
                margin: "21px 0",
                width: "fit-content",
                fontWeight: 600,
                "&:hover": { color: "#7F167F" },
                cursor: "pointer",
              }}
              onClick={() => setSignUp(!signUp)}
            >
              {" "}
              Sign Up Here{" "}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Divider sx={{ margin: "21px 0", width: "45%" }} />
            <Typography
              sx={{ textAlign: "center", color: "#111", fontWeight: "600" }}
            >
              {" "}
              or{" "}
            </Typography>
            <Divider sx={{ margin: "21px 0", width: "45%" }} />
          </Box>

          <Typography
            sx={{ textAlign: "center", color: "#111", margin: "21px 0" }}
          >
            {" "}
            Use Social Media{" "}
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              sx={{
                margin: "21px 0",
                background: "#3b5998",
                padding: "21px 0",
                color: "#eee",
                fontWeight: "600",
                width: "250px",
              }}
            >
              {" "}
              Facebook{" "}
            </Button>
            <Button
              sx={{
                margin: "21px 0",
                background: "#F4B400",
                padding: "21px 0",
                color: "#eee",
                fontWeight: "600",
                width: "250px",
              }}
            >
              {" "}
              Google{" "}
            </Button>
            <Button
              sx={{
                margin: "21px 0",
                background: "#1DA1F2",
                padding: "21px 0",
                color: "#eee",
                fontWeight: "600",
                width: "250px",
              }}
            >
              {" "}
              Twitter{" "}
            </Button>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          lg={6}
          sx={{
            minHeight: "95vh",
            borderRadius: { xs: "0 0 32px 32px", lg: "0 32px 32px 0" },
            background: "red",
            display: signUp ? "none" : "block",
            backgroundImage:
              'url("https://images.pexels.com/photos/4336969/pexels-photo-4336969.jpeg?auto=compress&cs=tinysrgb&w=1600")',
            // backgroundImage:'url("https://images.pexels.com/photos/925746/pexels-photo-925746.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load")' ,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            background: "center",
            padding: "0",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              background: "rgba(1,1,1,.7)",
              borderRadius: "0 32px 32px 0",
            }}
          />
        </Grid>

        <Grid
          item
          xs={12}
          lg={6}
          sx={{
            minHeight: "95vh",
            borderRadius: "32px 0 0 32px",
            background: "red",
            display: signUp ? "block" : "none",
            backgroundImage:
              'url("https://images.pexels.com/photos/5756495/pexels-photo-5756495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
            // backgroundImage:'url("https://images.pexels.com/photos/925746/pexels-photo-925746.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load")' ,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            background: "center",
            padding: "2.5rem",
          }}
        ></Grid>

        <Grid
          item
          xs={12}
          lg={6}
          sx={{
            background: "white",
            borderRadius: "0 32px 32px 0",
            transition: "800ms",
            display: signUp ? "block" : "none",
            position: "relative",
            padding: "2.5rem",
          }}
        >
          <Button
            sx={{
              position: "absolute",
              top: "1.5rem",
              left: "2rem",
              color: "rgba(1,1,1,.5)",
            }}
            onClick={() => setSignUp(!signUp)}
          >
            {" "}
            <ArrowBackIcon sx={{ margin: "0 8px 0 0" }} /> Back to Sign In{" "}
          </Button>
          <Typography
            sx={{
              textAlign: "",
              margin: "42px 0 0 0",
              fontWeight: 100,
              color: "rgba(1,1,1,.5)",
              fontSize: "32px",
            }}
          >
            {" "}
            Personal{" "}
          </Typography>
          <Divider sx={{ width: "24px", margin: "0 0 21px 0" }} />
          <TextField
            fullWidth
            placeHolder={"Name"}
            name="name"
            type="text"
            label="Name"
            sx={{ margin: "21px 0" }}
          />
          <TextField
            fullWidth
            placeHolder={"Surname"}
            name="surname"
            type="text"
            label="Surname"
            sx={{ margin: "21px 0" }}
          />
          <TextField
            fullWidth
            placeHolder={"Username"}
            name="username"
            type="text"
            label="Username"
            sx={{ margin: "21px 0" }}
          />
          <TextField
            fullWidth
            placeHolder={"Email"}
            name="email"
            type="email"
            label="Email"
            sx={{ margin: "21px 0" }}
          />
          <TextField
            fullWidth
            placeHolder={"Age"}
            name="age"
            type="number"
            label="Age"
            sx={{ margin: "21px 0" }}
          />
          <TextField
            fullWidth
            placeHolder={"DOB"}
            name="dob"
            type="date"
            label=""
            sx={{ margin: "21px 0" }}
          />
          <TextField
            fullWidth
            placeHolder={"Gender"}
            name="gender"
            type="select"
            select
            label="Gender"
            sx={{ margin: "21px 0" }}
          >
            <MenuItem value="" sx={{ color: "transparent" }}>
              Client
            </MenuItem>
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
          </TextField>
          <TextField
            fullWidth
            placeHolder={"User Type"}
            name="userType"
            type="select"
            select
            label="User Type"
            sx={{ margin: "21px 0" }}
          >
            <MenuItem value="" sx={{ color: "transparent" }}>
              Client
            </MenuItem>
            <MenuItem value="Client">Client</MenuItem>
            <MenuItem value="Escort">Escort</MenuItem>
          </TextField>

          <Typography
            sx={{
              textAlign: "",
              margin: "21px 0 0 0",
              fontWeight: 100,
              color: "rgba(1,1,1,.5)",
              fontSize: "32px",
            }}
          >
            {" "}
            Location{" "}
          </Typography>
          <Divider sx={{ width: "24px", margin: "0 0 21px 0" }} />
          <TextField
            fullWidth
            placeHolder={"Number"}
            name=""
            type=""
            label="Number"
            sx={{ margin: "21px 0" }}
          />
          <TextField
            fullWidth
            placeHolder={"StreetName"}
            name="name"
            type="text"
            label="Street Name"
            sx={{ margin: "21px 0" }}
          />
          <TextField
            fullWidth
            placeHolder={"Town"}
            name=""
            type=""
            label="Town"
            sx={{ margin: "21px 0" }}
          />
          <TextField
            fullWidth
            placeHolder={"City"}
            name="name"
            type="text"
            label="City"
            sx={{ margin: "21px 0" }}
          />
          <TextField
            fullWidth
            placeHolder={"Province"}
            name=""
            type=""
            label="Province"
            sx={{ margin: "21px 0" }}
          />
          <TextField
            fullWidth
            placeHolder={"Postal"}
            name="name"
            type="text"
            label="Postal"
            sx={{ margin: "21px 0" }}
          />
          <TextField
            fullWidth
            placeHolder={"Country"}
            name=""
            type=""
            label="Country"
            sx={{ margin: "21px 0" }}
          />
        </Grid>
      </Grid>

      <Box sx={{ minHeight: "100vh", margin: "60px 0" }}>
        <Typography
          sx={{
            textAlign: "",
            margin: "21px 0 12px 0",
            fontWeight: 100,
            color: "rgba(255,255,255,.5)",
            fontSize: "32px",
          }}
        >
          {" "}
          Models{" "}
        </Typography>
        <Divider
          sx={{
            width: "24px",
            margin: "0 0 62px 0",
            background: "rgba(255,255,255,.7)",
          }}
        />
        <Grid container spacing={6}>
          {DUMMY_USERS.map((item, index) => {
            return (
              <Grid key={index} item xs={6} lg={2}>
                <Box
                  sx={{
                    height: "400px",
                    background: "rgba(255,255,255,.9)",
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
                      height: "200px",
                      width: "100%",
                      backgroundImage: `url("${item.img})`,
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                    }}
                  />
                  <Box
                    sx={{
                      height: "200px",
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
                        margin: "0 0 0 0",
                        fontWeight: 600,
                        color: "rgba(1,1,1,.8)",
                        fontSize: "18px",
                      }}
                    >
                      {" "}
                      <Typography
                        variant="span"
                        sx={{
                          fontSize: "16px",
                          fontWeight: "100",
                          color: "rgba(1,1,1,.6)",
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
                        margin: "0 0 0 0",
                        fontWeight: 600,
                        color: "rgba(1,1,1,.8)",
                        fontSize: "18px",
                      }}
                    >
                      {" "}
                      <Typography
                        variant="span"
                        sx={{
                          fontSize: "16px",
                          fontWeight: "100",
                          color: "rgba(1,1,1,.6)",
                        }}
                      >
                        {" "}
                        Location :
                      </Typography>{" "}
                      {item.address.city}{" "}
                    </Typography>
                    <Typography
                      sx={{
                        textAlign: "",
                        margin: "0 0 0 0",
                        fontWeight: 600,
                        color: "rgba(1,1,1,.8)",
                        fontSize: "18px",
                      }}
                    >
                      {" "}
                      <Typography
                        variant="span"
                        sx={{
                          fontSize: "16px",
                          fontWeight: "100",
                          color: "rgba(1,1,1,.6)",
                        }}
                      >
                        {" "}
                        Status :
                      </Typography>{" "}
                      {index % 2 == 0 ? "Available" : "Not Available"}{" "}
                    </Typography>
                    <Button
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
                      Book{" "}
                    </Button>
                  </Box>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Box>

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

        <Grid container>
          <Grid
            item
            xs={12}
            lg={4}
            sx={{
              height: "120px",
              display: "flex",
              scale: "0.98",
              transition: "800ms",
              "&:hover": { scale: "1" },
              padding: "0 0 0",
              border: "5px solid #000",
              background: "",
            }}
          >
            <Paper
              elevation={3}
              sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                background: "rgba(255,255,255,.8)",
              }}
            >
              <Box
                sx={{
                  height: "100%",
                  flex: "1",
                  backgroundImage:
                    'url("https://images.pexels.com/photos/4883795/pexels-photo-4883795.png?auto=compress&cs=tinysrgb&w=600&lazy=load")',
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPostion: "center",
                }}
              />
              <Box
                sx={{
                  height: "100%",
                  flex: "2",
                  background: "",
                  padding: "8px",
                }}
              >
                <Typography
                  sx={{
                    textAlign: "",
                    margin: "0 0 4px 0",
                    fontWeight: 600,
                    color: "rgba(1,1,1,.8)",
                    fontSize: "18px",
                  }}
                >
                  {" "}
                  <Typography
                    variant="span"
                    sx={{
                      fontSize: "16px",
                      fontWeight: "100",
                      color: "rgba(1,1,1,.6)",
                    }}
                  >
                    {" "}
                    Name :
                  </Typography>{" "}
                  Scarlett{" "}
                </Typography>
                <Typography
                  sx={{
                    textAlign: "",
                    margin: "0 0 4px 0",
                    fontWeight: 600,
                    color: "rgba(1,1,1,.8)",
                    fontSize: "18px",
                  }}
                >
                  {" "}
                  <Typography
                    variant="span"
                    sx={{
                      fontSize: "16px",
                      fontWeight: "100",
                      color: "rgba(1,1,1,.6)",
                    }}
                  >
                    {" "}
                    Time :
                  </Typography>{" "}
                  09:00 - 21/02/23{" "}
                </Typography>
                <Typography
                  sx={{
                    textAlign: "",
                    margin: "0 0 4px 0",
                    fontWeight: 600,
                    color: "rgba(1,1,1,.8)",
                    fontSize: "18px",
                  }}
                >
                  {" "}
                  <Typography
                    variant="span"
                    sx={{
                      fontSize: "16px",
                      fontWeight: "100",
                      color: "rgba(1,1,1,.6)",
                    }}
                  >
                    {" "}
                    Location :
                  </Typography>{" "}
                  Johanessbrg{" "}
                </Typography>
              </Box>
              <Box
                sx={{
                  height: "100%",
                  flex: "1",
                  background: "",
                  padding: "8px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                  }}
                >
                  <Button>
                    <DoneIcon sx={{ color: "rgba(1,1,1,.7)" }} />
                  </Button>
                  <Button>
                    <ClearIcon sx={{ color: "rgba(1,1,1,.7)" }} />
                  </Button>
                </Box>

                <Box>
                  <Button>
                    <LaunchIcon sx={{ color: "rgba(1,1,1,.7)" }} />
                  </Button>
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

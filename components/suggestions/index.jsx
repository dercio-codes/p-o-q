import React, { useState } from "react";
import { Box, Button, Divider, Typography, Rating } from "@mui/material";
import sapi from "@findhotel/sapi";

export const Suggestions = () => {
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

  //   const getHotels = async () => {
  //     const profileKey = "profile-key";
  //     const sapiClient = await sapi(profileKey, {
  //       anonymousId: "fd9dbb5f-b337-4dd7-b640-1f177d1d3caa",
  //       language: "en",
  //       currency: "ZAR",
  //       countryCode: "RSA",
  //     });
  //     const suggestions = await sapiClient.suggest("London", 6);
  //     console.log(suggestions);
  //   };

  //   React.useEffect(() => {
  //     getHotels();
  //   }, []);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "#000",
        padding: { xs: "0 1.5rem", lg: "0 5rem" },
      }}
    >
      <Box sx={{ minHeight: "50vh", background: "", padding: "0" }}>
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
          Recommendations{" "}
        </Typography>
        <Divider
          sx={{
            width: "24px",
            margin: "0 0 21px 0",
            background: "rgba(255,255,255,.7)",
          }}
        />

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: { xs: "column", lg: "row" },
          }}
        >
          <Box
            sx={{
              minHeight: "45vh",
              scale: "0.95",
              left: "0",
              width: { xs: "100%", lg: "50%" },
              backgroundImage:
                "url('https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1600')",
              backgroundPosition: "center",
              backgroundSize: "cover",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "flex-end",
              "&:hover": { scale: "0.99" },
              transition: "800ms",
            }}
          >
            <Box
              sx={{
                width: "100%",
                minHeight: "150px",
                background:
                  "linear-gradient(180deg, rgba(0,0,0,0.23012955182072825) 0%, rgba(0,0,0,0.7847514005602241) 50%, rgba(0,0,0,0.10968137254901966) 1000%);",
                padding: "21px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box sx={{ flex: "10" }}>
                <Typography
                  sx={{
                    textAlign: "",
                    margin: "6px 0 6px 0",
                    fontWeight: 600,
                    color: "white",
                    fontSize: "24px",
                    width: "100%",
                  }}
                >
                  {" "}
                  Sandton Majestic Palace of Kings{" "}
                </Typography>
                <Typography
                  noWrap={false}
                  sx={{
                    textAlign: "",
                    width: "100%",
                    margin: "6px 0 2px 0",
                    fontWeight: 100,
                    color: "white",
                    fontSize: "16px",
                  }}
                >
                  {
                    "One of Sandton Visitors favourites bearing mutlitiple suites and accomodation for every scenario"
                  }
                </Typography>
                <Rating value={5} readOnly />
              </Box>
              <Button
                sx={{
                  background: "#460C68",
                  padding: "12px 0",
                  color: "#eee",
                  fontWeight: "600",
                  //   width: "150px",
                  flex: "1.5",
                  margin: "8px 0",
                }}
              >
                {" "}
                View{" "}
              </Button>
            </Box>
          </Box>

          <Box
            sx={{
              minHeight: "45vh",
              scale: "0.95",
              width: { xs: "100%", lg: "50%" },
              backgroundImage:
                "url('https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1600')",
              backgroundPosition: "center",
              backgroundSize: "cover",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "flex-end",
              "&:hover": { scale: "0.99" },
              transition: "800ms",
            }}
          >
            <Box
              sx={{
                width: "100%",
                minHeight: "150px",
                background:
                  "linear-gradient(180deg, rgba(0,0,0,0.23012955182072825) 0%, rgba(0,0,0,0.7847514005602241) 50%, rgba(0,0,0,0.10968137254901966) 1000%);",
                padding: "21px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box sx={{ flex: "10" }}>
                <Typography
                  sx={{
                    textAlign: "",
                    margin: "6px 0 0px 0",
                    fontWeight: 600,
                    color: "white",
                    fontSize: "24px",
                  }}
                >
                  {" "}
                  Plaza of Life{" "}
                </Typography>
                <Typography
                  noWrap={false}
                  sx={{
                    textAlign: "",
                    width: "100%",
                    margin: "6px 0 2px 0",
                    fontWeight: 100,
                    color: "white",
                    fontSize: "16px",
                  }}
                >
                  {
                    "Established in 1893 this plaza has been home to many of the greatest warriors in history"
                  }
                </Typography>
                <Rating value={5} readOnly />
              </Box>
              <Button
                sx={{
                  background: "#460C68",
                  padding: "12px 0",
                  color: "#eee",
                  fontWeight: "600",
                  //   width: "150px",
                  flex: "1.5",
                  margin: "8px 0",
                }}
              >
                {" "}
                View{" "}
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          minHeight: "20vh",
          background: "",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "21px",
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            margin: "21px 0 0 0",
            fontWeight: 100,
            color: "rgba(255,255,255,.5)",
            fontSize: "21px",
          }}
        >
          {" "}
          Made by Atomus Dev{" "}
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            margin: "12px 0 0 0",
            fontWeight: 100,
            color: "rgba(255,255,255,.5)",
            fontSize: "21px",
          }}
        >
          {" "}
          2023{" "}
        </Typography>
      </Box>
    </Box>
  );
};

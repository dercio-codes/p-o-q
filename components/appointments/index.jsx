import { useState, useContext } from "react";
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
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { UserContext } from "../../pages/_app";

export const Appointments = () => {
  const [signUp, setSignUp] = useState(false);
  const [open, setOpen] = useState(false);
  const { user, setUser } = useContext(UserContext);

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

        <Grid container>
          {user.appointments.length > 0 ? (
            user.appointments.map((item, index) => {
              return (
                <Grid
                  item
                  key={index}
                  xs={12}
                  lg={4}
                  sx={{
                    minHeight: "150px",
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
                      justifyContent: "space-between",
                      alignItems: "center",
                      background: "rgba(255,255,255,.8)",
                    }}
                  >
                    <Box
                      sx={{
                        height: "100%",
                        width: "150px",
                        backgroundImage: `url("${item.img}")`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPostion: "center",
                      }}
                    />
                    <Box
                      sx={{
                        height: "100%",
                        // minWidth: { xs: "150px", md: "250px" },
                        flex: 1,
                        // flex: { xs: "1", lg: "2" },
                        background: "",
                        display: "flex",
                        justifyContent: "space-evenly",
                        flexDirection: "column",
                        // alignItems: "center",
                        padding: { xs: "0px 8px", md: "0px 16px" },
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          flexDirection: { xs: "column", md: "row" },
                        }}
                      >
                        <Typography
                          variant="span"
                          sx={{
                            fontSize: "16px",
                            fontWeight: "100",
                            color: "rgba(1,1,1,.9)",
                            margin: "0",
                          }}
                        >
                          {" "}
                          Name :
                        </Typography>{" "}
                        <Typography
                          sx={{
                            textAlign: "",
                            margin: "2px 6px 0",
                            fontWeight: 600,
                            color: "rgba(1,1,1,.8)",
                            fontSize: "14px",
                          }}
                        >
                          {"  "}
                          {item.username}{" "}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          flexDirection: { xs: "column", md: "row" },
                        }}
                      >
                        <Typography
                          variant="span"
                          sx={{
                            fontSize: "16px",
                            fontWeight: "100",
                            color: "rgba(1,1,1,.9)",
                            margin: "0",
                          }}
                        >
                          {"  "}
                          Gender :
                        </Typography>{" "}
                        <Typography
                          sx={{
                            textAlign: "",
                            margin: "2px 6px 0",
                            fontWeight: 600,
                            color: "rgba(1,1,1,.8)",
                            fontSize: "14px",
                          }}
                        >
                          {"   "}
                          {item.gender}{" "}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          flexDirection: { xs: "column", md: "row" },
                        }}
                      >
                        <Typography
                          variant="span"
                          sx={{
                            fontSize: "16px",
                            fontWeight: "100",
                            color: "rgba(1,1,1,.9)",
                            margin: "0",
                          }}
                        >
                          {"  "}
                          Location :
                        </Typography>{" "}
                        <Typography
                          sx={{
                            textAlign: "",
                            margin: "2px 6px 0",
                            fontWeight: 600,
                            color: "rgba(1,1,1,.8)",
                            fontSize: "14px",
                          }}
                        >
                          {"   "}
                          {item.address.city}{" "}
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        height: "100%",
                        // flex: "0.5",
                        width: "fit-content",
                        // background: "pink",
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
                          flexDirection: "column",
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
              );
            })
          ) : (
            <Grid item xs={12}>
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
                {/* <LockIcon sx={{ fontSize: "100px" }} /> */}
                <Box
                  id="error"
                  sx={{
                    backgroundImage:
                      "url(https://cdn-icons-png.flaticon.com/512/9677/9677764.png)",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPostion: "center",
                    height: "250px",
                    width: "250px",
                  }}
                />
                <Typography
                  component="div"
                  sx={{
                    textAlign: "center",
                    color: "#111",
                    margin: "32px 0",
                    // letterSpacing: { xs: "6px" },
                    fontSize: { xs: "32px" },
                    lineHeight: "2.5rem",
                    fontWeight: 900,
                    color: "rgba(255,255,255,.7)",
                  }}
                >
                  {"Empty"}
                </Typography>
                <Typography
                  component="div"
                  sx={{
                    textAlign: "center",
                    color: "#111",
                    fontSize: { xs: "21px" },
                    lineHeight: "2.5rem",
                    // fontWeight: 900,
                    color: "rgba(255,255,255,.7)",
                  }}
                >
                  {`No appointments have been made from any clients.`}
                </Typography>
              </Box>
            </Grid>
          )}
        </Grid>
      </Box>
    </Box>
  );
};

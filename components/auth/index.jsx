import { useState, useEffect, useContext } from "react";
import {
  Box,
  Grid,
  TextField,
  Button,
  Divider,
  Typography,
  MenuItem,
  Modal,
  Paper,
} from "@mui/material";
import { useRouter } from "next/navigation";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MenuIcon from "@mui/icons-material/Menu";
import DoneIcon from "@mui/icons-material/Done";
import ClearIcon from "@mui/icons-material/Clear";
import LaunchIcon from "@mui/icons-material/Launch";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
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
import {
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  FacebookAuthProvider,
  setPersistence,
  browserLocalPersistence,
  browserSessionPersistence,
  inMemoryPersistence,
} from "firebase/auth";
import { UserContext } from "../../pages/_app";
import { AgeAuthentication } from "./age-authentication";

export const Auth = (props) => {
  const router = useRouter();
  const [signUp, setSignUp] = useState(false);
  const [open, setOpen] = useState(false);
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    const localStorageUser = localStorage.getItem("authUser");
    const localStorageUserCopy = JSON.parse(localStorageUser);
    auth.onAuthStateChanged((localStorageUser) => {
      if (localStorageUser) {
        console.log("Logged in");
        setUser({ ...localStorageUserCopy });
        router.push("/home");
      } else {
        console.log("Not logged in");
      }
    });
  }, []);

  const googleHandler = async () => {
    googleProvider.setCustomParameters({ prompt: "select_account" });
    signInWithPopup(auth, googleProvider)
      .then(async (result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        // The signed-in user info.
        const resultUser = result.user;

        const updateUserResponse = async (result) => {
          // console.log(uploadingUser);
          try {
            // console.log("uploading : ", {
            //   ...user,
            //   personal: {
            //     ...user.personal,
            //     uid: result.user.uid,
            //     email: result.user.email,
            //     username: result.user.displayName,
            //   },
            // });
            setUser({
              ...user,
              personal: {
                ...user.personal,
                uid: result.user.uid,
                email: result.user.email,
                username: result.user.displayName,
              },
              social: {
                ...user.social,
                profilePicture: result.user.photoURL,
              },
            });

            let userExists = false;
            const querySnapshot = await getDocs(collection(db, "users"));

            const checkIfUserExists = () => {
              let exists = false;
              querySnapshot.forEach((item) => {
                if (item.id === resultUser.email) {
                  console.log("snapshop result :", item.id);
                  exists = true;
                  setUser({ ...item.data() });
                  return;
                } else {
                  exists = false;
                }
              });
              return exists;
            };

            const doesExist = checkIfUserExists();
            console.log(doesExist);
            if (checkIfUserExists()) {
              router.push("/home");
            } else {
              setOpen(true);
            }
          } catch (err) {
            alert(err.message);
          }
        };
        updateUserResponse(result);
      })
      .catch((error) => {
        // Handle Errors here.
        console.log(error);
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  const updateUserOnDB = async () => {
    await setDoc(doc(db, "users", user.personal.email), {
      ...user,
    });
    localStorage.setItem("authUser", JSON.stringify(user));
    router.push("/profile");
  };

  return open ? (
    <AgeAuthentication updateUserOnDB={updateUserOnDB} />
  ) : (
    <Box
      sx={{
        minHeight: "100vh",
        background: "#000",
        padding: { xs: "0 1.2rem", lg: "0 5rem" },
      }}
    >
      <Box
        sx={{
          height: { xs: "250px" },
          width: "100%",
          backgroundColor: "#000",
          backgroundImage:
            'url("https://images.pexels.com/photos/230986/pexels-photo-230986.jpeg?auto=compress&cs=tinysrgb&w=1600")',
          // 'url("https://images.pexels.com/photos/1157936/pexels-photo-1157936.jpeg?auto=compress&cs=tinysrgb&w=1600")',
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></Box>
      <Box
        sx={{
          minHeight: "200px",
          background: "",
          display: "flex",
          alignItems: "center",
          margin: "0 0 12px 0",
        }}
      >
        <Typography
          className={"paradise-font"}
          sx={{
            textAlign: "center",
            color: "#111",
            margin: "auto auto",
            letterSpacing: { xs: "12px", lg: "32px" },
            fontSize: { xs: "32px", lg: "62px" },
            fontWeight: 900,
            color: "#F56EB3",
          }}
        >
          {" "}
          PARADISE <br /> FOR <br /> QUEENS{" "}
        </Typography>
      </Box>
      <Grid container sx={{ margin: "8px 0" }}>
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
            scale: "0.98",
            minHeight: { xs: "50vh", lg: "95vh" },
            borderRadius: { xs: "32px 32px 0 0", lg: "32px 0 0 32px" },
            background: "rgba(1,1,1,.8)",
            padding: "2.5rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  color: "rgba(255,255,255,.7)",
                  margin: "0 auto",
                  textAlign: "center",
                  width: "80%",
                  fontSize: "21px",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                {" "}
                Email{" "}
              </Typography>
              <TextField
                fullWidth
                placeholder={"Email"}
                name="email"
                type="email"
                // label="Name"
                sx={{
                  margin: "12px auto 21px auto",
                  width: { xs: "100%", lg: "60%" },
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
              />{" "}
              <br />
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  color: "rgba(255,255,255,.7)",
                  margin: "0 auto",
                  textAlign: "center",
                  width: "80%",
                  fontSize: "21px",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                {" "}
                Password{" "}
              </Typography>
              <TextField
                fullWidth
                placeholder={"Password"}
                name="password"
                type="password"
                sx={{
                  margin: "12px auto 21px auto",
                  width: { xs: "100%", lg: "60%" },
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
              />{" "}
              <br />
              <Button
                sx={{
                  background: "#460C68",
                  padding: "21px 0",
                  color: "#eee",
                  fontWeight: "600",
                  width: { xs: "100%", lg: "350px" },
                  margin: "21px 0",
                  "&:hover": { color: "#460C68" },
                }}
              >
                {" "}
                Login{" "}
              </Button>
            </Box>
          </Box>
          <Typography
            sx={{
              textAlign: "center",
              color: "rgba(255,255,255,.7)",
              margin: "21px 0",
              textDecoration: "underline",
            }}
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
                color: "#7f167f",
                margin: "12px 0",
                width: "fit-content",
                fontWeight: 600,
                "&:hover": { color: "#7F167F", textDecoration: "underline" },
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
            {/* color: "rgba(255,255,255,.7)", */}
            <Divider
              sx={{
                margin: "21px 0",
                width: "40%",
                background: "rgba(255,255,255,.7)",
              }}
            />
            <Typography
              sx={{
                textAlign: "center",
                color: "rgba(255,255,255,.7)",
                fontWeight: "600",
                fontSize: "21px",
              }}
            >
              {" "}
              OR{" "}
            </Typography>
            <Divider
              sx={{
                margin: "21px 0",
                width: "40%",
                background: "rgba(255,255,255,.7)",
              }}
            />
          </Box>

          <Typography
            sx={{
              textAlign: "center",
              color: "rgba(255,255,255,.7)",
              margin: "21px 0",
            }}
          >
            {" "}
            Use Social Media{" "}
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: { xs: "column", lg: "row" },
            }}
          >
            <Button
              sx={{
                margin: "12px 6px",
                border: "1px solid transparent",
                "&:hover": {
                  border: "1px solid #3b5998",
                  filter: "invert(1px)",
                },
                padding: "16px 0",
                color: "#3b5998",
                fontWeight: "600",
                width: "230px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {" "}
              Continue with{" "}
              <FacebookIcon sx={{ color: "#3b5998", margin: "0 12px" }} />
            </Button>
            {/* GoogleIcon - #F4B400 */}
            {/* TwitterIcon - #1DA1F2 */}
            <Button
              onClick={googleHandler}
              sx={{
                margin: "12px 6px",
                border: "1px solid transparent",
                "&:hover": {
                  border: "1px solid #F4B400",
                  filter: "invert(1px)",
                },
                padding: "16px 0",
                color: "#F4B400",
                fontWeight: "600",
                width: "230px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {" "}
              Continue with{" "}
              <GoogleIcon sx={{ color: "#F4B400", margin: "0 12px" }} />
            </Button>
            <Button
              sx={{
                margin: "12px 6px",
                border: "1px solid transparent",
                "&:hover": {
                  border: "1px solid #1DA1F2",
                  filter: "invert(1px)",
                },
                padding: "16px 0",
                color: "#1DA1F2",
                fontWeight: "600",
                width: "230px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {" "}
              Continue with{" "}
              <TwitterIcon sx={{ color: "#1DA1F2", margin: "0 12px" }} />
            </Button>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          lg={6}
          sx={{
            minHeight: { xs: "50vh", lg: "95vh" },
            borderRadius: { xs: "0 0 32px 32px", lg: "0 32px 32px 0" },
            background: "red",
            display: signUp ? "none" : "block",
            backgroundImage:
              'url("https://images.pexels.com/photos/267285/pexels-photo-267285.jpeg?auto=compress&cs=tinysrgb&w=1600")',
            // backgroundImage:'url("https://images.pexels.com/photos/925746/pexels-photo-925746.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load")' ,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            background: "center bottom",
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
            minHeight: { xs: "95vh", lg: "95vh" },
            borderRadius: "32px 0 0 32px",
            background: "red",
            display: signUp ? "block" : "none",
            backgroundImage:
              'url("https://images.pexels.com/photos/1548274/pexels-photo-1548274.jpeg?auto=compress&cs=tinysrgb&w=1600")',
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
          <Typography
            sx={{
              color: "rgba(1,1,1,.7)",
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
            sx={{ margin: "12px 0 21px " }}
          />
          <Typography
            sx={{
              color: "rgba(1,1,1,.7)",
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
            sx={{ margin: "12px 0 21px 0" }}
          />
          <Typography
            sx={{
              color: "rgba(1,1,1,.7)",
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
            sx={{ margin: "12px 0 21px 0" }}
          />
          <Typography
            sx={{
              color: "rgba(1,1,1,.7)",
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
            sx={{ margin: "12px 0 21px 0" }}
          />
          <Typography
            sx={{
              color: "rgba(1,1,1,.7)",
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
            sx={{ margin: "12px 0 21px 0" }}
          />
          <Typography
            sx={{
              color: "rgba(1,1,1,.7)",
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
            sx={{ margin: "12px 0 21px 0" }}
          />
          <Typography
            sx={{
              color: "rgba(1,1,1,.7)",
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
            sx={{ margin: "12px 0 21px 0" }}
          >
            <MenuItem value="" sx={{ color: "transparent" }}>
              Client
            </MenuItem>
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
          </TextField>
          <Typography
            sx={{
              color: "rgba(1,1,1,.7)",
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
            sx={{ margin: "12px 0 21px 0" }}
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
          <Typography
            sx={{
              color: "rgba(1,1,1,.7)",
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
            sx={{ margin: "12px 0 21px 0" }}
          />
          <Typography
            sx={{
              color: "rgba(1,1,1,.7)",
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
            sx={{ margin: "12px 0 21px 0" }}
          />
          <Typography
            sx={{
              color: "rgba(1,1,1,.7)",
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
            sx={{ margin: "12px 0 21px 0" }}
          />
          <Typography
            sx={{
              color: "rgba(1,1,1,.7)",
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
            sx={{ margin: "12px 0 21px 0" }}
          />
          <Typography
            sx={{
              color: "rgba(1,1,1,.7)",
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
            sx={{ margin: "12px 0 21px 0" }}
          />
          <Typography
            sx={{
              color: "rgba(1,1,1,.7)",
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
            sx={{ margin: "12px 0 21px 0" }}
          />
          <Typography
            sx={{
              color: "rgba(1,1,1,.7)",
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
            sx={{ margin: "12px 0 21px 0" }}
          />
        </Grid>
      </Grid>
      <Modal
        open={open}
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          zIndex: 99999,
        }}
      >
        <Box
          sx={{
            width: "95%",
            margin: "auto auto",
            background: "#111",
            minHeight: "90vh",
            padding: "2.5rem 1rem",
          }}
        >
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
            Complete Profile{" "}
          </Typography>
          <Divider
            sx={{
              width: "24px",
              margin: "0 0 32px 0",
              background: "rgba(255,255,255,.7)",
            }}
          />
          <AgeAuthentication user={user} setUser={setUser} />
        </Box>
      </Modal>
    </Box>
  );
};

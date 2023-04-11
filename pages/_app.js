import "../styles/globals.css";
import { Navbar } from "./../components/navbar";
import { createContext, useContext, useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import jwt from "jsonwebtoken";
import { RotatingSquare } from "react-loader-spinner";
import Box from "@mui/material/Box";
import {
  query,
  collection,
  addDoc,
  setDoc,
  deleteDoc,
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
  app,
} from "./../config/firebaseConfig";
import { getMessaging, getToken } from "firebase/messaging";
import { useRouter } from "next/navigation";

export const UserContext = createContext();
export const LoaderContext = createContext();

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [user, setUser] = useState({
    personal: {
      uid: "",
      name: "",
      surname: "",
      username: "",
      email: "",
      age: "",
      dob: "2023/01/01",
      tel: "",
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
    fetishes: [],
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
  const [loading, setLoading] = useState(false);
  // function requestPermission() {
  //   console.log("Requesting permission...");
  //   if (typeof Notification !== "undefined") {
  //     //check if browser supports service worker
  //     if ("serviceWorker" in navigator) {
  //       // registers the service worker file with the filename
  //       navigator.serviceWorker.register("sw.js");
  //       console.log("got sumn");
  //     }
  //     Notification.requestPermission().then((permission) => {
  //       if (permission === "granted") {
  //         console.log("Notification permission granted.");

  //         const messaging = getMessaging(app);
  //         getToken(messaging, {
  //           vapidKey:
  //             "BEG7vT1qoBbyRfnbyxC0C_SL10PM-bc1GTBG9Wn5ssPqFyLvEM2JXArGyLXKsvwfRC5EZsTSI0k1yLiYmwq2pWw",
  //         }).then((currentToken) => {
  //           if (currentToken) {
  //             console.log("currentToken: ", currentToken);
  //           } else {
  //             console.log("Can not get token");
  //           }
  //         });
  //       } else {
  //         console.log("Do not have permission!");
  //       }
  //     });
  //   }
  // }
  // requestPermission();

  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
    setLoading(true);

    // listen for changes in user authentication state
    onAuthStateChanged(auth, (receivedUser) => {
      console.log(receivedUser);
      console.log("Changing state");
      if (receivedUser !== null && receivedUser.email !== "") {
        const newUser = {
          ...user,
          personal: {
            ...user.personal,
            uid: receivedUser.accessToken,
            email: receivedUser.email,
            username: receivedUser.displayName,
          },
          social: {
            ...user.social,
            profilePicture: receivedUser.photoURL,
          },
        };
        // get user's document from Firestore
        const userRef = doc(db, "users", newUser.personal.email);
        getDoc(userRef)
          .then((docSnapshot) => {
            console.log(docSnapshot.data());
            if (docSnapshot.exists()) {
              console.log("Exists");
              const convertedData = docSnapshot.data();
              setUser({ ...user, ...convertedData });
              router.push("/home");
            }
            const convertedData = docSnapshot.data();
            setUser({ ...user, ...convertedData });
          })
          .catch((error) => {
            console.log("Error getting user document: ", error);
          });

        const getUser = () => {
          // assuming you have the JWT token stored in a variable called `token`
          const decoded = jwt.verify(token, "your-secret-key");

          // `decoded` will contain the user information you stored in the token
          const user = decoded.user;
        };
      } else {
        // user is signed out, remove JWT token from localStorage
        // localStorage.removeItem("jwt");
      }
    });
    setLoading(false);
  }, [user.personal.email]);

  if (!showChild) {
    return null;
  }

  // auth.onAuthStateChanged

  if (typeof window === "undefined") {
    return <></>;
  } else {
    return (
      <Box>
        {loading ? (
          <Box
            sx={{
              height: "100vh",
              width: "100vw",
              background: "rgba(1,1,1,.7)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <RotatingSquare
              height="150"
              width="150"
              radius="9"
              color="purple"
              ariaLabel="loading"
              wrapperStyle
              wrapperClass
            />
          </Box>
        ) : (
          <LoaderContext.Provider value={{ loading, setLoading }}>
            <UserContext.Provider
              value={{ user, setUser, loading, setLoading }}
            >
              <Navbar />
              <Component {...pageProps} />
            </UserContext.Provider>
          </LoaderContext.Provider>
        )}
      </Box>
    );
  }
}

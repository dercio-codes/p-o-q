import "../styles/globals.css";
import { Navbar } from "./../components/navbar";
import { createContext, useContext, useState, useEffect } from "react";

export const UserContext = createContext();
export const LoaderContext = createContext();

export default function App({ Component, pageProps }) {
  const [user, setUser] = useState({
    personal: {
      uid: "",
      name: "",
      surname: "",
      username: "",
      email: "2",
      age: "",
      dob: "01/01/2000",
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

  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === "undefined") {
    return <></>;
  } else {
    return (
      <LoaderContext.Provider value={{ loading, setLoading }}>
        <UserContext.Provider value={{ user, setUser }}>
          <Navbar />

          <Component {...pageProps} />
        </UserContext.Provider>
      </LoaderContext.Provider>
    );
  }
}

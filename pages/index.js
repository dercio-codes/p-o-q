import { Auth } from "./../components/auth";
import { Suggestions } from "./../components/suggestions";
import { Models } from "./../components/models";
import { Appointments } from "./../components/appointments";
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
export default function Home() {
  return (
    <>
      <Auth />
      {/* <Models />
      <Appointments />
      <Suggestions /> */}
      <Box
        sx={{
          minHeight: "20vh",
          background: "",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "21px",
          scale: "0.65",
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
    </>
  );
}

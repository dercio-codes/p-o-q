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

export default function HomePage() {
  return (
    <>
      {/* <Auth /> */}
      <Box
        sx={{
          minHeight: "65vh",
          margin: "52px 0 42px 0",
          padding: "0 1.3rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-evenly",
          // background: "red",
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

        <Typography
          className={"normal-font"}
          sx={{
            textAlign: "center",
            color: "rgba(255,255,255,.7)",
            margin: "21px 0",
            fontSize: "18px",
            lineHeight: "2.5rem",
            // textDecoration: "underline",
          }}
        >
          {" "}
          26 Women working in prostitution confront problems that are inherently
          transboundary in nature, and sex workers in many parts of the world
          face similar social stigma, criminalization, dire working conditions,
          human rights violations, and lack of health and safety protection,
          among others.{" "}
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
      <Models />
      <Appointments />
      <Suggestions />
    </>
  );
}

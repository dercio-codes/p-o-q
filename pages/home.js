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
    <Box>
      {/* <Auth /> */}
      <Box
        sx={{
          minHeight: "65vh",
          margin: "100px 0 42px 0",
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
            fontSize: "16px",
            lineHeight: "2.5rem",
            // textDecoration: "underline",
          }}
        >
          {" "}
          26 Women working in escort industry confront problems that are
          inherently transboundary in nature, and sex workers in many parts of
          the world face similar social stigma, criminalization, dire working
          conditions, human rights violations, and lack of health and safety
          protection, among others.{" "}
        </Typography>

        <Typography
          sx={{
            textAlign: "center",
            color: "#111",
            // margin: "auto auto",
            // letterSpacing: { xs: "6px" },
            fontSize: { xs: "14px" },
            lineHeight: "2.5rem",
            // fontWeight: 900,
            color: "rgba(255,255,255,.7)",
          }}
        >
          {" "}
          {"Why don't you give a try?"} <br />
          {"Sign up below to join"}{" "}
          <p
            style={{ color: "#F56EB3", fontSize: "32px" }}
            className={"paradise-font"}
          >
            {" "}
            Paraside of Queens{" "}
          </p>{" "}
          {"as an escort , or become  "} <br />
          {
            "a member to safety request escort services from top escorts in SA "
          }{" "}
          <br />
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
    </Box>
  );
}

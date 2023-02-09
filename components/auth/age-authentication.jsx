import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Check from "@mui/icons-material/Check";
import SettingsIcon from "@mui/icons-material/Settings";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import VideoLabelIcon from "@mui/icons-material/VideoLabel";
import Box from "@mui/material/Box";
import StepButton from "@mui/material/StepButton";
import {
  Button,
  Divider,
  IconButton,
  Grid,
  CircularProgress,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import TextField from "@mui/material/TextField";
import dayjs from "dayjs";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import AddIcon from "@mui/icons-material/Add";

const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: "calc(-50% + 16px)",
    right: "calc(50% + 16px)",
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#784af4",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#784af4",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderTopWidth: 3,
    borderRadius: 1,
  },
}));

const QontoStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  color: theme.palette.mode === "dark" ? theme.palette.grey[700] : "#eaeaf0",
  display: "flex",
  height: 22,
  alignItems: "center",
  ...(ownerState.active && {
    color: "#784af4",
  }),
  "& .QontoStepIcon-completedIcon": {
    color: "#784af4",
    zIndex: 1,
    fontSize: 18,
  },
  "& .QontoStepIcon-circle": {
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: "currentColor",
  },
}));

function QontoStepIcon(props) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <Check className="QontoStepIcon-completedIcon" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
};

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
  zIndex: 1,
  color: "#fff",
  width: 50,
  height: 50,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  }),
  ...(ownerState.completed && {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
  }),
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1: <SettingsIcon />,
    2: <GroupAddIcon />,
    3: <VideoLabelIcon />,
  };

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

const steps = ["Age", "Fetish", "Location", "Complete"];

export const AgeAuthentication = ({ user, setUser }) => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const [oldEnough, setOldEnough] = React.useState(true);
  const [loading, setLoading] = React.useState();

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    setLoading(true);
    if (oldEnough) {
      const newActiveStep =
        isLastStep() && !allStepsCompleted()
          ? // It's the last step, but not all steps have been completed,
            // find the first step that has been completed
            steps.findIndex((step, i) => !(i in completed))
          : activeStep + 1;
      setActiveStep(newActiveStep);
    } else {
      alert("Not old enough to use this service. ");
    }
    setLoading(false);
  };

  const handleBack = () => {
    setLoading(true);

    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    setLoading(false);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    // handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper
        alternativeLabel
        activeStep={activeStep}
        connector={<QontoConnector />}
      >
        {steps.map((label, index) => (
          <Step key={index} index={(label, index)} completed={completed[index]}>
            <StepLabel StepIconComponent={QontoStepIcon}>
              <Typography component="h6" sx={{ color: "#eee !important " }}>
                {label}
              </Typography>
            </StepLabel>
          </Step>
        ))}
      </Stepper>

      {/* <CustomHeader /> */}
      <div>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            {loading ? (
              <Box
                sx={{
                  minHeight: "50vh",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <CircularProgress size={"10rem"} color={"secondary"} />
              </Box>
            ) : (
              <Box
                sx={{
                  minHeight: "50vh",
                  display: "flex",
                  // alignItems: "center",
                  width: "100%",
                }}
              >
                <DatePicker
                  activeStep={activeStep}
                  oldEnough={oldEnough}
                  setOldEnough={setOldEnough}
                />
                <FetishesComponent activeStep={activeStep} />
                <LocationComponent activeStep={activeStep} />

                <Box
                  sx={{
                    minHeight: "45vh",
                    margin: "12px 0",
                    background: "",
                    display: activeStep === 3 ? "flex" : " none",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <img
                    src="https://img.icons8.com/office/256/approval.png"
                    alt="COmplete"
                    style={{
                      width: "250px",
                      height: "250px",
                      objectFit: "contain",
                    }}
                  />
                  <Typography
                    component="div"
                    sx={{
                      textAlign: "Center",
                      margin: "21px 0",
                      fontWeight: 600,
                      color: "rgba(255,255,255,.5)",
                      fontSize: "28px",
                    }}
                  >
                    {" "}
                    Profile Setup Succesfully{" "}
                  </Typography>
                </Box>
              </Box>
            )}
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                pt: 2,
                position: "relative",
                bottom: "0",
              }}
            >
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button sx={{ color: "#784af4" }} onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </Box>
          </React.Fragment>
        )}
      </div>
    </Box>
  );
};

export default function DatePicker({ activeStep, oldEnough, setOldEnough }) {
  const [value, setValue] = React.useState("2002-08-18");

  const handleChange = (newValue) => {
    setValue(newValue);
    const myDate = JSON.stringify(newValue.$d).split("-")[0].slice(1);
    const currentYear = new Date().getFullYear();
    console.log(
      currentYear,
      "+",
      Number(myDate),
      "=",
      currentYear - Number(myDate)
    );
    setOldEnough(currentYear - Number(myDate) >= 18);
  };

  return (
    <Box
      sx={{
        minHeight: "45vh",
        margin: "12px 0",
        background: "",
        display: activeStep === 0 ? "flex" : " none",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Typography
        component="div"
        sx={{
          textAlign: "",
          margin: "0 0 12px 0",
          fontWeight: 100,
          color: "rgba(255,255,255,.5)",
          fontSize: "28px",
        }}
      >
        {" "}
        Age{" "}
      </Typography>
      <Divider
        sx={{
          width: "24px",
          margin: "0",
          background: "rgba(255,255,255,.7)",
        }}
      />

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Stack spacing={3}>
          <Typography
            component="div"
            sx={{
              textAlign: "",
              margin: "32px 0 0 0",
              fontWeight: 100,
              color: "rgba(255,255,255,.5)",
              fontSize: "21px",
            }}
          >
            {" Enter Your Date of Birth : "}
          </Typography>
          <MobileDatePicker
            inputFormat="MM/DD/YYYY"
            value={value}
            onChange={handleChange}
            renderInput={(params) => (
              <TextField
                {...params}
                sx={{
                  ...whiteForm,
                }}
              />
            )}
          />
        </Stack>
      </LocalizationProvider>
    </Box>
  );
}

const FetishesComponent = ({ activeStep }) => {
  const [newFetish, setNewFetish] = React.useState("");
  const [festishesList, setFestishesList] = React.useState([]);
  const [exists, setExists] = React.useState(false);

  const addNewItem = () => {
    if (festishesList.includes(newFetish.trim())) {
      setExists(true);
      return;
    }
    setFestishesList([...festishesList, newFetish.trim()]);
    setNewFetish("");
  };

  const removeItem = (item) => {
    let updatedArr = [];
    festishesList.map((deleteingItem) => {
      if (deleteingItem !== item) {
        updatedArr.push(deleteingItem);
      }
    });
    setFestishesList(updatedArr);
  };

  return (
    <Box
      sx={{
        display: activeStep === 1 ? "flex" : " none",
        flexDirection: "column",
        justifyContent: "center",
        margin: "21px 0",
        width: "100%",
      }}
    >
      {" "}
      <Typography
        component="div"
        sx={{
          textAlign: "",
          margin: "0 0 12px 0",
          fontWeight: 100,
          color: "rgba(255,255,255,.5)",
          fontSize: "28px",
        }}
      >
        {" "}
        Fetish{" "}
      </Typography>
      <Divider
        sx={{
          width: "24px",
          background: "rgba(255,255,255,.7)",
        }}
      />
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <TextField
          value={newFetish}
          onFocus={() => {
            setExists(false);
          }}
          onChange={(e) => {
            setNewFetish(e.target.value);
          }}
          placeholder={"Boom"}
          sx={{
            margin: exists ? "32px 0 0 0" : "21px 0",
            width: "100%",
            ...whiteForm,
          }}
        />
        <IconButton
          onClick={addNewItem}
          sx={{
            background: "rgba(255,255,255,.7)",
            "&:hover": { filter: "invert(1)" },
          }}
        >
          <AddIcon />
        </IconButton>
      </Box>
      {exists && (
        <Typography
          component="h6"
          sx={{
            color: "#FF3131",
            margin: "8px 0 24px 0",
            fontSize: "12px",
            transition: "800ms",
          }}
        >
          This has already been added to the list.
        </Typography>
      )}
      <Box
        sx={{
          height: "20vh",
          width: "100%",
          background: "grey",
          overflowY: "auto",
          overflowX: "hidden",
          padding: "12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
        {festishesList.length > 0 ? (
          festishesList.map((item, index) => {
            return (
              <Box
                key={index}
                sx={{
                  background: "#222",
                  borderRadius: "16px",
                  padding: "12px",
                  margin: "0 8px 8px 0",
                  minWidth: "100px",
                  height: "fit-content",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  fontWeight: "600",
                }}
              >
                {item}
                <IconButton
                  onClick={() => {
                    removeItem(item);
                  }}
                  sx={{ padding: "0", margin: "0" }}
                >
                  <CloseIcon sx={{ color: "#FF3131" }} />
                </IconButton>
              </Box>
            );
          })
        ) : (
          <Box>
            <Typography
              component="h6"
              sx={{
                // color: "#FF3131",
                textAlign: "center",
                fontSize: "18px",
                fontWeight: "600",
                transition: "800ms",
              }}
            >
              Nothing Added.
            </Typography>
            <Typography
              component="h6"
              sx={{
                textAlign: "center",
                fontSize: "16px",
                transition: "800ms",
              }}
            >
              Type and Click + to add.
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};

const LocationComponent = ({ activeStep }) => {
  return (
    <Box
      sx={{
        minHeight: "45vh",
        display: activeStep === 2 ? "flex" : " none",
        flexDirection: "column",
        justifyContent: "center",
        // background: "green",
        width: "100%",
        margin: "21px 0",
      }}
    >
      <Typography
        component="div"
        sx={{
          textAlign: "",
          margin: "0 0 12px 0",
          fontWeight: 100,
          color: "rgba(255,255,255,.5)",
          fontSize: "28px",
        }}
      >
        {" "}
        LOcation{" "}
      </Typography>
      <Divider
        sx={{
          width: "24px",
          background: "rgba(255,255,255,.7)",
        }}
      />
      <Grid container>
        <Grid item xs={6} sx={{ padding: "12px 12px 12px 0" }}>
          <Typography
            component="h6"
            sx={{
              fontSize: "16px",
              transition: "800ms",
            }}
          >
            House Number :
          </Typography>
          <TextField fullWidth sx={{ ...whiteForm }} />
        </Grid>
        <Grid item xs={6} sx={{ padding: "12px" }}>
          <Typography
            component="h6"
            sx={{
              fontSize: "16px",
              transition: "800ms",
            }}
          >
            Street :
          </Typography>
          <TextField fullWidth sx={{ ...whiteForm }} />
        </Grid>
        <Grid item xs={6} sx={{ padding: "12px 12px 12px 0" }}>
          <Typography
            component="h6"
            sx={{
              fontSize: "16px",
              transition: "800ms",
            }}
          >
            Town :
          </Typography>
          <TextField fullWidth sx={{ ...whiteForm }} />
        </Grid>
        <Grid item xs={6} sx={{ padding: "12px" }}>
          <Typography
            component="h6"
            sx={{
              fontSize: "16px",
              transition: "800ms",
            }}
          >
            City :
          </Typography>
          <TextField fullWidth sx={{ ...whiteForm }} />
        </Grid>
        <Grid item xs={6} sx={{ padding: "12px 12px 12px 0" }}>
          <Typography
            component="h6"
            sx={{
              fontSize: "16px",
              transition: "800ms",
            }}
          >
            Postal Code :
          </Typography>
          <TextField fullWidth sx={{ ...whiteForm }} />
        </Grid>
        <Grid item xs={6} sx={{ padding: "12px" }}>
          <Typography
            component="h6"
            sx={{
              fontSize: "16px",
              transition: "800ms",
            }}
          >
            Province :
          </Typography>
          <TextField fullWidth sx={{ ...whiteForm }} />
        </Grid>

        <Grid item xs={6} sx={{ padding: "12px 12px 12px 0" }}>
          <Typography
            component="h6"
            sx={{
              fontSize: "16px",
              transition: "800ms",
            }}
          >
            Country :
          </Typography>
          <TextField fullWidth sx={{ ...whiteForm }} />
        </Grid>
        <Grid item xs={6} sx={{ padding: "12px" }}>
          <Typography
            component="h6"
            sx={{
              fontSize: "16px",
              transition: "800ms",
            }}
          >
            Province :
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
            <TextField sx={{ ...whiteForm, width: "90%" }} />
            <TextField sx={{ ...whiteForm, width: "90%" }} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

const whiteForm = {
  "& .MuiOutlinedInput-root": {
    border: "2px solid rgba(255,255,255,.7)",
    // color: "#111",
    color: "rgba(255,255,255,.7)",
  },
  "& .MuiOutlinedInput-root.Mui-focused": {
    "& > fieldset": {
      border: "1px solid rgba(255,255,255,.7)",
      color: "#111",
      // color: "rgba(255,255,255,.7)",
    },
  },
  "& .MuiOutlinedInput-root.Mui-focused": {
    "& > fieldset": {
      border: "1px solid rgba(255,255,255,.7)",
      color: "#111",
      // color: "rgba(255,255,255,.7)",
    },
  },
};

// const fetishes = [
//   "Greek",
//   "BDSM",
//   "Foot Fetish",
//   "Dress Up",
//   "Fisting",
//   "Rimming",
//   "Couples",
//   "Cross Dressing",
//   "BBW",
//   "Golden Showers",
//   "She-Males",
//   "Gay",
//   "Transvestite",
//   "Doubles",
//   "Prostate Play",
//   "Mature",
//   "Asian",
//   "Indian",
//   "African",
//   "White",
// ];

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
  Switch,
  MenuItem,
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
import { UserContext } from "../../pages/_app";

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

const steps = ["Personal", "Fetish", "Location", "Complete"];

export const AgeAuthentication = ({ updateUserOnDB }) => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const [oldEnough, setOldEnough] = React.useState(true);
  const [loading, setLoading] = React.useState();
  const { user, setUser } = React.useContext(UserContext);

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
    if (activeStep === steps.length - 1) {
      setLoading(true);

      updateUserOnDB();
      setLoading(false);
    } else {
      const currentYear = new Date().getFullYear();
      setOldEnough(currentYear - user.personal.dob.split("/")[0]);
      if (oldEnough && currentYear - user.personal.dob.split("/")[0] >= 18) {
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
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        padding: "2.5rem 1.5rem",
        // alignItems: "center",
      }}
    >
      <Box>
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
          Complete Your Profile{" "}
        </Typography>
        <Divider
          sx={{
            width: "24px",
            margin: "0",
            background: "rgba(255,255,255,.7)",
          }}
        />
      </Box>
      <Stepper
        alternativeLabel
        activeStep={activeStep}
        sx={{ margin: "42px 0" }}
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
                  alignItems: "center",
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
                )}
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
  const { user, setUser } = React.useContext(UserContext);

  const handleGenderChange = (value) => {
    setUser({
      ...user,
      personal: {
        ...user.personal,
        gender: value,
      },
    });
  };

  const handleUserTypeChange = (value) => {
    setUser({
      ...user,
      personal: {
        ...user.personal,
        userType: value,
      },
    });
  };

  const handleTelChange = (value) => {
    setUser({
      ...user,
      personal: {
        ...user.personal,
        tel: value,
      },
    });
  };

  const handleDOBChange = (newValue) => {
    const myDate = JSON.stringify(newValue.$d).split("-")[0].slice(1);
    const localDOB = JSON.stringify(newValue.$d).split("T")[0].slice(1);
    const currentYear = new Date().getFullYear();
    const processedDOB = `${localDOB.split("-")[0]}/${localDOB.split("-")[1]}/${
      Number(localDOB.split("-")[2]) + 1
    }`;
    setUser({
      ...user,
      personal: {
        ...user.personal,
        dob: processedDOB,
        age: currentYear - Number(myDate),
      },
    });
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
        Personal{" "}
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
            inputFormat="YYYY/MM/DD"
            value={user.personal.dob}
            onChange={handleDOBChange}
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
      <Box>
        <Typography
          component="div"
          sx={{
            textAlign: "",
            margin: "32px 0 21px 0",
            fontWeight: 100,
            color: "rgba(255,255,255,.5)",
            fontSize: "21px",
          }}
        >
          {" "}
          Gender :{" "}
        </Typography>

        <TextField
          name="gender"
          value={user.personal.gender}
          fullWidth
          sx={{ ...whiteForm }}
          select
        >
          <MenuItem
            onClick={() => handleGenderChange("Select Preferred Gender")}
            value={"Select Preferred Gender"}
            // sx={{ color: "transparent" }}
          >
            Select Preferred Gender
          </MenuItem>
          <MenuItem onClick={() => handleGenderChange("Male")} value="Male">
            Male
          </MenuItem>
          <MenuItem onClick={() => handleGenderChange("Female")} value="Female">
            Female
          </MenuItem>
          <MenuItem
            onClick={() => handleGenderChange("Transgender Female")}
            value="Transgender Female"
          >
            Transgender Female
          </MenuItem>
          <MenuItem
            onClick={() => handleGenderChange("Transgender Male")}
            value="Transgender Male"
          >
            Transgender Male
          </MenuItem>
        </TextField>
      </Box>
      {oldEnough ? (
        <Box>
          <Typography
            component="div"
            sx={{
              textAlign: "",
              margin: "32px 0 21px 0",
              fontWeight: 100,
              color: "rgba(255,255,255,.5)",
              fontSize: "21px",
            }}
          >
            {" "}
            Are you a Escort or Client? :{" "}
          </Typography>

          <TextField
            name="USerType"
            value={user.personal.userType}
            fullWidth
            sx={{ ...whiteForm }}
            select
          >
            <MenuItem
              onClick={() => {
                handleUserTypeChange("Escort");
              }}
              value={"Escort"}
            >
              {" "}
              Escort{" "}
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleUserTypeChange("Client");
              }}
              value={"Client"}
            >
              {" "}
              Client{" "}
            </MenuItem>
          </TextField>

          <Typography
            component="div"
            sx={{
              textAlign: "",
              margin: "32px 0 21px 0",
              fontWeight: 100,
              color: "rgba(255,255,255,.5)",
              fontSize: "21px",
            }}
          >
            {" "}
            Phone Number:{" "}
          </Typography>
          <TextField
            type={"tel"}
            value={user.personal.tel}
            onChange={(e) => {
              handleTelChange(e.target.value);
            }}
            fullWidth
            sx={{ ...whiteForm }}
          />
        </Box>
      ) : (
        <Typography
          component="h6"
          sx={{
            color: "#FF3131",
            textAlign: "center",
            margin: "42px 0 12px 0",
            fontWeight: "600",
            fontSize: "21px",
            transition: "800ms",
          }}
        >
          Your are too young to use this service.
        </Typography>
      )}
    </Box>
  );
}

const FetishesComponent = ({ activeStep }) => {
  const [newFetish, setNewFetish] = React.useState("");
  const [festishesList, setFestishesList] = React.useState([]);
  const [exists, setExists] = React.useState(false);
  const { user, setUser } = React.useContext(UserContext);

  const addNewItem = () => {
    if (festishesList.includes(newFetish.trim())) {
      setExists(true);
      return;
    }
    setFestishesList([...festishesList, newFetish.trim()]);
    setNewFetish("");
    setUser({
      ...user,
      fetishes: festishesList,
    });
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
          background: "#222",
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
  const { user, setUser } = React.useContext(UserContext);

  return (
    <Box
      sx={{
        minHeight: "45vh",
        display: activeStep === 2 ? "flex" : " none",
        flexDirection: "column",
        justifyContent: "center",
        // background: "green",
        width: "100%",
        margin: "0",
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
        Location{" "}
      </Typography>
      <Divider
        sx={{
          width: "24px",
          background: "rgba(255,255,255,.7)",
        }}
      />
      <Grid container>
        <Grid item xs={4} sx={{ padding: "12px 12px 12px 0" }}>
          <Typography
            component="h6"
            sx={{
              fontSize: "16px",
              transition: "800ms",
            }}
          >
            House Number :
          </Typography>
          <TextField
            value={user.personal.address.number}
            onChange={(e) => {
              setUser({
                ...user,
                personal: {
                  ...user.personal,
                  address: {
                    ...user.personal.address,
                    number: e.target.value,
                  },
                },
              });
            }}
            fullWidth
            sx={{ ...whiteForm }}
          />
        </Grid>
        <Grid item xs={8} sx={{ padding: "12px" }}>
          <Typography
            component="h6"
            sx={{
              fontSize: "16px",
              transition: "800ms",
            }}
          >
            Street :
          </Typography>
          <TextField
            value={user.personal.address.street}
            onChange={(e) => {
              setUser({
                ...user,
                personal: {
                  ...user.personal,
                  address: {
                    ...user.personal.address,
                    street: e.target.value,
                  },
                },
              });
            }}
            fullWidth
            sx={{ ...whiteForm }}
          />
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
          <TextField
            value={user.personal.address.town}
            onChange={(e) => {
              setUser({
                ...user,
                personal: {
                  ...user.personal,
                  address: {
                    ...user.personal.address,
                    town: e.target.value,
                  },
                },
              });
            }}
            fullWidth
            sx={{ ...whiteForm }}
          />
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
          <TextField
            value={user.personal.address.city}
            onChange={(e) => {
              setUser({
                ...user,
                personal: {
                  ...user.personal,
                  address: {
                    ...user.personal.address,
                    city: e.target.value,
                  },
                },
              });
            }}
            fullWidth
            sx={{ ...whiteForm }}
          />
        </Grid>
        <Grid item xs={4} sx={{ padding: "12px 12px 12px 0" }}>
          <Typography
            component="h6"
            sx={{
              fontSize: "16px",
              transition: "800ms",
            }}
          >
            Postal Code :
          </Typography>
          <TextField
            value={user.personal.address.postal}
            onChange={(e) => {
              setUser({
                ...user,
                personal: {
                  ...user.personal,
                  address: {
                    ...user.personal.address,
                    postal: e.target.value,
                  },
                },
              });
            }}
            fullWidth
            sx={{ ...whiteForm }}
          />
        </Grid>
        <Grid item xs={8} sx={{ padding: "12px" }}>
          <Typography
            component="h6"
            sx={{
              fontSize: "16px",
              transition: "800ms",
            }}
          >
            Province :
          </Typography>
          <TextField
            value={user.personal.address.province}
            onChange={(e) => {
              setUser({
                ...user,
                personal: {
                  ...user.personal,
                  address: {
                    ...user.personal.address,
                    province: e.target.value,
                  },
                },
              });
            }}
            fullWidth
            sx={{ ...whiteForm }}
          />
        </Grid>

        <Grid item xs={12} sx={{ padding: "12px 12px 12px 0" }}>
          <Typography
            component="h6"
            sx={{
              fontSize: "16px",
              transition: "800ms",
            }}
          >
            Country :
          </Typography>
          <TextField
            value={user.personal.address.country}
            select
            fullWidth
            sx={{ ...whiteForm }}
          >
            {countries.map((country, index) => {
              return (
                <MenuItem
                  onClick={(e) => {
                    setUser({
                      ...user,
                      personal: {
                        ...user.personal,
                        address: {
                          ...user.personal.address,
                          country: country.name,
                        },
                      },
                    });
                  }}
                  key={index}
                >
                  {country.name}{" "}
                </MenuItem>
              );
            })}
          </TextField>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{ padding: "0", margin: "21px 0", cursor: "not-allowed" }}
        >
          <Typography
            component="h6"
            sx={{
              fontSize: "16px",
              transition: "800ms",
            }}
          >
            Province :
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <TextField
              disabled
              sx={{ ...whiteForm, cursor: "not-allowed", width: "49%" }}
            />
            <TextField
              disabled
              sx={{ ...whiteForm, cursor: "not-allowed", width: "49%" }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export const whiteForm = {
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

const countries = [
  { name: "Afghanistan", code: "AF" },
  { name: "Åland Islands", code: "AX" },
  { name: "Albania", code: "AL" },
  { name: "Algeria", code: "DZ" },
  { name: "American Samoa", code: "AS" },
  { name: "AndorrA", code: "AD" },
  { name: "Angola", code: "AO" },
  { name: "Anguilla", code: "AI" },
  { name: "Antarctica", code: "AQ" },
  { name: "Antigua and Barbuda", code: "AG" },
  { name: "Argentina", code: "AR" },
  { name: "Armenia", code: "AM" },
  { name: "Aruba", code: "AW" },
  { name: "Australia", code: "AU" },
  { name: "Austria", code: "AT" },
  { name: "Azerbaijan", code: "AZ" },
  { name: "Bahamas", code: "BS" },
  { name: "Bahrain", code: "BH" },
  { name: "Bangladesh", code: "BD" },
  { name: "Barbados", code: "BB" },
  { name: "Belarus", code: "BY" },
  { name: "Belgium", code: "BE" },
  { name: "Belize", code: "BZ" },
  { name: "Benin", code: "BJ" },
  { name: "Bermuda", code: "BM" },
  { name: "Bhutan", code: "BT" },
  { name: "Bolivia", code: "BO" },
  { name: "Bosnia and Herzegovina", code: "BA" },
  { name: "Botswana", code: "BW" },
  { name: "Bouvet Island", code: "BV" },
  { name: "Brazil", code: "BR" },
  { name: "British Indian Ocean Territory", code: "IO" },
  { name: "Brunei Darussalam", code: "BN" },
  { name: "Bulgaria", code: "BG" },
  { name: "Burkina Faso", code: "BF" },
  { name: "Burundi", code: "BI" },
  { name: "Cambodia", code: "KH" },
  { name: "Cameroon", code: "CM" },
  { name: "Canada", code: "CA" },
  { name: "Cape Verde", code: "CV" },
  { name: "Cayman Islands", code: "KY" },
  { name: "Central African Republic", code: "CF" },
  { name: "Chad", code: "TD" },
  { name: "Chile", code: "CL" },
  { name: "China", code: "CN" },
  { name: "Christmas Island", code: "CX" },
  { name: "Cocos (Keeling) Islands", code: "CC" },
  { name: "Colombia", code: "CO" },
  { name: "Comoros", code: "KM" },
  { name: "Congo", code: "CG" },
  { name: "Congo, The Democratic Republic of the", code: "CD" },
  { name: "Cook Islands", code: "CK" },
  { name: "Costa Rica", code: "CR" },
  { name: "Cote D'Ivoire", code: "CI" },
  { name: "Croatia", code: "HR" },
  { name: "Cuba", code: "CU" },
  { name: "Cyprus", code: "CY" },
  { name: "Czech Republic", code: "CZ" },
  { name: "Denmark", code: "DK" },
  { name: "Djibouti", code: "DJ" },
  { name: "Dominica", code: "DM" },
  { name: "Dominican Republic", code: "DO" },
  { name: "Ecuador", code: "EC" },
  { name: "Egypt", code: "EG" },
  { name: "El Salvador", code: "SV" },
  { name: "Equatorial Guinea", code: "GQ" },
  { name: "Eritrea", code: "ER" },
  { name: "Estonia", code: "EE" },
  { name: "Ethiopia", code: "ET" },
  { name: "Falkland Islands (Malvinas)", code: "FK" },
  { name: "Faroe Islands", code: "FO" },
  { name: "Fiji", code: "FJ" },
  { name: "Finland", code: "FI" },
  { name: "France", code: "FR" },
  { name: "French Guiana", code: "GF" },
  { name: "French Polynesia", code: "PF" },
  { name: "French Southern Territories", code: "TF" },
  { name: "Gabon", code: "GA" },
  { name: "Gambia", code: "GM" },
  { name: "Georgia", code: "GE" },
  { name: "Germany", code: "DE" },
  { name: "Ghana", code: "GH" },
  { name: "Gibraltar", code: "GI" },
  { name: "Greece", code: "GR" },
  { name: "Greenland", code: "GL" },
  { name: "Grenada", code: "GD" },
  { name: "Guadeloupe", code: "GP" },
  { name: "Guam", code: "GU" },
  { name: "Guatemala", code: "GT" },
  { name: "Guernsey", code: "GG" },
  { name: "Guinea", code: "GN" },
  { name: "Guinea-Bissau", code: "GW" },
  { name: "Guyana", code: "GY" },
  { name: "Haiti", code: "HT" },
  { name: "Heard Island and Mcdonald Islands", code: "HM" },
  { name: "Holy See (Vatican City State)", code: "VA" },
  { name: "Honduras", code: "HN" },
  { name: "Hong Kong", code: "HK" },
  { name: "Hungary", code: "HU" },
  { name: "Iceland", code: "IS" },
  { name: "India", code: "IN" },
  { name: "Indonesia", code: "ID" },
  { name: "Iran, Islamic Republic Of", code: "IR" },
  { name: "Iraq", code: "IQ" },
  { name: "Ireland", code: "IE" },
  { name: "Isle of Man", code: "IM" },
  { name: "Israel", code: "IL" },
  { name: "Italy", code: "IT" },
  { name: "Jamaica", code: "JM" },
  { name: "Japan", code: "JP" },
  { name: "Jersey", code: "JE" },
  { name: "Jordan", code: "JO" },
  { name: "Kazakhstan", code: "KZ" },
  { name: "Kenya", code: "KE" },
  { name: "Kiribati", code: "KI" },
  { name: "Korea, Democratic People'S Republic of", code: "KP" },
  { name: "Korea, Republic of", code: "KR" },
  { name: "Kuwait", code: "KW" },
  { name: "Kyrgyzstan", code: "KG" },
  { name: "Lao People'S Democratic Republic", code: "LA" },
  { name: "Latvia", code: "LV" },
  { name: "Lebanon", code: "LB" },
  { name: "Lesotho", code: "LS" },
  { name: "Liberia", code: "LR" },
  { name: "Libyan Arab Jamahiriya", code: "LY" },
  { name: "Liechtenstein", code: "LI" },
  { name: "Lithuania", code: "LT" },
  { name: "Luxembourg", code: "LU" },
  { name: "Macao", code: "MO" },
  { name: "Macedonia, The Former Yugoslav Republic of", code: "MK" },
  { name: "Madagascar", code: "MG" },
  { name: "Malawi", code: "MW" },
  { name: "Malaysia", code: "MY" },
  { name: "Maldives", code: "MV" },
  { name: "Mali", code: "ML" },
  { name: "Malta", code: "MT" },
  { name: "Marshall Islands", code: "MH" },
  { name: "Martinique", code: "MQ" },
  { name: "Mauritania", code: "MR" },
  { name: "Mauritius", code: "MU" },
  { name: "Mayotte", code: "YT" },
  { name: "Mexico", code: "MX" },
  { name: "Micronesia, Federated States of", code: "FM" },
  { name: "Moldova, Republic of", code: "MD" },
  { name: "Monaco", code: "MC" },
  { name: "Mongolia", code: "MN" },
  { name: "Montserrat", code: "MS" },
  { name: "Morocco", code: "MA" },
  { name: "Mozambique", code: "MZ" },
  { name: "Myanmar", code: "MM" },
  { name: "Namibia", code: "NA" },
  { name: "Nauru", code: "NR" },
  { name: "Nepal", code: "NP" },
  { name: "Netherlands", code: "NL" },
  { name: "Netherlands Antilles", code: "AN" },
  { name: "New Caledonia", code: "NC" },
  { name: "New Zealand", code: "NZ" },
  { name: "Nicaragua", code: "NI" },
  { name: "Niger", code: "NE" },
  { name: "Nigeria", code: "NG" },
  { name: "Niue", code: "NU" },
  { name: "Norfolk Island", code: "NF" },
  { name: "Northern Mariana Islands", code: "MP" },
  { name: "Norway", code: "NO" },
  { name: "Oman", code: "OM" },
  { name: "Pakistan", code: "PK" },
  { name: "Palau", code: "PW" },
  { name: "Palestinian Territory, Occupied", code: "PS" },
  { name: "Panama", code: "PA" },
  { name: "Papua New Guinea", code: "PG" },
  { name: "Paraguay", code: "PY" },
  { name: "Peru", code: "PE" },
  { name: "Philippines", code: "PH" },
  { name: "Pitcairn", code: "PN" },
  { name: "Poland", code: "PL" },
  { name: "Portugal", code: "PT" },
  { name: "Puerto Rico", code: "PR" },
  { name: "Qatar", code: "QA" },
  { name: "Reunion", code: "RE" },
  { name: "Romania", code: "RO" },
  { name: "Russian Federation", code: "RU" },
  { name: "RWANDA", code: "RW" },
  { name: "Saint Helena", code: "SH" },
  { name: "Saint Kitts and Nevis", code: "KN" },
  { name: "Saint Lucia", code: "LC" },
  { name: "Saint Pierre and Miquelon", code: "PM" },
  { name: "Saint Vincent and the Grenadines", code: "VC" },
  { name: "Samoa", code: "WS" },
  { name: "San Marino", code: "SM" },
  { name: "Sao Tome and Principe", code: "ST" },
  { name: "Saudi Arabia", code: "SA" },
  { name: "Senegal", code: "SN" },
  { name: "Serbia and Montenegro", code: "CS" },
  { name: "Seychelles", code: "SC" },
  { name: "Sierra Leone", code: "SL" },
  { name: "Singapore", code: "SG" },
  { name: "Slovakia", code: "SK" },
  { name: "Slovenia", code: "SI" },
  { name: "Solomon Islands", code: "SB" },
  { name: "Somalia", code: "SO" },
  { name: "South Africa", code: "ZA" },
  { name: "South Georgia and the South Sandwich Islands", code: "GS" },
  { name: "Spain", code: "ES" },
  { name: "Sri Lanka", code: "LK" },
  { name: "Sudan", code: "SD" },
  { name: "Suriname", code: "SR" },
  { name: "Svalbard and Jan Mayen", code: "SJ" },
  { name: "Swaziland", code: "SZ" },
  { name: "Sweden", code: "SE" },
  { name: "Switzerland", code: "CH" },
  { name: "Syrian Arab Republic", code: "SY" },
  { name: "Taiwan, Province of China", code: "TW" },
  { name: "Tajikistan", code: "TJ" },
  { name: "Tanzania, United Republic of", code: "TZ" },
  { name: "Thailand", code: "TH" },
  { name: "Timor-Leste", code: "TL" },
  { name: "Togo", code: "TG" },
  { name: "Tokelau", code: "TK" },
  { name: "Tonga", code: "TO" },
  { name: "Trinidad and Tobago", code: "TT" },
  { name: "Tunisia", code: "TN" },
  { name: "Turkey", code: "TR" },
  { name: "Turkmenistan", code: "TM" },
  { name: "Turks and Caicos Islands", code: "TC" },
  { name: "Tuvalu", code: "TV" },
  { name: "Uganda", code: "UG" },
  { name: "Ukraine", code: "UA" },
  { name: "United Arab Emirates", code: "AE" },
  { name: "United Kingdom", code: "GB" },
  { name: "United States", code: "US" },
  { name: "United States Minor Outlying Islands", code: "UM" },
  { name: "Uruguay", code: "UY" },
  { name: "Uzbekistan", code: "UZ" },
  { name: "Vanuatu", code: "VU" },
  { name: "Venezuela", code: "VE" },
  { name: "Viet Nam", code: "VN" },
  { name: "Virgin Islands, British", code: "VG" },
  { name: "Virgin Islands, U.S.", code: "VI" },
  { name: "Wallis and Futuna", code: "WF" },
  { name: "Western Sahara", code: "EH" },
  { name: "Yemen", code: "YE" },
  { name: "Zambia", code: "ZM" },
  { name: "Zimbabwe", code: "ZW" },
];

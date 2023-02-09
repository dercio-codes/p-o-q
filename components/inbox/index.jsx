import React from "react";
import ContactItem from "./contactItem";
import {
  Box,
  Grid,
  TextField,
  IconButton,
  InputAdornment,
  Paper,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export const friends = [
  {
    id: 2,
    name: "Alex",
    picture: "https://image.ibb.co/cA2oOb/alex_1.jpg",
    latest_timestamp: "10:00 AM",
    archived: false,
    lastChat: [
      "Or maybe not, let me check logistics and call you. Give me sometime",
    ],
  },
  {
    id: 3,
    name: "Bob",
    picture: "https://image.ibb.co/gSyTOb/bob_1.jpg",
    latest_timestamp: "12:30 AM",
    archived: true,
    lastChat: ["Alright"],
  },
  {
    id: 4,
    name: "Luke",
    picture: "https://image.ibb.co/jOzeUG/luke_1.jpg",
    latest_timestamp: "4:12 PM",
    archived: false,
    lastChat: ["I will look into it"],
  },
  {
    id: 5,
    name: "Bane",
    picture: "https://image.ibb.co/cBZPww/bane_1.jpg",
    latest_timestamp: "7:53 PM",
    archived: false,
    lastChat: ["Exactly my point!"],
  },
  {
    id: 6,
    name: "Darth Vader",
    picture: "https://image.ibb.co/j4Ov3b/darth_vader_1.png",
    latest_timestamp: "1:09 PM",
    archived: true,
    lastChat: ["Not quite the same."],
  },
  {
    id: 7,
    name: "Zach",
    picture: "https://image.ibb.co/b4kxGw/zach_1.jpg",
    latest_timestamp: "Yesterday",
    archived: false,
    lastChat: ["I thought that the event was over long ago"],
  },
  {
    id: 8,
    name: "Katie",
    picture: "https://image.ibb.co/eLVWbw/katie_1.jpg",
    latest_timestamp: "Yesterday",
    archived: false,
    lastChat: ["nothing"],
  },
  {
    id: 9,
    name: "Chloe",
    picture: "https://image.ibb.co/ncAa3b/chloe_1.jpg",
    latest_timestamp: "Wednesday",
    archived: false,
    lastChat: ["sure i'll take it from you"],
  },
  {
    id: 10,
    name: "Kennith",
    picture: "https://image.ibb.co/fQKPww/kennith_1.jpg",
    latest_timestamp: "Wednesday",
    archived: true,
    lastChat: ["Take care, bye"],
  },
  {
    id: 11,
    name: "Tara",
    picture: "https://image.ibb.co/dM6hib/tara_1.jpg",
    latest_timestamp: "Monday",
    archived: false,
    lastChat: ["Not today"],
  },
  {
    id: 12,
    name: "Gary",
    picture: "https://image.ibb.co/gsF8Ob/gary_1.jpg",
    latest_timestamp: "Sunday",
    archived: false,
    lastChat: ["Whatever works for you!"],
  },
  {
    id: 13,
    name: "Zoey",
    picture: "https://image.ibb.co/nd0Wbw/zoey_1.jpg",
    latest_timestamp: "8/12/2017",
    archived: false,
    lastChat: ["Will get in touch"],
  },
  {
    id: 14,
    name: "Ash",
    picture: "https://image.ibb.co/iasYpG/ash_1.jpg",
    latest_timestamp: "6/12/2017",
    archived: false,
    lastChat: ["Ok"],
  },
  {
    id: 15,
    name: "Zen",
    picture: "https://image.ibb.co/eeqWbw/zen_1.jpg",
    latest_timestamp: "19/11/2017",
    archived: false,
    lastChat: ["Lol"],
  },
];

export const InboxComponent = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  return (
    <Box sx={{ margin: "50px 0 80px 0" }}>
      <Box sx={{ display: "flex" }}>
        <Paper
          elevation={3}
          sx={{
            width: "100%",
            background: "#111",
            p: "9px",
          }}
        >
          <TextField
            label="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            sx={{
              borderRadius: "16px",
              color: "#eee",
              "&:focus": {
                border: "1px solid #eee !important",
              },
            }}
            fullWidth
            InputLabelProps={{ style: { color: "#eee" } }}
            InputProps={{
              style: { border: "1px solid #eee" },
              endAdornment: (
                <InputAdornment>
                  <IconButton>
                    <SearchIcon sx={{ fill: "#eee" }} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Paper>
      </Box>
      <Box>
        {friends.map((person, index) => {
          let queryName =
            person.name.includes(searchQuery.toLowerCase()) ||
            person.name.includes(searchQuery.toUpperCase());
          if (!person.archived && queryName) {
            return (
              <ContactItem
                key={index}
                name={person.name}
                userImage={person.picture}
                date={person.latest_timestamp}
                lastMessage={person.lastChat}
                messagesNumber={person.lastChat.length}
              />
            );
          }
        })}
      </Box>
    </Box>
  );
};

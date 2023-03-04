import React, { useState } from "react";
import {
  LightModeOutlined,
  DarkModeOutlined,
  Menu as MenuIcon,
  Search,
  SettingsOutlined,
  ArrowDropDownOutlined,
} from "@mui/icons-material";
import FlexBetween from "./FlexBetween";
import { useDispatch } from "react-redux";
import { setMode } from "state";
import {
  useTheme,
  AppBar,
  Toolbar,
  Button,
  ButtonGroup,
  Input,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const Navbar = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const [startDate, setStartDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  return (
    <AppBar
      sx={{
        position: "static",
        background: "none",
        boxShadow: "none",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <ButtonGroup>
          <Button variant="contained">DAILY</Button>
          <Button variant="contained">WEEKLY</Button>
          <Button variant="contained">MONTHLY</Button>
        </ButtonGroup>
        <Box sx={{ display: "flex"}}>
          <Typography variant="h6" sx={{ position: "relative", top: "0px",margin:"0 10px" }}>
            From: 
          </Typography>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
          <Typography variant="h6" sx={{ position: "relative", top: "0px" ,margin:"0 10px" }}>
            To: 
          </Typography>
          <DatePicker
            selected={toDate}
            onChange={(date) => setToDate(date)}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

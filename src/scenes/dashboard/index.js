import React from "react";
import FlexBetween from "components/FlexBetween";
import { Box, Button, Card, useMediaQuery, useTheme } from "@mui/material";
import Header from "components/Header";
import Severity from "components/Severity";
import ErrorsDataGrid from "components/ErrorsDataGrid";
const Dashboard = () => {
  const isNonMediumScreens = useMediaQuery("(min-width:800px)");
  const theme = useTheme();
  return (
    <Box m="1.5rem 2.5rem">
      <FlexBetween>
        <Header title="DASHBOARD" />
      </FlexBetween>
      <Box
        mt="20px"
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        // gridAutoRows="160px"
        gap="20px"
        sx={{
          "& > div": { gridColumn: isNonMediumScreens ? undefined : "span 6" },
        }}
      >
        <Severity title="Critical" value={20} color="#f22d2d" />
        <Severity title="High" value={200} color="#f16019" />
        <Severity title="Medium" value={790} color="#dab92a" />
        <Severity title="Low" value={500} color="#4ba53f" />

        <ErrorsDataGrid />
      </Box>
    </Box>
  );
};

export default Dashboard;

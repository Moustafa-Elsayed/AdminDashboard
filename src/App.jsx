/* eslint-disable react-hooks/rules-of-hooks */
import * as React from "react";

import "./App.css";
import { ThemeProvider, createTheme, styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import NavBar from "./componenets/navbar/NavBar";
import SideBar from "./componenets/sidebar/SideBar";
import { useState } from "react";
// @ts-ignore
import { getDesignTokens } from "./theme";
import { Outlet } from "react-router-dom";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

function App() {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  // @ts-ignore
  const [mode, setMode] = React.useState(
    localStorage.getItem("currentMode")
      ? localStorage.getItem("currentMode")
      : "light"
  );

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <NavBar
            handleDrawerOpen={handleDrawerOpen}
            open={open}
            setMode={setMode}
          />
          <SideBar handleDrawerClose={handleDrawerClose} open={open} />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <DrawerHeader />
            <Outlet />
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;

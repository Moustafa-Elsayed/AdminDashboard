/* eslint-disable react/prop-types */
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { styled, useTheme } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import { Avatar, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import PeopleIcon from "@mui/icons-material/People";
import ContactsIcon from "@mui/icons-material/Contacts";
import Person3Icon from "@mui/icons-material/Person3";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import BarChartIcon from "@mui/icons-material/BarChart";
import TimelineIcon from "@mui/icons-material/Timeline";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import PublicIcon from "@mui/icons-material/Public";
import { useNavigate } from "react-router-dom";
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(
  // @ts-ignore
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
      ...openedMixin(theme),
      "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      "& .MuiDrawer-paper": closedMixin(theme),
    }),
  })
);

const SideBar = ({ handleDrawerClose, open }) => {
  const navigate=useNavigate();
  const theme = useTheme();
  const arrayOne = [
    {
      Text: "Dashborad",
      icon: <HomeIcon />,
      path: "/",
    },
    {
      Text: "Manange Team",
      icon: <PeopleIcon />,
      path: "/team",
    },
    {
      Text: "Contacts Information",
      icon: <ContactsIcon />,
      path: "/contacts",
    },
    {
      Text: "Invioces Balance",
      icon: <InsertDriveFileIcon />,
      path: "/invioces",
    },
  ];
  const arrayTwo = [
    {
      Text: "Profile Form",
      icon: <Person3Icon />,
      path: "/profile",
    },
    {
      Text: "Calender",
      icon: <CalendarMonthIcon />,
      path: "/calender",
    },
    {
      Text: "FAQ Page",
      icon: <LiveHelpIcon />,
      path: "/faq",
    },
  ];
  const arrayThere = [
    {
      Text: "Bar Chart",
      icon: <BarChartIcon />,
      path: "/barchart",
    },
    {
      Text: "Pie Chart",
      icon: <DonutLargeIcon />,
      path: "/piechart",
    },
    {
      Text: "LIne Chart",
      icon: <TimelineIcon />,
      path: "/linechart",
    },
    {
      Text: "Geography",
      icon: <PublicIcon />,
      path: "/geography",
    },
  ];
  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {
            // @ts-ignore
            theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )
          }
        </IconButton>
      </DrawerHeader>
      <Divider />
      <Avatar
        sx={{
          mx: "auto",
          my: 1,
          width: open ? 88 : 44,
          height: open ? 88 : 44,
          border: "2px solid gray",
          transition: ".5s",
        }}
        alt="Remy Sharp"
        src="./images/1000_F_529413165_SBJn56ZPxJprKno6OgA4KCiOL2l7QMAh.jpg"
      />
      <Typography
        align="center"
        color="inherit"
        sx={{ fontSize: open ? "17px" : 0, transition: ".5s" }}
      >
        Mostafa elsayed
      </Typography>
      <Typography
        align="center"
        color="inherit"
        sx={{ my: 1, fontSize: open ? "17px" : 0, transition: ".5s" }}
      >
        Admin
      </Typography>

      <Divider />
      <List>
        {arrayOne.map((items) => (
          <ListItem key={items.path} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
              onClick={() => {
                navigate(items.path);
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {items.icon}
              </ListItemIcon>
              <ListItemText
                primary={items.Text}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider />
      <List>
        {arrayTwo.map((items) => (
          <ListItem key={items.path} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
              onClick={() => {
                navigate(items.path);
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {items.icon}
              </ListItemIcon>
              <ListItemText
                primary={items.Text}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider />
      <List>
        {arrayThere.map((items) => (
          <ListItem key={items.path} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
              onClick={() => {
                navigate(items.path);
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {items.icon}
              </ListItemIcon>
              <ListItemText
                primary={items.Text}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default SideBar;

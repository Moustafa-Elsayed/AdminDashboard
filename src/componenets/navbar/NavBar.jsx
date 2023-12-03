import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton, Typography, styled } from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
// @ts-ignore
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
 // eslint-disable-next-line react/prop-types
 const NavBar = ({ handleDrawerOpen, open }) => {

   return (
     <AppBar position="fixed" open={open}>
       <Toolbar>
         <IconButton
           color="inherit"
           aria-label="open drawer"
           onClick={handleDrawerOpen}
           edge="start"
           sx={{
             marginRight: 5,
             ...(open && { display: "none" }),
           }}
         >
           <MenuIcon />
         </IconButton>
         <Typography variant="h6" noWrap component="div">
           Mini variant drawer
         </Typography>
       </Toolbar>
     </AppBar>
   );
 };
export default NavBar;
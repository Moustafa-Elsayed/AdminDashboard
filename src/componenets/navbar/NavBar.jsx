import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton, InputBase, Stack, Typography, alpha, styled } from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import SearchIcon from "@mui/icons-material/Search";
import DeleteIcon from "@mui/icons-material/Delete";

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
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));
 // eslint-disable-next-line react/prop-types
 const NavBar = ({ handleDrawerOpen, open }) => {

   return (
     <AppBar
       position="fixed"
       // @ts-ignore
       open={open}
     >
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
           Admin dashborad
         </Typography>
         <Search>
           <SearchIconWrapper>
             <SearchIcon />
           </SearchIconWrapper>
           <StyledInputBase
             placeholder="Search…"
             inputProps={{ "aria-label": "search" }}
           />
         </Search>
         <Stack flexGrow={1} />
         <IconButton size="small" color="inherit">
           <DeleteIcon />
         </IconButton>
         <IconButton size="small" color="inherit">
           <DeleteIcon />
         </IconButton>
         <IconButton size="small" color="inherit">
           <DeleteIcon />
         </IconButton>
         <IconButton size="small" color="inherit">
           <DeleteIcon />
         </IconButton>
       </Toolbar>
     </AppBar>
   );
 };
export default NavBar;
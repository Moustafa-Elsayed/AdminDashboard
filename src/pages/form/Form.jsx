import { Box, FormControl, InputLabel, MenuItem, Stack, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";

const Form = () => {
  return (
    <>
      <Typography
        color="primary"
        sx={{ mb: 1, fontSize: "24px", textTransform: "uppercase" }}
      >
        create user
      </Typography>
      <Typography sx={{ mb: 3, fontSize: "24px", textTransform: "capitalize" }}>
        create a new user profile
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "30px",
        }}
      >
        <Stack direction="row" spacing={5}>
          <TextField
            id="filled-basic"
            label="First Name"
            variant="filled"
            sx={{ flex: "1" }}
          />
          <TextField
            id="filled-basic"
            label="Second Name"
            variant="filled"
            sx={{ flex: "1" }}
          />
        </Stack>

        <TextField id="filled-basic" label="Email" variant="filled" />
        <TextField id="filled-basic" label="Contact Number" variant="filled" />
        <TextField id="filled-basic" label="Address 1" variant="filled" />
        <TextField id="filled-basic" label="Adress 2" variant="filled" />
        <FormControl variant="filled" sx={{ minWidth: 120 }}>
          <InputLabel id="demo-simple-select-filled-label">Role</InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
          >
            <MenuItem value=""></MenuItem>
            <MenuItem value={10}>User</MenuItem>
            <MenuItem value={20}>Managr</MenuItem>
            <MenuItem value={30}>Admin</MenuItem>
          </Select>
        </FormControl>
        <Stack spacing={2} direction="row" justifyContent="flex-end">
          <Button sx={{fontSize:"18px"}} variant="contained">Create New User</Button>
        </Stack>
      </Box>
    </>
  );
};

export default Form;

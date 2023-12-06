import { Box, MenuItem, Stack, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const currencies = [
  {
    value: "User",
    label: "User",
  },
  {
    value: "Manager",
    label: "Manager",
  },
  {
    value: "Admin",
    label: "Admin",
  },
 
];
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
        <TextField
          id="outlined-select-currency"
          variant="filled"
          select
          label="Role"
          defaultValue="User"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <Stack spacing={2} direction="row" justifyContent="flex-end">
          <Button sx={{ fontSize: "18px" }} variant="contained">
            Create New User
          </Button>
        </Stack>
      </Box>
    </>
  );
};

export default Form;

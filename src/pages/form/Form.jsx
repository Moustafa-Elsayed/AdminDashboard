import { Box, MenuItem, Stack, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";

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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

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
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "30px",
          }}
        >
          <Stack direction="row" spacing={5}>
            <TextField
              aria-invalid={errors.firstName ? "true" : "false"}
              id="filled-basic"
              label="First Name"
              variant="filled"
              sx={{ flex: "1" }}
              {...register("firstName", { required: true, minLength: 5 })}
              required
            />
            <TextField
              id="filled-basic"
              label="Last Name"
              variant="filled"
              sx={{ flex: "1" }}
              {...register("lastName", { required: true, minLength: 5 })}
              required
            />
          </Stack>

          <TextField
            id="filled-basic"
            label="Email"
            variant="filled"
            {...register("email", {
              pattern: /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
            })}
            required
          />
          <TextField
            id="filled-basic"
            label="Contact Number"
            variant="filled"
            {...register("conatctNumber", { required: true, minLength: 11 })}
            required
          />
          <TextField
            id="filled-basic"
            label="Address 1"
            variant="filled"
            {...register("addressOne", { required: false, minLength: 7 })}
            
          />
          <TextField
            id="filled-basic"
            label="Adress 2"
            variant="filled"
            {...register("addressTwo", { required: false, minLength: 7 })}

          />
          <TextField
            id="outlined-select-currency"
            variant="filled"
            select
            label="Role"
            defaultValue="User"
            required
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <Stack spacing={2} direction="row" justifyContent="flex-end">
            <Button sx={{ fontSize: "18px" }} variant="contained" type="submit">
              Create New User
            </Button>
          </Stack>
        </Box>
      </form>
    </>
  );
};

export default Form;

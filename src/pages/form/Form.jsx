import { Typography } from "@mui/material";

const Form = () => {
  return (
    <>
      <Typography
        color="primary"
        sx={{ mb: 1, fontSize: "24px", textTransform: "uppercase" }}
      >
        ceate user
      </Typography>
      <Typography sx={{ mb: 3, fontSize: "24px", textTransform: "capitalize" }}>
       create a new user profile
      </Typography>
    </>
  );
}

export default Form
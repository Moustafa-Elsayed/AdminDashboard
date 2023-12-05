import { DataGrid } from "@mui/x-data-grid";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material";
import { Box } from "@mui/material";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import SecurityIcon from "@mui/icons-material/Security";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { rows } from "./data";
const Team = () => {
  const theme = useTheme();

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 33,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "age",
      headerName: "Age",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "phone",
      headerName: "Phone",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "access",
      headerName: "Access",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            sx={{
              p: "6px",
              width: "90px",
              textAlign: "center",
              borderRadius: "5px",
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              backgroundColor:
                access === "admin"
                  ? theme.palette.primary.dark
                  : access === "manager"
                  ? theme.palette.secondary.dark
                  : theme.palette.error.dark,
            }}
          >
            {access === "admin" && (
              <AdminPanelSettingsIcon
                sx={{ color: "white" }}
                fontSize="small"
              />
            )}
            {access === "manager" && (
              <SecurityIcon sx={{ color: "white" }} fontSize="small" />
            )}
            {access === "user" && (
              <LockOpenIcon sx={{ color: "white" }} fontSize="small" />
            )}

            <Typography sx={{ fontSize: "13px", color: "white" }}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];
  return (
    <>
      <Typography
        color="primary"
        sx={{ mb: 1, fontSize: "24px", textTransform: "capitalize" }}
      >
        Team
      </Typography>
      <Typography sx={{ mb: 3, fontSize: "24px", textTransform: "capitalize" }}>
        Manging the Team members
      </Typography>

      <Box sx={{ height: 600, width: "100%" }}>
        <DataGrid
          rows={rows}
          // @ts-ignore
          columns={columns}
        />
      </Box>
    </>
  );
};

export default Team;

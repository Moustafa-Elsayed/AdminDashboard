import { DataGrid } from "@mui/x-data-grid";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material";
import { Box } from "@mui/material";
import { rows } from "../contacts/data";

const Team = () => {
  const theme = useTheme();


  const columns = [
    {
      field: "id",
      headerName: "ID",
      flex: 1,
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
          <Box sx={{
            p:"5px", 
            width:"99px",
            textAlign:"center",
            borderRadius:"3px",
             backgroundColor:theme.palette.primary.dark}}>
            <Typography color="initial">{access}</Typography>
          </Box>
        );
      },
    },
  ];
  return (
    <>
      <Typography color="primary" sx={{ mb: 1, fontSize: "24px" }}>
        Team
      </Typography>
      <Typography sx={{ mb: 3, fontSize: "24px" }}>
        Manging the Team members
      </Typography>

      <div style={{ height: 300, width: "100%" }}>
        <DataGrid
          rows={rows}
          // @ts-ignore
          columns={columns}
        />
      </div>
    </>
  );
};

export default Team;

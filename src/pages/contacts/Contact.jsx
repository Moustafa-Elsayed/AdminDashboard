import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { rows } from "./data";
import Typography from "@mui/material/Typography";

const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 33,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "registerid",
    headerName: "Register Id",
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
    field: "address",
    headerName: "Adress",
    flex: 1,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "city",
    headerName: "City",
    flex: 1,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "zipcode",
    headerName: "Zip Code",
    flex: 1,
    headerAlign: "center",
    align: "center",
  },
];


const Contact = () => {
  
  return (
    <>
      <Typography
        color="primary"
        sx={{ mb: 1, fontSize: "24px", textTransform: "capitalize" }}
      >
        contacts
      </Typography>
      <Typography sx={{ mb: 3, fontSize: "24px", textTransform: "capitalize" }}>
        list of contacts for future reference
      </Typography>

      <div style={{ height: 600, width: "100%" }}>
        <DataGrid
          slots={{ toolbar: GridToolbar }}
          rows={rows}
          // @ts-ignore
          columns={columns}
        />
      </div>
    </>
  );
};

export default Contact;

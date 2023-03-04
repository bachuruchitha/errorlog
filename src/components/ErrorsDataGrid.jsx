import * as React from "react";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import {
  FormControlLabel,
  Checkbox,
  FormGroup,
  useTheme,
  Box,
} from "@mui/material";
import ColumnVisibilityPanel from "./ColumnVisibilityPanel";

const ErrorsDataGrid = () => {
  const theme = useTheme();
  // Dummy data
  const rows = [
    { id: 1, name: "John Doe", age: 25, gender: "Male" },
    { id: 2, name: "Jane Smith", age: 32, gender: "Female" },
    { id: 3, name: "Bob Johnson", age: 47, gender: "Male" },
    { id: 4, name: "Sara Lee", age: 19, gender: "Female" },
  ];

  // Column definitions
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Name", width: 150 },
    { field: "age", headerName: "Age", width: 90 },
    { field: "gender", headerName: "Gender", width: 110 },
  ];
  const [visibleColumns, setVisibleColumns] = React.useState(() =>
    columns.map((column) => column.field)
  );
  const handleColumnVisibilityChange = (name, checked) => {
    setVisibleColumns((prevState) => {
      if (checked) {
        return [...prevState, name];
      } else {
        return prevState.filter((column) => column !== name);
      }
    });
  };
  return (
    <Box
      gridColumn="span 8"
      gridRow="span 3"
      height={"420px"}
      sx={{
        "& .MuiDataGrid-root": {
          border: "none",
          borderRadius: "5rem",
        },
        "& .MuiDataGrid-cell": {
          borderBottom: "none",
        },
        "& .MuiDataGrid-columnHeaders": {
          backgroundColor: theme.palette.background.alt,
          color: theme.palette.secondary[100],
          borderBottom: "none",
        },
        "& .MuiDataGrid-virtualScroller": {
          backgroundColor: theme.palette.background.alt,
        },
        "& .MuiDataGrid-footerContainer": {
          backgroundColor: theme.palette.background.alt,
          color: theme.palette.secondary[100],
          borderTop: "none",
        },
        "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
          color: `${theme.palette.secondary[200]} !important`,
        },
      }}
    >
      <ColumnVisibilityPanel
        columns={columns}
        onChange={handleColumnVisibilityChange}
      />
      <DataGrid
        columns={columns.filter((column) =>
          visibleColumns.includes(column.field)
        )}
        rows={rows}
        
      />
    </Box>
  );
};
export default ErrorsDataGrid;

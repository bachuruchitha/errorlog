import React from "react";
import {
  FormControlLabel,
  Checkbox,
  Box,
} from "@mui/material";
const ColumnVisibilityPanel = ({ columns, onChange }) => {
    const [checked, setChecked] = React.useState(() => {
      const initialChecked = {};
      columns.forEach((column) => {
        initialChecked[column.field] = true;
      });
      return initialChecked;
    });
  
    const handleChange = (event) => {
      const { name, checked } = event.target;
      setChecked((prevState) => ({
        ...prevState,
        [name]: checked,
      }));
      onChange(name, checked);
    };
  
    return (
      <Box>
          {columns.map((column) => (
            <FormControlLabel
              key={column.field}
              control={
                <Checkbox
                  checked={checked[column.field]}
                  onChange={handleChange}
                  name={column.field}
                />
              }
              label={column.headerName}
            />
          ))}
      </Box>
    );
  };
  export default ColumnVisibilityPanel;
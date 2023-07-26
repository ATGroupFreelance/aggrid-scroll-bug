import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

import MUIButton from "@mui/material/Button";

const Button = () => {
  return <MUIButton variant={"contained"}>Click Me</MUIButton>;
};

const rowData = [];

for (let i = 0; i < 30; i++) {
  rowData.push({
    name: i
  });
}

const columnDefs = [
  {
    field: "name",
    headerName: "name",
    width: 1000
  },
  {
    field: "button",
    headerName: "button",
    cellRenderer: Button,
    width: 200
  }
];

function App() {
  return (
    <div className="ag-theme-alpine" style={{ height: "80vh", width: "300px" }}>
      <AgGridReact rowData={rowData} columnDefs={columnDefs} />;
    </div>
  );
}

export default App;



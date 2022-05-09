//import logo from "./logo.svg";
import "./App.css";
//import Records from "./records.json";
import JSONDATA from "./records.json";
import * as React from "react";
//import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
//import Paper from "@mui/material/Paper";
import 'bootstrap/dist/css/bootstrap.css';

//import SearchBar from "material-ui-search-bar";
import { useState } from "react";
function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div class="container">
      <div className="App">
        <input
          type="text"
          placeholder="search.."
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />

        {/* <div className="user" key={ key }> */}
        <table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Code</TableCell>
              <TableCell align="right">availability</TableCell>
              <TableCell align="right">Needing_repair</TableCell>
              <TableCell align="right">Durability</TableCell>
              <TableCell align="right">Mileage</TableCell>
            </TableRow>
          </TableHead>

          {JSONDATA.filter((val) => {
            if (searchTerm === "") {
              return val;
            } else if (
              val.name.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
          }).map((val, key) => {
            return (
              <TableBody>
                <TableRow
                  key={val.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {val.name}
                  </TableCell>
                  <TableCell align="right">{val.code}</TableCell>
                  <TableCell align="right">
                    {val.availability.toString()}
                  </TableCell>
                  <TableCell align="right">
                    {val.needing_repair.toString()}
                  </TableCell>
                  <TableCell align="right">{val.durability}</TableCell>
                  <TableCell align="right">
                    {val.mileage ? val.mileage : "N/A"}
                  </TableCell>
                </TableRow>
              </TableBody>
            );
          })}
        </table>

      </div>
    </div>
  );
}

export default App;

/* Name:Nafiur Rashid |Email: nafiurrashid@gmail.com
Code Version: 1.00*/
import React from "react";
import { useState } from "react";
import JSONDATA from "../records.json";
//import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
const ShowTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div>
      <div style={{ textAlign: "right" }}>
        <input
          type="text"
          placeholder="Search.."
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </div>
      <br></br>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead sx={{ backgroundColor: "#061094" }}>
            <TableRow >
              <TableCell style={{ color: 'white'}}>Name</TableCell>
              <TableCell style={{ color: 'white' }} align="right">Code</TableCell>
              <TableCell style={{ color: 'white' }} align="right">Availability</TableCell>
              <TableCell style={{ color: 'white' }} align="right">Need to Repair</TableCell>
              <TableCell style={{ color: 'white' }} align="right">Durability</TableCell>
              <TableCell style={{ color: 'white' }} align="right">Mileage</TableCell>
            </TableRow>
          </TableHead>

          {JSONDATA.filter((val) => {
            if (searchTerm === "") {
              return val;
            } else if (
              val.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
              val.code.toLowerCase().includes(searchTerm.toLowerCase()) 
              
            ) {
              return val;
            }
             }).map((val) => {
            return (
              <TableBody >
                <TableRow
                  key={val.name}
                  
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {val.name}
                  </TableCell>
                  <TableCell align="right">{val.code}</TableCell>
                  <TableCell align="right">
                    {val.availability ? "✓" : "X"}
                  </TableCell>
                  <TableCell align="right">
                    {val.needing_repair ? "✓" : "X"}
                  </TableCell>
                  <TableCell align="right">{val.durability}</TableCell>
                  <TableCell align="right">
                    {val.mileage ? val.mileage : "N/A"}
                  </TableCell>
                </TableRow>
              </TableBody>
            );
          })}
        </Table>
      </TableContainer>
    </div>
  );
};

export default ShowTable;

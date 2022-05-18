/**
 * @author ${Nafiur Rashid}
 * @email ${nafiurrashid@gmail.com}
 * ${Version: 1.00}
 */
import React from "react";

import { styled } from '@mui/material/styles';
import { useState } from "react";
import JSONDATA from "../records.json";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const ShowTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  return (
    <>
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
          <Paper  sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 800 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow hover role="checkbox" tabIndex={-1}>
            
              <StyledTableCell style={{ color: 'white'}}>Name</StyledTableCell>
              <StyledTableCell style={{ color: 'white' }} align="right">Code</StyledTableCell>
              <StyledTableCell style={{ color: 'white' }} align="right">Availability</StyledTableCell>
              <StyledTableCell style={{ color: 'white' }} align="right">Need to Repair</StyledTableCell>
              <StyledTableCell style={{ color: 'white' }} align="right">Durability</StyledTableCell>
              <StyledTableCell style={{ color: 'white' }} align="right">Mileage</StyledTableCell>
            </TableRow>
            
          </TableHead>
          

          {JSONDATA.filter((val) => {
            if (searchTerm === "") { //If nothing is searched the whole value will be returned
              return val;
            } else if ( //if name or code is searched
              val.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
              val.code.toLowerCase().includes(searchTerm.toLowerCase()) 
              
            ) {
              return val;
            }
             }).map((val) => { 
            return (
              <TableBody >
                <StyledTableRow
                  key={val.code}
                
                >
                  <StyledTableCell  component="th" scope="row">
                    {val.name}
                  </StyledTableCell>
                  <StyledTableCell  align="right">{val.code}</StyledTableCell>
                  <StyledTableCell  align="right">
                    {val.availability ? "✓Available" : "X On Rent"}
                  </StyledTableCell>
                  <StyledTableCell  align="right">
                    {val.needing_repair ? "✓" : "X"}
                  </StyledTableCell>
                  <StyledTableCell  align="right">{val.durability}</StyledTableCell>
                  <StyledTableCell  align="right">
                    {val.mileage ? val.mileage : "N/A"}
                  </StyledTableCell>
                </StyledTableRow>
              </TableBody>
              
            );
          })}
          
        </Table>
  
      </TableContainer>
      
      </Paper>
    </>
  );
};

export default ShowTable;

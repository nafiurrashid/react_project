//import logo from "./logo.svg";
import "./App.css";
import Records from "./records.json";

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import SearchBar from "material-ui-search-bar";
function App() {
  
  return (
    <div className="App">
      ...table...
  

 

<SearchBar
          value={searched}
          onChange={(searchVal) => requestSearch(searchVal)}
          onCancelSearch={() => cancelSearch()}
        />

      {/* <header className="App-header">
        <br></br>

        {Records.map((record) => {
          return <div className="box">
            <table>

         
              <tr>
                  <th>{record.name}</th>
                  <th>{record.code}</th>
                  <th>{record.availability}</th>
                  <th>{record.needing_repair}</th>
                  <th>{record.durability}</th>
                  <th>{record.mileage}</th>

              </tr>
            </table>
            </div>;
        })}

      </header> */}
      <TableContainer component={Paper}>
 <Table sx={{ minWidth: 650 }} aria-label="simple table">
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
   <TableBody>
     {Records.map((record) => (
       <TableRow
         key={record.name}
         sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
       >
         <TableCell component="th" scope="row">
           {record.name}
         </TableCell>
         <TableCell align="right">{record.code}</TableCell>
         <TableCell align="right">{record.availability.toString()}</TableCell>
         <TableCell align="right">{record.needing_repair.toString()}</TableCell>
         <TableCell align="right">{record.durability}</TableCell>
         <TableCell align="right">{
         record.mileage}</TableCell>
       </TableRow>
     ))}
   </TableBody>
 </Table>
</TableContainer>





    </div>
 


  );
}

export default App;

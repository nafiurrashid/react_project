/**
 * @author ${Nafiur Rashid}
 * @email ${nafiurrashid@gmail.com}
 * ${Version: 1.00}
 */
 import JSONDATA from "../../dataModel/records.json";
 import React, { useState, useEffect } from "react";
 import { styled } from "@mui/material/styles";
 import Table from "@mui/material/Table";
 import TableBody from "@mui/material/TableBody";
 import TableCell, { tableCellClasses } from "@mui/material/TableCell";
 import TableContainer from "@mui/material/TableContainer";
 import TableHead from "@mui/material/TableHead";
 import TableRow from "@mui/material/TableRow";
 import TablePagination from "@mui/material/TablePagination";
 import Paper from "@mui/material/Paper";
 import { updateTable } from "../../helper/manageLocalStorage";
 
 const ShowTable = () => {
   const [searchTerm, setSearchTerm] = useState("");
   const [products, setProducts] = useState(
     JSON.parse(localStorage.getItem("data"))
   );
   updateTable(JSONDATA);
 
   // pagination constant assignment starts
   const [page, setPage] = React.useState(0);
   const [rowsPerPage, setRowsPerPage] = React.useState(10);
 
   const handleChangePage = (event, newPage) => {
     setPage(newPage);
   };
 
   const handleChangeRowsPerPage = (event) => {
     setRowsPerPage(+event.target.value);
     setPage(0);
   };
 
   // pagination constant assignment end
 
   useEffect(() => {
     window.addEventListener("storage", () => {
       // When local storage changes, dump the list to
       // the console.
       setProducts(JSON.parse(localStorage.getItem("data")) || []);
     });
   }, []);
 
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
     "&:nth-of-type(odd)": {
       backgroundColor: theme.palette.action.hover,
     },
     // hide last border
     "&:last-child td, &:last-child th": {
       border: 0,
     },
   }));
 
   return (
     <>
       <div
         style={{
           textAlign: "right",
           backgroundColor: "#4CAF50",
           borderRadius: "10px",
           marginTop: "15px",
         }}
       >
         <span>
           <span
             style={{
               textAlign: "left",
               float: "left",
               fontSize: "1.8em",
               fontWeight: 900,
               padding: "2.5px",
               paddingLeft: "10px",
               paddingBottom: "10px",
               borderRadius: "15px",
             }}
           >
             Rental Inventory
           </span>
           <input
             type="text"
             placeholder="Search by Name or Code.."
             onChange={(event) => {
               setSearchTerm(event.target.value);
             }}
           />
         </span>
       </div>
 
       <Paper sx={{ width: "100%", overflow: "hidden" }}>
         <TableContainer sx={{ maxHeight: 950 }}>
           <Table id="rentaldata">
             <TableHead>
               <TableRow>
                 <StyledTableCell>Name</StyledTableCell>
                 <StyledTableCell align="right">Code</StyledTableCell>
                 <StyledTableCell align="right">Availability</StyledTableCell>
                 <StyledTableCell align="right">Need to Repair</StyledTableCell>
                 <StyledTableCell align="right">Durability</StyledTableCell>
                 <StyledTableCell align="right">Mileage</StyledTableCell>
               </TableRow>
             </TableHead>
 
             {products
               .filter((val) => {
                 if (searchTerm === "") {
                   //If nothing is searched the whole value will be returned
                   return val;
                 } else if (
                   //if name or code is searched
                   val.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                   val.code.toLowerCase().includes(searchTerm.toLowerCase())
                 ) {
                   return val;
                 }
                 return 0;
               })
               .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
               .map((val) => {
                 return (
                   <TableBody key={val.code}>
                     <StyledTableRow name={val.name} mileage={val.mileage}>
                       <StyledTableCell component="" scope="row">
                         {val.name}
                       </StyledTableCell>
                       <StyledTableCell align="right">
                         {val.code}
                       </StyledTableCell>
                       <StyledTableCell align="right">
                         {val.availability ? "✓Available" : "X On Rent"}
                       </StyledTableCell>
                       <StyledTableCell align="right">
                         {val.needing_repair ? "✓" : "X"}
                       </StyledTableCell>
                       <StyledTableCell align="right">
                         {val.durability}
                       </StyledTableCell>
                       <StyledTableCell align="right">
                         {val.mileage ? val.mileage : "N/A"}
                       </StyledTableCell>
                     </StyledTableRow>
                   </TableBody>
                 );
               })}
           </Table>
         </TableContainer>
         <TablePagination
           rowsPerPageOptions={[10, 15, 25]}
           component="div"
           count={products.length}
           rowsPerPage={rowsPerPage}
           page={page}
           onPageChange={handleChangePage}
           onRowsPerPageChange={handleChangeRowsPerPage}
         />
       </Paper>
     </>
   );
 };
 
 export default ShowTable;
 
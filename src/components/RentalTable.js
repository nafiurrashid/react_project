// import * as React from 'react';
// import Paper from '@mui/material/Paper';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TablePagination from '@mui/material/TablePagination';
// import TableRow from '@mui/material/TableRow';
// import JSONDATA from "../records.json";
// import { styled } from '@mui/material/styles';



// export default function StickyHeadTable() {
//     const [searchTerm, setSearchTerm] = useState("");
//     const StyledTableCell = styled(TableCell)(({ theme }) => ({
//         [`&.${tableCellClasses.head}`]: {
//           backgroundColor: theme.palette.common.black,
//           color: theme.palette.common.white,
//         },
//         [`&.${tableCellClasses.body}`]: {
//           fontSize: 14,
//         },
//       }));
//     const [page, setPage] = React.useState(0);
//     const [rowsPerPage, setRowsPerPage] = React.useState(10);
  
//     const handleChangePage = (event: unknown, newPage: number) => {
//       setPage(newPage);
//     };
  
//     const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
//       setRowsPerPage(+event.target.value);
//       setPage(0);
//     };



//   return (
      
//     <Paper sx={{ width: '100%', overflow: 'hidden' }}>
//       <TableContainer sx={{ maxHeight: 440 }}>
//         <Table stickyHeader aria-label="sticky table">
//           <TableHead>
//             <TableRow>
              
//                       {JSONDATA.filter((val) => {
//                         if (searchTerm === "") { //If nothing is searched the whole value will be returned
//                           return val;
//                         } else if ( //if name or code is searched
//                           val.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                           val.code.toLowerCase().includes(searchTerm.toLowerCase()) 
                          
//                         ) {
//                           return val;
//                         }
//                          }).map((column) => (
//                 <TableCell
//                   key={column.id}
//                   align={column.align}
//                   style={{ minWidth: column.minWidth }}
//                 >
//                   {column.label}
//                 </TableCell>
//               ))}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {rows
//               .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//               .map((row) => {
//                 return (
//                   <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
//                     {columns.map((column) => {
//                       const value = row[column.id];
//                       return (
//                         <TableCell key={column.id} align={column.align}>
//                           {column.format && typeof value === 'number'
//                             ? column.format(value)
//                             : value}
//                         </TableCell>
//                       );
//                     })}
//                   </TableRow>
//                 );
//               })}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       <TablePagination
//         rowsPerPageOptions={[10, 25, 100]}
//         component="div"
//         count={rows.length}
//         rowsPerPage={rowsPerPage}
//         page={page}
//         onPageChange={handleChangePage}
//         onRowsPerPageChange={handleChangeRowsPerPage}
//       />
//     </Paper>
//   );
// }

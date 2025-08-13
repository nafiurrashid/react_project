/**
 * @author ${Nafiur Rashid}
 * @email ${nafiurrashid@gmail.com}
 * ${Version: 1.00}
 */
 import React from "react";
 import ShowTable from "../components/showTable/showTable";
 import BookProductModal from "../components/bookProductModal/bookProductModal";
 import ReturnProductModal from "../components/returnProductModal/returnProductModal";
 
 const RentalTableHome = () => {
   return (
     <div className="container">
       {/* Search & Show table starts */}
       <ShowTable />
       <div style={{ textAlign: "right" }}>
         {/* start Book modal */}
         <BookProductModal />
         {/* end modal */}
         <ReturnProductModal />
       </div>
       <div>
         ©2025 Nafiur Rashid || nafiurrashid@gmail.com || All rights reserved
       </div>
     </div>
   );
 };
 
 export default RentalTableHome;
 

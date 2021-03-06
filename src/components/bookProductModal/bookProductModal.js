/**
 * @author ${Nafiur Rashid}
 * @email ${nafiurrashid@gmail.com}
 * ${Version: 1.00}
 */
 import Swal from "sweetalert2";
 import React from "react";
 import Select from "react-select";
 import { useState } from "react";
 import JSONDATA from "../../dataModel/records.json";
 import DatePicker from "react-datepicker";
 import BookModal from "react-modal";
 import "react-datepicker/dist/react-datepicker.css";
 import { dayDifferenceCalculation } from "./../../utitlities/dayDifferenceCalculation";
 import { rentalFeeCalculation } from "../../utitlities/rentalFeeCalculation";
 import { meterEstimationCalculation } from "../../utitlities/meterEstimationCalculation";
 import { durabilityCalculation_meterType } from "../../utitlities/durabilityCalculation_meterType";
 import { durabilityCalculation_plainType } from "../../utitlities/durabilityCalculation_plainType";
 import { setAvailability } from "../../helper/manageLocalStorage";
 
 const BookProductModal = () => {
   const [modalIsOpen, setModalIsOpen] = useState(false);
   const [startDate, setStartDate] = React.useState(new Date());
   const [endDate, setEndDate] = React.useState(new Date());
   const [value, setValue] = React.useState("");
 
   return (
     <>
       <button className="button button1" onClick={() => setModalIsOpen(true)}>
         Book a Product
       </button>
 
       <BookModal
         isOpen={modalIsOpen}
         shouldCloseOnOverlayClick={false}
         onRequestClose={() => setModalIsOpen(false)}
         ariaHideApp={false}
         // The inline CSS added as per reference documentation of the library "react-modal"
         //For further details: http://reactcommunity.org/react-modal/styles/
         style={{
           display: "flex",
           justifyContent: "center",
           alignItems: "center",
           overlay: {
             backgroundColor: "rgba(128, 128, 128, 0.2)",
           },
           content: {
             color: "Black",
             position: "absolute",
             top: "20px",
             left: "40px",
             right: "40px",
             bottom: "20px",
             border: "5px solid #ccc",
             maxWidth: "400px",
             margin: "0 auto",
             height: "fit-content",
             width: "fit-content",
           },
         }}
       >
         <h1>Book a Product</h1>
         <span>
           <strong>Product booking:</strong>
         </span>
         <Select
           name="choice"
           options={JSON.parse(localStorage.getItem("data")).filter(
             (value) => value.availability
           )}
           value={value}
           onChange={setValue}
           getOptionLabel={(value) => value.name + "/" + value.code}
           getOptionValue={(value) => value.availability && value.code}
         ></Select>
 
         <span>
           <strong>From</strong>{" "}
         </span>
 
         <DatePicker
           selected={startDate}
           minDate={new Date()}
           onChange={(date) => setStartDate(date)}
         />
 
         <span>
           <strong>To</strong>
         </span>
 
         <DatePicker
           selected={endDate}
           minDate={startDate}
           onChange={(date) => setEndDate(date)}
         />
 
         <p></p>
 
         <div>
           You want to book {value.name} {value.code} from {startDate.getDate()}/
           {startDate.getMonth()}/{startDate.getFullYear()} to{" "}
           {endDate.getDate()}/{endDate.getMonth()}/{endDate.getFullYear()}
         </div>
 
         <div>
           Minimum Rental Period:
           {value.minimum_rent_period
             ? " " + value.minimum_rent_period + " Days"
             : ""}
         </div>
 
         <div>
           Selected Rental Period:{" "}
           {dayDifferenceCalculation(endDate, startDate)
             ? " " + dayDifferenceCalculation(endDate, startDate) + " Days"
             : ""}
         </div>
 
         <div> Product Price:{value.price ? " BDT " + value.price : ""} </div>
         <hr></hr>
         <div>
           <strong>Your Rental Fee: </strong>
           {value.price
             ? rentalFeeCalculation(
                 dayDifferenceCalculation(endDate, startDate),
                 value.price
               )
             : ""}
         </div>
 
         <div>
           <strong>Meter Estimation:</strong>{" "}
           {meterEstimationCalculation(
             dayDifferenceCalculation(endDate, startDate)
           )
             ? meterEstimationCalculation(
                 dayDifferenceCalculation(endDate, startDate)
               )
             : ""}
         </div>
 
         <div>
           <strong>Durability calculation: </strong>
           {value.type === "meter"
             ? // for meter type
               durabilityCalculation_meterType(
                 dayDifferenceCalculation(endDate, startDate),
                 value.durability
               )
             : // for not "meter" which is plain type
             value.type === "plain"
             ? durabilityCalculation_plainType(
                 dayDifferenceCalculation(endDate, startDate),
                 value.durability,
                 value.mileage
               )
             : ""}
         </div>
 
         <div>
           {value.minimum_rent_period <=
           dayDifferenceCalculation(endDate, startDate) ? (
             <>
               {/* If a value more or equal to than minimum rental period is selected */}
               <p style={{ color: "green" }}>
                 congratulataion! You can avail a discount now!
               </p>
               <button
                 className="button button1"
                 onClick={() => {
                   Swal.fire({
                     title: "Do you want to procced?",
                     text: "You won't be able to revert this!",
                     icon: "warning",
                     showCancelButton: true,
                     confirmButtonColor: "#4CAF50",
                     cancelButtonColor: "#d33",
                     confirmButtonText: "Yes!",
                   }).then((result) => {
                     if (result.isConfirmed) {
                       Swal.fire(
                         "Product Booked!",
                         "Your request has been recorded.",
                         "success"
                       ).then(function () {
                         setAvailability(JSONDATA, value);
                         window.location.reload(false);
                         setModalIsOpen(false);
                       });
                     }
                   });
                 }}
               >
                 Yes
               </button>
               <span> </span>
               <button
                 className="button button1"
                 onClick={() => setModalIsOpen(false)}
               >
                 No
               </button>
             </>
           ) : (
             <>
               {/* If a value less than minimum rental period is selected */}
               <p style={{ color: "red" }}>
                 Please Select a Time greater than minimum Rental Period
               </p>
               <button
                 className="buttonDisabled  button1"
                 disabled
                 onClick={() => {
                   // alert("Your booking request has been recorded");
                   setModalIsOpen(false);
                 }}
               >
                 Yes
               </button>
               <span> </span>
               <button
                 className="button button1"
                 onClick={() => setModalIsOpen(false)}
               >
                 No
               </button>
             </>
           )}
         </div>
       </BookModal>
     </>
   );
 };
 
 export default BookProductModal;
 
/**
 * @author ${Nafiur Rashid}
 * @email ${nafiurrashid@gmail.com}
 * ${Version: 1.00}
 */
import React from 'react';
import Select from "react-select";
import { useState,useEffect } from 'react';
import JSONDATA from "../records.json";
import DatePicker from "react-datepicker";
import BookModal from "react-modal";
import "react-datepicker/dist/react-datepicker.css";
const BookProductModal = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
   
    const [prod, setProd] = React.useState();
    const [price, setprice] = useState();
    const [startDate, setStartDate] = React.useState(new Date());
    const [endDate, setEndDate] = React.useState(new Date());
    const [value, setValue] = React.useState("");
   // const [input, setInput] = React.useState('');
    const Timediff =
      (endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24);
     const onButtonClick = () => {
      var date1 = new Date(startDate);
      var date2 = new Date(endDate);
  
      // To calculate the time difference of two dates
      var Difference_In_Time = date2.getTime() - date1.getTime();
  
      // To calculate the no. of days between two dates
      var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
      setModalIsOpen(true);
      //setShowBookModal(false)
      setprice(prod[0].price * (Difference_In_Days + 1)); // Since start date = end date, the rental period is 1 day.
    };
    const onProdChange = (e) => {
      var newArray = JSONDATA.filter(function (el) {
        return el.code === e;
      });
      setProd(newArray);
    };
    useEffect(() => {
      var newArray = JSONDATA.filter(function (el) {
        return el.code === "p1";
      });
      setProd(newArray);
    }, []);
    return (
        // <div style={{ textAlign: "right" }}>
        <>
            <button class="button button1" onClick={ ()=> setModalIsOpen(true)}>Book
            </button>
              <BookModal isOpen={modalIsOpen} shouldCloseOnOverlayClick={false} onRequestClose= { ()=> setModalIsOpen(false)}
        style={
          {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
         
          overlay: {
            backgroundColor:'grey',
          
            
          },
          content: {
            color: 'Black'
          }
        }
      }
        >
          <h1>Book a Product</h1>
          <span><strong>From</strong></span>
          <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
         
          <span><strong>To</strong></span>
          <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
         <br></br>
         <p></p>
        
          <span>
            
          <strong>Product booking:</strong></span>
          <Select 
          name="choice"
          // defaultValue={{ label: "Select", value: 0 }}
          defaultValue={value[0]}
          options={JSONDATA}
          value={value[0]}
          onChange={setValue}
          getOptionLabel={(value) => value.name  +'/'+ value.code}
          // getOptionValue={(value) => value.code  }
          getOptionValue={(value) => value.availability && value.code }     
          >
           
        </Select>
        <p></p>
        <div>You want to Book {value.name} {value.code} from {startDate.getDate() }/{startDate.getMonth()}/{startDate.getFullYear()} to {endDate.getDate()}/{endDate.getMonth()}/{endDate.getFullYear()} </div>
        <div> Minimum Rental period: {value.minimum_rent_period} Day</div>
        <div>Rental period: {Math.round(Timediff)}</div>
        <div> Product Price: BDT{value.price} </div> 
         {/* <div>{value.availability && <button>Logout</button>}</div> */}
        <hr></hr>
        <div><strong>Your Rental Fee: </strong>{Math.round(Timediff)*value.price}</div>
        <div><strong>Meter Estimation:</strong> {Math.round(Timediff)*10}</div>
       {/* <div>{value.availability && <button>Logout</button>}</div> */}
       {/* <div>Plain Type:{value.durability-Math.round(Timediff)}</div>
       <div>Meter Type: {value.durability-2*Math.round(Timediff)}</div> */}
        <div> <strong>Durability calculation:</strong>
        { value.type==="meter" ? value.durability-2*Math.round(Timediff) : value.durability-Math.round(Timediff)}</div>
         {/* <strong>Please Select a Time greater than minimum Rental Period</strong>*/}
         <div> 
        { value.minimum_rent_period<=Math.round(Timediff) ? 
        <>
         <button class="button button1" onClick={()=>{ alert('Your booking request has been recorded'); setModalIsOpen(false); }  }>Yes</button>
         <span>  </span>
         <button class="button button1" onClick={ ()=> setModalIsOpen(false)}>No</button>
         </>
          :
          <>
          <p style={{color: "red"}}>Please Select a Time greater than minimum Rental Period</p> 
          <button class="buttonDisabled  button1" disabled onClick={()=>{ alert('Your booking request has been recorded'); setModalIsOpen(false); }  }>Yes</button>
          <span>  </span>
          <button class="button button1" onClick={ ()=> setModalIsOpen(false)}>No</button>
          </>
}
           </div>


        </BookModal>


       </>
    );
};

export default BookProductModal;
/* Name:Nafiur Rashid |Email: nafiurrashid@gmail.com
Code Version: 1.00*/
import React from 'react';
import Select from "react-select";
import { useState } from 'react';
import JSONDATA from "../records.json";
import DatePicker from "react-datepicker";
import BookModal from "react-modal";
import "react-datepicker/dist/react-datepicker.css";
import ReturnModal from "react-modal";
//import { ReportGmailerrorred } from '@mui/icons-material';
//import { height } from '@mui/system';
const BookProductModal = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [prod, setProd] = useState();
    const [price, setprice] = useState();
    const [returnModalIsOpen, setReturnModalIsOpen] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [value, setValue] = React.useState({});
    const [input, setInput] = useState('');
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
    return (
        <div style={{ textAlign: "right" }}>
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
            width:1000,
            height: 800,
            
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
          options={JSONDATA}
          value={value}
          onChange={setValue}
          getOptionLabel={(value) => value.name  +'/'+ value.code}
          getOptionValue={(value) => value.code  }
          >
        </Select>
        {/* <select>
            <option value="first">First Value</option>
            <option value="second" selected>Second Value</option>
            <option value="third">Third Value</option>
        </select> */}
        <p></p>
          <div>
          <button  onClick={() => onButtonClick()}>Yes</button>
          <span>  </span>
            <button onClick={ ()=> setModalIsOpen(false)}>No</button>
          </div>
        </BookModal>





                {/* Modal of return */}
                <button class="button button1" onClick={ ()=> setReturnModalIsOpen(true)}>Return</button>

<ReturnModal isOpen={returnModalIsOpen} shouldCloseOnOverlayClick={false} onRequestClose= { ()=> setReturnModalIsOpen(false)}
style={
  {
  overlay: {
    backgroundColor:'grey'
  },
  content: {
    color: 'Black'
  }
}
}
>
  <h1>Return a Product</h1>
  <p>Product return</p>
  <Select 
          name="choice"
          options={JSONDATA}
          value={value}
          onChange={setValue}
          getOptionLabel={(value) => value.name+'/'+ value.code}
          getOptionValue={(value) => value.code}
          >
        </Select>

        <div>
    <label>Please specify:</label>
    <input value={input} onInput={e => setInput(e.target.value)}/>
    </div>




  <div>
    <button style={{color:'white'}} onClick={ ()=> setReturnModalIsOpen(false)}>Close</button>
  </div>
</ReturnModal>
        </div>
    );
};

export default BookProductModal;
/**
 * @author ${Nafiur Rashid}
 * @email ${nafiurrashid@gmail.com}
 * ${Version: 1.00}
 */
import React from "react";
import Select from "react-select";
import { useState, useEffect } from "react";
// import JSONDATA from "../model/records.json";
import JSONDATA from "../../model/records.json";

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

  const setAvailability = () => {
    let jsonData = localStorage.getItem("data");
    if (jsonData) {
      jsonData = JSON.parse(jsonData);

      jsonData.map((data) => {
        if (data.code === value.code) {
          data.availability = false;
        }
      });
      localStorage.setItem("data", JSON.stringify(jsonData));
    } else {
      localStorage.setItem("data", JSON.stringify(JSONDATA));
    }
  };
  setAvailability();
  return (
    <>
      <button class="button button1" onClick={() => setModalIsOpen(true)}>
        Book a Product
      </button>

      <BookModal
        isOpen={modalIsOpen}
        shouldCloseOnOverlayClick={false}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          overlay: {
            position: "fixed",
            // top: 15,
            // left: 15,
            // right: 50,
            // bottom: 15,
            backgroundColor: 'rgba(128, 128, 128, 0.85)',
          },

          content: {
            color: "Black",
            position: "absolute",
            top: "10px",
            left: "400px",
            right: "400px",
            bottom: "40px",
            border: "5px solid #ccc",
            background: "#fff",
            overflow: "auto",
            WebkitOverflowScrolling: "touch",
            borderRadius: "4px",
            outline: "none",
            padding: "20px",
            maxWidth:"500px",
            margin: "0 auto",
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
          You want to Book {value.name} {value.code} from {startDate.getDate()}/
          {startDate.getMonth()}/{startDate.getFullYear()} to{" "}
          {endDate.getDate()}/{endDate.getMonth()}/{endDate.getFullYear()}
        </div>

        <div> Minimum Rental Period: {value.minimum_rent_period} Days</div>
        <div>Selected Rental Period: {Math.round(Timediff)} Days</div>
        <div> Product Price: BDT{value.price} </div>

        <hr></hr>

        <div>
          <strong>Your Rental Fee: </strong>
          {Math.round(Timediff) * value.price}
        </div>
        <div>
          <strong>Meter Estimation:</strong> {Math.round(Timediff) * 10}
        </div>
        <div>
          <strong>Durability calculation: </strong>
          {value.type === "meter"
            ? // for meter type
              value.durability - 2 * Math.round(Timediff)
            : // for not "meter" which is plain type
              value.durability - Math.round(Timediff) - (value.mileage % 10)}
        </div>

        <div>
          {value.minimum_rent_period <= Math.round(Timediff) ? (
            <>
              {/* If a value more or equal to than minimum rental period is selected */}
              <p style={{ color: "green" }}>
                congratulataion! You can avail a discount now!
              </p>
              <button
                class="button button1"
                onClick={() => {
                  alert("Your booking request has been recorded");
                  setModalIsOpen(false);
                  setAvailability();
                  window.location.reload(false);
                }}
              >
                Yes
              </button>

              <span> </span>

              <button
                class="button button1"
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
                class="buttonDisabled  button1"
                disabled
                onClick={() => {
                  alert("Your booking request has been recorded");
                  setModalIsOpen(false);
                }}
              >
                Yes
              </button>
              <span> </span>
              <button
                class="button button1"
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

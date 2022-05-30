/**
 * @author ${Nafiur Rashid}
 * @email ${nafiurrashid@gmail.com}
 * ${Version: 1.00}
 */
import React from "react";
import Select from "react-select";
import { useState } from "react";
import JSONDATA from "../../dataModel/records.json";
import "react-datepicker/dist/react-datepicker.css";
import ReturnModal from "react-modal";
const ReturnProductModal = () => {
  const [returnModalIsOpen, setReturnModalIsOpen] = useState(false);
  const [value, setValue] = React.useState("");
  const [input, setInput] = useState("");
  const setAvailability = () => {
    let jsonData = localStorage.getItem("data");
    if (jsonData) {
      jsonData = JSON.parse(jsonData);
      jsonData.map((data) => {
        if (data.code === value.code) {
          data.availability = true;
          data.mileage = input;
        }
        return 0;
      });
      localStorage.setItem("data", JSON.stringify(jsonData));

    } else {
      localStorage.setItem("data", JSON.stringify(JSONDATA));
      
    }
  };


  return (
    <>
      <button className="button button1" onClick={() => setReturnModalIsOpen(true)}>
      Return a Product
      </button>
      <ReturnModal
        isOpen={returnModalIsOpen}
        shouldCloseOnOverlayClick={false}
        onRequestClose={() => setReturnModalIsOpen(false)}
        ariaHideApp={false}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          overlay: {
            position: "fixed",
            backgroundColor: 'rgba(128, 128, 128, .2)',
          },

          content: {
            color: "Black",
            position: "absolute",
            left: "40px",
            right: "40px",
            bottom: "20px",
            border: "5px solid #ccc",
            background: "#fff",
            overflow: "auto",
            WebkitOverflowScrolling: "touch",
            borderRadius: "4px",
            outline: "none",
            padding: "20px",
            maxWidth:"400px",
            margin: "0 auto",
            height: 'fit-content',
            width: 'fit-content',
          },
        }}
      >
        <h1>Return a Product</h1>
        <p>Product return</p>
        {/* selection of the product */}
        <Select
          name="choice"
          //filtered by availablity (only unavaliable products can be returned)
          options={JSON.parse(localStorage.getItem("data")).filter(
            (value) => !value.availability
          )}
          value={value}
          onChange={setValue}
          getOptionLabel={(value) => value.name + "/" + value.code} // here 'name/code' format is followed
          getOptionValue={(value) => value.code} // code is the unique value by which it is recognised
        ></Select>

        <p></p>

        {/* Taking non-negative input of the milage */}
        <div>
          <label>
            <strong>Mileage: </strong>
          </label>{" "}
          
          <input
            type="number"
            min="0"
            value={input}
            onInput={(e) => setInput(e.target.value)
            }

          />
        </div>
        <p></p>
        <div>{input===""?"":value.name+ ' has '+ input+' milage left'}</div>


        <div style={{ margin: '0 auto'}}>
          {/* confirmation button */}
          <button
            className="button button1"
            style={{ color: "white" }}
            onClick={() => {
              alert("Your Product return request has been recorded");
              setReturnModalIsOpen(false);
              setAvailability();
              window.location.reload(false);
            }}
          >
            Confirm
          </button>

          <button
            className="button button1"
            style={{ color: "white" }}
            onClick={() => setReturnModalIsOpen(false)}
          >
            Close
          </button>
        </div>
      </ReturnModal>
    </>
  );
};

export default ReturnProductModal;

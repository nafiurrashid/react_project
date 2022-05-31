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
// import ReturnConfirmModal from "../ReturnConfirmModal/returnConfirmModal";
import {setMileageandAvailability} from "../../helper/manageLocalStorage";
import Swal from "sweetalert2";
const ReturnProductModal = () => {
  const [returnModalIsOpen, setReturnModalIsOpen] = useState(false);
  // const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [input, setInput] = useState("");

  // useEffect(()=>{
  //   if(returnModalIsOpen){
  //     setModalIsOpen(false)
  //   }
  //   else {
  //     setModalIsOpen(true)
  //   }
  // },[returnModalIsOpen])

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
            backgroundColor: 'rgba(128, 128, 128, .2)',
          },

          content: {
            color: "Black",
            border: "5px solid #ccc",
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
              Swal.fire({
                icon: 'success',
                title: 'Congratilation',
                text: 'Your Return Data is d!',
                confirmButtonColor: '#4CAF50',
              }
              ).then(function (){
                
                setReturnModalIsOpen(false);
                window.location.reload(false);
                setMileageandAvailability(JSONDATA,value,input);
              })
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
        {/* <ReturnConfirmModal 
        set={setReturnModalIsOpen} get={returnModalIsOpen}
        /> */}
      </ReturnModal>
      
    </>
  );
};

export default ReturnProductModal;

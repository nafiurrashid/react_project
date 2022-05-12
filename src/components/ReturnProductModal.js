import React from 'react';
import Select from "react-select";
import { useState} from 'react';
import JSONDATA from "../records.json";
import "react-datepicker/dist/react-datepicker.css";
import ReturnModal from "react-modal";
const ReturnProductModal = () => {
    const [returnModalIsOpen, setReturnModalIsOpen] = useState(false);
    const [value, setValue] = React.useState({});
    const [input, setInput] = useState('');
    return (
        <>
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
        <p></p>
        <div>
        <label><strong>Used Mileage:</strong></label>
         <input type="number" min="0" value={input} onInput={e => setInput(e.target.value)}/>
        </div>
        {/* <div>Milage: {input}</div> */}
        <div>You used {input} milage of {value.name}</div>
        <div></div>
        <div>
        <button class="button button1" style={{color:'white'}}>Confirm Return</button>
            <button class="button button1" style={{color:'white'}} onClick={ ()=> setReturnModalIsOpen(false)}>Close</button>
        </div>
 </ReturnModal> 
        </>
    );
};

export default ReturnProductModal;
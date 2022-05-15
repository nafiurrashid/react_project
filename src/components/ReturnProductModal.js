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
        {/* selection of the product */}
        <Select 
          name="choice"
          defaultValue={value[1]}
          //filtered by availablity (only unavaliable products can be returned)
          options={JSONDATA.filter(value=>!value.availability)} 
          value={value}
          onChange={setValue}
          getOptionLabel={(value) => value.name+'/'+ value.code} // here 'name/code' format is followed
          getOptionValue={(value) => value.code} // code is the unique value by which it is recognised
        >        
        </Select>
        
        <p></p>

        {/* Taking non-negative input of the milage that is */}
        <div>
            <label><strong>Used Mileage:</strong></label>
            <input type="number" min="0" value={input} onInput={e => setInput(e.target.value)}/>
        </div>

        <div>You used {input} milage of {value.name}</div>

        <div>
            {/* confirmation button */}
            <button 
            class="button button1"
            style={{color:'white'}} 
            onClick={()=>{ alert('Your Product return request has been recorded'); 
            setReturnModalIsOpen(false); }  }
            >Confirm Return
            </button>
        
            <button 
            class="button button1"
            style={{color:'white'}} 
            onClick={ ()=> setReturnModalIsOpen(false)}
            >Close
            </button>
        </div>

 </ReturnModal> 
        </>
    );
};

export default ReturnProductModal;
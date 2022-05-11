/* Name:Nafiur Rashid |Email: nafiurrashid@gmail.com
Code Version: 1.00*/
import ShowTable from "./components/ShowTable";
import BookProductModal from "./components/BookProductModal";
import "./App.css";
import * as React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import Modal from "react-modal";


<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>;
Modal.setAppElement('#root')
function App() {
  //const [returnModalIsOpen, setReturnModalIsOpen] = useState(false);

  //const [startDate, setStartDate] = useState(new Date());
  //const [endDate, setEndDate] = useState(new Date());
  //const [value, setValue] = React.useState({});

  return (
    <div className="container">
      <div className="App">


       {/* Search & Show table starts*/}
       <ShowTable />
            <br></br>

        {/* start Book modal */}
        < BookProductModal />
        {/* end modal */}

      </div>
      
    </div>
  )
}

export default App

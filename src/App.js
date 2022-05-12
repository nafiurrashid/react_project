/**
 * @author ${Nafiur Rashid}
 * @email ${nafiurrashid@gmail.com}
 * ${Version: 1.00}
 */
import ShowTable from "./components/ShowTable";
import BookProductModal from "./components/BookProductModal";
import ReturnProductModal from "./components/ReturnProductModal";
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
Modal.setAppElement("#root");
function App() {

  return (
    <div className="container">
      <div className="App">
        {/* Search & Show table starts*/}
        <ShowTable />
         <div style={{ textAlign: "right" }}>
        {/* start Book modal */}
        <BookProductModal />
        {/* end modal */}
        <ReturnProductModal />
        </div>
      </div>
    </div>
  );
}

export default App;

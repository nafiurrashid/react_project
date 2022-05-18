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

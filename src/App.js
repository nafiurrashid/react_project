/**
 * @author ${Nafiur Rashid}
 * @email ${nafiurrashid@gmail.com}
 * ${Version: 1.00}
 */ 
// import RentalTableHome from "./components/RentalTableHome";
import RentalTableHome from "./pages/RentalTableHome";
import "../src/asset/css/style.css";
import * as React from "react";
import "bootstrap/dist/css/bootstrap.css";




// Modal.setAppElement("#root");
function App() {

  return ( 
      <div className="App">
        <RentalTableHome />
      </div>
  
  );
}

export default App;

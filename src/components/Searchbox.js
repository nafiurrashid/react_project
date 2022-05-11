import React from 'react';
import { useState } from "react";
const Searchbox = () => {
    const [searchTerm, setSearchTerm] = useState("");
    return (
        <div>
                   <input
          type="text"
          placeholder="Search.. from func"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        /> 
        </div>
    );
};

export default Searchbox;
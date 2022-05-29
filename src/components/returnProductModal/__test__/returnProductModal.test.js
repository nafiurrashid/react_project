/**
 * @author ${Nafiur Rashid}
 * @email ${nafiurrashid@gmail.com}
 * ${Version: 1.00}
 */
import React from "react";
import { ReactDOM } from "react-dom";
import ReturnProductModal from "../ReturnProductModal";
// import {isTSAnyKeyword} from '@babel/types';
import "jest-dom/extend-expect";
import {cleanup} from '@testing-library/react';
//import renderer from "react-test-renderer";

afterEach(cleanup);
it ("renders without crashing",()=>{
    const div = document.createElement("div");
    ReactDOM.render(<ReturnProductModal></ReturnProductModal>, div);

})
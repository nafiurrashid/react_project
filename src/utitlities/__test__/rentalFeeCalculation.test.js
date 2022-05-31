/**
 * @author ${Nafiur Rashid}
 * @email ${nafiurrashid@gmail.com}
 * ${Version: 1.00}
 */
 import { rentalFeeCalculation } from "../rentalFeeCalculation";

 describe("Rental fee calculation", () => {
   test("6 * 7 = 42", () => {
     const testData = rentalFeeCalculation(6, 7);
     expect(testData).toEqual(42);
   });
 
   test("8 * 8 = 64", () => {
     const testData = rentalFeeCalculation(8, 8);
     expect(testData).toEqual(64);
   });
 });
 
/**
 * @author ${Nafiur Rashid}
 * @email ${nafiurrashid@gmail.com}
 * ${Version: 1.00}
 */
 import { durabilityCalculation_plainType } from "../durabilityCalculation_plainType";

 describe("Durability Calculation (Type==plain):", () => {
   test("60 -2 *2 -33%3= 56", () => {
     const testData = durabilityCalculation_plainType(2, 60, 33);
     expect(testData).toEqual(53);
   });
 
   test("80 -2*3- 11%10 = 73", () => {
     const testData = durabilityCalculation_plainType(3, 80, 11);
     expect(testData).toEqual(73);
   });
 });
 
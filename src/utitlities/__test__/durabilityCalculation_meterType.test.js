/**
 * @author ${Nafiur Rashid}
 * @email ${nafiurrashid@gmail.com}
 * ${Version: 1.00}
 */
 import { durabilityCalculation_meterType } from "../durabilityCalculation_meterType";

 describe("Durability Calculation (Type==meter)", () => {
   test("60 -2 *2 = 56", () => {
     const testData = durabilityCalculation_meterType(2, 60);
     expect(testData).toEqual(56);
   });
 
   test("80 -2*3 = 74", () => {
     const testData = durabilityCalculation_meterType(3, 80);
     expect(testData).toEqual(74);
   });
 });
 
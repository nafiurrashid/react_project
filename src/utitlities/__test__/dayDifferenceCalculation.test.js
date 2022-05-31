/**
 * @author ${Nafiur Rashid}
 * @email ${nafiurrashid@gmail.com}
 * ${Version: 1.00}
 */
 import { dayDifferenceCalculation } from "../dayDifferenceCalculation";
 let startDate =
   new Date(`Tue May 24 2022 11:22:54 GMT+0600 (Bangladesh Standard Time)
  `);
 let endDate =
   new Date(`Thu May 27 2022 11:22:54 GMT+0600 (Bangladesh Standard Time)
  `);
 
 describe("date difference", () => {
   test("27 may -24 may = 3", () => {
     const testData = dayDifferenceCalculation(endDate, startDate);
 
     expect(testData).toEqual(3);
   });
 
   test("26 may - 24 may = 2", () => {
     const testData = dayDifferenceCalculation(
       new Date(`Thu May 26 2022 11:22:54 GMT+0600 (Bangladesh Standard Time)`),
       new Date(`Tue May 24 2022 11:22:54 GMT+0600 (Bangladesh Standard Time)`)
     );
     expect(testData).toEqual(2);
   });
 
   test("29 may -25 may = 4", () => {
     const testData = dayDifferenceCalculation(
       new Date(`May 29 2022 11:22:54 GMT+0600 (Bangladesh Standard Time)`),
       new Date(`May 25 2022 11:22:54 GMT+0600 (Bangladesh Standard Time)`)
     );
     expect(testData).toEqual(4);
   });
 
   test("Error thow check", () => {
     const t = () => {
       throw new Error(
         "dayDifferenceCalculation(): daydiff & durablity is missing"
       );
     };
 
     expect(t).toThrow(Error);
   });
 });
 
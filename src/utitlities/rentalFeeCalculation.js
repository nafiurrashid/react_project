/**
 * @author ${Nafiur Rashid}
 * @email ${nafiurrashid@gmail.com}
 * ${Version: 1.00}
 */
 import { InformationofLog, ErrorofLog } from "../helper/logConfig";
 export const rentalFeeCalculation = (daydiff, price) => {
   InformationofLog("Calculating rental fee..");
   let rentalFee = 0;
   if (!isNaN(+daydiff) && !isNaN(+price)) {
     try {
       rentalFee = daydiff * price;
     } catch (err) {
       ErrorofLog(err);
     }
   } else {
     ErrorofLog("rentalFeeCalculation(): daydiff & price is missing");
     throw new Error("rentalFeeCalculation(): daydiff & price is missing");
   }
 
   return rentalFee;
 };
 
/**
 * @author ${Nafiur Rashid}
 * @email ${nafiurrashid@gmail.com}
 * ${Version: 1.00}
 */
 import { InformationofLog, ErrorofLog } from "../helper/logConfig";
 export const meterEstimationCalculation = (daydiff) => {
   InformationofLog("Calculaying Meter estimation..");
   let meterEstimation = 0;
   if (!isNaN(+daydiff)) {
     try {
       meterEstimation = daydiff * 10;
     } catch (err) {
       ErrorofLog(err);
     }
   } else {
     ErrorofLog("meterEstimationCalculation(): daydiff is missing");
     throw new Error("meterEstimationCalculation(): daydiff is missing");
   }
 
   return meterEstimation;
 };
 
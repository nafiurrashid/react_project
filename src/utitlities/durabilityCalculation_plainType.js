/**
 * @author ${Nafiur Rashid}
 * @email ${nafiurrashid@gmail.com}
 * ${Version: 1.00}
 */
 import { InformationofLog, ErrorofLog } from "../helper/logConfig";
 export const durabilityCalculation_plainType = (
   daydiff,
   durability,
   mileage
 ) => {
   InformationofLog("pCalculating Durablity..plain");
   let durability_plainType = 0;
   if (!isNaN(+daydiff) && !isNaN(+durability)) {
     try {
       durability_plainType = durability - 2 * daydiff - (mileage % 10);
     } catch (err) {
       ErrorofLog(err);
     }
   } else {
     ErrorofLog(
       "durabilityCalculation_meterType(): daydiff & durablity is missing"
     );
     throw new Error("variable-name is missing");
   }
 
   return durability_plainType;
 };
 
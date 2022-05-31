/**
 * @author ${Nafiur Rashid}
 * @email ${nafiurrashid@gmail.com}
 * ${Version: 1.00}
 */
 import { InformationofLog, ErrorofLog } from "../helper/logConfig";
 export const durabilityCalculation_meterType = (daydiff, durability) => {
   InformationofLog("Calculating durablity for Meter Type");
   let durability_meterType = 0;
 
   if (!isNaN(+daydiff) && !isNaN(+durability)) {
     try {
       durability_meterType = durability - 2 * daydiff;
     } catch (err) {
       ErrorofLog(err);
     }
     return durability_meterType;
   } else {
     ErrorofLog(
       "durabilityCalculation_meterType(): daydiff & durablity is missing"
     );
     throw new Error(
       "durabilityCalculation_meterType(): daydiff & durablity is missing"
     );
   }
 };
 
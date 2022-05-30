/**
 * @author ${Nafiur Rashid}
 * @email ${nafiurrashid@gmail.com}
 * ${Version: 1.00}
 */
import { InformationofLog,ErrorofLog } from "../helper/logConfig";
export const dayDifferenceCalculation = (endDate, startDate) => {
  // debugger
  InformationofLog("day difference calculating");
  let daydifference = 0;
  if (!isNaN(+endDate) && !isNaN(+startDate)) {
    try {
      daydifference =
        (endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24);
    } catch (err) {
      console.log(err);
    }
  } else {
    ErrorofLog('dayDifferenceCalculation(): daydiff & durablity is missing');
    throw new Error(
      "dayDifferenceCalculation(): daydiff & durablity is missing"
    );
  }

  return Math.round(daydifference);
};

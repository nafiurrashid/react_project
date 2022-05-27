/**
 * @author ${Nafiur Rashid}
 * @email ${nafiurrashid@gmail.com}
 * ${Version: 1.00}
 */
import { logger } from 'react-native-logs';
var log = logger.createLogger();
export const durabilityCalculation_plainType = (daydiff,durability,mileage) => {
    log.info("calculating durablity for plain Type");
    let durability_plainType= 0;
      try{
        durability_plainType= durability-2*daydiff-(mileage%10);
      }catch(err){
        log.error(err);
      }

 
    return durability_plainType;
  }
  
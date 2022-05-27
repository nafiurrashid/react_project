/**
 * @author ${Nafiur Rashid}
 * @email ${nafiurrashid@gmail.com}
 * ${Version: 1.00}
 */
import { logger } from 'react-native-logs';
var log = logger.createLogger();
export const durabilityCalculation_meterType = (daydiff,durability) => {
    log.info("calculating durablity for Meter Type");
    let durability_meterType= 0;
    try{
        durability_meterType= durability-2*daydiff;
    }catch(err){
        log.error(err);
    }    
    return durability_meterType;
  }
  
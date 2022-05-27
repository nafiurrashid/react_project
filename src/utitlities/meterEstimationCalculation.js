/**
 * @author ${Nafiur Rashid}
 * @email ${nafiurrashid@gmail.com}
 * ${Version: 1.00}
 */
import { logger } from 'react-native-logs';
var log = logger.createLogger();
export const meterEstimationCalculation = (daydiff) => {
        log.info("calculating meter estimation");
        let meterEstimation= 0;   
        try{
            meterEstimation=daydiff*10;
        }catch(err){
            log.error(err);
        }
    
    return meterEstimation;
  }
  
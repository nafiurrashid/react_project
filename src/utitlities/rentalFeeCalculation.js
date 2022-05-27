/**
 * @author ${Nafiur Rashid}
 * @email ${nafiurrashid@gmail.com}
 * ${Version: 1.00}
 */
import { logger } from 'react-native-logs';
var log = logger.createLogger();
export const rentalFeeCalculation = (daydiff,price) => {
    log.info("calculating rental fee");
    let rentalFee= 0;
    try{
      rentalFee= daydiff*price
    }catch(err){
      log.error(err);
    }
    return rentalFee;
  }

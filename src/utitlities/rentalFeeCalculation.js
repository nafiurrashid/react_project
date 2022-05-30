import { logger } from 'react-native-logs';
 var log = logger.createLogger();
export const rentalFeeCalculation = (daydiff,price) => {
  log.info('Calculating rental fee..')
   let rentalFee= 0;
   try{
    rentalFee= daydiff*price
   }catch(err){
    log.Error(err);
   }

    return rentalFee;
  }
  
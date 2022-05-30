import { logger } from 'react-native-logs';
 
export const durabilityCalculation_plainType = (daydiff,durability,mileage) => {
  var log = logger.createLogger();
  log.info('pCalculating Durablity..plain');
  // debugger
    let durability_plainType= 0;
    try{
      durability_plainType= durability-2*daydiff-(mileage%10);
    }catch(err){
    log.error(err);
    }

 
    return durability_plainType;
  }
  
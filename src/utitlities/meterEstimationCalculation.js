import { logger } from 'react-native-logs';
 var log = logger.createLogger();
export const meterEstimationCalculation = (daydiff) => {
    log.info('Calculaying Meter estimation..');
    let meterEstimation= 0;   
    try{
        meterEstimation=daydiff*10;
    }catch(err){
        console.log(err);
    }
  
    return meterEstimation;
  }
  
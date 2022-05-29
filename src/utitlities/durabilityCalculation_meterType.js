/**
 * @author ${Nafiur Rashid}
 * @email ${nafiurrashid@gmail.com}
 * ${Version: 1.00}
 */
 import {verifyInvalidInputType} from "./errorCheck"; 
 import { logger } from 'react-native-logs';
 var log = logger.createLogger();
 
 export const durabilityCalculation_meterType = (daydiff=verifyInvalidInputType('daydiff is missing'),durability=verifyInvalidInputType('durablity is missing')) => {
     log.info("calculating durablity for Meter Type..");
     let durability_meterType= 0
 
     if( !isNaN(daydiff) && !isNaN(durability) ) 
 {
         try{
             durability_meterType= durability-2*daydiff;
         }catch(err){
             log.error(err);
         }    
         return durability_meterType;
     }
     else { log.error('durabilityCalculation_meterType(): daydiff & durablity is missing');
         throw new Error('variable-name is missing');
     
     }
 
   }
   
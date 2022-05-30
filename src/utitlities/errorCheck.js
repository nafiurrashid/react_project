import { logger } from 'react-native-logs';
var log = logger.createLogger();

export const verifyInvalidInputType=(x)=>{
  log.error('Invalid Input Type')
    throw new Error(x);
}
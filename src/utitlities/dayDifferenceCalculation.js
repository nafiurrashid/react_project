import { logger } from 'react-native-logs';
var log = logger.createLogger();
export const dayDifferenceCalculation = (endDate, startDate) => {
  log.info('calculation day difference..');
  let daydifference = 0;
  try {
    daydifference =
      (endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24);
  } catch (err) {
    log.error(err);
  }

  return Math.round(daydifference);
};

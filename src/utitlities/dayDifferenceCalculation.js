export const dayDifferenceCalculation = (endDate, startDate) => {
  debugger
  let daydifference = 0;
  try {
    daydifference =
      (endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24);
  } catch (err) {
    console.log(err);
  }

  return Math.round(daydifference);
};

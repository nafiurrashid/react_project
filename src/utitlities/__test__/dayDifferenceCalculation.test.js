import { dayDifferenceCalculation } from "../dayDifferenceCalculation";
let startDate =
  new Date(`Tue May 24 2022 11:22:54 GMT+0600 (Bangladesh Standard Time)
`);
let endDate =
  new Date(`Thu May 26 2022 11:22:54 GMT+0600 (Bangladesh Standard Time)
`);

describe("date difference", () => {
  test("26 may -24 may = 2", () => {
    const testData = dayDifferenceCalculation(endDate, startDate);

    expect(testData).toEqual(2);
  });

  test("28 may -25 may = 3", () => {
    const testData = dayDifferenceCalculation(
        new Date(`Thu May 26 2022 11:22:54 GMT+0600 (Bangladesh Standard Time)`),
        new Date(`Tue May 24 2022 11:22:54 GMT+0600 (Bangladesh Standard Time)`)
    );
    expect(testData).toEqual(2);
  });

});


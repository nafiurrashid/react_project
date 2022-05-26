import {meterEstimationCalculation} from '.././meterEstimationCalculation';


describe("Meter estimation:", () => {
    test("6 * 10 = 60", () => {
    const testData=meterEstimationCalculation(6);
      expect(testData).toEqual(60);
    });

    test("8 * 10 = 80", () => {
        const testData=meterEstimationCalculation(8);
          expect(testData).toEqual(80);
        });





});
    // describe("valid additions", () => {
    //     test("1 + 1 = 2", () => {
    //       expect(add(1, 1)).toEqual(2);
    //     });
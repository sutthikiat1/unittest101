import { sum } from "../sum";

describe("test", () => {
  it("should be 3", () => {
    //arragne
    const expectedResult = 3;

    //action
    const result = sum(1, 2);

    //assert
    expect(result).toEqual(expectedResult);
  });

  it("should be 6", () => {
    //arragne
    const expectedResult = 6;

    //action
    const result = sum(3, 3);

    //assert
    expect(result).toEqual(expectedResult);
  });
});

import { put, get } from "../circular";

describe("test circular", () => {
  it("should be 1", () => {
    const expectedResult = 3;

    put(1);
    put(2);
    put(3);
    put(4);
    put(5);
    put(6);
    get();
    put(7);
    const result = get();
    expect(result).toBe(expectedResult);
  });
});

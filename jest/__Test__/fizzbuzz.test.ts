import { Say } from "../fizzbuzz";
describe("fizzbuzz", () => {
  it("should be say fizz", () => {
    const expected = "fizz";
    const result = Say(3);
    const result2 = Say(6);
    const result3 = Say(9);
    const result4 = Say(12);
    const result5 = Say(21);
    const result6 = Say(99);

    expect(result).toEqual(expected);
    expect(result2).toEqual(expected);
    expect(result3).toEqual(expected);
    expect(result4).toEqual(expected);
    expect(result5).toEqual(expected);
    expect(result6).toEqual(expected);
  });
  it("should be say buzz", () => {
    const expected = "buzz";
    const result = Say(5);
    const result2 = Say(10);
    const result3 = Say(20);
    const result4 = Say(25);
    const result5 = Say(55);
    const result6 = Say(500);
    expect(result).toEqual(expected);
    expect(result2).toEqual(expected);
    expect(result3).toEqual(expected);
    expect(result4).toEqual(expected);
    expect(result5).toEqual(expected);
    expect(result6).toEqual(expected);
  });
  it("should be say fizz-buzz", () => {
    const expected = "fizz buzz";
    const result = Say(15);
    const result2 = Say(30);
    const result3 = Say(45);
    const result4 = Say(60);
    const result5 = Say(180);
    const result6 = Say(900);
    expect(result).toEqual(expected);
    expect(result2).toEqual(expected);
    expect(result3).toEqual(expected);
    expect(result4).toEqual(expected);
    expect(result5).toEqual(expected);
    expect(result6).toEqual(expected);
  });
  it("should be say Number", () => {
    const expected = 1;
    const expected2 = 2;
    const expected3 = 4;
    const expected4 = 7;
    const expected5 = 8;
    const expected6 = 11;
    const result = Say(1);
    const result2 = Say(2);
    const result3 = Say(4);
    const result4 = Say(7);
    const result5 = Say(8);
    const result6 = Say(11);
    expect(result).toEqual(expected);
    expect(result2).toEqual(expected2);
    expect(result3).toEqual(expected3);
    expect(result4).toEqual(expected4);
    expect(result5).toEqual(expected5);
    expect(result6).toEqual(expected6);
  });

  test.each([
    {
      num: 1,
      expectedResult: 1,
    },
    {
      num: 3,
      expectedResult: "fizz",
    },
    {
      num: 5,
      expectedResult: "buzz",
    },
    {
      num: 15,
      expectedResult: "fizz buzz",
    },
    {
      num: 45,
      expectedResult: "fizz buzz",
    },
    {
      num: 7,
      expectedResult: 7,
    },
  ])(
    "should say $num when input $expectedResult",
    ({ num, expectedResult }) => {
      expect(Say(num)).toBe(expectedResult);
    }
  );
});

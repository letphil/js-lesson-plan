const highestNumber = require("./highest-number.js");

test("returns the highest number in an array of numbers", () => {
  expect(highestNumber([1, 2, 3, 4, 5, 6, 7, 8, 9])).toBe(9);
  expect(highestNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(10);
  expect(highestNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])).toBe(11);
});

test("returns the number for an array with a single number", () => {
  expect(highestNumber([1])).toBe(1);
});

test("returns the highest number in an array of negative numbers", () => {
  expect(highestNumber([-1, -2, -3, -4, -5, -6, -7, -8, -9])).toBe(-1);
  expect(highestNumber([-1, -2, -3, -4, -5, -6, -7, -8, -9, -10])).toBe(-1);
  expect(highestNumber([-1, -2, -3, -4, -5, -6, -7, -8, -9, -10, -11])).toBe(
    -1
  );
});

test("throws an error if the argument is not an array", () => {
  expect(() => highestNumber("hello")).toThrow(
    "Argument must be an array of numbers"
  );
  expect(() => highestNumber(1)).toThrow(
    "Argument must be an array of numbers"
  );
  expect(() => highestNumber({})).toThrow(
    "Argument must be an array of numbers"
  );
});

test("throws an error if the array contains non-numeric values", () => {
  expect(() => highestNumber([1, 2, 3, "hello"])).toThrow(
    "Array contains non-numeric values"
  );
  expect(() => highestNumber([1, 2, 3, NaN])).toThrow(
    "Array contains non-numeric values"
  );
  expect(() => highestNumber([1, 2, 3, {}])).toThrow(
    "Array contains non-numeric values"
  );
});
